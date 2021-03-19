import { useEffect, useContext } from 'react'

import { useDeleteAnswerMutation } from '../../types/generated-frontend'
import { AnswersContext } from '../../lib/contexts'

export const useDeleteAnswer = (answerId: string) => {
	const [shouldUpdateAnswer, setShouldUpdateAnswer] = useContext(AnswersContext)

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
	})

	useEffect(() => {
		if (deleteAnswerResponse && deleteAnswerResponse.DeleteAnswer?.nodeId) {
			setShouldUpdateAnswer({ shouldUpdateAnswer: true })
		}
	}, [deleteAnswerResponse, shouldUpdateAnswer, setShouldUpdateAnswer])

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
