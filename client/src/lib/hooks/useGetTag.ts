import { useEffect } from 'react'
import { PAGINATION_PAGE_SIZE } from '../../globals'

import { useTagPageLazyQuery } from '../../types/generated-frontend'

interface IProps {
	tagName: string
	questionsResultsLimit?: number
	questionsCurrentPage?: number
	usersResultsLimit?: number
	usersCurrentPage?: number
}

export const useGetTag = ({
	tagName,
	questionsResultsLimit = PAGINATION_PAGE_SIZE,
	questionsCurrentPage = 0,
	usersResultsLimit = PAGINATION_PAGE_SIZE,
	usersCurrentPage = 0,
}: IProps) => {
	const [getTag, { data, loading, error }] = useTagPageLazyQuery({
		variables: {
			name: tagName,
			questionsFirst: questionsResultsLimit,
			questionsOffset: questionsResultsLimit * questionsCurrentPage,
			usersFirst: usersResultsLimit,
			usersOffset: usersResultsLimit * usersCurrentPage,
		},
	})

	const [tag] = data?.Tag || [null]

	useEffect(() => {
		// console.log('getTag useffect')
		getTag()
	}, [getTag])

	return { tag, loading, error }
}
