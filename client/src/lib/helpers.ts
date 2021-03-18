import React from 'react'
import he from 'he'

import { Tag as ITag } from 'react-tag-autocomplete'

import { TKVPair } from '../types/frontend'
import {
	FieldError,
	Tag as TTag,
	_Neo4jDateTime,
} from '../types/generated-frontend'
import { PAGINATION_PAGES_VISIBLE, PAGINATION_PAGE_SIZE } from '../globals'

export const getKeyByValue = (object: TKVPair, value: string) => {
	return Object.keys(object).find((key) => object[key] === value)
}

export const renderHTML = (rawHTML: string) =>
	React.createElement('div', { dangerouslySetInnerHTML: { __html: rawHTML } })

export const renderTextFromDb = (str: string) => renderHTML(he.decode(str))

export const normalizeErrors = (errors: FieldError[]) => {
	return errors.reduce((acc: TKVPair, val) => {
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

export const paginate = (
	totalItems: number = 1,
	currentPage: number = 1,
	pageSize: number = PAGINATION_PAGE_SIZE,
	maxPages: number = PAGINATION_PAGES_VISIBLE
) => {
	// calculate total pages
	let totalPages = Math.ceil(totalItems / pageSize)

	// ensure current page isn't out of range
	if (currentPage < 1) {
		currentPage = 1
	} else if (currentPage > totalPages) {
		currentPage = totalPages
	}

	let startPage: number, endPage: number
	if (totalPages <= maxPages) {
		// total pages less than max so show all pages
		startPage = 1
		endPage = totalPages
	} else {
		// total pages more than max so calculate start and end pages
		let maxPagesBeforeCurrentPage = Math.floor(maxPages / 2)
		let maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1
		if (currentPage <= maxPagesBeforeCurrentPage) {
			// current page near the start
			startPage = 1
			endPage = maxPages
		} else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
			// current page near the end
			startPage = totalPages - maxPages + 1
			endPage = totalPages
		} else {
			// current page somewhere in the middle
			startPage = currentPage - maxPagesBeforeCurrentPage
			endPage = currentPage + maxPagesAfterCurrentPage
		}
	}

	// calculate start and end item indexes
	let startIndex = (currentPage - 1) * pageSize
	let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1)

	// create an array of pages to ng-repeat in the pager control
	let pages = Array.from(Array(endPage + 1 - startPage).keys()).map(
		(i) => startPage + i
	)

	// return object with all pager properties required by the view
	return {
		totalItems: totalItems,
		currentPage: currentPage,
		pageSize: pageSize,
		totalPages: totalPages,
		startPage: startPage,
		endPage: endPage,
		startIndex: startIndex,
		endIndex: endIndex,
		pages: pages,
	}
}
