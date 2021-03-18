import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton'

import Section from '../../components/Layout/Section'
import SideBar from '../../components/Layout/SideBar'

import {
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
import { PAGINATION_PAGE_SIZE } from '../../globals'

export const Questions = () => {
	const [resultsLimit, setResultsLimit] = useState(PAGINATION_PAGE_SIZE)
	const [currentPage, setCurrentPage] = useState(0)
	const [orderBy, setOrderBy] = useState(_QuestionOrdering.TimestampDesc)

	const { questionsList, questionsCount, loading, error } = useGetQuestions(
		currentPage,
		resultsLimit,
		orderBy
	)

	const sortsList = [
		{
			title: 'Newest',
			orderBy: _QuestionOrdering.TimestampDesc,
		},
		{
			title: 'Most Answered',
			orderBy: _QuestionOrdering.AnswersCountDesc,
		},
		{
			title: 'Most Commented',
			orderBy: _QuestionOrdering.CommentsCountDesc,
		},
	]

	const loadingMessage = loading ? <Skeleton count={25} /> : null
	const errorMessage = error ? <h4>Error occured. Try again later :(</h4> : null

	return (
		<>
			<Section
				sectionName='Questions'
				sectionTitle='All'
				sectionClass='section-questions-list'
			>
				<MainSorting<_QuestionOrdering>
					orderBy={orderBy}
					sortsList={sortsList}
					sortHandler={setOrderBy}
				/>
				{errorMessage}
				{loadingMessage}
				{!loading && questionsList && (
					<>
						{questionsList.map((question) => {
							return question ? (
								<QuestionListItem key={question.nodeId} question={question} />
							) : null
						})}
					</>
				)}

				<Pagination
					currentPage={currentPage}
					resultsLimit={resultsLimit}
					totalItems={questionsCount}
					baseUrl='/questions'
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
