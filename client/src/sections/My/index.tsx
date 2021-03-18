import React, { useState, useContext } from 'react'
import { Nav, Card } from 'react-bootstrap'

import { NavLink, Link } from 'react-router-dom'

import Skeleton from 'react-loading-skeleton'

import Section from '../../components/Layout/Section'
import SideBar from '../../components/Layout/SideBar'

import {
	QuestionListItem,
	SideAdvertBox,
	SideNewsBox,
	Pagination,
	SideAskBox,
	SideTagCloudBox,
	SideTopUsersBox,
} from '../../components'
import { useGetQuestions } from '../../lib/hooks'
import { CurrentUserContext } from '../../lib/contexts'

import { _QuestionOrdering } from '../../types/generated-frontend'
import { PAGINATION_PAGE_SIZE } from '../../globals'

export const MyFeed = () => {
	const [resultsLimit, setResultsLimit] = useState(PAGINATION_PAGE_SIZE)
	const [currentPage, setCurrentPage] = useState(0)

	const [{ currentUser }] = useContext(CurrentUserContext)

	const { questionsList, questionsCount, loading, error } = useGetQuestions(
		currentPage,
		resultsLimit,
		_QuestionOrdering.TimestampDesc,
		{
			author: {
				nodeId: currentUser.nodeId,
			},
		}
	)

	const loadingMessage = loading ? <Skeleton count={25} /> : null
	const errorMessage = error ? <h4>Error occured. Try again later :(</h4> : null

	return (
		<>
			<Section
				sectionName='My Feed'
				sectionTitle=''
				sectionClass='section-my-feed'
			>
				<Nav variant='tabs' fill defaultActiveKey='/my/feed' className='mb-3'>
					<Nav.Item>
						<NavLink
							exact={true}
							to='/my/feed'
							className='nav-link'
							activeClassName='active'
						>
							My Questions
						</NavLink>
					</Nav.Item>
					<Nav.Item>
						<NavLink
							exact={true}
							to='/my/subscriptions'
							className='nav-link'
							activeClassName='active'
						>
							My Subscriptions
						</NavLink>
					</Nav.Item>
				</Nav>

				{errorMessage}
				{loadingMessage}
				{questionsList && questionsList.length ? (
					<>
						{questionsList.map((question) => {
							return question ? (
								<QuestionListItem key={question.nodeId} question={question} />
							) : null
						})}
					</>
				) : (
					<Card
						border='warning'
						style={{
							width: '30rem',
							margin: ' 0 auto',
							float: 'none',
							marginBottom: '10px',
						}}
					>
						<Card.Header>No questions yet...</Card.Header>
						<Card.Body>
							<Card.Text>
								You dont have any <b>questions</b> yet. You can use search or
								ask new one on <Link to='/ask'>Ask Question</Link> page
							</Card.Text>
						</Card.Body>
					</Card>
				)}

				<Pagination
					currentPage={currentPage}
					resultsLimit={resultsLimit}
					totalItems={questionsCount}
					baseUrl='/my/feed'
					setCurrentPage={setCurrentPage}
					setResultsLimit={setResultsLimit}
				/>
			</Section>

			<SideBar>
				<SideAskBox />
				<SideAdvertBox />
				<SideTagCloudBox />
				<SideTopUsersBox />
				<SideNewsBox />
			</SideBar>
		</>
	)
}
