import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'

import { Row, Col, Jumbotron, ListGroup } from 'react-bootstrap'
import {
	SideAskBox,
	SideAdvertBox,
	SideNewsBox,
	TagCardItem,
	AvatarLink,
	Pagination,
	QuestionListItem,
} from '../../../components'

import Section from '../../../components/Layout/Section'
import SideBar from '../../../components/Layout/SideBar'
import { useGetUser } from '../../../lib/hooks'

export const User = () => {
	const { userId } = useParams<{ userId: string }>()

	const [questionsCurrentPage, setQuestionsCurrentPage] = useState(0)

	const { user, loading, error } = useGetUser({
		userId,
		questionsCurrentPage,
	})

	const errorMessage = error ? <h4>Error occured. Try again later :(</h4> : null

	return (
		<>
			<Section
				sectionName='Users'
				sectionTitle={`${user?.name} ${user?.surname}`}
				sectionClass='section-user-page'
			>
				{!user || loading ? (
					<Skeleton count={25} />
				) : (
					<>
						{errorMessage}
						<Jumbotron className='text-center'>
							<AvatarLink size='lg' avatarUrl={user?.avatar} userId={userId} />
							<h3>
								{user?.name} {user?.surname}
							</h3>
							<p className='lead'>Master</p>

							<ListGroup horizontal className='justify-content-center'>
								<ListGroup.Item>
									<b>{user?.questionsCount}</b> <br />
									Questions
								</ListGroup.Item>
								<ListGroup.Item className='text-success'>
									<b>{user?.questionsSolvedCount}</b> <br />
									Solved Problems
								</ListGroup.Item>
								<ListGroup.Item>
									<b>{user?.answersCount}</b> <br />
									Answers
								</ListGroup.Item>
							</ListGroup>
							<hr />
							<p>{user?.description}</p>
							<hr />

							<h5>Contacts:</h5>
							<dl className='row text-left'>
								<dt className='col-sm-3'>E-mail:</dt>
								<dd className='col-sm-9'>
									<a href={`mailto:${user?.email}`}>{user?.email}</a>
								</dd>
							</dl>
						</Jumbotron>

						{user?.favoriteTags && (
							<>
								<h5 className='module-header text-right'>
									{user.name}'s Favorite tags &lt;
								</h5>
								<hr className='hr-header hr-bold' />
								<Row className='tags-list text-center'>
									{user.favoriteTags.map((tag) => {
										return tag ? (
											<TagCardItem key={tag.nodeId} tag={tag} />
										) : null
									})}
								</Row>
							</>
						)}

						{user?.questions && (
							<>
								<Row>
									<Col md={12}>
										<h5 className='module-header text-right'>
											{user.name}'s Questions &lt;
										</h5>
										<hr className='hr-header hr-bold' />
									</Col>
								</Row>
								{user?.questions.map((question) => {
									return question ? (
										<QuestionListItem
											key={question.nodeId}
											question={question}
										/>
									) : null
								})}
								<Pagination
									currentPage={questionsCurrentPage}
									totalItems={user.questionsCount}
									baseUrl={`/user/${user.nodeId}`}
									setCurrentPage={setQuestionsCurrentPage}
								/>
							</>
						)}
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
