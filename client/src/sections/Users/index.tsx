import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton'

import {
	QuestionSearch,
	UserCardItem,
	SideAdvertBox,
	SideNewsBox,
	Pagination,
	MainSorting,
} from '../../components'

import { _UserOrdering } from '../../types/generated-frontend'
import { PAGINATION_PAGE_SIZE } from './../../env'
import { useGetUsers } from '../../lib/hooks'

export const Users = () => {
	const [resultsLimit, setResultsLimit] = useState(PAGINATION_PAGE_SIZE)
	const [currentPage, setCurrentPage] = useState(0)
	const [orderBy, setOrderBy] = useState(_UserOrdering.TimestampDesc)

	const { usersList, usersCount, loading, error } = useGetUsers(
		currentPage,
		resultsLimit,
		orderBy
	)

	const loadingMessage = loading ? <Skeleton count={25} /> : null
	const errorMessage = error ? <h4>Error occured. Try again later :(</h4> : null

	return (
		<>
			<Col xl={8} className='main-content'>
				<QuestionSearch />
				<Row>
					<Col md={12}>
						<h5 className='module-header'>&gt; Users</h5>
						<hr className='hr-header hr-bold' />
						{/* <MainSorting /> */}
						<section className='section-users-list'>
							<Row className='users-list text-center'>
								{usersList && (
									<>
										{usersList.map((user) => {
											return user ? (
												<UserCardItem key={user.nodeId} user={user} />
											) : null
										})}
									</>
								)}
							</Row>
							{errorMessage}
							{loadingMessage}
						</section>
					</Col>
				</Row>
				<Pagination
					currentPage={currentPage}
					resultsLimit={resultsLimit}
					totalItems={usersCount}
					baseUrl='/users'
					setCurrentPage={setCurrentPage}
					setResultsLimit={setResultsLimit}
				/>
			</Col>
			<Col xl={4} className='sidebar bg-blue'>
				<SideAdvertBox />
				<SideNewsBox />
			</Col>
		</>
	)
}
