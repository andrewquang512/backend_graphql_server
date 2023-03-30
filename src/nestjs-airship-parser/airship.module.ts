import { Global, Module } from '@nestjs/common'
import { HttpModule } from '@nestjs/axios'
import { AIRSHIP_SERVICE_PROVIDER } from './airship-service.providers'
import { AirshipService } from './sisal.airship-service'

@Global()
@Module({
	imports: [HttpModule],
	providers: [
		{
			provide: AIRSHIP_SERVICE_PROVIDER,
			useClass: AirshipService,
		},
	],
	exports: [
		{
			provide: AIRSHIP_SERVICE_PROVIDER,
			useClass: AirshipService,
		},
	],
})
export class AirshipModule {}
