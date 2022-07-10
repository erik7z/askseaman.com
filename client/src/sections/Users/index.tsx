import React, { useState } from 'react'
import { Row } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton'

import Section from '../../components/Layout/Section'
import SideBar from '../../components/Layout/SideBar'

import {
	UserCardItem,
	SideAskBox,
	SideAdvertBox,
	SideNewsBox,
	Pagination,
	MainSorting,
} from '../../components'

import { _UserOrdering } from '../../types/generated-frontend'
import { PAGINATION_PAGE_SIZE } from '../../globals'
import { useGetUsers } from '../../lib/hooks'

export const Users = () => {
	const [resultsLimit, setResultsLimit] = useState(PAGINATION_PAGE_SIZE)
	const [currentPage, setCurrentPage] = useState(0)
	const [orderBy, setOrderBy] = useState(_UserOrdering.AnswersCountDesc)

	const sortsList = [
		{
			title: 'By Answers',
			orderBy: _UserOrdering.AnswersCountDesc,
		},
		{
			title: 'By Questions',
			orderBy: _UserOrdering.QuestionsCountDesc,
		},
	]

	const { usersList, usersCount, loading, error } = useGetUsers(
		currentPage,
		resultsLimit,
		orderBy
	)

	const loadingMessage = loading ? <Skeleton count={25} /> : null
	const errorMessage = error ? <h4>Error occured. Try again later :(</h4> : null

	return (
		<>
			<Section
				sectionName='Users'
				sectionTitle='All'
				sectionClass='section-users-list'
			>
				<MainSorting<_UserOrdering>
					orderBy={orderBy}
					sortsList={sortsList}
					sortHandler={setOrderBy}
				/>
				{errorMessage}
				{loadingMessage}
				{!loading && (
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
				)}

				<Pagination
					currentPage={currentPage}
					resultsLimit={resultsLimit}
					totalItems={usersCount}
					baseUrl='/users'
					setCurrentPage={setCurrentPage}
					setResultsLimit={setResultsLimit}
				/>
			</Section>

			<SideBar>
				<SideAskBox />
				<SideAdvertBox />
				<SideNewsBox />
			</SideBar>
		</>
	)
}
