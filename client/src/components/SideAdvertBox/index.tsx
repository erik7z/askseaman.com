import React from 'react'
import { Form } from 'react-bootstrap'

export const SideAdvertBox = () => {
	return (
		<div
			className='sidebar-box subs-wrap img'
			style={{ backgroundImage: 'url(images/author.jpg)' }}
		>
			<div className='overlay'></div>
			<h3 className='sidebar-heading'>Advertisement</h3>
			<p>Send your CV to our cool crewing 2!</p>
			<Form className='subscribe-form'>
				<Form.Group>
					<Form.Control type='text' placeholder='Email Address' />
					<Form.Control
						type='submit'
						value='Subscribe'
						className='mt-2 btn btn-white submit'
					/>
				</Form.Group>
			</Form>
		</div>
	)
}
