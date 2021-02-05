import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

export const TagCardItem = () => {
	return (
		<Card>
			<Card.Body>
				<Card.Title>
					<Link to='tag-page.html'>LPG</Link>
				</Card.Title>
				<Card.Text>234 Questions</Card.Text>
			</Card.Body>
			<Card.Footer>
				<Link to='#' className='btn btn-outline-primary btn-sm mr-1'>
					Subscribe | <b>305</b>
				</Link>
			</Card.Footer>
		</Card>
	)
}
