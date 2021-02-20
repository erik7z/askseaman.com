import { Tag as ITag } from 'react-tag-autocomplete'

import { TkvPair } from '../types/globals'
import { FieldError, Tag as TTag, _Neo4jDateTime } from '../__generated/graphql'

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

export const normalizeTime = (time: _Neo4jDateTime): string => {
	const dbStamp = Date.parse(
		new Date(
			time.year as number,
			(time.month as number) - 1,
			time.day as number,
			(time.hour as number) + 2,
			time.minute as number
		).toString()
	)
	const currStamp = Date.parse(new Date().toString())

	return timeDifference(currStamp, dbStamp)
}

export const timeDifference = (current: number, previous: number) => {
	var msPerMinute = 60 * 1000
	var msPerHour = msPerMinute * 60
	var msPerDay = msPerHour * 24
	var msPerMonth = msPerDay * 30
	var msPerYear = msPerDay * 365

	var elapsed = current - previous

	if (elapsed < msPerMinute) {
		return Math.round(elapsed / 1000) + ' seconds ago'
	} else if (elapsed < msPerHour) {
		return Math.round(elapsed / msPerMinute) + ' minutes ago'
	} else if (elapsed < msPerDay) {
		return Math.round(elapsed / msPerHour) + ' hours ago'
	} else if (elapsed < msPerMonth) {
		return Math.round(elapsed / msPerDay) + ' days ago'
	} else if (elapsed < msPerYear) {
		return Math.round(elapsed / msPerMonth) + ' months ago'
	} else {
		return Math.round(elapsed / msPerYear) + ' years ago'
	}
}

export const ucFirstLetter = (string: string) => {
	return string.charAt(0).toUpperCase() + string.slice(1)
}
