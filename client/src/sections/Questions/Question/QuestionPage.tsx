import React, { useRef, useEffect } from 'react'
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
import { useGetQuestionAnswers, useGetQuestion } from './../../../lib/hooks'
import {
	useAnswerQuestionMutation,
	Question as TQuestion,
	Tag as TTag,
	Answer as TAnswer,
	useQuestionCommentsLazyQuery,
} from '../../../types/generated-frontend'

interface IProps {
	setSectionTitle: React.Dispatch<React.SetStateAction<string>>
}

export const QuestionPage = ({ setSectionTitle }: IProps) => {
	const { questionId } = useParams<{ questionId: string }>()
	const { question, loading, error } = useGetQuestion(questionId)

	const {
		answersList,
		setAnswersList,
		answersLoading,
		answersError,
	} = useGetQuestionAnswers(questionId)

	const [
		answerQuestionMutation,
		{ error: answerQuestionConnErrors },
	] = useAnswerQuestionMutation()

	const getQuestionCommentsHook = useQuestionCommentsLazyQuery({
		variables: {
			nodeId: questionId,
		},
		fetchPolicy: 'no-cache',
	})

	const getCommentsHookRef = useRef(getQuestionCommentsHook)

	useEffect(() => {
		if (question) setSectionTitle(question.title)
	}, [question, setSectionTitle])

	if (error) {
		console.log(error)
		return <h1>Something went wrong</h1>
	}

	if (!question || loading) return <Skeleton count={25} />

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
					getCommentsHook={getCommentsHookRef.current}
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
				successFn={(answers: TAnswer[]) => setAnswersList(answers)}
				connErrors={answerQuestionConnErrors}
			/>
		</>
	)
}
