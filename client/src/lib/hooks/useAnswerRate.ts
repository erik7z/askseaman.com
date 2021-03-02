import { useEffect, useState } from 'react'

import {
	useVoteMutation,
	Answer as TAnswer,
	VoteIntention,
} from '../../types/generated-frontend'

export const useAnswerRate = (answer: TAnswer) => {
	const [rateData, setRateData] = useState({
		upVotesCount: answer.upVotesCount as number,
		downVotesCount: answer.downVotesCount as number,
		canVoteUp: answer.canVoteUp as boolean,
		canVoteDown: answer.canVoteDown as boolean,
	})

	const [
		rateAnswerMutation,
		{ data, loading: rateAnswerLoading, error: rateAnswerError },
	] = useVoteMutation()

	if (rateAnswerError) console.log(rateAnswerError)

	const rateAnswerResponse = data?.Vote

	useEffect(() => {
		if (rateAnswerResponse) {
			setRateData({
				upVotesCount: rateAnswerResponse.upVotesCount as number,
				downVotesCount: rateAnswerResponse.downVotesCount as number,
				canVoteUp: rateAnswerResponse.canVoteUp as boolean,
				canVoteDown: rateAnswerResponse.canVoteDown as boolean,
			})
		}
	}, [rateAnswerResponse])

	const handleRateChange = (e: React.SyntheticEvent) => {
		e.preventDefault()
		const action =
			e.currentTarget.id === VoteIntention.UpVote
				? VoteIntention.UpVote
				: VoteIntention.DownVote
		rateAnswerMutation({
			variables: {
				data: {
					nodeId: answer.nodeId,
					action,
				},
			},
		})
	}

	return { rateData, handleRateChange, rateAnswerLoading, rateAnswerError }
}
