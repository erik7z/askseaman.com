import React from 'react'
import { Formik } from 'formik'

import { Link } from 'react-router-dom'
import { Col, Form, Button, InputGroup, Alert } from 'react-bootstrap'
import { useRegisterMutation, FieldError } from '../../__generated/graphql'

import { regValidation } from './../../lib/validation'
import { normalizeErrors } from './../../lib/helpers'

export const Register = () => {
	const [
		registerMutation,
		{ data: regResponse, error: connErrors },
	] = useRegisterMutation()

	const errorBanner = connErrors && (
		<Alert variant='danger'>
			<Alert.Heading>Ooops! Something went wrong</Alert.Heading>
			<p>{connErrors.message}</p>
		</Alert>
	)

	return (
		<>
			<Formik
				validationSchema={regValidation}
				onSubmit={async (values, { setSubmitting, setErrors }) => {
					setSubmitting(true)
					await registerMutation({
						variables: {
							data: {
								email: values.email,
								password: values.password,
								name: values.name,
								surname: values.surname,
								rank: values.rank,
							},
						},
					})
					if (regResponse && regResponse.Register.__typename === 'FormError') {
						const formErrors = regResponse.Register.errors as FieldError[]
						setErrors(normalizeErrors(formErrors))
					}

					setSubmitting(false)
				}}
				initialValues={{
					email: '',
					name: '',
					surname: '',
					rank: '',
					password: '',
					password2: '',
					terms: false,
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
						<Form.Row>{errorBanner}</Form.Row>
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
							<Form.Group as={Col} md='6' controlId='name'>
								<Form.Label>First name</Form.Label>
								<Form.Control
									type='text'
									{...getFieldProps('name')}
									isValid={touched.name && !errors.name}
									isInvalid={!!errors.name}
									className='medium-input'
								/>
								<Form.Control.Feedback type='invalid'>
									{errors.email}
								</Form.Control.Feedback>
							</Form.Group>

							<Form.Group as={Col} md='6' controlId='surname'>
								<Form.Label>Surname</Form.Label>
								<Form.Control
									type='text'
									placeholder='surname'
									{...getFieldProps('surname')}
									isValid={touched.surname && !errors.surname}
									isInvalid={!!errors.surname}
									className='medium-input'
								/>
								<Form.Control.Feedback type='invalid'>
									{errors.surname}
								</Form.Control.Feedback>
							</Form.Group>
						</Form.Row>

						<Form.Row>
							<Form.Group as={Col} md='12' controlId='rank'>
								<Form.Label>Rank</Form.Label>
								<Form.Control
									as='select'
									custom
									{...getFieldProps('rank')}
									isInvalid={!!errors.rank}
									className='medium-input'
								>
									<option>-- Select Rank ---</option>
									<option value='bosun'>Bosun</option>
									<option value='chief_officer'>Chief Officer</option>
									<option value='chief_engineer'>Chief Engineer</option>
									<option value='master'>Master</option>
								</Form.Control>
								<Form.Control.Feedback type='invalid'>
									{errors.rank}
								</Form.Control.Feedback>
							</Form.Group>

							<Form.Group as={Col} md='6' controlId='password'>
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

							<Form.Group as={Col} md='6' controlId='password2'>
								<Form.Label>Repeat Password</Form.Label>
								<Form.Control
									type='password'
									{...getFieldProps('password2')}
									isValid={touched.password2 && !errors.password2}
									isInvalid={!!errors.password2}
									className='medium-input'
								/>
								<Form.Control.Feedback type='invalid'>
									{errors.password}
								</Form.Control.Feedback>
							</Form.Group>
						</Form.Row>
						<Form.Group>
							<Form.Check
								{...getFieldProps('terms')}
								label='Agree to terms and conditions'
								isInvalid={!!errors.terms}
								feedback={errors.terms}
								id='terms'
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
									Register
								</Button>
							</Col>
						</Form.Row>
						<Form.Group>
							<small>Already have account ? </small>
							<Link to='/auth'>
								<i>Sign In</i>
							</Link>
						</Form.Group>
					</Form>
				)}
			</Formik>
		</>
	)
}
