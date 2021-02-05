import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'

export const Auth = () => {
	return (
		<>
			<Form>
				<Form.Group>
					<Form.Label htmlFor='email'>E-mail</Form.Label>
					<Form.Control type='email' className='form-control' id='email' />
				</Form.Group>
				<Form.Group>
					<Form.Label htmlFor='password'>Password</Form.Label>
					<Form.Control type='password' id='password' />
				</Form.Group>

				<Form.Group className='text-right'>
					<Button variant='primary' size='lg' type='submit' className='px-5'>
						Sign In
					</Button>
				</Form.Group>

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
		</>
	)
}
