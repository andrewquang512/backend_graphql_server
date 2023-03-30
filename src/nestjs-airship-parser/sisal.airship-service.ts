import { HttpService } from '@nestjs/axios'
import { Inject, Injectable, LoggerService } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { APP_LOGGER } from '@src/infrastructure/logger'
import {
	Operators,
	AtomicTypes,
} from '@src/modules/template/template.constants'
import * as https from 'https'
import { lastValueFrom } from 'rxjs'
import { RequestFailedException } from './airship-service.errors'
import {
	AirshipServiceConfig,
	AirshipServicePort,
	OperationResponse,
	PushPayload,
	RawDataAtomicAttributesProps,
	RawDataAudienceProps,
	RawDataCompoundAttributesProps,
	RawDataProps,
	SchedulePayload,
} from './airship-service.port'
import { AIRSHIP_SERVICE_CONFIG_PROVIDER } from './airship-service.providers'
import { AudienceVistor } from './airship.audience-parser'

@Injectable()
export class AirshipService implements AirshipServicePort {
	private readonly config: AirshipServiceConfig

	constructor(
		configService: ConfigService,
		@Inject(APP_LOGGER)
		protected readonly logger: LoggerService,
		private readonly httpService: HttpService,
	) {
		this.config = configService.get(AIRSHIP_SERVICE_CONFIG_PROVIDER)
	}

	async delUnknownNoti(arr: string[]) {
		for (let i = 0; i < arr.length; i++) {
			console.log(`Start == Delete Schedule Noti scheduleId: ${arr[i]}`)
			const response = (await this.request(
				'DELETE',
				`api/schedules/${arr[i]}`,
			)) as OperationResponse
			console.log(
				`End == Delete Schedule Noti scheduleId: ${arr[i]} --- Status: ${response.ok}`,
			)
		}
	}

	parsePushPayload(props: RawDataProps) {
		const { devices, expiry, title, message, type, mediaURL, audience } =
			props

		const deviceTypes = []
		if (devices.ios) deviceTypes.push('ios')
		if (devices.android) deviceTypes.push('android')

		const audienceVisitor = new AudienceVistor()

		const audienceComposed = this.composeAudienceAttribute(audience)

		const audienceResult =
			audienceVisitor.visitCompoundAudience(audienceComposed)

		const payload: PushPayload = {
			audience:
				Object.values(audienceResult)[0].length > 0
					? audienceResult
					: 'all',
			options: {
				expiry,
			},
			device_types: deviceTypes,
		}

		const notification = {
			ios: !props.devices.ios
				? undefined
				: {
						title,
						alert: message,
						extra: {
							mediaUrl: mediaURL,
							type,
						},
				  },
			android: !devices.android
				? undefined
				: {
						title,
						alert: message,
						extra: {
							mediaUrl: mediaURL,
							type,
						},
				  },
		}

		payload.notification = notification
		return payload
	}

	async pushNotification(payload: PushPayload) {
		const response = (await this.request(
			'POST',
			'api/push/',
			payload,
		)) as OperationResponse

		if (response?.ok) return response.push_ids[0]
	}

	async validatePushPayload(payload: PushPayload) {
		const response = (await this.request(
			'POST',
			'api/push/validate',
			payload,
		)) as OperationResponse

		return response?.ok
	}

	async scheduleNotification(payload: SchedulePayload) {
		const response = (await this.request(
			'POST',
			'api/schedules/',
			payload,
		)) as OperationResponse

		if (response?.ok) return response.schedule_ids[0]
	}

	async listActiveSchedules() {
		const response = (await this.request(
			'GET',
			'api/schedules/?start=0&limit=1000',
		)) as OperationResponse

		if (response?.ok) {
			const array = []
			const schedules = response.schedules
			schedules.forEach((element) => {
				const scheduleId = element.url?.split('/').pop()
				scheduleId && array.push(scheduleId)
			})
			return array
		}
		return []
	}

	async deleteSchedule(id: string) {
		const result = await this.request('GET', `api/schedules/${id}`)
		if (!result) return false

		await this.request('DELETE', `api/schedules/${id}`)
		return true
	}

	async setAttributes(
		userId: string,
		items: {
			key: string
			value: string
		}[],
	) {
		const attributes = []
		items.forEach((element) => {
			attributes.push({
				action: 'set',
				key: element.key,
				value: element.value,
			})
		})

		const response = (await this.request(
			'POST',
			`api/named_users/${userId}/attributes`,
			{
				attributes,
			},
		)) as OperationResponse

		return response?.ok
	}

	private async request(
		method: string,
		urn: string,
		payload?: any,
		appAuth?: boolean,
	) {
		const body = payload && JSON.stringify(payload)
		try {
			const response = (
				await lastValueFrom(
					this.httpService.request({
						url: `https://${this.config.host}:${this.config.port}/${urn}`,
						method,
						data: payload,
						headers: {
							Accept: 'application/vnd.urbanairship+json; version=3;',
							'Content-Type': 'application/json',
							'Content-Length': payload
								? Buffer.byteLength(body, 'utf8')
								: 0,
						},
						auth: {
							username: this.config.appKey,
							password: appAuth
								? this.config.appSecret
								: this.config.masterSecret,
						},
						httpsAgent: new https.Agent({
							rejectUnauthorized: false,
						}),
					}),
				)
			).data
			this.logger.debug(`Airship Response: ${JSON.stringify(response)}`)
			return response
		} catch (error) {
			this.logger.error(
				`Airship Error: ${JSON.stringify(
					error?.response?.data,
				)} -- API: ${urn} -- method: ${method} -- payload: ${body}`,
			)
			if (!`${error?.response?.status || 400}`.startsWith('40'))
				throw new RequestFailedException({})
		}
	}

	private composeAudienceAttribute(
		audience: RawDataAudienceProps,
	): RawDataCompoundAttributesProps {
		if (audience.userIds && audience.userIds.length > 0) {
			return {
				components: [
					{
						components: audience.userIds.map((id) => {
							return {
								attribute: 'ua_named_user_id',
								operator: Operators.equals,
								value: id,
								atomicType: AtomicTypes.Text,
							} as RawDataAtomicAttributesProps
						}),
						compoundType: audience.audienceType,
						isNot: false,
					},
					audience.attributes,
				],
				compoundType: audience.audienceType,
				isNot: audience.isNot,
			}
		}

		return {
			components: [audience.attributes],
			compoundType: audience.audienceType,
			isNot: audience.isNot,
		}
	}
}
