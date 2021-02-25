import React, { useEffect, useState } from 'react'
import { Accordion, Card, Alert } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton'

import { CommentItem, MetaActions, UserTextFormInput } from '..'

import { addCommentHandler } from './../UserTextFormInput/lib/helpers'
import {
	useQuestionCommentsLazyQuery,
	useAnswerCommentsLazyQuery,
	useAddCommentMutation,
	Comment as TComment,
	CanBeCommented,
	Answer as TAnswer,
	Question as TQuestion,
} from '../../types/generated-frontend'

type TCommentsQueryResponse = {
	[key: string]: CanBeCommented[]
}

interface IProps {
	topic: TAnswer | TQuestion
	getCommentsHook:
		| ReturnType<typeof useQuestionCommentsLazyQuery>
		| ReturnType<typeof useAnswerCommentsLazyQuery>
}

export const CommentsBox = ({ topic, getCommentsHook }: IProps) => {
	let subscribersCount, viewsCount, showSubscribers, showViews

	const isQuestionComments = topic.__typename === 'Question'
	const topicType = topic.__typename as 'Answer' | 'Question'

	const [commentsList, setCommentsList] = useState<TComment[]>()
	const [commentsCount, setCommentsCount] = useState(topic.commentsCount)

	const [
		getComments,
		{ data, loading: commentsLoading, error: commentsError },
	] = getCommentsHook

	const commentsData = data as TCommentsQueryResponse

	const [
		addCommentsMutation,
		{ error: addCommentConnErrors },
	] = useAddCommentMutation()

	const handleAddCommentSuccess = (comments: TComment[]) => {
		setCommentsList(comments)
		setCommentsCount(comments.length)
	}

	useEffect(() => {
		console.log('getComments useffect', topicType)
		if (commentsData) {
			console.log(commentsData)
			setCommentsList(commentsData[topicType]?.[0].comments as TComment[])
		}
	}, [commentsData, topicType])

	if (isQuestionComments) {
		;({ subscribersCount, viewsCount } = topic as TQuestion)
		showSubscribers = true
		showViews = true
	}

	return (
		<Accordion
		// defaultActiveKey={topic.nodeId}
		>
			<MetaActions
				topicId={topic.nodeId}
				subscribersCount={subscribersCount}
				showSubscribers={showSubscribers}
				viewsCount={viewsCount}
				showViews={showViews}
				commentsCount={commentsCount}
				showComments={true}
				showCommentsButton={true}
				getComments={getComments}
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
						<UserTextFormInput<typeof addCommentsMutation>
							topicId={topic.nodeId}
							submitMutation={addCommentsMutation}
							submitHandler={addCommentHandler}
							successFn={handleAddCommentSuccess}
							connErrors={addCommentConnErrors}
						/>
					</Card.Body>
				</Accordion.Collapse>
			</Card>
		</Accordion>
	)
}
