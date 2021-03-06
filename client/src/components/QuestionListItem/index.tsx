import React, { useContext } from 'react'

import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { TagsInlineList } from './../TagsInlineList'
import { Question, Tag } from '../../types/generated-frontend'
import { MetaActions } from './../MetaActions'

import { CurrentUserContext } from '../../lib/contexts'

export const QuestionListItem = ({ question }: { question: Question }) => {
	const [{ currentUser }] = useContext(CurrentUserContext)

	let canSubscribe = question.canSubscribe
	if (currentUser && currentUser.nodeId === question.author?.nodeId)
		canSubscribe = false

	return (
		<>
			<Row className='question-item'>
				<Col md={9}>
					<div className='d-md-flex'>
						<div className='text text-2 pl-md-3'>
							{question.tags && (
								<TagsInlineList
									questionId={question.nodeId}
									tagsList={question.tags as Tag[]}
								/>
							)}

							<h5 className='header'>
								<Link to={`/question/${question.nodeId}`}>
									{question.title}
								</Link>
							</h5>
							{
								<MetaActions
									topicId={question.nodeId}
									isSubscribed={question.isSubscribed}
									canSubscribe={canSubscribe}
									showSubscribers={true}
									subscribersCount={question.subscribersCount}
									viewsCount={question.viewsCount}
									showViews={false}
									commentsCount={question.commentsCount}
									showComments={true}
									createdAt={question.createdAt}
								/>
							}
						</div>
					</div>
				</Col>
				<Col md={3} className='text-center pt-1'>
					<Link to='question-page.html'>
						<span className='answers-count'> {question.answersCount} </span>
						<br />
						<span className='answers-count-text'>answers</span>
					</Link>
				</Col>
			</Row>
			<hr />
		</>
	)
}
