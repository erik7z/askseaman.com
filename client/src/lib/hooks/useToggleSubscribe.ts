import { useState, useEffect } from 'react'

import { useToggleSubscribeMutation } from '../../types/generated-frontend'

export const useToggleSubscribe = (
	topicId: string,
	subscribersCountInitial: number | null | undefined
) => {
	const [subscribersCount, setSubscribersCount] = useState(
		subscribersCountInitial
	)

	const [
		toggleSubscribeMutation,
		{
			data: toggleSubscribeResponse,
			error: toggleSubscribeConnErrors,
			loading: toggleSubscribeLoading,
		},
	] = useToggleSubscribeMutation({
		variables: {
			data: {
				nodeId: topicId,
			},
		},
	})

	const handleSubscribe = (e: React.SyntheticEvent) => {
		e.preventDefault()
		toggleSubscribeMutation()
	}

	useEffect(() => {
		if (toggleSubscribeResponse) {
			setSubscribersCount(
				toggleSubscribeResponse.ToggleSubscribe.subscribersCount as number
			)
		}
	}, [toggleSubscribeResponse])

	return {
		handleSubscribe,
		subscribersCount,
		toggleSubscribeLoading,
		toggleSubscribeConnErrors,
	}
}
