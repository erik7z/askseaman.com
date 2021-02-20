import { Tag as ITag } from 'react-tag-autocomplete'

import { TkvPair } from '../types/globals'
import { FieldError, Tag as TTag } from '../__generated/graphql'

export const normalizeErrors = (errors: FieldError[]) => {
	return errors.reduce((acc: TkvPair, val) => {
		if (val && val.field) acc[val.field] = val.message as string
		return acc
	}, {})
}

export const normalizeTags = (tags: TTag[]): ITag[] => {
	return tags.reduce((acc: ITag[], val, i) => {
		if (val)
			acc[i] = {
				id: i,
				name: val.name,
			}
		return acc
	}, [])
}

export const ucFirstLetter = (string: string) => {
	return string.charAt(0).toUpperCase() + string.slice(1)
}
