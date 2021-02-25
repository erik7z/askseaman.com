import React, { useEffect, useState } from 'react'
import { Accordion, Card, Alert } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton'
import Apollo from '@apollo/client'

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
	QuestionCommentsQuery as TQuestionCommentsQuery,
	QuestionCommentsQueryVariables as TQuestionCommentsQueryVariables,
	AnswerCommentsQuery as TAnswerCommentsQuery,
	AnswerCommentsQueryVariables as TAnswerCommentsQueryVariables,
} from '../../types/generated-frontend'

type TCommentsQuery = Apollo.LazyQueryHookOptions<
	TQuestionCommentsQuery | TAnswerCommentsQuery,
	TQuestionCommentsQueryVariables | TAnswerCommentsQueryVariables
>

type TCommentsQueryResponse = {
	[key: string]: CanBeCommented[]
}

interface IProps {
	accordionId: string
	topic: TAnswer | TQuestion
}

export const CommentsBox = ({ accordionId, topic }: IProps) => {
	let subscribersCount, viewsCount, showSubscribers, showViews

	const isQuestionComments = topic.__typename === 'Question'
	const topicType = topic.__typename as 'Answer' | 'Question'

	const queryOptions: TCommentsQuery = {
		variables: {
			nodeId: topic?.nodeId,
		},
		fetchPolicy: 'no-cache',
	}

	const [commentsList, setCommentsList] = useState<TComment[]>()
	const [commentsCount, setCommentsCount] = useState(topic.commentsCount)

	const getQuestionCommentsHook = useQuestionCommentsLazyQuery(queryOptions)
	const getAnswersCommentsHook = useAnswerCommentsLazyQuery(queryOptions)

	const [
		getComments,
		{ data, loading: commentsLoading, error: commentsError },
	] = isQuestionComments ? getQuestionCommentsHook : getAnswersCommentsHook

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
		// defaultActiveKey={accordionId}
		>
			<MetaActions
				accordionId={accordionId}
				subscribersCount={subscribersCount}
				showSubscribers={showSubscribers}
				viewsCount={viewsCount}
				showViews={showViews}
				commentsCount={commentsCount}
				showComments={true}
				getComments={getComments}
				commentsLoading={commentsLoading}
			/>
			<Card className='border-0 comments-collapse'>
				<Accordion.Collapse eventKey={accordionId}>
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
