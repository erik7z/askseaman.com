import React from 'react'
import { Row, Col } from 'react-bootstrap'

import {
	QuestionSearch,
	UserCardItem,
	SideAdvertBox,
	SideNewsBox,
	Pagination,
	MainSorting,
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
						<MainSorting />
						<section className='section-users-list'>
							<Row className='users-list text-center'>
								<Col md={4} xs={6} className='card-item'>
									<UserCardItem />
								</Col>
							</Row>
						</section>
					</Col>
				</Row>
				<Pagination />
			</Col>
			<Col xl={4} className='sidebar bg-blue'>
				<SideAdvertBox />
				<SideNewsBox />
			</Col>
		</>
	)
}
