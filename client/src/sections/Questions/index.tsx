import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton'

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
import { useGetQuestions } from '../../lib/hooks'
import { _QuestionOrdering } from '../../types/generated-frontend'
import { PAGINATION_PAGE_SIZE } from './../../env'

export const Questions = () => {
	const [resultsLimit, setResultsLimit] = useState(PAGINATION_PAGE_SIZE)
	const [currentPage, setCurrentPage] = useState(0)
	const [orderBy, setOrderBy] = useState(_QuestionOrdering.TimestampDesc)

	const { questionsList, questionsCount, loading, error } = useGetQuestions(
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
						<h5 className='module-header'>&gt; All Questions</h5>
						<hr className='hr-header hr-bold' />
						<MainSorting orderBy={orderBy} setOrderBy={setOrderBy} />
						<section className='section-questions-list'>
							{questionsList && (
								<>
									{questionsList.map((question) => {
										return question ? (
											<QuestionListItem
												key={question.nodeId}
												question={question}
											/>
										) : null
									})}
								</>
							)}
							{errorMessage}
							{loadingMessage}
						</section>
					</Col>
				</Row>

				<Pagination
					currentPage={currentPage}
					resultsLimit={resultsLimit}
					totalItems={questionsCount}
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
