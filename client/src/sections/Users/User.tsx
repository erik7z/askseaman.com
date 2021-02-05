import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Jumbotron, ListGroup } from 'react-bootstrap'
import {
	QuestionSearch,
	Advertisement,
	SideNews,
	TagCardItem,
} from '../../components'

export const User = () => {
	return (
		<>
			<Col xl={8} className='main-content'>
				<QuestionSearch />
				<Row>
					<Col md={12}>
						<h5 className='module-header'>
							&gt; Users:
							<span className='text-dark'>Vasya Batareykin</span>
						</h5>
						<hr className='hr-header hr-bold' />

						<Jumbotron className='text-center'>
							<Link
								to='user.html'
								className='img author-avatar author-avatar-lg'
								style={{ backgroundImage: 'url(images/author.jpg)' }}
							></Link>
							<h3>Vasya Batareykin</h3>
							<p className='lead'>Master</p>

							<ListGroup horizontal className='justify-content-center'>
								<ListGroup.Item>
									<Link to='/questions'>
										<b>1245</b> <br />
										Answers
									</Link>
								</ListGroup.Item>
								<ListGroup.Item className='text-success'>
									<b>65%</b> <br />
									Solved Problems
								</ListGroup.Item>
								<ListGroup.Item>
									<Link to='/users'>
										<b>13</b> <br />
										Questions
									</Link>
								</ListGroup.Item>
							</ListGroup>

							<hr />
							<p>
								Working more than 10 years at sea. Different ships from Bulk
								Carriers to VLGC's. Shipyard and Superintendent experience.
							</p>

							<h5>Contacts:</h5>
							<dl className='row text-left'>
								<dt className='col-sm-3'>E-mail:</dt>
								<dd className='col-sm-9'>
									<Link to='mailto:vasya.batareykin@gmail.com'>
										vasya.batareykin@gmail.com
									</Link>
								</dd>
								<dt className='col-sm-3'>Skype:</dt>
								<dd className='col-sm-9'>
									<Link to='skype:vasya.batareykin'>vasya.batareykin</Link>
								</dd>
								<dt className='col-sm-3'>Location:</dt>
								<dd className='col-sm-9'>Odessa / Ukraine</dd>
							</dl>
						</Jumbotron>

						<h5 className='module-header text-right'>Favorite tags &lt;</h5>
						<hr className='hr-header hr-bold' />
						<Row className='tags-list text-center'>
							<Col md={4} xs={6} className='card-item'>
								<TagCardItem />
							</Col>
						</Row>
					</Col>
				</Row>
			</Col>
			<Col xl={4} className='sidebar bg-blue'>
				<Row>
					<Col md={12}>
						<Advertisement />
						<SideNews />
					</Col>
				</Row>
			</Col>
		</>
	)
}
