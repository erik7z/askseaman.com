import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'

import {
	QuestionSearch,
	QuestionListItem,
	SideAdvertBox,
	SideNewsBox,
	Pagination,
	MainSorting,
	SideAskBox,
	SideTagCloudBox,
	SideTopUsersBox,
} from '../../components'

import { PAGINATION_PAGE_SIZE } from './../../env'
import {
	useQuestionsListQuery,
	_QuestionOrdering,
} from '../../__generated/graphql'

export const Questions = () => {
	const [resultsLimit, setResultsLimit] = useState(PAGINATION_PAGE_SIZE)
	const [currentPage, setCurrentPage] = useState(0)

	const { data, loading, error } = useQuestionsListQuery({
		variables: {
			orderBy: [_QuestionOrdering.CreatedAtDesc],
			first: resultsLimit,
			offset: resultsLimit * currentPage,
		},
	})

	const questionsList = data?.Question
	const totalItems = data?.QuestionCount?.totalCount

	const questionsListComponent = questionsList ? (
		<>
			{questionsList.map((question) => {
				return question ? (
					<QuestionListItem key={question.nodeId} question={question} />
				) : null
			})}
		</>
	) : null

	const loadingMessage = loading ? <h4>Loading in progress</h4> : null
	const errorMessage = error ? <h4>Error occured. Try again later :(</h4> : null
	return (
		<>
			<Col xl={8} className='main-content'>
				<QuestionSearch />
				<Row>
					<Col md={12}>
						<h5 className='module-header'>&gt; All Questions</h5>
						<hr className='hr-header hr-bold' />
						<MainSorting />
						<section className='section-questions-list'>
							{questionsListComponent}
							{errorMessage}
							{loadingMessage}
						</section>
					</Col>
				</Row>

				<Pagination
					currentPage={currentPage}
					resultsLimit={resultsLimit}
					totalItems={totalItems}
					baseUrl='/questions'
					setCurrentPage={setCurrentPage}
					setResultsLimit={setResultsLimit}
				/>
			</Col>
			<Col xl={4} className='sidebar bg-blue'>
				<SideAskBox />
				<SideAdvertBox />
				<SideTagCloudBox />
				<SideTopUsersBox />
				<SideNewsBox />
			</Col>
		</>
	)
}
