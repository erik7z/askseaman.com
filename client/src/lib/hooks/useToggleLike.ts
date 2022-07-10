import { useState, useEffect } from 'react'

import { useToggleLikeMutation } from '../../types/generated-frontend'

export const useToggleLike = (
	topicId: string,
	likesCountInitial: number | null | undefined,
	isLikedInitial: boolean | null | undefined
) => {
	const [likeStatus, setLikeStatus] = useState({
		isLiked: isLikedInitial,
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
				isLiked: toggleLikeResponse.ToggleLike.isLiked as boolean,
			})
		}
	}, [toggleLikeResponse])

	const handleLike = (e: React.SyntheticEvent) => {
		e.preventDefault()
		toggleLikeMutation().catch((e) => {
			console.error(e)
		})
	}

	return {
		handleLike,
		likeStatus,
		toggleLikeLoading,
		toggleLikeConnErrors,
	}
}
