import React from 'react'
import { Link } from 'react-router-dom'

export const Register = () => {
	return (
		<>
			<form action='#' method='POST'>
				<div className='form-row mb-3'>
					<div className='col-md-12'>
						<label htmlFor='email' className='form-label'>
							E-mail
						</label>
						<input
							type='email'
							className='form-control medium-input'
							id='email'
						/>
					</div>
				</div>

				<div className='form-row mb-3'>
					<div className='col-md-6'>
						<label htmlFor='name' className='form-label'>
							Name
						</label>
						<input
							type='text'
							className='form-control medium-input'
							id='name'
						/>
					</div>
					<div className='col-md-6'>
						<label htmlFor='surname' className='form-label'>
							Surname
						</label>
						<input
							type='text'
							className='form-control medium-input'
							id='surname'
						/>
					</div>
				</div>

				<div className='form-row mb-3'>
					<div className='col-md-12'>
						<label htmlFor='rank' className='form-label'>
							Rank
						</label>
						<input
							type='text'
							className='form-control medium-input'
							id='rank'
						/>
					</div>
				</div>

				<div className='form-row mb-3'>
					<div className='col-md-6'>
						<label htmlFor='password' className='form-label'>
							Password
						</label>
						<input
							type='password'
							className='form-control medium-input'
							id='password'
						/>
					</div>
					<div className='col-md-6'>
						<label htmlFor='password2' className='form-label'>
							Repeat Password
						</label>
						<input
							type='password'
							className='form-control medium-input'
							id='password2'
						/>
					</div>
				</div>

				<div className='form-row mb3 text-right'>
					<div className='col-md-12'>
						<button type='submit' className='btn btn-primary px-3'>
							Register
						</button>
					</div>
				</div>

				<div className='form-group'>
					<small>Already have account ? </small>
					<Link to='/auth'>
						<i>Sign In</i>
					</Link>
				</div>
			</form>
		</>
	)
}
