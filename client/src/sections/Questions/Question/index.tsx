import React, { useContext } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import { Card } from 'react-bootstrap'
import { BsTrash } from 'react-icons/bs'

import {
	UserTextFormInput,
	TagsInlineList,
	CommentsBox,
	AvatarLink,
	SideQuestInstrBox,
} from '../../../components'

import Section from '../../../components/Layout/Section'
import SideBar from '../../../components/Layout/SideBar'

import { answerQuestionHandler } from './../../../components/UserTextFormInput/lib/helpers'
import { AnswersList } from './AnswersList'
import {
	useGetQuestionAnswers,
	useGetQuestion,
	useDeleteQuestion,
} from './../../../lib/hooks'
import { CurrentUserContext } from './../../../lib/contexts'

import {
	useAnswerQuestionMutation,
	Question as TQuestion,
	Tag as TTag,
	Answer as TAnswer,
	useQuestionCommentsLazyQuery,
} from '../../../types/generated-frontend'
import { renderTextFromDb } from '../../../lib/helpers'

export const Question = () => {
	const [currentUserState] = useContext(CurrentUserContext)

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

	const history = useHistory()

	const {
		handleDelete,
		deleteQuestionLoading,
		deleteQuestionErrors,
	} = useDeleteQuestion(questionId, () => history.push('/'))

	const questionTitle = question ? question.title : ''

	return (
		<>
			<Section
				sectionName='Question'
				sectionTitle={questionTitle}
				sectionClass='section-question-page'
			>
				{error && <h1>Something went wrong</h1>}
				{!question || loading ? (
					<Skeleton count={25} />
				) : (
					<>
						<div className='question-item-full '>
							<div className='row'>
								<div className='col-md-10'>
									<div className='author d-flex align-items-center'>
										<AvatarLink
											size='lg'
											avatarUrl={question.author?.avatar as string}
											userId={question.author?.nodeId}
										/>
										<div className='post-item-info'>
											<span>Asked by</span>
											<h5 className='author-name'>
												<Link to={`/user/${question.author?.nodeId}`}>
													{question.author?.name}
												</Link>
												,{' '}
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
								</div>
								<div className='col-md-2 text-center'>
									{question.canDelete && (
										<>
											{deleteQuestionLoading ? (
												<span>Loading...</span>
											) : (
												<Link to='#delete-question' onClick={handleDelete}>
													<BsTrash />
												</Link>
											)}
											{deleteQuestionErrors && <span>Error...</span>}{' '}
										</>
									)}
								</div>
							</div>

							<div className='post-item-text'>
								{renderTextFromDb(question.text)}
							</div>
							<CommentsBox
								topic={question as TQuestion}
								getCommentsHook={getQuestionCommentsHook}
							/>
						</div>
						<h5 className='module-header text-right'>
							Answers on question &lt;
						</h5>
						<hr className='hr-header hr-bold' />
						<AnswersList
							loading={answersLoading}
							error={answersError}
							answers={answersList}
						/>
						<h5 className='module-header'>&gt; Your answer</h5>
						<hr className='hr-header hr-bold' />

						{currentUserState.isLoggedIn ? (
							<UserTextFormInput<typeof answerQuestionMutation>
								topicId={question.nodeId}
								submitMutation={answerQuestionMutation}
								submitHandler={answerQuestionHandler}
								successFn={(answers: TAnswer[]) => setAnswersList(answers)}
								connErrors={answerQuestionConnErrors}
							/>
						) : (
							<Card
								border='success'
								style={{
									width: '30rem',
									margin: ' 0 auto',
									float: 'none',
									marginBottom: '10px',
								}}
							>
								<Card.Body>
									<Card.Text>
										Only registered users can add answers, so please{' '}
										<Link to='/auth' className='btn btn-outline-success btn-sm'>
											Sign In
										</Link>
									</Card.Text>
								</Card.Body>
							</Card>
						)}
					</>
				)}
			</Section>
			<SideBar>
				<SideQuestInstrBox />
			</SideBar>
		</>
	)
}
