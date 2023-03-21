import { IAppLogger, LoggerFactory } from '@src/infrastructure/logger'
import {
	InjectQueue,
	OnQueueDrained,
	OnQueueEvent,
	OnQueueFailed,
	OnQueuePaused,
	OnQueueRemoved,
	OnQueueResumed,
	OnQueueWaiting,
	Process,
	Processor,
} from '@nestjs/bull'
import {
	JSONArray,
	StylesheetService,
	AdmZipArchiverService,
	FileTransferService,
	DLCResponseData,
} from './services'
import { Job, Queue } from 'bull'
import { v4 as uuidV4 } from 'uuid'
import {
	InvalidPlayerCardPackageSheetException,
	InvalidPlayerCardSheetException,
	InvalidSettingParamSheetException,
	InvalidSettingSheetException,
	InvalidSheetNamePlayerCardError,
} from './command/import-resources/import-resources.errors'
import * as AdmZip from 'adm-zip'
import * as fs from 'fs'
import {
	IExportData,
	IImportData,
	IReadonlyPlayerCard,
	IReadonlyPlayerCardPackage,
	IReadonlySetting,
	IReadonlySettingParam,
	TransferTypeOrmRepository,
} from './database'
import { PlayerCard, PlayerCardPackage } from '../player-card'
import { SettingParam } from '../setting-param'
import { Setting } from '../setting'
import { TransferExportConfig, TransferImportConfig } from './transfer.config'
import { ConfigService } from '@nestjs/config'
import {
	TRANSFER_EXPORT_CONFIG_PROVIDER,
	TRANSFER_IMPORT_CONFIG_PROVIDER,
} from './transfer.provider'
import { SHEET_LIST } from './transfer.constants'
import * as path from 'path'

export interface ImportDTO {
	filePath: string
	profileId: string
	profileEmail: string
}

@Processor('transfer')
export class TransferService {
	private logger: IAppLogger
	private readonly exportConfig: TransferExportConfig
	private readonly importConfig: TransferImportConfig

	constructor(
		@InjectQueue('transfer') private readonly transferQueue: Queue,
		private readonly repo: TransferTypeOrmRepository,
		private readonly loggerFactory: LoggerFactory,
		private readonly stylesheetService: StylesheetService,
		private readonly fileTransferService: FileTransferService,
		private readonly admZipService: AdmZipArchiverService,
		private readonly configService: ConfigService,
	) {
		this.logger = this.loggerFactory.createAppLogger('TransferService')
		this.exportConfig = this.configService.get(
			TRANSFER_EXPORT_CONFIG_PROVIDER,
		)
		this.importConfig = this.configService.get(
			TRANSFER_IMPORT_CONFIG_PROVIDER,
		)
	}

	@OnQueueResumed()
	testResumed(error: any) {
		this.logger.error('1')
		throw Error('1')
	}
	@OnQueueDrained()
	testDrained(error: any) {
		this.logger.error('2')
		throw Error('2')
	}

	@OnQueueRemoved()
	testRemoved(error: any) {
		this.logger.error('3')
		throw Error('3')
	}

	@OnQueuePaused()
	testPaused(error: any) {
		this.logger.error('4')
		throw Error('4')
	}

	@OnQueueWaiting()
	async testWaiting(jobId: number | string) {
		console.log('TestWaiting: ', jobId)
		const job = await this.transferQueue.getJob(jobId)
		await job.takeLock()
		// await job.moveToCompleted()
		// this.logger.error('5')
		// throw Error('5')
	}

	@OnQueueFailed()
	handler(error: Error) {
		this.logger.error('6')
		throw Error('6')
	}

	/**
	 * @description Process 'export'
	 * @description Main logic for export data of the service
	 * @returns A path string to stream response data
	 */
	@Process('export')
	async export() {
		try {
			this.logger.log('This is an instance ' + process.env.PORT)
			return null
			/**
			 * exportFilePathList contains path from 2 sources:
			 *  + Stylesheet Path
			 *  + Images Directory Path
			 *
			 *  @description works as the paths list to finalize all files into one file zip
			 */

			const exportFilePathList: string[] = []

			const data = await this.repo.export()

			/**
			 *  A condition to check if need to export images based on the value of imageUrl property in table playerCards
			 */
			if (
				data.playerCards.length > 0 &&
				data.playerCards.filter((each) => {
					if (
						each.imageUrl === undefined ||
						each.imageUrl === '' ||
						each.imageUrl === null
					)
						return false
					return true
				}).length > 0
			) {
				const imagesPath = await this.exportImages(data.playerCards)
				exportFilePathList.push(imagesPath)
			}

			const stylesheetPath = await this.exportStylesheet(data)
			exportFilePathList.push(stylesheetPath)

			const resultZip = this.admZipService.archiveFilesIntoZip(
				exportFilePathList,
				this.exportConfig.EXPORT_FILENAME,
			)
			return resultZip
		} catch (error) {
			this.logger.error(error)
			throw error
		}
	}

	private async exportStylesheet(data: IExportData) {
		const workbook = this.stylesheetService.createWorkbook()

		this.stylesheetService.AddDataAsSheet(
			this.omitKeyForObjectArray('imageUrl', data.playerCards),
			workbook,
			SHEET_LIST.PLAYER_CARD_PLAYER_CARD,
		)

		this.stylesheetService.AddDataAsSheet(
			data.playerCardPackages as JSONArray<any>,
			workbook,
			SHEET_LIST.PLAYER_CARD_PLAYER_CARD_PACKAGE,
		)

		this.stylesheetService.AddDataAsSheet(
			data.settings as JSONArray<any>,
			workbook,
			SHEET_LIST.PLAYER_CARD_SETTING,
		)

		this.stylesheetService.AddDataAsSheet(
			data.settingParams as JSONArray<any>,
			workbook,
			SHEET_LIST.PLAYER_CARD_SETTING_PARAM,
		)

		this.stylesheetService.exportWorkBookToFile(
			workbook,
			this.exportConfig.STYLESHEET_PATHNAME,
		)

		return this.exportConfig.STYLESHEET_PATHNAME
	}

	private async exportImages(data: IReadonlyPlayerCard[]): Promise<string> {
		for (const card of data) {
			await this.fileTransferService.extractFromURL(
				card.imageUrl,
				this.exportConfig.IMAGES_DIRNAME,
				card.imageFileName,
			)
		}

		const imagesZipPath = this.admZipService.archiveFolderContentIntoZip(
			this.exportConfig.IMAGES_DIRNAME,
			this.exportConfig.DIRNAME + '/images.zip',
		)

		return imagesZipPath
	}

	private omitKeyForObjectArray(key: string, objectList: any): JSONArray {
		return objectList.map((each) => {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const { [key]: omitted, ...rest } = each
			return rest
		})
	}

	/**
	 * @description Process 'import'
	 * @description Main logic for import data of the service
	 * @returns A code 'SUCCESS'
	 */
	@Process({
		name: 'import',
		concurrency: 1,
	})
	async import(job: Job) {
		try {
			console.log(
				'Count Jobs start ' +
					JSON.stringify(await this.transferQueue.getJobCounts()),
			)
			console.log('This is an Job ' + job.id)
			console.log('This is an instance ' + process.env.PORT)
			if (parseInt(process.env.PORT) === 3003) {
				console.log('This is Correct Job')
				console.log(job.attemptsMade)
				// await job.moveToCompleted('1', true)
				return '1'
			}
			console.log('This is Failed Job')
			console.log(job.attemptsMade)
			await job.discard()
			console.log(
				'Count Jobs after discard ' +
					JSON.stringify(await this.transferQueue.getJobCounts()),
			)
			await job.releaseLock()
			console.log(
				'Count Jobs after releaseLock ' +
					JSON.stringify(await this.transferQueue.getJobCounts()),
			)
			await job.moveToFailed({ message: '2' }, true)
			// return '2'
			// return null
			// 			const { filePath, profileId, profileEmail }: ImportDTO = job.data
			// 			const fileBuffer = fs.readFileSync(filePath)
			// 			const unzipFile = new AdmZip(fileBuffer)
			// 			unzipFile.extractAllTo(this.importConfig.DIRNAME, true)
			//
			// 			fs.unlink(filePath, () => {
			// 				this.logger.log('[REMOVED FILES SUCCESSFULLY]')
			// 			})
			//
			// 			const stylesheetFile = fs.readFileSync(
			// 				this.importConfig.IMPORT_STYLESHEET_PATHNAME,
			// 			)
			//
			// 			/**
			// 			 * If import zip file does not contain images file - The entire PlayerCard's imageUrl property value will be empty string
			// 			 */
			// 			const importImagesResult = await this.importImages()
			//
			// 			const data =
			// 				this.stylesheetService.convertBufferDataToJson(stylesheetFile)
			//
			// 			const sheetNames = Object.keys(data)
			//
			// 			const importData: IImportData = {
			// 				playerCards: [],
			// 				playerCardPackages: [],
			// 				settings: [],
			// 				settingParams: [],
			// 			}
			//
			// 			for (const sheetName of sheetNames) {
			// 				switch (sheetName) {
			// 					case SHEET_LIST.PLAYER_CARD_PLAYER_CARD:
			// 						importData.playerCards = this.preparePlayerCard(
			// 							data[sheetName],
			// 							importImagesResult,
			// 							profileEmail,
			// 						)
			// 						break
			// 					case SHEET_LIST.PLAYER_CARD_PLAYER_CARD_PACKAGE:
			// 						importData.playerCardPackages =
			// 							this.preparePlayerCardPackage(
			// 								data[sheetName],
			// 								profileEmail,
			// 							)
			// 						break
			// 					case SHEET_LIST.PLAYER_CARD_SETTING:
			// 						importData.settings = this.preparePlayerCardSetting(
			// 							data[sheetName],
			// 							profileEmail,
			// 						)
			// 						break
			// 					case SHEET_LIST.PLAYER_CARD_SETTING_PARAM:
			// 						importData.settingParams =
			// 							this.preparePlayerCardSettingParam(
			// 								data[sheetName],
			// 								profileEmail,
			// 							)
			// 						break
			// 					default:
			// 						throw new InvalidSheetNamePlayerCardError(sheetName)
			// 				}
			// 			}
			// 			await this.repo.import(importData, profileEmail)
			// 			return { code: 'SUCCESS' }
		} catch (error) {
			this.logger.error(error)
			throw error
		}
	}

	private async importImages() {
		if (!fs.existsSync(this.importConfig.IMPORT_IMAGES.PATHNAME)) {
			return { asset: [] }
		}
		const imagesFile = fs.readFileSync(
			this.importConfig.IMPORT_IMAGES.PATHNAME,
		)
		return await this.fileTransferService.uploadToDLC(
			imagesFile,
			this.importConfig.IMPORT_IMAGES.FILENAME,
		)
	}

	private preparePlayerCard = (
		data: JSONArray<IReadonlyPlayerCard>,
		imagesData: DLCResponseData,
		profileEmail: string,
	): PlayerCard[] => {
		try {
			return data.map((each) => {
				/**
				 *  key.name is actually the filename ( name + extension)
				 *  so we trim the extension and compare it with imageFileName property
				 */
				const matchImageUrl = imagesData.asset.find(
					(key) => path.parse(key.name).name === each.imageFileName,
				)

				const imageUrl = matchImageUrl ? matchImageUrl.hostURL : ''
				return {
					id: each.id ? each.id : uuidV4(),
					name: each.name,
					rarity: each.rarity || 0,
					class: each.class || 0,
					description: each.description || '',
					basePower: each.basePower || 0,
					baseAttack: each.baseAttack || 0,
					basePassing: each.basePassing || 0,
					baseDefense: each.baseDefense || 0,
					baseValue: each.baseValue || 0,
					status: each.status || '',
					nationality: each.nationality || '',
					imageFileName: each.imageFileName || '',
					imageUrl: imageUrl || '',
					height: each.height || 0,
					weight: each.weight || 0,
					currentTeam: each.currentTeam || '',
					foot: each.foot || '',
					dob: each.dob || '',
					traits: each.traits || '[]',
					createdBy: profileEmail,
					modifiedBy: profileEmail,
					createdAt: new Date(),
					modifiedAt: new Date(),
					deletedAt: null,
				} as PlayerCard
			})
		} catch (error) {
			this.logger.error(error)
			throw new InvalidPlayerCardSheetException()
		}
	}

	private preparePlayerCardPackage = (
		data: JSONArray<IReadonlyPlayerCardPackage>,
		profileEmail: string,
	): PlayerCardPackage[] => {
		try {
			return data.map((each) => {
				return {
					id: each.id ? each.id : uuidV4(),
					name: each.name,
					status: each.status,
					playerCardIds: each.playerCardIds,
					priority: each.priority,
					createdBy: profileEmail,
					modifiedBy: profileEmail,
					createdAt: new Date(),
					modifiedAt: new Date(),
					deletedAt: null,
				} as PlayerCardPackage
			})
		} catch (error) {
			this.logger.error(error)
			throw new InvalidPlayerCardPackageSheetException()
		}
	}

	private preparePlayerCardSetting = (
		data: JSONArray<IReadonlySetting>,
		profileEmail: string,
	): Setting[] => {
		try {
			return data.map((each) => {
				return {
					id: each.id ? each.id : uuidV4(),
					key: each.key,
					type: each.type,
					value: each.value,
					createdBy: profileEmail,
					modifiedBy: profileEmail,
					createdAt: new Date(),
					modifiedAt: new Date(),
					deletedAt: null,
				} as Setting
			})
		} catch (error) {
			this.logger.error(error)
			throw new InvalidSettingSheetException()
		}
	}

	private preparePlayerCardSettingParam = (
		data: JSONArray<IReadonlySettingParam>,
		profileEmail: string,
	): SettingParam[] => {
		try {
			return data.map((each) => {
				return {
					id: each.id ? each.id : uuidV4(),
					paramName: each.paramName,
					type: each.type,
					description: each.description || '',
					createdBy: profileEmail,
					modifiedBy: profileEmail,
					createdAt: new Date(),
					modifiedAt: new Date(),
					deletedAt: null,
				} as SettingParam
			})
		} catch (error) {
			this.logger.error(error)
			throw new InvalidSettingParamSheetException()
		}
	}
}
