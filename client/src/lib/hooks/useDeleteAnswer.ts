import { useEffect, useContext, useRef, useState } from 'react'

import { useDeleteAnswerMutation } from '../../types/generated-frontend'
import { AnswersContext } from '../../lib/contexts'

export const useDeleteAnswer = (answerId: string) => {
	const [{ shouldUpdateAnswer }, setShouldUpdateAnswer] = useContext(
		AnswersContext
	)
	const setShouldUpdateAnswerRef = useRef(setShouldUpdateAnswer)

	const [lastDeletedId, setLastDeletedId] = useState('')

	const [
		deleteAnswerMutation,
		{
			data: deleteAnswerResponse,
			error: deleteAnswerErrors,
			loading: deleteAnswerLoading,
		},
	] = useDeleteAnswerMutation({
		variables: {
			data: {
				nodeId: answerId,
			},
		},
		fetchPolicy: 'no-cache',
	})

	useEffect(() => {
		if (
			deleteAnswerResponse &&
			deleteAnswerResponse.DeleteAnswer?.nodeId !== lastDeletedId
		) {
			setShouldUpdateAnswerRef.current({
				shouldUpdateAnswer: !shouldUpdateAnswer,
			})
			setLastDeletedId(deleteAnswerResponse.DeleteAnswer?.nodeId)
		}
	}, [deleteAnswerResponse, shouldUpdateAnswer, lastDeletedId])

	const handleDelete = (e: React.MouseEvent) => {
		e.preventDefault()
		deleteAnswerMutation()
	}

	return {
		handleDelete,
		deleteAnswerLoading,
		deleteAnswerErrors,
	}
}
