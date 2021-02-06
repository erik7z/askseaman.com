import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { AvatarLink } from '../'

export const UserCardItem = () => {
	return (
		<Card>
			<Card.Body className='text-center'>
				<AvatarLink size='lg' />
				<h5 className='author-name'>
					<Link to='#'>Misha Vovkin</Link>
					<br />
					<span className='author-position'>2nd Officer</span>
				</h5>
			</Card.Body>
			<Card.Footer>
				<small>
					<Link to='#'>
						{' '}
						<b>67</b> Answers{' '}
					</Link>
				</small>
				<br />
				<small>
					<Link to='#'>
						{' '}
						<b>22</b> Questions{' '}
					</Link>
				</small>
			</Card.Footer>
		</Card>
	)
}
