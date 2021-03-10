import { useEffect, useState } from 'react'

import {
	useQuestionAnswersListLazyQuery,
	Answer as TAnswer,
} from '../../types/generated-frontend'

export const useGetQuestionAnswers = (questionId: string) => {
	const [answersList, setAnswersList] = useState<TAnswer[]>([])

	const [
		getQuestionAnswers,
		{ data: answersData, loading: answersLoading, error: answersError },
	] = useQuestionAnswersListLazyQuery({
		variables: {
			filter: {
				question: {
					nodeId: questionId,
				},
			},
		},
	})

	useEffect(() => {
		console.log('getQuestionAnswers useffect')

		getQuestionAnswers()
		if (answersData) setAnswersList(answersData.Answer as TAnswer[])
	}, [getQuestionAnswers, answersData])

	return { answersList, setAnswersList, answersLoading, answersError }
}
