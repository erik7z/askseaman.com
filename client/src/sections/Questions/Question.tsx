import React, { useEffect, useState } from 'react'
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
	useAnswerQuestionMutation,
	Question as TQuestion,
	Tag as TTag,
	Answer as TAnswer,
	useQuestionPageLazyQuery,
} from './../../__generated/graphql'

export const Question = () => {
	const { questionId } = useParams<{ questionId: string }>()

	const [updateQuestionPage, setUpdateQuestionPage] = useState(false)
	const toggleUpdatePage = () => setUpdateQuestionPage(!updateQuestionPage)

	const [getQuestion, { data, loading, error }] = useQuestionPageLazyQuery({
		variables: {
			nodeId: questionId,
		},
		fetchPolicy: 'cache-and-network',
	})

	useEffect(() => {
		getQuestion()
		console.log('getQuestion useffect')
	}, [getQuestion, updateQuestionPage])

	const [
		answerQuestionMutation,
		{ error: answerQuestionConnErrors },
	] = useAnswerQuestionMutation()

	if (loading) return <h1>Loading in progress...</h1>
	if (error) return <h1>Something went wrong</h1>

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
									<Link to={`/user/${question.author?.nodeId}`}>
										{question.author?.name}
									</Link>
									,
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
							topic={question as TQuestion}
							toggleEventKey='qcomments-0'
						/>
					</div>
					<h5 className='module-header text-right'>Answers on question &lt;</h5>
					<hr className='hr-header hr-bold' />
					{question.answers &&
						question.answers.map((answer) => (
							<AnswerItem key={answer?.nodeId} answer={answer as TAnswer} />
						))}

					<h5 className='module-header'>&gt; Your answer</h5>
					<hr className='hr-header hr-bold' />
					<UserTextFormInput
						topicId={question.nodeId}
						submitMutation={answerQuestionMutation}
						connErrors={answerQuestionConnErrors}
						toggleUpdatePage={toggleUpdatePage}
					/>
				</section>
			</Col>
			<div className='col-xl-4 sidebar  bg-blue'>
				<SideQuestInstrBox />
			</div>
		</>
	)
}
