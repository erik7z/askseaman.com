import React from 'react'
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

import { useQuestionQuery } from '../../__generated/graphql'

export const Questions = () => {
	const { data, loading, error } = useQuestionQuery()
	const questions = data?.Question
	const questionsList = questions ? (
		<ul>
			{questions.map((question) => {
				return <li key={question?.nodeId}>{question?.title}</li>
			})}
		</ul>
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
							<QuestionListItem />
							<h2>Askseaman Questions</h2>
							{errorMessage}
							{loadingMessage}
							{questionsList}
						</section>
					</Col>
				</Row>

				<Pagination />
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
