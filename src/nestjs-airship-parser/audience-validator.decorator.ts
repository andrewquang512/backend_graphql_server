import {
	registerDecorator,
	ValidationOptions,
	ValidationArguments,
} from 'class-validator'
import {
	AtomicAttributesPropsDTO,
	AudiencePropsDTO,
	CompoundAttributesPropsDTO,
} from '../dtos/common-template.request.dto'
import { AtomicTypes, CompoundTypes, Operators } from '../template.constants'

export function IsValidAttribute(validationOptions?: ValidationOptions) {
	return function (object: AudiencePropsDTO, propertyName: string) {
		registerDecorator({
			name: 'IsValidAttribute',
			target: object.constructor,
			propertyName: propertyName,
			options: validationOptions,
			validator: {
				validate(value: any, args: ValidationArguments) {
					const audience = args.object as AudiencePropsDTO
					const attributes =
						audience.attributes as CompoundAttributesPropsDTO
					return isCompoundAttribute(attributes)
				},
			},
		})
	}

	function isAttribute(object: any) {
		if (object.compoundType) {
			return isCompoundAttribute(object)
		}
		if (object.atomicType) {
			return isAtomicAttribute(object)
		}
		return false
	}

	function isCompoundAttribute(
		object: CompoundAttributesPropsDTO,
	): object is CompoundAttributesPropsDTO {
		if (!Object.keys(object).length) {
			return true
		}
		if (!Object.values(CompoundTypes).includes(object.compoundType)) {
			return false
		}
		if (typeof object.isNot !== 'boolean') {
			return false
		}
		if (!object.components || object.components.length === 0) {
			return false
		}
		for (const component of object.components) {
			if (!isAttribute(component)) return false
		}
		return true
	}
	function isAtomicAttribute(
		object: AtomicAttributesPropsDTO,
	): object is AtomicAttributesPropsDTO {
		if (!Object.values(Operators).includes(object.operator)) {
			return false
		}
		if (!Object.values(AtomicTypes).includes(object.atomicType)) {
			return false
		}
		if (typeof object.attribute !== 'string') {
			return false
		}
		if (typeof object.value !== 'string') {
			return false
		}
		if (typeof object.isNot !== 'boolean') {
			return false
		}
		return true
	}
}
