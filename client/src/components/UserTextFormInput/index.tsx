import React, { useContext } from 'react'
import { Formik } from 'formik'
import { Row, Col, Form, Button, Alert } from 'react-bootstrap'
import { ApolloError } from '@apollo/client'

import { AvatarLink } from '../'
import { userTextValidation } from '../../lib/validation'
import { FormikSubmit } from './lib/helpers'
import { CurrentUserContext } from '../../lib/contexts'

interface IProps<MutationFunctionType> {
	topicId: string
	submitHandler: FormikSubmit<MutationFunctionType>
	submitMutation: MutationFunctionType
	successFn: Function
	connErrors?: ApolloError | undefined
}

export function UserTextFormInput<MutationFunctionType>({
	topicId,
	submitHandler,
	submitMutation,
	successFn,
	connErrors,
}: IProps<MutationFunctionType>) {
	const [currentUserState] = useContext(CurrentUserContext)
	const { currentUser } = currentUserState

	return (
		<Row className='SECTION-user-input'>
			<Col md={1} xs={2} className='pr-0 text-right'>
				<AvatarLink size='md' avatarUrl={currentUser.avatar} />
			</Col>
			<Col md={11} xs={10}>
				<Formik
					validationSchema={userTextValidation}
					onSubmit={async (values, formikHelpers) => {
						submitHandler(
							topicId,
							submitMutation,
							successFn,
							values,
							formikHelpers
						)
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
										placeholder='Write something...'
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
