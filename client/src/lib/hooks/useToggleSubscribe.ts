import { useState, useEffect } from 'react'

import { useToggleSubscribeMutation } from '../../types/generated-frontend'

export const useToggleSubscribe = (
	topicId: string,
	subscribersCountInitial: number | null | undefined,
	isSubscribedInitial: boolean | null | undefined
) => {
	const [subscribeStatus, setSubscribeStatus] = useState({
		isSubscribed: isSubscribedInitial,
		subscribersCount: subscribersCountInitial,
	})

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
		toggleSubscribeMutation().catch((e) => {
			console.error(e)
		})
	}

	useEffect(() => {
		if (toggleSubscribeResponse) {
			setSubscribeStatus({
				isSubscribed: toggleSubscribeResponse.ToggleSubscribe
					.isSubscribed as boolean,
				subscribersCount: toggleSubscribeResponse.ToggleSubscribe
					.subscribersCount as number,
			})
		}
	}, [toggleSubscribeResponse])

	return {
		handleSubscribe,
		subscribeStatus,
		toggleSubscribeLoading,
		toggleSubscribeConnErrors,
	}
}
