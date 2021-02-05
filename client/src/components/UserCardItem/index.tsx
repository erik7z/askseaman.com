import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

export const UserCardItem = () => {
	return (
		<Card>
			<Card.Body className='text-center'>
				<Link
					to='user.html'
					className='img author-avatar author-avatar-lg'
					style={{ backgroundImage: 'url(images/bg_1.jpg)' }}
				></Link>
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
