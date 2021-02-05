import React from 'react'
import { Link } from 'react-router-dom'

export const Auth = () => {
	return (
		<>
			<form action='#' method='POST'>
				<div className='form-group'>
					<label htmlFor='email' className='form-label'>
						E-mail
					</label>
					<input type='email' className='form-control' id='email' />
				</div>
				<div className='form-group'>
					<label htmlFor='password' className='form-label'>
						Password
					</label>
					<input type='password' className='form-control' id='password' />
				</div>

				<div className='form-group text-right'>
					<button type='submit' className='btn btn-primary btn-lg px-5'>
						Sign In
					</button>
				</div>

				<div className='form-group'>
					<small>New on this website ? </small>
					<Link to='/register'>
						<i>Register</i>
					</Link>
				</div>
				<hr />
				<div className='form-group text-right'>
					<small>
						<Link to='/forgotpass'>
							<i>Forgot Password ?</i>
						</Link>
					</small>
				</div>
			</form>
		</>
	)
}
