import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'

export const QuestionListItem = () => {
	return (
		<>
			<Row className='question-item'>
				<Col md={9}>
					<div className='d-md-flex'>
						<div className='text text-2 pl-md-3'>
							<span className='mr-2 tag'>
								<Link to='single.html'>
									<i className='icon-tag'></i> PIRATES
								</Link>
							</span>
							<span className='mr-2 tag'>
								<Link to='single.html'>
									<i className='icon-tag'></i> SHARK
								</Link>
							</span>
							<span className='mr-2 tag'>
								<Link to='single.html'>
									<i className='icon-tag'></i> FOOD
								</Link>
							</span>
							<h5 className='header'>
								<Link to='question-page.html'>How to milk a shark ?</Link>
							</h5>
							<div className='meta d-md-flex align-items-center'>
								<Link to='#' className='btn btn-sm btn-outline-primary mr-1'>
									Subscribe | <b>15</b>
								</Link>
								<span>
									<i className='icon-eye'></i>22 Views
								</span>
								<span>
									<i className='icon-clock-o'></i>56 Minutes ago
								</span>
							</div>
						</div>
					</div>
				</Col>
				<Col md={3} className='text-center pt-1'>
					<Link to='question-page.html'>
						<span className='answers-count'> 5 </span>
						<br />
						<span className='answers-count-text'>answers</span>
					</Link>
				</Col>
			</Row>
			<hr />
		</>
	)
}
