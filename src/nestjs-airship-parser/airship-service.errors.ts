import { BaseException } from '@src/libs'

export class RequestFailedException extends BaseException {
	code = 'REQUEST_AIRSHIP_FAILED'

	constructor(responseError: any) {
		super('Request airship failed')
		this.addDetail(responseError)
	}
}
export class LimitCompoundAttributesSizeExceedException extends BaseException {
	code = 'AIRSHIP_LIMIT_SIZE_COMPOUND_ATTRIBUTES_EXCEED'

	constructor(responseError: any) {
		super('Airship limit size compounds attributes exceed')
		this.addDetail(responseError)
	}
}
export class AttributesInvalidException extends BaseException {
	code = 'AIRSHIP_ATTRIBUTES_INVALID'

	constructor(responseError: any) {
		super('Airship attributes invalid')
		this.addDetail(responseError)
	}
}
export class LimitAttributesExceedException extends BaseException {
	code = 'AIRSHIP_LIMIT_ATTRIBUTES_EXCEED'

	constructor(responseError: any) {
		super('Airship limit attributes exceed')
		this.addDetail(responseError)
	}
}
