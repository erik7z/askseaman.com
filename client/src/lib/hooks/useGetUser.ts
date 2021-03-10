import { useEffect } from 'react'
import { PAGINATION_PAGE_SIZE } from '../../env'

import { useUserPageLazyQuery } from '../../types/generated-frontend'

interface IProps {
	userId: string
	tagsResultsLimit?: number
	questionsResultsLimit?: number
	questionsCurrentPage?: number
	answersResultsLimit?: number
	answersCurrentPage?: number
}

export const useGetUser = ({
	userId,
	tagsResultsLimit = PAGINATION_PAGE_SIZE,
	questionsResultsLimit = PAGINATION_PAGE_SIZE,
	questionsCurrentPage = 0,
	answersResultsLimit = PAGINATION_PAGE_SIZE,
	answersCurrentPage = 0,
}: IProps) => {
	const [getUser, { data, loading, error }] = useUserPageLazyQuery({
		variables: {
			nodeId: userId,
			tagsFirst: tagsResultsLimit,
			questionsFirst: questionsResultsLimit,
			questionsOffset: questionsResultsLimit * questionsCurrentPage,
			answersFirst: answersResultsLimit,
			answersOffset: questionsResultsLimit * answersCurrentPage,
		},
	})

	const [user] = data?.User || [null]

	useEffect(() => {
		console.log('getUser useffect')
		getUser()
	}, [getUser])

	return { user, loading, error }
}
