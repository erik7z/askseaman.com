import React, { FC, useContext } from 'react'
import { Formik } from 'formik'
import { Link } from 'react-router-dom'
import { Col, Form, Button, InputGroup, Alert } from 'react-bootstrap'
import {
	useUserRanksQuery,
	useRegisterMutation,
	FieldError,
	UserRank,
} from '../../types/generated-frontend'
import { TComponentWithHistory, TKVPair } from '../../types/frontend'

import { regValidation } from './../../lib/validation'
import { normalizeErrors } from './../../lib/helpers'
import { CurrentUserContext } from '../../lib/contexts'

export const Register: FC<TComponentWithHistory> = ({ history }) => {
	const [registerMutation, { error: connErrors }] = useRegisterMutation()
	const [, userDispatch] = useContext(CurrentUserContext)

	const { data: ranksData } = useUserRanksQuery()
	const ranks: TKVPair = ranksData?.UserRanks

	return (
		<>
			<Formik
				validationSchema={regValidation}
				onSubmit={async (values, { setSubmitting, setErrors }) => {
					setSubmitting(true)
					const { data: regResponse } = await registerMutation({
						variables: {
							data: {
								email: values.email,
								password: values.password,
								name: values.name,
								surname: values.surname,
								rank: values.rank as UserRank,
							},
						},
					})
					if (regResponse) {
						if (regResponse.Register.__typename === 'FormError') {
							const formErrors = regResponse.Register.errors as FieldError[]
							setErrors(normalizeErrors(formErrors))
						}

						if (regResponse.Register.__typename === 'TokenResponse') {
							const token = regResponse.Register.token
							userDispatch({
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
									{ranksData?.UserRanks &&
										Object.keys(ranks).map((rank) => {
											return (
												<option value={rank} key={rank}>
													{ranks[rank]}
												</option>
											)
										})}
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
