import { useEffect } from 'react'

import { useUserPageLazyQuery } from '../../types/generated-frontend'

export const useGetUser = (userId: string) => {
	const [getUser, { data, loading, error }] = useUserPageLazyQuery({
		variables: {
			nodeId: userId,
		},
		fetchPolicy: 'cache-and-network',
	})

	const [user] = data?.User || [null]

	useEffect(() => {
		console.log('getUser useffect')
		getUser()
	}, [getUser])

	return { user, loading, error }
}
