import { useEffect } from 'react'

import { useTagPageLazyQuery } from '../../types/generated-frontend'

export const useGetTag = (tagName: string) => {
	const [getTag, { data, loading, error }] = useTagPageLazyQuery({
		variables: {
			name: tagName,
		},
		fetchPolicy: 'cache-and-network',
	})

	const [tag] = data?.Tag || [null]

	useEffect(() => {
		console.log('getTag useffect')
		getTag()
	}, [getTag])

	return { tag, loading, error }
}
