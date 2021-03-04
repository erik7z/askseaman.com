import React, { useState } from 'react'

import { Formik } from 'formik'
import { Col, Form, Button, Alert } from 'react-bootstrap'
import { BsCheckCircle } from 'react-icons/bs'

import { SideAskBox } from '../../components'

import Section from '../../components/Layout/Section'
import SideBar from '../../components/Layout/SideBar'

import { TKVPair } from '../../types/frontend'
import {
	FieldError,
	useUserRanksQuery,
	useCurrentUserQuery,
	useEditProfileMutation,
	UserRank,
} from '../../types/generated-frontend'

import { userSettingsValidation } from '../../lib/validation'

import { normalizeErrors, getKeyByValue } from '../../lib/helpers'

export const Settings = () => {
	const [editProfileMutation, { error: connErrors }] = useEditProfileMutation()

	const { data: ranksData } = useUserRanksQuery()
	const ranks: TKVPair = ranksData?.UserRanks

	const { data: profileRequest } = useCurrentUserQuery()
	const profileData = profileRequest?.CurrentUser
	const initialRank =
		ranksData?.UserRanks && profileData?.rank
			? getKeyByValue(ranksData.UserRanks, profileData?.rank)
			: ''

	const [isProfileUpdated, setIsProfileUpdated] = useState(false)

	return (
		<>
			<Section
				sectionName='Settings'
				sectionTitle='Profile'
				sectionClass='section-settings-profile'
			>
				<Formik
					validationSchema={userSettingsValidation}
					onSubmit={async (values, { setSubmitting, setErrors, setValues }) => {
						setSubmitting(true)

						const { data: editResponse } = await editProfileMutation({
							variables: {
								data: {
									name: values.name,
									surname: values.surname,
									password: values.password,
									rank: values.rank as UserRank,
									description: values.description,
								},
							},
						})
						if (editResponse) {
							if (editResponse.EditProfile.__typename === 'FormError') {
								const formErrors = editResponse.EditProfile
									.errors as FieldError[]
								setErrors(normalizeErrors(formErrors))
							}

							if (editResponse.EditProfile.__typename === 'Profile') {
								setIsProfileUpdated(true)
								setTimeout(() => {
									setIsProfileUpdated(false)
								}, 3000)
								console.log(editResponse.EditProfile)
							}
						}

						setSubmitting(false)
					}}
					initialValues={{
						name: profileData?.name,
						surname: profileData?.surname,
						rank: initialRank,
						password: '',
						password2: '',
						description: profileData?.description,
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

								{isProfileUpdated && (
									<Alert
										variant='success'
										style={{
											margin: '5px auto',
											float: 'none',
										}}
									>
										<span>
											<BsCheckCircle /> Your profile has been updated
										</span>
									</Alert>
								)}
							</Form.Row>

							<Form.Row>
								<Form.Group as={Col} md='6' controlId='name'>
									<Form.Label>Name</Form.Label>
									<Form.Control
										type='name'
										{...getFieldProps('name')}
										isInvalid={!!errors.name}
										className='small-input'
									/>
									<Form.Control.Feedback type='invalid'>
										{errors.name}
									</Form.Control.Feedback>
								</Form.Group>

								<Form.Group as={Col} md='6' controlId='surname'>
									<Form.Label>Surname</Form.Label>
									<Form.Control
										type='surname'
										{...getFieldProps('surname')}
										isInvalid={!!errors.surname}
										className='small-input'
									/>
									<Form.Control.Feedback type='invalid'>
										{errors.surname}
									</Form.Control.Feedback>
								</Form.Group>

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

								<Form.Group as={Col} md='12' controlId='description'>
									<Form.Label>Shortly about yourself</Form.Label>
									<small id='description_help' className='form-text'>
										Write something about your experience or anything else you
										like.
									</small>
									<Form.Control
										as='textarea'
										rows={5}
										placeholder='Tell us something about yourself...'
										{...getFieldProps('description')}
										isValid={touched.description && !errors.description}
										isInvalid={!!errors.description}
										className='small-input'
									/>
									<Form.Control.Feedback type='invalid'>
										{errors.description}
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
										Save
									</Button>
								</Col>
							</Form.Row>
						</Form>
					)}
				</Formik>
			</Section>
			<SideBar>
				<SideAskBox />
			</SideBar>
		</>
	)
}
