import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Col } from 'react-bootstrap'

import {
	SideQuestInstrBox,
	UserTextFormInput,
	TagsInlineList,
	CommentsBox,
	AvatarLink,
} from '../../components'
import { AnswerItem } from './AnswerItem'
import {
	useQuestionPageQuery,
	Question as TQuestion,
	Tag as TTag,
} from './../../__generated/graphql'

export const Question = () => {
	const { questionId } = useParams<{ questionId: string }>()

	const { data, loading, error } = useQuestionPageQuery({
		variables: {
			nodeId: questionId,
		},
	})

	const [question] = data?.Question || [null]

	if (!question) return <h1>Something went wrong</h1>

	return (
		<>
			<Col xl={8} className='main-content'>
				<h5 className='module-header'>
					&gt; Question:
					<span className='text-dark'>&nbsp; {question.title}</span>
				</h5>
				<hr className='hr-header hr-bold' />
				<section className='section-question-page'>
					<div className='question-item-full '>
						<div className='author d-flex align-items-center'>
							<AvatarLink size='lg' />
							<div className='post-item-info'>
								<span>Asked by</span>
								<h5 className='author-name'>
									<Link to='#'>{question.author?.name}</Link>,
									<span className='author-position'>
										{question.author?.rank}
									</span>
								</h5>
								{question.tags && (
									<TagsInlineList
										questionId={question.nodeId}
										tagsList={question.tags as TTag[]}
									/>
								)}
							</div>
						</div>

						<p className='post-item-text'>{question.text}</p>
						<CommentsBox
							question={question as TQuestion}
							toggleEventKey='qcomments-0'
						/>
					</div>
					<h5 className='module-header text-right'>Answers on question &lt;</h5>
					<hr className='hr-header hr-bold' />
					<AnswerItem />
					<hr />
					<h5 className='module-header'>&gt; Your answer</h5>
					<hr className='hr-header hr-bold' />
					<UserTextFormInput />
				</section>
			</Col>
			<div className='col-xl-4 sidebar  bg-blue'>
				<SideQuestInstrBox />
			</div>
		</>
	)
}
