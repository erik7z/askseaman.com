import React from 'react'
import { Accordion, Card } from 'react-bootstrap'

import { CommentItem, MetaActions, UserTextFormInput } from '..'
import { Question as TQuestion } from '../../__generated/graphql'

interface IProps {
	toggleEventKey: string
	question?: TQuestion
}

export const CommentsBox = ({ toggleEventKey, question }: IProps) => {
	return (
		<Accordion>
			<MetaActions
				toggleEventKey={toggleEventKey}
				subscribersCount={question?.subscribersCount}
				viewsCount={question?.viewsCount}
				commentsCount={question?.commentsCount}
				createdAt={question?.createdAt}
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
