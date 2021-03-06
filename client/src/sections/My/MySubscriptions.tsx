import React, { useState, useContext } from 'react'
import { Row, Col, Nav, Card } from 'react-bootstrap'

import { NavLink, Link } from 'react-router-dom'

import Skeleton from 'react-loading-skeleton'

import Section from '../../components/Layout/Section'
import SideBar from '../../components/Layout/SideBar'

import {
	TagCardItem,
	QuestionListItem,
	SideAdvertBox,
	SideNewsBox,
	SideAskBox,
	SideTagCloudBox,
	SideTopUsersBox,
	Pagination,
} from '../../components'
import { useGetQuestions, useGetTags } from '../../lib/hooks'
import { CurrentUserContext } from '../../lib/contexts'

import { _QuestionOrdering, _TagOrdering } from '../../types/generated-frontend'
import { PAGINATION_PAGE_SIZE } from '../../globals'

export const MySubscriptions = () => {
	const [{ currentUser }] = useContext(CurrentUserContext)

	const [questionsCurrentPage, setQuestionsCurrentPage] = useState(0)

	const {
		questionsList,
		questionsCount,
		loading: questionsLoading,
		error: questionsError,
	} = useGetQuestions({
		currentPage: questionsCurrentPage,
		orderBy: _QuestionOrdering.TimestampDesc,
		filter: {
			subscribers_some: {
				nodeId: currentUser.nodeId,
			},
		},
		fetchPolicy: 'cache-and-network',
	})

	const [currentPageTags, setCurrentPageTags] = useState(0)

	const {
		tagsList,
		tagsCount,
		loading: tagsLoading,
		error: tagsError,
	} = useGetTags(
		currentPageTags,
		PAGINATION_PAGE_SIZE,
		_TagOrdering.TimestampDesc,
		{
			subscribers_some: {
				nodeId: currentUser.nodeId,
			},
		},
		'cache-and-network'
	)

	const loadingMessage =
		tagsLoading || questionsLoading ? <Skeleton count={25} /> : null
	const errorMessage =
		tagsError || questionsError ? (
			<h4>Error occured. Try again later :(</h4>
		) : null

	return (
		<>
			<Section
				sectionName='My Subscriptions'
				sectionTitle=''
				sectionClass='section-my-subscriptions'
			>
				<Nav variant='tabs' fill defaultActiveKey='/my/subscriptions'>
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

				<Row className='tags-list text-center'>
					{tagsList && tagsList.length ? (
						<>
							<Col md={12}>
								<h5 className='module-header text-right'>Tags &lt;</h5>
								<hr className='hr-header hr-bold' />
							</Col>
							{tagsList.map((tag) => {
								return tag ? <TagCardItem key={tag.nodeId} tag={tag} /> : null
							})}
							<Col md={12}>
								<Pagination
									currentPage={currentPageTags}
									resultsLimit={PAGINATION_PAGE_SIZE}
									totalItems={tagsCount}
									baseUrl='/my/subscriptions'
									setCurrentPage={setCurrentPageTags}
								/>
							</Col>
						</>
					) : null}
				</Row>

				{questionsList && questionsList.length ? (
					<>
						<Row>
							<Col md={12}>
								<h5 className='module-header text-right'>Questions &lt;</h5>
								<hr className='hr-header hr-bold' />
							</Col>
						</Row>
						{questionsList.map((question) => {
							return question ? (
								<QuestionListItem key={question.nodeId} question={question} />
							) : null
						})}
						<Pagination
							currentPage={questionsCurrentPage}
							resultsLimit={PAGINATION_PAGE_SIZE}
							totalItems={questionsCount}
							baseUrl='/my/subscriptions'
							setCurrentPage={setQuestionsCurrentPage}
						/>
					</>
				) : (
					<Card
						border='warning'
						style={{
							width: '30rem',
							margin: '20px auto',
							float: 'none',
						}}
					>
						<Card.Header>No subscriptions yet...</Card.Header>
						<Card.Body>
							<Card.Text>
								You dont have any <b>subscriptions</b> yet. Choose some{' '}
								<Link to='/questions'>Questions</Link> or{' '}
								<Link to='/tags'>Tags</Link> to subscribe
							</Card.Text>
						</Card.Body>
					</Card>
				)}
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
