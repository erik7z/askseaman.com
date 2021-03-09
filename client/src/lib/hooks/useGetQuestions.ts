import { useState, useEffect, useContext } from 'react'

import {
	useQuestionsListLazyQuery,
	Question as TQuestion,
	_QuestionOrdering,
	_QuestionFilter,
} from '../../types/generated-frontend'

import { QuestionsContext } from '../../lib/contexts'
import { PAGINATION_PAGE_SIZE } from './../../env'

export const useGetQuestions = (
	currentPage: number = 0,
	resultsLimit: number = PAGINATION_PAGE_SIZE,
	orderBy: _QuestionOrdering,
	filter?: _QuestionFilter
) => {
	const questionsContext = useContext(QuestionsContext)

	const [questionsList, setQuestionsList] = useState<TQuestion[]>()
	const [questionsCount, setQuestionsCount] = useState<number>(0)

	const [getQuestions, { data, loading, error }] = useQuestionsListLazyQuery({
		variables: {
			orderBy: [orderBy],
			first: resultsLimit,
			offset: resultsLimit * currentPage,
			filter: filter,
		},
		fetchPolicy: 'cache-and-network',
	})

	useEffect(() => {
		console.log('getQuestions useffect')
		getQuestions()
		if (data?.Question) {
			setQuestionsList(data?.Question as TQuestion[])
			setQuestionsCount(data?.QuestionCount?.totalCount as number)
		}
	}, [
		getQuestions,
		data?.Question,
		data?.QuestionCount?.totalCount,
		questionsContext.shouldUpdateToggle,
	])

	return { questionsList, questionsCount, loading, error }
}
