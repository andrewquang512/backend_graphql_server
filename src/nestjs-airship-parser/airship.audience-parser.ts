import { AtomicTypes } from '@src/modules/template/template.constants'
import {
	AttributesInvalidException,
	LimitAttributesExceedException,
	LimitCompoundAttributesSizeExceedException,
} from './airship-service.errors'
import {
	RawDataAtomicAttributesProps,
	RawDataCompoundAttributesProps,
} from './airship-service.port'

type JSONObject<T = Record<string, unknown>> = T & {
	[x: string]: any
}

const LIMIT_ATTRIBUTES = 200

export class AudienceVistor {
	private count = 0

	visitAudience(
		ctx: RawDataCompoundAttributesProps & RawDataAtomicAttributesProps,
	) {
		if (ctx.components) {
			return this.visitCompoundAudience(ctx)
		}
		return this.visitAtomicAudience(ctx)
	}

	visitCompoundAudience(ctx: RawDataCompoundAttributesProps): JSONObject {
		const attributes = []
		for (const attribute of ctx.components) {
			const visitattribute = this.visitAudience(attribute as any)
			if (visitattribute) attributes.push(visitattribute)
		}
		if (attributes.length > 10) {
			throw new LimitCompoundAttributesSizeExceedException({})
		}
		let audience: JSONObject = {
			[ctx.compoundType]: attributes,
		}
		this.count++

		if (ctx.isNot) {
			audience = {
				NOT: audience,
			}
			this.count++
		}

		if (this.count > LIMIT_ATTRIBUTES) {
			throw new LimitAttributesExceedException({})
		}
		return audience
	}

	visitAtomicAudience(ctx: RawDataAtomicAttributesProps): JSONObject {
		let audience: JSONObject
		if (ctx.atomicType === AtomicTypes.Number) {
			const isNum =
				ctx.value.match(/^-?[0-9]*$/g) &&
				(!ctx.value.startsWith('0') || ctx.value.length === 1)

			if (!isNum) throw new AttributesInvalidException({})
			audience = {
				attribute: ctx.attribute,
				operator: ctx.operator,
				value: parseInt(ctx.value),
			}
			this.count++
		}
		if (
			ctx.atomicType === AtomicTypes.Text ||
			ctx.atomicType === AtomicTypes.Date
		) {
			audience = {
				attribute: ctx.attribute,
				operator: ctx.operator,
				value: ctx.value,
			}
			this.count++
		}
		if (ctx.isNot) {
			audience = {
				NOT: audience,
			}
			this.count++
		}
		if (this.count > LIMIT_ATTRIBUTES) {
			throw new LimitAttributesExceedException({})
		}
		return audience
	}
}
