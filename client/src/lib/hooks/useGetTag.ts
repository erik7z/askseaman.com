import { useEffect } from 'react'

import { useTagPageLazyQuery } from '../../types/generated-frontend'

export const useGetTag = (tagName: string) => {
	const [getTag, { data, loading, error }] = useTagPageLazyQuery({
		variables: {
			name: tagName,
		},
	})

	const [tag] = data?.Tag || [null]

	useEffect(() => {
		console.log('getTag useffect')
		getTag()
	}, [getTag])

	return { tag, loading, error }
}
