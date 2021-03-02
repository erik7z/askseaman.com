import { useEffect } from 'react'

import { useQuestionPageLazyQuery } from '../../types/generated-frontend'

export const useGetQuestion = (questionId: string) => {
	const [getQuestion, { data, loading, error }] = useQuestionPageLazyQuery({
		variables: {
			nodeId: questionId,
		},
		fetchPolicy: 'cache-and-network',
	})

	const [question] = data?.Question || [null]

	useEffect(() => {
		console.log('getQuestion useffect')
		getQuestion()
	}, [getQuestion])

	return { question, loading, error }
}
