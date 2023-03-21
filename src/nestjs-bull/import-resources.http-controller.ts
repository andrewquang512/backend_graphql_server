import { CMSAPI } from '@infras/decorators'
import {
	FileTypeValidator,
	ParseFilePipe,
	Post,
	UploadedFile,
	UseInterceptors,
} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { ApiBody, ApiConsumes, ApiParam, ApiTags } from '@nestjs/swagger'
import { LogCMSActivity } from '@src/infrastructure/externals/cms-activity-log'
import { AuthCMSUser, CMSUser } from '@src/infrastructure/authentication'
import { v4 as uuidV4 } from 'uuid'
import { FILE_SIZE_EXCEED_LIMIT } from '../../services/stylesheet'
import {
	FileSizeExceedLimitException,
	InvalidFileFormatException,
} from './import-resources.errors'
import { InjectQueue } from '@nestjs/bull'
import { Job, Queue } from 'bull'
import { ImportJobError, QueueNotReadyError } from '../../transfer.errors'
import * as fs from 'fs'
import { ImportResourcesResponseDTO } from './import-resources.response.dto'
import { ImportDTO } from '../../transfer.service'
import { TransferImportConfig } from '../../transfer.config'
import { ConfigService } from '@nestjs/config'
import { TRANSFER_IMPORT_CONFIG_PROVIDER } from '../../transfer.provider'

@ApiTags('CMS APIs - Resource')
@CMSAPI({
	path: '/cms/v1/resources::import(import)',
	useSwagger: true,
	verifyPermission: [
		{
			resource: 'Player-Card',
			actions: ['Import'],
		},
	],
	bypassVerifyRequestToken: true,
})
@LogCMSActivity({ message: 'Import Player Card Settings' })
export class ImportResourcesHttpController {
	private readonly importConfig: TransferImportConfig

	constructor(
		@InjectQueue('transfer') private readonly transferQueue: Queue,
		private readonly configService: ConfigService,
	) {
		this.importConfig = this.configService.get(
			TRANSFER_IMPORT_CONFIG_PROVIDER,
		)
	}

	@Post()
	@ApiConsumes('multipart/form-data')
	@ApiParam({
		name: 'import',
		enum: ['import'],
	})
	@ApiBody({
		schema: {
			type: 'object',
			properties: {
				file: {
					type: 'string',
					format: 'binary',
				},
			},
		},
	})
	@UseInterceptors(FileInterceptor('file'))
	async importResources(
		@UploadedFile(
			new ParseFilePipe({
				validators: [new FileTypeValidator({ fileType: 'zip' })],
				exceptionFactory: (error) => {
					if (error === FILE_SIZE_EXCEED_LIMIT)
						return new FileSizeExceedLimitException(
							parseInt(process.env.FILE_SIZE),
						)
					return new InvalidFileFormatException('zip')
				},
			}),
		)
		file: Express.Multer.File,
		@AuthCMSUser() profile?: CMSUser,
	): Promise<ImportResourcesResponseDTO> {
		const isConnected = await this.transferQueue.isReady()
		if (!isConnected) {
			throw new QueueNotReadyError()
		}

		this.cleanFolder(this.importConfig.DIRNAME)
		const importJob = await this.transferQueue.add(
			'import',
			{
				filePath: file.path,
				profileId: profile.userId,
				profileEmail: profile.email,
			} as ImportDTO,
			{ attempts: 0, jobId: uuidV4() },
		)
		await this.waitUntilJobComplete(importJob)
		const resultJob = await this.transferQueue.getJob(importJob.id)
		const result = resultJob.returnvalue
		// 		this.cleanFolder(this.importConfig.DIRNAME)
		console.log('[importResources] Result: ', result)
		if (result === null) throw new ImportJobError()
		return new ImportResourcesResponseDTO()
	}

	/**
	 * @param job
	 * @param timerInterval default is 1000 miliseconds
	 * @description because the queue acts as the worker thread - split apart from main event loop, this work as timer
	 * to resolve wheather job is completed or failed and back the main event loop
	 */
	private async waitUntilJobComplete(job: Job, limitTimeOut = 60000) {
		const expired = Date.now() + limitTimeOut
		return new Promise((resolve, reject) => {
			jobHandling()

			async function jobHandling() {
				const test1 = await job.isCompleted()
				const test2 = await job.isFailed()
				console.log('Wait1: ', test1)
				console.log('Wait2: ', test2)
				console.log('Wait3: ', job.id)
				console.log('Wait4: ', await job.getState())
				// TODO try release lock here
				if (test2) await job.retry().catch((err) => console.log(err))
				if (test1) return resolve(1)
				else if (Date.now() >= expired)
					return reject(new ImportJobError(null, 'Job Timeout!'))
				else {
					await new Promise((res) => setTimeout(() => res(1), 1000))
					jobHandling()
				}
			}
		})
	}

	private cleanFolder(path: string) {
		try {
			return fs.rmSync(path, { recursive: true, force: true })
		} catch (error) {
			console.log(error)
			throw error
		}
	}
}
