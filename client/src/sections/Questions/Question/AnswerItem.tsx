import React, { useContext } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BsArrowUpShort, BsArrowDownShort, BsTrash } from 'react-icons/bs'

import { CommentsBox, AvatarLink } from '../../../components'
import { useAnswerVote, useDeleteAnswer } from './../../../lib/hooks'
import { CurrentUserContext } from './../../../lib/contexts'

import { renderTextFromDb } from './../../../lib/helpers'
import {
	Answer as TAnswer,
	useAnswerCommentsLazyQuery,
	VoteIntention,
} from '../../../types/generated-frontend'

interface IProps {
	answer: TAnswer
	showQuestion?: boolean
}

export const AnswerItem = ({ answer, showQuestion = false }: IProps) => {
	const [currentUserState] = useContext(CurrentUserContext)

	const { rateData, handleRateChange } = useAnswerVote(answer)

	const getAnswerCommentsHook = useAnswerCommentsLazyQuery({
		variables: {
			nodeId: answer.nodeId,
		},
		fetchPolicy: 'no-cache',
	})

	const rateUpButton =
		currentUserState.isLoggedIn && answer.canVote ? (
			<Link
				to='#rateup'
				id={VoteIntention.UpVote}
				onClick={handleRateChange}
				className={rateData.isVotedUp ? 'text-gray' : ''}
			>
				<BsArrowUpShort />
			</Link>
		) : (
			<BsArrowUpShort className='text-gray' />
		)

	const rateDownButton =
		currentUserState.isLoggedIn && answer.canVote ? (
			<Link
				to='#ratedown'
				id={VoteIntention.DownVote}
				onClick={handleRateChange}
				className={rateData.isVotedDown ? 'text-gray' : ''}
			>
				<BsArrowDownShort />
			</Link>
		) : (
			<BsArrowDownShort className='text-gray' />
		)

	const {
		handleDelete,
		deleteAnswerLoading,
		deleteAnswerErrors,
	} = useDeleteAnswer(answer.nodeId)

	if (!answer) {
		console.error('No answer in answer item')
		return <h1>Something went wrong...</h1>
	}

	return (
		<Row className='answer-item media'>
			<Col md={12}>
				<Row>
					<Col md={1} className='text-right pt-2'>
						{answer.canDelete && (
							<>
								{deleteAnswerLoading ? (
									<span>Loading...</span>
								) : (
									<Link to='#delete-question' onClick={handleDelete}>
										<BsTrash />
									</Link>
								)}
								{deleteAnswerErrors && <span>Error...</span>}{' '}
							</>
						)}
					</Col>
					<Col md={6} xs={12} className='align-self-end'>
						{showQuestion && (
							<Link to={`/question/${answer.question.nodeId}`}>
								{' '}
								<h6>
									<i>{answer.question.title}</i>
								</h6>
							</Link>
						)}
					</Col>
					<Col md={4} xs={7}>
						<div className='text-right author'>
							<h5 className='author-name'>
								<Link to={`/user/${answer.author.nodeId}`}>
									{answer.author?.name} {answer.author?.surname}
								</Link>
							</h5>
							<span className='author-position'>{answer.author?.rank}</span>
						</div>
					</Col>
					<Col md={1} xs={5} className='pl-0'>
						<AvatarLink
							size='md'
							avatarUrl={answer.author?.avatar}
							userId={answer.author.nodeId}
						/>
					</Col>
				</Row>
			</Col>

			<Col md={1} xs={2} className='text-center align-items-center'>
				<ul className='question-rating list-unstyled'>
					<li>
						<h3 className='rate rate-up mb-1 '>{rateUpButton}</h3>
					</li>
					<li>
						<h5 className='rate rate-value text-secondary'>
							{rateData.upVotesCount - rateData.downVotesCount}
						</h5>
					</li>
					<li>
						<h3 className='rate rate-down'>{rateDownButton}</h3>
					</li>
				</ul>
			</Col>
			<Col md={11} xs={10}>
				<div className='post-item-text'>{renderTextFromDb(answer.text)}</div>
				<CommentsBox
					topic={answer as TAnswer}
					getCommentsHook={getAnswerCommentsHook}
				/>
			</Col>
			<Col md={12}>
				<hr />
			</Col>
		</Row>
	)
}
