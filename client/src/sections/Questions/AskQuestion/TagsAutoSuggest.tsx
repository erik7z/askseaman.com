import React, { useEffect, useState } from 'react'
import ReactTags, { Tag as ITag } from 'react-tag-autocomplete'

import {
	useTagsListLazyQuery,
	_TagOrdering,
	Tag as TTag,
} from '../../../types/generated-frontend'

import { normalizeTags } from '../../../lib/helpers'
import { PAGINATION_PAGE_SIZE } from '../../../globals'

export const TagsAutoSuggest = ({
	name,
	setFieldValue,
}: {
	name: string
	setFieldValue: (
		field: string,
		value: any,
		shouldValidate?: boolean | undefined
	) => void
}) => {
	const [suggSearch, setSuggSearch] = useState('')
	const [suggestions, setSuggestions] = useState<ITag[]>([])

	const [getTags, { data: tagsData }] = useTagsListLazyQuery({
		variables: {
			orderBy: [_TagOrdering.QuestionsCountDesc],
			first: PAGINATION_PAGE_SIZE,
			offset: 0,
			filter: {
				name_regexp: '(?i).*' + suggSearch.toLocaleUpperCase() + '.*',
			},
		},
	})

	useEffect(() => {
		getTags()
		if (tagsData && tagsData.Tag) {
			setSuggestions(normalizeTags(tagsData.Tag as TTag[]))
		}
	}, [getTags, tagsData, suggSearch])

	const [tags, setTags] = useState<ITag[]>([])

	const onDelete = (i: number) => {
		const tagsD = tags.slice(0)
		tagsD.splice(i, 1)
		setTags(tagsD)
	}

	const onAddition = (tag: ITag) => {
		const tagsA = [].concat(tags as never[], [tag] as never[])
		setTags(tagsA)

		setFieldValue(
			name,
			tagsA
				.map((tag: ITag) => tag.name)
				.join(',')
				.toLocaleLowerCase()
		)
	}

	return (
		<ReactTags
			// ref={tagsInput}
			tags={tags}
			suggestions={suggestions}
			onDelete={onDelete}
			onAddition={onAddition}
			delimiters={['Enter', 'Tab']}
			onInput={(query: string) => setSuggSearch(query)}
			maxSuggestionsLength={5}
			allowNew={true}
		/>
	)
}
