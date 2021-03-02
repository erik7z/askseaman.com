import { useState, useEffect } from 'react'

import { useToggleLikeMutation } from '../../types/generated-frontend'

export const useToggleLike = (
	topicId: string,
	likesCountInitial: number | null | undefined,
	canLikeInitial: boolean | null | undefined
) => {
	const [likeStatus, setLikeStatus] = useState({
		canLike: canLikeInitial,
		likesCount: likesCountInitial,
	})

	const [
		toggleLikeMutation,
		{
			data: toggleLikeResponse,
			error: toggleLikeConnErrors,
			loading: toggleLikeLoading,
		},
	] = useToggleLikeMutation({
		variables: {
			data: {
				nodeId: topicId,
			},
		},
	})

	useEffect(() => {
		if (toggleLikeResponse) {
			setLikeStatus({
				likesCount: toggleLikeResponse.ToggleLike.likesCount as number,
				canLike: toggleLikeResponse.ToggleLike.canLike as boolean,
			})
		}
	}, [toggleLikeResponse])

	const handleLike = (e: React.SyntheticEvent) => {
		e.preventDefault()
		toggleLikeMutation()
	}

	return {
		handleLike,
		likeStatus,
		toggleLikeLoading,
		toggleLikeConnErrors,
	}
}
