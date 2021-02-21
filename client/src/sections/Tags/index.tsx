import React from 'react'
import { Row, Col } from 'react-bootstrap'

import {
	QuestionSearch,
	TagCardItem,
	SideAdvertBox,
	SideNewsBox,
	Pagination,
	MainSorting,
} from '../../components'

export const Tags = () => {
	return (
		<>
			<Col xl={8} className='main-content'>
				<QuestionSearch />
				<Row>
					<Col md={12}>
						<h5 className='module-header'>&gt; Tags</h5>
						<hr className='hr-header hr-bold' />
						<MainSorting />
						<section className='section-tags-list'>
							<Row className='tags-list text-center'>
								<Col md={4} xs={6} className='card-item'>
									<TagCardItem />
								</Col>
							</Row>
						</section>
					</Col>
				</Row>
				{/* <Pagination /> */}
			</Col>
			<Col xl={4} className='sidebar bg-blue'>
				<SideAdvertBox />
				<SideNewsBox />
			</Col>
		</>
	)
}
