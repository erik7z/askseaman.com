import React, { FC, useContext } from 'react'
import { Formik } from 'formik'

import { Link } from 'react-router-dom'
import { Col, Form, Button, InputGroup, Alert } from 'react-bootstrap'
import { useSignInMutation, FieldError } from '../../__generated/graphql'

import { TComponentWithHistory } from '../../types/globals'

import { signInValidation } from './../../lib/validation'
import { normalizeErrors } from './../../lib/helpers'
import { CurrentUserContext } from '../../lib/contexts'

export const Auth: FC<TComponentWithHistory> = ({ history }) => {
	const [signInMutation, { error: connErrors }] = useSignInMutation()
	const [, dispatch] = useContext(CurrentUserContext)

	return (
		<>
			<Formik
				validationSchema={signInValidation}
				onSubmit={async (values, { setSubmitting, setErrors }) => {
					setSubmitting(true)
					const { data: signInResponse } = await signInMutation({
						variables: {
							data: {
								email: values.email,
								password: values.password,
							},
						},
					})
					if (signInResponse) {
						if (signInResponse.SignIn.__typename === 'FormError') {
							const formErrors = signInResponse.SignIn.errors as FieldError[]
							setErrors(normalizeErrors(formErrors))
						}

						if (signInResponse.SignIn.__typename === 'TokenResponse') {
							const token = signInResponse.SignIn.token
							dispatch({
								type: 'SET_TOKEN',
								payload: token,
							})

							history.push('/')
						}
					}

					setSubmitting(false)
				}}
				initialValues={{
					email: '',
					password: '',
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
							<Form.Group as={Col} md='12' controlId='email'>
								<Form.Label>E-mail</Form.Label>
								<InputGroup>
									<InputGroup.Prepend>
										<InputGroup.Text id='email'>@</InputGroup.Text>
									</InputGroup.Prepend>
									<Form.Control
										type='email'
										{...getFieldProps('email')}
										isInvalid={!!errors.email}
										className='medium-input'
									/>
									<Form.Control.Feedback type='invalid'>
										{errors.email}
									</Form.Control.Feedback>
								</InputGroup>
							</Form.Group>
						</Form.Row>

						<Form.Row>
							<Form.Group as={Col} md='12' controlId='password'>
								<Form.Label>Password</Form.Label>
								<Form.Control
									type='password'
									{...getFieldProps('password')}
									isValid={touched.password && !errors.password}
									isInvalid={!!errors.password}
									className='medium-input'
								/>
								<Form.Control.Feedback type='invalid'>
									{errors.password}
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
									SignIn
								</Button>
							</Col>
						</Form.Row>
						<Form.Group>
							<small>New on this website ? </small>
							<Link to='/register'>
								<i>Register</i>
							</Link>
						</Form.Group>
						<hr />
						<Form.Group className='text-right'>
							<small>
								<Link to='/forgotpass'>
									<i>Forgot Password ?</i>
								</Link>
							</small>
						</Form.Group>
					</Form>
				)}
			</Formik>
		</>
	)
}
