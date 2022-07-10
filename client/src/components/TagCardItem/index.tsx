import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Card } from 'react-bootstrap'
import { Tag } from '../../types/generated-frontend'
import { MetaActions } from '../MetaActions'

export const TagCardItem = ({ tag }: { tag: Tag }) => {
	return (
		<Col md={4} xs={6} className='card-item'>
			<Card>
				<Card.Body>
					<Card.Title>
						<Link to={`/tag/${tag.name}`}>{tag.name}</Link>
					</Card.Title>
					<Card.Text>{tag.questionsCount} Questions</Card.Text>
				</Card.Body>
				<Card.Footer className='text-center'>
					<MetaActions
						topicId={tag.nodeId}
						isSubscribed={tag.isSubscribed}
						canSubscribe={tag.canSubscribe}
						subscribersCount={tag.subscribersCount}
						showSubscribers={true}
						showViews={false}
					/>
				</Card.Footer>
			</Card>
		</Col>
	)
}
