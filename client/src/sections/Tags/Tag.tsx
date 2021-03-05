import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Jumbotron, ListGroup } from 'react-bootstrap'

import {
	UserCardItem,
	// QuestionListItem,
	AvatarLink,
	SideAdvertBox,
	SideNewsBox,
	QuestionSearch,
} from '../../components'

export const Tag = () => {
	return (
		<>
			<Col xl={8} className='main-content'>
				<QuestionSearch />
				<Row className='main-content'>
					<Col md={12}>
						<h5 className='module-header'>
							&gt; Tag: <span className='text-dark'>#OFFSHORE</span>
						</h5>
						<hr className='hr-header hr-bold' />
						<Jumbotron className='text-center'>
							<h2 className='display-5 text-center'>#OFFSHORE</h2>
							<ListGroup horizontal className='justify-content-center'>
								<ListGroup.Item>
									<Link to='index.html'>
										<b>4892</b> <br />
										Questions
									</Link>
								</ListGroup.Item>
								<ListGroup.Item className='text-success'>
									<b>45%</b> <br />
									Solved
								</ListGroup.Item>
								<ListGroup.Item>
									<Link to='users.html'>
										<b>1372</b> <br />
										Subscribers
									</Link>
								</ListGroup.Item>
							</ListGroup>
							<small>Moderators:</small>
							<div className='avatars-list d-flex justify-content-center'>
								<AvatarLink size='sm' />
								<AvatarLink size='sm' />
								<AvatarLink size='sm' />
							</div>
							<hr />
							<p>
								This tag is about everything related to the offshore fleet, job
								on oilrigs jackup barges, drill platforms supply boats, tugs
								etc.
							</p>
							<Link
								className='btn btn-outline-primary btn-lg'
								to='#'
								role='button'
							>
								Subscribe | <b>1298</b>
							</Link>
						</Jumbotron>
						<h5 className='module-header text-right'>Most Active Users &lt;</h5>
						<hr className='hr-header hr-bold' />
						<Row className='users-list text-center'>
							<Col md={4} xs={6} className='card-item'>
								{/* <UserCardItem /> */}
							</Col>
						</Row>
						<h5 className='module-header text-right'>Top questions &lt;</h5>
						<hr className='hr-header hr-bold' />
						{/* <QuestionListItem /> */}
					</Col>
				</Row>
			</Col>
			<Col xl={4} className='sidebar bg-blue'>
				<SideAdvertBox />
				<SideNewsBox />
			</Col>
		</>
	)
}
