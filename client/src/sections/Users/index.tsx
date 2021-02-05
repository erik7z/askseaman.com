import React from 'react'
import { Row, Col, Button, ButtonGroup } from 'react-bootstrap'

import {
	QuestionSearch,
	UserCardItem,
	Advertisement,
	SideNews,
	Pagination,
} from '../../components'

export const Users = () => {
	return (
		<>
			<Col xl={8} className='main-content'>
				<QuestionSearch />
				<Row>
					<Col md={12}>
						<h5 className='module-header'>&gt; Users</h5>
						<hr className='hr-header hr-bold' />
						<div className='main-sorting'>
							<ButtonGroup
								size='sm'
								role='group'
								aria-label='Sorting & filtering'
							>
								<Button type='button' variant='outline-primary'>
									By Answers
								</Button>
								<Button type='button' variant='outline-secondary'>
									By Questions
								</Button>
							</ButtonGroup>
							<ButtonGroup
								size='sm'
								className='sorting-group '
								aria-label='Sorting'
							>
								<Button id='sort-direction' variant='outline-secondary'>
									Sort
									<i className='icon-arrow-down'></i>
								</Button>
							</ButtonGroup>
						</div>
						<div className='section-users-list'>
							<Row className='users-list text-center'>
								<Col md={4} xs={6} className='card-item'>
									<UserCardItem />
								</Col>
							</Row>
						</div>
					</Col>
				</Row>
				<Pagination />
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
