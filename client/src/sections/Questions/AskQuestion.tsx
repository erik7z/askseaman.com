import React, { FC, useState, useEffect } from 'react'
import { Formik } from 'formik'
import { Tag as ITag } from 'react-tag-autocomplete'
import { TagsAutoSuggest } from './TagsAutoSuggest'

import { Col, Row, Form, Button, Alert } from 'react-bootstrap'

import {
	useAskQuestionMutation,
	useTagLazyQuery,
	FieldError,
	Tag as TTag,
} from '../../__generated/graphql'

import { TComponentWithHistory } from '../../types/globals'

import {
	QuestionSearch,
	SideAdvertBox,
	SideNewsBox,
	SideAskBox,
	SideTagCloudBox,
	SideTopUsersBox,
} from '../../components'

import { askQuestionValidation } from './../../lib/validation'
import { normalizeErrors, normalizeTags } from './../../lib/helpers'

export const AskQuestion: FC<TComponentWithHistory> = ({ history }) => {
	let tagsSuggestions: ITag[] = []
	const [suggestions, setSuggestions] = useState(tagsSuggestions)

	const [askQuestionMutation, { error: connErrors }] = useAskQuestionMutation()

	const [getTags, { data: tagsData }] = useTagLazyQuery({
		fetchPolicy: 'cache-and-network',
	})

	useEffect(() => {
		console.log('get tags useffect')
		getTags()
		if (tagsData && tagsData.Tag) {
			setSuggestions(normalizeTags(tagsData.Tag as TTag[]))
		}
	}, [getTags, tagsData])

	return (
		<>
			<Col xl={8} className='main-content'>
				<QuestionSearch />
				<Row>
					<Col md={12}>
						<h5 className='module-header'>&gt; Ask Question</h5>
						<hr className='hr-header hr-bold' />
						<div className='section-ask-question'>
							<Formik
								validationSchema={askQuestionValidation}
								onSubmit={async (values, { setSubmitting, setErrors }) => {
									setSubmitting(true)

									const { data: askResponse } = await askQuestionMutation({
										variables: {
											data: {
												title: values.title,
												text: values.text,
												tags: values.tags
													? values.tags.toUpperCase().split(',')
													: [],
											},
										},
									})
									if (askResponse) {
										if (askResponse.AskQuestion.__typename === 'FormError') {
											const formErrors = askResponse.AskQuestion
												.errors as FieldError[]
											setErrors(normalizeErrors(formErrors))
										}

										if (askResponse.AskQuestion.__typename === 'Question') {
											// const title = askResponse.AskQuestion.title

											history.push('/')
										}
									}
									setSubmitting(false)
								}}
								initialValues={{
									title: '',
									text: '',
									tags: '',
									hideMe: false,
								}}
							>
								{({
									handleSubmit,
									errors,
									touched,
									isSubmitting,
									isValid,
									getFieldProps,
									setFieldValue,
								}) => (
									<Form noValidate onSubmit={handleSubmit}>
										<Form.Row>
											{connErrors && (
												<Alert variant='danger'>
													<Alert.Heading>
														Ooops! Something went wrong
													</Alert.Heading>
													<p>{connErrors.message}</p>
												</Alert>
											)}
										</Form.Row>

										<Form.Row>
											<Form.Group as={Col} md='12' controlId='title'>
												<Form.Label>Question title</Form.Label>
												<small id='title_help' className='form-text'>
													Short description of your question.
												</small>
												<Form.Control
													type='title'
													{...getFieldProps('title')}
													isInvalid={!!errors.title}
													className='small-input'
													aria-describedby='title_help'
												/>
												<Form.Control.Feedback type='invalid'>
													{errors.title}
												</Form.Control.Feedback>
											</Form.Group>

											<Form.Group as={Col} md='12' controlId='tags'>
												<Form.Label>Question tags</Form.Label>
												<small id='tags' className='form-text'>
													Add 1 to 5 tags for your question.
												</small>
												<TagsAutoSuggest
													name='tags'
													suggestions={suggestions}
													setFieldValue={setFieldValue}
												/>
												<Form.Control.Feedback type='invalid'>
													{errors.tags}
												</Form.Control.Feedback>
											</Form.Group>

											<Form.Group as={Col} md='12' controlId='text'>
												<Form.Label>Question description</Form.Label>
												<small id='q_text_help' className='form-text'>
													Include all the information someone would need to
													answer your question
												</small>
												<Form.Control
													as='textarea'
													rows={5}
													placeholder='Describe your question...'
													{...getFieldProps('text')}
													isValid={touched.text && !errors.text}
													isInvalid={!!errors.text}
													className='small-input'
												/>
												<Form.Control.Feedback type='invalid'>
													{errors.text}
												</Form.Control.Feedback>
											</Form.Group>
										</Form.Row>

										<Form.Group>
											<Form.Check
												{...getFieldProps('hideMe')}
												label='Hide my name'
												isInvalid={!!errors.hideMe}
												feedback={errors.hideMe}
												id='hideMe'
											/>
										</Form.Group>
										<Form.Row className='mb3 text-right'>
											<Col md={12}>
												<Button
													variant='primary'
													type='submit'
													disabled={isSubmitting || !isValid}
													className='px-3'
												>
													Publish
												</Button>
											</Col>
										</Form.Row>
									</Form>
								)}
							</Formik>
						</div>
					</Col>
				</Row>
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
