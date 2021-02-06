import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { CommentsBox, AvatarLink } from '../../components'

export const AnswerItem = () => {
	return (
		<Row className='answer-item media'>
			<Col md={12}>
				<Row>
					<Col md={11} xs={7}>
						<div className='text-right author'>
							<h5 className='author-name'>
								<Link to='#'>Boris Gadov</Link>
							</h5>
							<span className='author-position'>2nd Officer</span>
						</div>
					</Col>
					<Col md={1} xs={5} className='pl-0'>
						<AvatarLink size='md' />
					</Col>
				</Row>
			</Col>

			<Col md={1} xs={2} className='text-center align-items-center'>
				<ul className='question-rating list-unstyled'>
					<li>
						<h3 className='rate rate-up'>
							<Link to='#'>
								<i className='icon-arrow-circle-up'></i>
							</Link>
						</h3>
					</li>
					<li>
						<h5 className='rate rate-value text-secondary'>10</h5>
					</li>
					<li>
						<h3 className='rate rate-down'>
							<Link to='#'>
								<i className='icon-arrow-circle-down'></i>
							</Link>
						</h3>
					</li>
				</ul>
			</Col>
			<Col md={11} xs={10}>
				<p className='post-item-text'>
					Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
					scelerisque ante sollicitudin. Cras purus odio, vestibulum in
					vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
					vulputate fringilla. Donec lacinia congue felis in faucibus.
				</p>
				<CommentsBox toggleEventKey='acomments-0' />
			</Col>
		</Row>
	)
}
