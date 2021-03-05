import { useState, useEffect } from 'react'

import {
	useUsersListLazyQuery,
	User as TUser,
	_UserOrdering,
} from '../../types/generated-frontend'

export const useGetUsers = (
	currentPage: number,
	resultsLimit: number,
	orderBy: _UserOrdering
) => {
	const [usersList, setUsersList] = useState<TUser[]>()
	const [usersCount, setUsersCount] = useState<number>(0)

	const [getQuestions, { data, loading, error }] = useUsersListLazyQuery({
		variables: {
			orderBy: [orderBy],
			first: resultsLimit,
			offset: resultsLimit * currentPage,
		},
		fetchPolicy: 'cache-and-network',
	})

	useEffect(() => {
		console.log('getUsers useffect')
		getQuestions()
		if (data?.User) {
			setUsersList(data?.User as TUser[])
			setUsersCount(data?.UserCount?.totalCount as number)
		}
	}, [getQuestions, data?.User, data?.UserCount?.totalCount])

	return { usersList, usersCount, loading, error }
}
