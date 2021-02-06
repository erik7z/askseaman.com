import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { AvatarLink } from '../'

export const CommentItem = () => {
	return (
		<Row className='comment-item'>
			<Col md={11} xs={10}>
				<div className='text-right author'>
					<h5 className='author-name'>
						<Link to='#'>Georgiy Dushev</Link>
					</h5>
					<span className='author-position'>2nd Officer</span>
				</div>
			</Col>
			<Col md={1} xs={2} className='pl-0'>
				<AvatarLink size='md' />
			</Col>
			<div className='col-12'>
				<p className='post-item-text'>
					Pibero, in gravida nulla. Nulla vel metus scelerisque ante
					sollicitudin. Cras purus odio, vestibulum in vulputatsi vulputate
					fringilla. Donec lacinia congue felis in faucibus.
				</p>
				<div className='meta d-md-flex align-items-center'>
					<span>
						<Link to='#'>
							<i className='icon-thumbs-up'></i>Like |<b>2</b>
						</Link>
					</span>
					<span className='datetime'>
						<i className='icon-clock-o'></i>15 Minutes ago
					</span>
				</div>
			</div>
		</Row>
	)
}
