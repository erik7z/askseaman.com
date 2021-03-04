import React, { useState, useContext } from 'react'

import { Formik } from 'formik'
import { Col, Form, Button, Alert, Image } from 'react-bootstrap'
import { BsCheckCircle } from 'react-icons/bs'

import { SideAskBox } from '../../components'

import Section from '../../components/Layout/Section'
import SideBar from '../../components/Layout/SideBar'

import { TKVPair } from '../../types/frontend'
import {
	FieldError,
	useUserRanksQuery,
	useEditProfileMutation,
	UserRank,
	User,
	UserProfileInput,
} from '../../types/generated-frontend'

import {
	userSettingsValidation,
	validateImageUpload,
} from '../../lib/validation'
import { normalizeErrors, getKeyByValue } from '../../lib/helpers'
import { CurrentUserContext } from '../../lib/contexts'
import { BLANK_AVATAR_URL } from '../../env'

type FormikSetFieldValue = (
	field: string,
	value: any,
	shouldValidate?: boolean | undefined
) => void

type FormikSetFieldError = (field: string, message: string | undefined) => void

export const Settings = () => {
	const [currentUserState, userDispatch] = useContext(CurrentUserContext)
	const { currentUser } = currentUserState

	const [editProfileMutation, { error: connErrors }] = useEditProfileMutation()

	const { data: ranksData } = useUserRanksQuery()
	const ranks: TKVPair = ranksData?.UserRanks

	const rankEnum = ranksData?.UserRanks
		? getKeyByValue(ranksData.UserRanks, currentUser.rank as string)
		: ''

	const [avatarImage, setAvatarImage] = useState(currentUser.avatar as string)

	const [isProfileUpdated, setIsProfileUpdated] = useState(false)

	const handleFileUpload = (
		event: React.ChangeEvent<HTMLInputElement>,
		setFieldValue: FormikSetFieldValue,
		setFieldError: FormikSetFieldError
	) => {
		if (event.currentTarget.files) {
			try {
				const reader = new FileReader()
				const file = event.currentTarget.files[0]
				if (validateImageUpload(file)) {
					reader.onloadend = () => {
						setAvatarImage(reader.result as string)
						setFieldValue('avatar', reader.result)
					}
					reader.readAsDataURL(file)
				}
			} catch (e) {
				setFieldError('avatar', e.message)
			}
		}
	}

	return (
		<>
			<Section
				sectionName='Settings'
				sectionTitle='Profile'
				sectionClass='section-settings-profile'
			>
				<Formik
					validationSchema={userSettingsValidation}
					onSubmit={async (values, { setSubmitting, setErrors }) => {
						setSubmitting(true)

						const newProfileData: UserProfileInput = {
							name: values.name,
							surname: values.surname,
							avatar: values.avatar,
							password: values.password,
							rank: values.rank as UserRank,
							description: values.description,
						}

						if (currentUser.avatar === values.avatar)
							delete newProfileData.avatar

						const { data: editResponse } = await editProfileMutation({
							variables: {
								data: newProfileData,
							},
						})
						if (editResponse) {
							if (editResponse.EditProfile.__typename === 'FormError') {
								const formErrors = editResponse.EditProfile
									.errors as FieldError[]
								setErrors(normalizeErrors(formErrors))
							}

							if (editResponse.EditProfile.__typename === 'Profile') {
								const updatedData = editResponse.EditProfile

								userDispatch({
									type: 'UPDATE_USER',
									payload: {
										name: updatedData.name,
										surname: updatedData.surname,
										rank: updatedData.rank,
										avatar: updatedData.avatar,
										description: updatedData.description,
									} as User,
								})

								setIsProfileUpdated(true)
								setTimeout(() => {
									setIsProfileUpdated(false)
								}, 3000)
							}
						}

						setSubmitting(false)
					}}
					initialValues={{
						name: currentUser.name,
						surname: currentUser.surname,
						avatar: avatarImage,
						rank: rankEnum,
						password: '',
						password2: '',
						description: currentUser.description ? currentUser.description : '',
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
						setFieldError,
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
							<Form.Row className='justify-content-md-center'>
								<Col xs={6} md={4}>
									<Image
										src={avatarImage ? avatarImage : BLANK_AVATAR_URL}
										alt='Profile Avatar'
										height='128px'
										roundedCircle
										className='mb-3 mt-1'
									/>
								</Col>
								<Col md={12}>
									<Form.File
										id='avatar'
										name='avatar'
										type='file'
										custom
										label='Choose avatar image'
										accept='image/*'
										isInvalid={!!errors.avatar}
										onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
											handleFileUpload(event, setFieldValue, setFieldError)
										}}
									/>
									<div className='text-danger'>
										<small>{errors.avatar}</small>
									</div>
									<hr />
								</Col>
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
									<small id='password_help' className='form-text'>
										Old password or new password.
									</small>
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
									<small id='password_help' className='form-text'>
										.
									</small>
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

							<Form.Row className='mb3'>
								<Col md={10} className='text-center'>
									{isProfileUpdated && (
										<Alert variant='success'>
											<span>
												<BsCheckCircle /> Your profile has been updated
											</span>
										</Alert>
									)}
								</Col>
								<Col md={2} className='text-right'>
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
