import React from 'react'
import { Accordion, Card } from 'react-bootstrap'

import { CommentItem, MetaActions, UserTextFormInput } from '..'

interface IProps {
	toggleEventKey: string
}

export const CommentsBox = ({ toggleEventKey }: IProps) => {
	return (
		<Accordion>
			<MetaActions toggleEventKey={toggleEventKey} />
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
