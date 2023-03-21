import { Module } from '@nestjs/common'
import { PlayerCard, PlayerCardPackage } from '../player-card'
import { CqrsModule } from '@nestjs/cqrs'
import { ExportResourcesHttpController } from './queries/export-resources'
import { StylesheetService } from './services/stylesheet'
import { ImportResourcesHttpController } from './command/import-resources'
import { Setting } from '../setting'
import { SettingParam } from '../setting-param'
import {
	FileTransferService,
	MulterConfigService,
	AdmZipArchiverService,
} from './services'
import { TransferService } from './transfer.service'
import { HttpModule } from '@nestjs/axios'
import { BullModule } from '@nestjs/bull'
import { MulterModule } from '@nestjs/platform-express'
import { TransferTypeOrmRepository } from './database'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigService } from '@nestjs/config'
import { TRANSFER_BULL_CONFIG_PROVIDER } from './transfer.provider'

const controllers = [
	ExportResourcesHttpController,
	ImportResourcesHttpController,
]

const applicationProviders = [
	// Service
	StylesheetService,
	FileTransferService,
	TransferService,
	AdmZipArchiverService,
	TransferTypeOrmRepository,
]
@Module({
	imports: [
		CqrsModule,
		TypeOrmModule.forFeature([
			PlayerCard,
			PlayerCardPackage,
			Setting,
			SettingParam,
		]),
		HttpModule,
		BullModule.forRootAsync({
			useFactory: (configService: ConfigService) => {
				return configService.get(TRANSFER_BULL_CONFIG_PROVIDER)
			},
			inject: [ConfigService],
		}),
		BullModule.registerQueue({
			name: 'transfer',
			defaultJobOptions: {
				attempts: 10,
				delay: 1000,
			},
			settings: {
				stalledInterval: 1000,
				maxStalledCount: 10,
			},
		}),
		MulterModule.registerAsync({
			useClass: MulterConfigService,
		}),
	],
	providers: [...applicationProviders],
	controllers: controllers,
})
export class TransferModule {}
