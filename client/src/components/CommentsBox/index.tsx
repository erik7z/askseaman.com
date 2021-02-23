import React, { useEffect, useState, useRef } from 'react'
import { Accordion, Card, Alert } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton'
import Apollo from '@apollo/client'

import {
	CommentItem,
	MetaActions,
	// UserTextFormInput
} from '..'

import {
	Comment as TComment,
	CanBeCommented,
	Answer as TAnswer,
	Question as TQuestion,
	useQuestionCommentsLazyQuery,
	useAnswerCommentsLazyQuery,
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
	toggleEventKey: string
	topic: TAnswer | TQuestion
}

export const CommentsBox = ({ toggleEventKey, topic }: IProps) => {
	let subscribersCount, viewsCount, showSubscribers, showViews
	let isMounted = useRef(true)

	const isQuestionComments = topic.__typename === 'Question'
	const topicType = topic.__typename as 'Answer' | 'Question'

	const queryOptions: TCommentsQuery = {
		variables: {
			nodeId: topic?.nodeId,
		},
		fetchPolicy: 'cache-and-network',
	}

	const [commentsList, setCommentsList] = useState<TComment[]>()

	const getQuestionCommentsHook = useQuestionCommentsLazyQuery(queryOptions)
	const getAnswersCommentsHook = useAnswerCommentsLazyQuery(queryOptions)

	const [
		getComments,
		{ data, loading: commentsLoading, error: commentsError },
	] = isQuestionComments ? getQuestionCommentsHook : getAnswersCommentsHook

	const commentsData = data as TCommentsQueryResponse

	useEffect(() => {
		console.log('getComments useffect')
		if (isMounted.current) getComments()
		if (commentsData) {
			setCommentsList(commentsData[topicType]?.[0].comments as TComment[])
		}
		return () => {
			isMounted.current = false
		}
	}, [getComments, commentsData, topicType])

	if (isQuestionComments) {
		;({ subscribersCount, viewsCount } = topic as TQuestion)
		showSubscribers = true
		showViews = true
	}

	return (
		<Accordion>
			<MetaActions
				toggleEventKey={toggleEventKey}
				subscribersCount={subscribersCount}
				showSubscribers={showSubscribers}
				viewsCount={viewsCount}
				showViews={showViews}
				commentsCount={topic.commentsCount}
				showComments={true}
				createdAt={topic.createdAt}
			/>
			<Card className='border-0 comments-collapse'>
				<Accordion.Collapse eventKey={toggleEventKey}>
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
						{/* <UserTextFormInput /> */}
					</Card.Body>
				</Accordion.Collapse>
			</Card>
		</Accordion>
	)
}
