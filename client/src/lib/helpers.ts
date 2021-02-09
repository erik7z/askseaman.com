import { kvPair } from '../types/globals'
import { FieldError } from '../__generated/graphql'

export const normalizeErrors = (errors: FieldError[]) => {
	return errors.reduce((acc: kvPair, val) => {
		if (val && val.field) acc[val.field] = val.message
		return acc
	}, {})
}
