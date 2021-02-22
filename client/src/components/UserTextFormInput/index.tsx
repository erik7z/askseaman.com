import React from 'react'
import { Formik } from 'formik'
import { Row, Col, Form, Button, Alert } from 'react-bootstrap'
import { ApolloError } from '@apollo/client'

import { AnswerQuestionMutationFn, FieldError } from '../../__generated/graphql'

import { AvatarLink } from '../'
import { userTextValidation } from '../../lib/validation'
import { normalizeErrors } from './../../lib/helpers'

interface IProps {
	topicId: string
	submitMutation: AnswerQuestionMutationFn
	connErrors?: ApolloError | undefined
	toggleUpdatePage: () => void
}

export const UserTextFormInput = ({
	submitMutation,
	topicId,
	connErrors,
	toggleUpdatePage,
}: IProps) => {
	return (
		<Row className='SECTION-user-input'>
			<Col md={1} xs={2} className='pr-0 text-right'>
				<AvatarLink size='md' />
			</Col>
			<Col md={11} xs={10}>
				<Formik
					validationSchema={userTextValidation}
					onSubmit={async (values, { setSubmitting, setErrors }) => {
						setSubmitting(true)

						const { data: submitResponse } = await submitMutation({
							variables: {
								data: {
									nodeId: topicId,
									text: values.text,
								},
							},
						})

						if (submitResponse) {
							if (submitResponse.AnswerQuestion.__typename === 'FormError') {
								const formErrors = submitResponse.AnswerQuestion
									.errors as FieldError[]
								setErrors(normalizeErrors(formErrors))
							}

							if (submitResponse.AnswerQuestion.__typename === 'Answer') {
								toggleUpdatePage()
							}
						}
						setSubmitting(false)
					}}
					initialValues={{
						text: '',
					}}
				>
					{({
						handleSubmit,
						errors,
						touched,
						isSubmitting,
						isValid,
						getFieldProps,
					}) => (
						<Form noValidate onSubmit={handleSubmit}>
							<Form.Row>
								{connErrors && (
									<Alert variant='danger'>
										<Alert.Heading>Ooops! Something went wrong</Alert.Heading>
										<p>{connErrors.message}</p>
									</Alert>
								)}
							</Form.Row>

							<Form.Row>
								<Form.Group as={Col} md='12' controlId='text'>
									<Form.Control
										as='textarea'
										rows={5}
										placeholder='Provide your answer...'
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
			</Col>
		</Row>
	)
}
