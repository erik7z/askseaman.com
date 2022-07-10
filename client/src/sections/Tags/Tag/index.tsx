import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Row, Jumbotron, ListGroup } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton'

import {
	UserCardItem,
	QuestionListItem,
	AvatarLink,
	SideAskBox,
	SideAdvertBox,
	SideNewsBox,
	Pagination,
	MetaActions,
} from '../../../components'

import Section from '../../../components/Layout/Section'
import SideBar from '../../../components/Layout/SideBar'
import { useGetTag } from '../../../lib/hooks'

export const Tag = () => {
	const { tagName } = useParams<{ tagName: string }>()

	const [questionsCurrentPage, setQuestionsCurrentPage] = useState(0)
	const resultsLimit = 3

	const { tag, loading, error } = useGetTag({
		tagName,
		questionsCurrentPage,
		questionsResultsLimit: resultsLimit,
	})

	const sectionTitle = tag ? tag.name.toLocaleUpperCase() : ''

	const errorMessage = error ? <h4>Error occured. Try again later :(</h4> : null

	return (
		<>
			<Section
				sectionName='Tag'
				sectionTitle={sectionTitle}
				sectionClass='section-tag-page'
			>
				{loading ? (
					<Skeleton count={25} />
				) : (
					<>
						{errorMessage}
						<Jumbotron className='text-center'>
							<h2 className='display-5 text-center'>{tag?.name}</h2>
							<ListGroup horizontal className='justify-content-center'>
								<ListGroup.Item>
									<b>{tag?.questionsCount}</b> <br />
									Questions
								</ListGroup.Item>
								<ListGroup.Item className='text-success'>
									<b>{tag?.questionsSolvedCount}</b> <br />
									Solved
								</ListGroup.Item>
								<ListGroup.Item>
									<b>{tag?.subscribersCount}</b> <br />
									Subscribers
								</ListGroup.Item>
							</ListGroup>

							{tag?.moderators && tag?.moderators.length > 0 && (
								<>
									<small>Moderators:</small>
									<div className='avatars-list d-flex justify-content-center'>
										{tag.moderators.map((user) => {
											return (
												user && (
													<AvatarLink
														key={`avatar-${user.nodeId}`}
														avatarUrl={user.avatar}
														userId={user.nodeId}
														size='sm'
													/>
												)
											)
										})}
									</div>
								</>
							)}
							<hr />
							<p>{tag?.description}</p>

							<MetaActions
								topicId={tag?.nodeId as string}
								isSubscribed={tag?.isSubscribed}
								canSubscribe={tag?.canSubscribe}
								subscribersCount={tag?.subscribersCount}
								showSubscribers={true}
								showViews={false}
							/>
						</Jumbotron>

						{tag?.topQuestions && tag?.topQuestions.length ? (
							<>
								<h5 className='module-header text-right'>Top questions &lt;</h5>
								<hr className='hr-header hr-bold' />
								{tag.topQuestions.map((question) => {
									return (
										question && (
											<QuestionListItem
												key={`question-${question.nodeId}`}
												question={question}
											/>
										)
									)
								})}
							</>
						) : null}

						{tag?.topUsers && tag?.topUsers.length ? (
							<>
								<h5 className='module-header text-right'>
									Most Active Users &lt;
								</h5>
								<hr className='hr-header hr-bold' />
								<Row className='users-list text-center'>
									{tag.topUsers.map((user) => {
										return (
											user && (
												<UserCardItem
													key={`user-card-${user.nodeId}`}
													user={user}
												/>
											)
										)
									})}
								</Row>
							</>
						) : null}

						{tag?.questions && tag?.questions.length ? (
							<>
								<h5 className='module-header text-right'>
									All questions on tag: <b>{tagName}</b>
								</h5>
								<hr className='hr-header hr-bold' />
								{tag.questions.map((question) => {
									return (
										question && (
											<QuestionListItem
												key={`question-${question.nodeId}`}
												question={question}
											/>
										)
									)
								})}
								<Pagination
									currentPage={questionsCurrentPage}
									totalItems={tag.questionsCount}
									resultsLimit={resultsLimit}
									baseUrl={`/tag/${tag.nodeId}`}
									setCurrentPage={setQuestionsCurrentPage}
								/>
							</>
						) : null}
					</>
				)}
			</Section>

			<SideBar>
				<SideAskBox />
				<SideAdvertBox />
				<SideNewsBox />
			</SideBar>
		</>
	)
}
