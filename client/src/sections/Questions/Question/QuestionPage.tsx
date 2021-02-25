import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'

import {
	UserTextFormInput,
	TagsInlineList,
	CommentsBox,
	AvatarLink,
} from '../../../components'
import { answerQuestionHandler } from './../../../components/UserTextFormInput/lib/helpers'
import { AnswersList } from './AnswersList'
import {
	useAnswerQuestionMutation,
	Question as TQuestion,
	Tag as TTag,
	Answer as TAnswer,
	useQuestionPageLazyQuery,
	useQuestionAnswersListLazyQuery,
	useQuestionCommentsLazyQuery,
} from '../../../types/generated-frontend'

interface IProps {
	setSectionTitle: React.Dispatch<React.SetStateAction<string>>
}

export const QuestionPage = ({ setSectionTitle }: IProps) => {
	const { questionId } = useParams<{ questionId: string }>()

	const [answersList, setAnswersList] = useState<TAnswer[]>([])

	const [getQuestion, { data, loading, error }] = useQuestionPageLazyQuery({
		variables: {
			nodeId: questionId,
		},
		fetchPolicy: 'cache-and-network',
	})
	const [question] = data?.Question || [null]

	const [
		getQuestionAnswers,
		{ data: answersData, loading: answersLoading, error: answersError },
	] = useQuestionAnswersListLazyQuery({
		variables: {
			filter: {
				question: {
					nodeId: questionId,
				},
			},
		},
		fetchPolicy: 'cache-and-network',
	})

	useEffect(() => {
		console.log('getQuestion useffect')

		getQuestion()
		if (question) setAnswersList(question.answers as TAnswer[])
	}, [getQuestion, question])

	useEffect(() => {
		console.log('getQuestionAnswers useffect')

		getQuestionAnswers()
		if (answersData?.Answer) setAnswersList(answersData?.Answer as TAnswer[])
	}, [getQuestionAnswers, answersData?.Answer])

	const [
		answerQuestionMutation,
		{ error: answerQuestionConnErrors },
	] = useAnswerQuestionMutation()

	const handleAnswerQuestionSuccess = (answers: TAnswer[]) => {
		setAnswersList(answers)
	}

	const getQuestionCommentsHook = useQuestionCommentsLazyQuery({
		variables: {
			nodeId: questionId,
		},
		fetchPolicy: 'no-cache',
	})

	if (error) {
		console.log(error)
		return <h1>Something went wrong</h1>
	}

	if (!question || loading) return <Skeleton count={25} />

	// setSectionTitle(question.title)

	return (
		<>
			<div className='question-item-full '>
				<div className='author d-flex align-items-center'>
					<AvatarLink size='lg' />
					<div className='post-item-info'>
						<span>Asked by</span>
						<h5 className='author-name'>
							<Link to={`/user/${question.author?.nodeId}`}>
								{question.author?.name}
							</Link>
							,<span className='author-position'>{question.author?.rank}</span>
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
					getCommentsHook={getQuestionCommentsHook}
				/>
			</div>
			<h5 className='module-header text-right'>Answers on question &lt;</h5>
			<hr className='hr-header hr-bold' />
			<AnswersList
				loading={answersLoading}
				error={answersError}
				answers={answersList}
			/>
			<h5 className='module-header'>&gt; Your answer</h5>
			<hr className='hr-header hr-bold' />
			<UserTextFormInput<typeof answerQuestionMutation>
				topicId={question.nodeId}
				submitMutation={answerQuestionMutation}
				submitHandler={answerQuestionHandler}
				successFn={handleAnswerQuestionSuccess}
				connErrors={answerQuestionConnErrors}
			/>
		</>
	)
}
