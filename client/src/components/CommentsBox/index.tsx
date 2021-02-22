import React from 'react'
import { Accordion, Card } from 'react-bootstrap'

import { CommentItem, MetaActions, UserTextFormInput } from '..'
import {
	Answer as TAnswer,
	Question as TQuestion,
} from '../../__generated/graphql'

interface IProps {
	toggleEventKey: string
	topic: TAnswer | TQuestion
}

export const CommentsBox = ({ toggleEventKey, topic }: IProps) => {
	if (!topic) return <h1>Something went wrong...</h1>

	let subscribersCount, viewsCount

	if (
		topic.hasOwnProperty('subscribersCount') &&
		topic.hasOwnProperty('viewsCount')
	)
		({ subscribersCount, viewsCount } = topic as TQuestion)

	return (
		<Accordion>
			<MetaActions
				toggleEventKey={toggleEventKey}
				subscribersCount={subscribersCount}
				viewsCount={viewsCount}
				commentsCount={topic.commentsCount}
				createdAt={topic.createdAt}
			/>
			<Card className='border-0 comments-collapse'>
				<Accordion.Collapse eventKey={toggleEventKey}>
					<Card.Body>
						<CommentItem />
						<h5 className='module-header'>&gt; Your comment</h5>
						<hr className='hr-header hr-bold' />
						<UserTextFormInput />
					</Card.Body>
				</Accordion.Collapse>
			</Card>
		</Accordion>
	)
}
