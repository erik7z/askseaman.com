import React, { useRef } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BsArrowUpShort, BsArrowDownShort } from 'react-icons/bs'

import { CommentsBox, AvatarLink } from '../../../components'
import { useAnswerRate } from './../../../lib/hooks'
import {
	Answer as TAnswer,
	useAnswerCommentsLazyQuery,
	VoteIntention,
} from '../../../types/generated-frontend'

interface IProps {
	answer: TAnswer
}

export const AnswerItem = ({ answer }: IProps) => {
	const { rateData, handleRateChange } = useAnswerRate(answer)

	const getAnswerCommentsHook = useAnswerCommentsLazyQuery({
		variables: {
			nodeId: answer.nodeId,
		},
		fetchPolicy: 'no-cache',
	})

	const getAnswerCommentsHookRef = useRef(getAnswerCommentsHook)

	if (!answer) {
		console.error('No answer in answer item')
		return <h1>Something went wrong...</h1>
	}

	return (
		<Row className='answer-item media'>
			<Col md={12}>
				<Row>
					<Col md={11} xs={7}>
						<div className='text-right author'>
							<h5 className='author-name'>
								<Link to='#'>
									{answer.author?.name} {answer.author?.surname}
								</Link>
							</h5>
							<span className='author-position'>{answer.author?.rank}</span>
						</div>
					</Col>
					<Col md={1} xs={5} className='pl-0'>
						<AvatarLink size='md' />
					</Col>
				</Row>
			</Col>

			<Col md={1} xs={2} className='text-center align-items-center'>
				<ul className='question-rating list-unstyled'>
					<li>
						<h3 className='rate rate-up mb-1 '>
							<Link
								to='#rateup'
								id={VoteIntention.UpVote}
								onClick={handleRateChange}
								className={rateData.canVoteUp ? '' : 'text-gray'}
							>
								<BsArrowUpShort />
							</Link>
						</h3>
					</li>
					<li>
						<h5 className='rate rate-value text-secondary'>
							{rateData.upVotesCount - rateData.downVotesCount}
						</h5>
					</li>
					<li>
						<h3 className='rate rate-down'>
							<Link
								to='#ratedown'
								id={VoteIntention.DownVote}
								onClick={handleRateChange}
								className={rateData.canVoteDown ? '' : 'text-gray'}
							>
								<BsArrowDownShort />
							</Link>
						</h3>
					</li>
				</ul>
			</Col>
			<Col md={11} xs={10}>
				<p className='post-item-text'>{answer.text}</p>
				<CommentsBox
					topic={answer as TAnswer}
					getCommentsHook={getAnswerCommentsHookRef.current}
				/>
			</Col>
			<Col md={12}>
				<hr />
			</Col>
		</Row>
	)
}
