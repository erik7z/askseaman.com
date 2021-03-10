import { useState, useEffect } from 'react'

import {
	Question as TQuestion,
	Answer as TAnswer,
	Comment as TComment,
	CanBeCommented,
	useQuestionCommentsLazyQuery,
	useAnswerCommentsLazyQuery,
} from '../../types/generated-frontend'

type TCommentsQueryResponse = {
	[key: string]: CanBeCommented[]
}

export const useGetComments = (
	topic: TAnswer | TQuestion,
	getCommentsHook:
		| ReturnType<typeof useQuestionCommentsLazyQuery>
		| ReturnType<typeof useAnswerCommentsLazyQuery>
) => {
	const topicType = topic.__typename as 'Answer' | 'Question'

	const [commentsList, setCommentsList] = useState<TComment[]>()
	const [commentsCount, setCommentsCount] = useState(topic.commentsCount)

	const [
		getComments,
		{ data, loading: commentsLoading, error: commentsError },
	] = getCommentsHook

	const commentsData = data as TCommentsQueryResponse

	useEffect(() => {
		// console.log('getComments useffect', topicType)
		if (commentsData) {
			setCommentsList(commentsData[topicType]?.[0].comments as TComment[])
		}
	}, [commentsData, topicType])

	return {
		getComments,
		commentsList,
		setCommentsList,
		commentsCount,
		setCommentsCount,
		commentsLoading,
		commentsError,
	}
}
