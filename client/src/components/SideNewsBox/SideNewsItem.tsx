import React from 'react'
import { Link } from 'react-router-dom'
import { Question } from '../../types/generated-frontend'

export const SideNewsItem = ({ question }: { question: Question }) => {
	return (
		<div className='d-flex'>
			<div className='text'>
				<h5 className='heading'>
					<Link to={`/question/${question.nodeId}`}>{question.title}</Link>
				</h5>
				<div className='meta d-md-flex align-items-center'>
					<span>
						<i className='icon-user'></i>
						{question.subscribersCount} Subscribers
					</span>
					<span>
						<i className='icon-chat'></i>
						{question.answersCount} Answers
					</span>
				</div>
				<hr />
			</div>
		</div>
	)
}
