import React, { useRef, useContext } from 'react'
import { Link } from 'react-router-dom'

import { Accordion, Card, Alert } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton'

import { CommentItem, MetaActions, UserTextFormInput } from '..'

import { addCommentHandler } from './../UserTextFormInput/lib/helpers'
import { useGetComments } from './../../lib/hooks'
import { CurrentUserContext } from './../../lib/contexts'

import {
	useAddCommentMutation,
	Comment as TComment,
	Question as TQuestion,
	Answer as TAnswer,
	useQuestionCommentsLazyQuery,
	useAnswerCommentsLazyQuery,
} from '../../types/generated-frontend'

interface IProps {
	topic: TAnswer | TQuestion
	getCommentsHook:
		| ReturnType<typeof useQuestionCommentsLazyQuery>
		| ReturnType<typeof useAnswerCommentsLazyQuery>
}

export const CommentsBox = ({ topic, getCommentsHook }: IProps) => {
	const [currentUserState] = useContext(CurrentUserContext)

	let subscribersCount,
		canSubscribe,
		isSubscribed,
		viewsCount,
		showSubscribers,
		showViews

	const isQuestionComments = topic.__typename === 'Question'

	if (isQuestionComments) {
		;({
			subscribersCount,
			viewsCount,
			canSubscribe,
			isSubscribed,
		} = topic as TQuestion)
		showSubscribers = true
		showViews = false
	}

	const {
		getComments,
		commentsList,
		setCommentsList,
		commentsCount,
		setCommentsCount,
		commentsLoading,
		commentsError,
	} = useGetComments(topic, getCommentsHook)

	const getCommentsRef = useRef(getComments)

	const [
		addCommentsMutation,
		{ error: addCommentConnErrors },
	] = useAddCommentMutation()

	const addCommentsRef = useRef(addCommentsMutation)

	const handleAddCommentSuccess = (comments: TComment[]) => {
		setCommentsList(comments)
		setCommentsCount(comments.length)
	}

	return (
		<Accordion
		// defaultActiveKey={topic.nodeId}
		>
			<MetaActions
				topicId={topic.nodeId}
				canSubscribe={canSubscribe}
				isSubscribed={isSubscribed}
				subscribersCount={subscribersCount}
				showSubscribers={showSubscribers}
				viewsCount={viewsCount}
				showViews={showViews}
				commentsCount={commentsCount}
				showComments={true}
				showCommentsButton={true}
				getComments={getCommentsRef.current}
				commentsLoading={commentsLoading}
			/>
			<Card className='border-0 comments-collapse'>
				<Accordion.Collapse eventKey={topic.nodeId}>
					<Card.Body>
						{commentsError && (
							<Alert variant='danger'>
								<Alert.Heading>Ooops! Something went wrong</Alert.Heading>
								<p>{commentsError.message}</p>
							</Alert>
						)}

						{commentsLoading && <Skeleton count={5} />}

						{commentsList &&
							commentsList.map((comment) => (
								<CommentItem key={comment.nodeId} comment={comment} />
							))}

						<h5 className='module-header'>&gt; Your comment</h5>
						<hr className='hr-header hr-bold' />

						{currentUserState.isLoggedIn ? (
							<UserTextFormInput<typeof addCommentsMutation>
								topicId={topic.nodeId}
								submitMutation={addCommentsRef.current}
								submitHandler={addCommentHandler}
								successFn={handleAddCommentSuccess}
								connErrors={addCommentConnErrors}
							/>
						) : (
							<Card
								border='success'
								style={{
									width: '30rem',
									margin: ' 0 auto',
									float: 'none',
									marginBottom: '10px',
								}}
							>
								<Card.Body>
									<Card.Text>
										Only registered users can add comments, so please{' '}
										<Link to='/auth' className='btn btn-outline-success btn-sm'>
											Sign In
										</Link>
									</Card.Text>
								</Card.Body>
							</Card>
						)}
					</Card.Body>
				</Accordion.Collapse>
			</Card>
		</Accordion>
	)
}
