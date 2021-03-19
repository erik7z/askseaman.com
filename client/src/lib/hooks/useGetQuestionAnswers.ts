import { useEffect, useState, useContext } from 'react'

import {
	useQuestionAnswersListLazyQuery,
	Answer as TAnswer,
} from '../../types/generated-frontend'

import { AnswersContext } from '../../lib/contexts'

export const useGetQuestionAnswers = (questionId: string) => {
	const [shouldUpdateAnswer] = useContext(AnswersContext)

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
		getQuestionAnswers()
		if (answersData) setAnswersList(answersData.Answer as TAnswer[])
	}, [getQuestionAnswers, answersData, shouldUpdateAnswer])

	return { answersList, setAnswersList, answersLoading, answersError }
}
