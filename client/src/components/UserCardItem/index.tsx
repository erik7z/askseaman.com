import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Card } from 'react-bootstrap'
import { AvatarLink } from '../'
import { User } from '../../types/generated-frontend'

export const UserCardItem = ({ user }: { user: User }) => {
	return (
		<Col md={4} xs={6} className='card-item'>
			<Card>
				<Card.Body className='text-center'>
					<AvatarLink size='lg' avatarUrl={user.avatar} />
					<h5 className='author-name'>
						<Link to='#'>
							{user.name} {user.surname}
						</Link>
						<br />
						<span className='author-position'>{user.rank}</span>
					</h5>
				</Card.Body>
				<Card.Footer>
					<small>
						<Link to='#'>
							{' '}
							<b>{user.answersCount}</b> Answers{' '}
						</Link>
					</small>
					<br />
					<small>
						<Link to='#'>
							{' '}
							<b>{user.questionsCount}</b> Questions{' '}
						</Link>
					</small>
				</Card.Footer>
			</Card>
		</Col>
	)
}
