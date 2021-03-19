import { useEffect, useContext } from 'react'

import { useDeleteQuestionMutation } from '../../types/generated-frontend'
import { QuestionsContext } from '../../lib/contexts'

export const useDeleteQuestion = (
	questionId: string,
	succesFn: Function = () => {}
) => {
	const questionsContext = useContext(QuestionsContext)

	const [
		deleteQuestionMutation,
		{
			data: deleteQuestionResponse,
			error: deleteQuestionErrors,
			loading: deleteQuestionLoading,
		},
	] = useDeleteQuestionMutation({
		variables: {
			data: {
				nodeId: questionId,
			},
		},
	})

	useEffect(() => {
		if (
			deleteQuestionResponse &&
			deleteQuestionResponse.DeleteQuestion?.nodeId
		) {
			questionsContext.shouldUpdateToggle = !questionsContext.shouldUpdateToggle
			succesFn()
		}
	}, [deleteQuestionResponse, succesFn, questionsContext])

	const handleDelete = (e: React.MouseEvent) => {
		e.preventDefault()
		deleteQuestionMutation()
	}

	return {
		handleDelete,
		deleteQuestionLoading,
		deleteQuestionErrors,
	}
}
