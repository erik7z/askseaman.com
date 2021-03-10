import { useState, useEffect } from 'react'

import {
	useTagsListLazyQuery,
	Tag as TTag,
	_TagOrdering,
	_TagFilter,
} from '../../types/generated-frontend'

export const useGetTags = (
	currentPage: number,
	resultsLimit: number,
	orderBy: _TagOrdering,
	filter?: _TagFilter
) => {
	const [tagsList, setTagsList] = useState<TTag[]>()
	const [tagsCount, setTagsCount] = useState<number>(0)

	const [getTags, { data, loading, error }] = useTagsListLazyQuery({
		variables: {
			orderBy: [orderBy],
			first: resultsLimit,
			offset: resultsLimit * currentPage,
			filter: filter,
		},
	})

	useEffect(() => {
		// console.log('getTags useffect')
		getTags()
		if (data?.Tag) {
			setTagsList(data?.Tag as TTag[])
			setTagsCount(data?.TagCount?.totalCount as number)
		}
	}, [getTags, data?.Tag, data?.TagCount?.totalCount])

	return { tagsList, tagsCount, loading, error }
}
