import { Operators } from '@src/modules/template/template.constants'

export interface AirshipServicePort {
	pushNotification(payload: PushPayload): Promise<string>
	validatePushPayload(payload: PushPayload): Promise<boolean>
	scheduleNotification(payload: SchedulePayload): Promise<string>
	listActiveSchedules(): Promise<string[]>
	deleteSchedule(id: string): Promise<boolean>
	parsePushPayload(props: RawDataProps): PushPayload
	delUnknownNoti(arr: string[]): Promise<void>
	setAttributes(
		userId: string,
		payload: {
			key: string
			value: string
		}[],
	): Promise<boolean>
}

export interface OperationResponse {
	ok: boolean
	push_ids?: string[]
	schedule_ids?: string[]
	schedules?: [{ url: string }]
}

export interface AirshipServiceConfig {
	host: string
	port: number
	appKey: string
	appSecret: string
	masterSecret: string
}

export class RawDataAtomicAttributesProps {
	attribute: string
	operator: Operators
	value: string
	atomicType: string
	isNot: boolean
}

export class RawDataCompoundAttributesProps {
	components:
		| RawDataCompoundAttributesProps[]
		| RawDataAtomicAttributesProps[]
	compoundType: string
	isNot: boolean
}

export interface RawDataAudienceProps {
	userIds?: string[]
	attributes: RawDataCompoundAttributesProps
	audienceType: string
	isNot: boolean
}

export interface RawDataProps {
	audience: RawDataAudienceProps
	expiry: number
	title: string
	message: string
	mediaURL: string
	type: string
	devices: {
		ios: boolean
		android: boolean
	}
}

export interface PushPayload {
	audience:
		| 'all'
		| {
				AND?:
					| {
							named_user: string
					  }[]
					| {
							attribute: string
							operator: Operators
							value: string | number
					  }[]
		  }
		| {
				OR?:
					| {
							named_user: string
					  }[]
					| {
							attribute: string
							operator: Operators
							value: string | number
					  }[]
		  }
	options: {
		expiry: number
	}
	notification?: {
		ios: {
			title: string
			alert: string
			extra: {
				mediaUrl: string
				type: string
			}
		}
		android: {
			title: string
			alert: string
			extra: {
				mediaUrl: string
				type: string
			}
		}
	}
	device_types: string[]
}

export interface SchedulePayload {
	schedule: {
		recurring?: {
			cadence: {
				count: number
				type: string
				days_of_week?: string
			}
		}
		scheduled_time?: string
		local_scheduled_time?: string
	}
	push: PushPayload
}
