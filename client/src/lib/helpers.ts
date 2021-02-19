import { TkvPair } from '../types/globals'
import { FieldError } from '../__generated/graphql'

export const normalizeErrors = (errors: FieldError[]) => {
	return errors.reduce((acc: TkvPair, val) => {
		if (val && val.field) acc[val.field] = val.message
		return acc
	}, {})
}

export const ucFirstLetter = (string: string) => {
	return string.charAt(0).toUpperCase() + string.slice(1)
}
