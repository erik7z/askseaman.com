import React, { useState } from 'react'
import { Formik } from 'formik'
import { Link } from 'react-router-dom'
import { Col, Form, Button } from 'react-bootstrap'

export const Register = () => {
	const [value, setValue] = useState<string>(''),
		onInput = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
			setValue(value)
		},
		onFormSubmit = (e: React.FormEvent) => {
			e.preventDefault()
			console.log(value)
		}

	return (
		<>
			<Form onSubmit={onFormSubmit}>
				<Form.Row className='mb-3'>
					<Col md={12}>
						<Form.Label htmlFor='email'>E-mail</Form.Label>
						<Form.Control
							type='email'
							className='medium-input'
							id='email'
							onChange={onInput}
							value={value}
						/>
					</Col>
				</Form.Row>

				<Form.Row className='mb-3'>
					<Col md={6}>
						<Form.Label htmlFor='name'>Name</Form.Label>
						<Form.Control type='text' className='medium-input' id='name' />
					</Col>
					<Col md={6}>
						<Form.Label htmlFor='surname' className='form-label'>
							Surname
						</Form.Label>
						<Form.Control type='text' className='medium-input' id='surname' />
					</Col>
				</Form.Row>

				<Form.Row className='mb-3'>
					<Col md={12}>
						<Form.Label htmlFor='rank'>Rank</Form.Label>
						<Form.Control type='text' className='medium-input' id='rank' />
					</Col>
				</Form.Row>

				<Form.Row className='mb-3'>
					<Col md={6}>
						<Form.Label htmlFor='password'>Password</Form.Label>
						<Form.Control
							type='password'
							className='medium-input'
							id='password'
						/>
					</Col>
					<Col md={6}>
						<Form.Label htmlFor='password2'>Repeat Password</Form.Label>
						<Form.Control
							type='password'
							className='medium-input'
							id='password2'
						/>
					</Col>
				</Form.Row>

				<Form.Row className='mb3 text-right'>
					<Col md={12}>
						<Button variant='primary' type='submit' className='px-3'>
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
		</>
	)
}
