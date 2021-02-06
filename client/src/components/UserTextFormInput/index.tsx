import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { AvatarLink } from '../'

export const UserTextFormInput = () => {
	return (
		<Row className='SECTION-user-input'>
			<Col md={1} xs={2} className='pr-0 text-right'>
				<AvatarLink size='md' />
			</Col>
			<Col md={11} xs={10}>
				<Form>
					<Form.Group>
						<Form.Control
							as='textarea'
							className='small-input'
							id='q_text'
							rows={5}
						></Form.Control>
					</Form.Group>
					<div className='text-right'>
						<Button variant='primary' type='submit'>
							Publish
						</Button>
					</div>
				</Form>
			</Col>
		</Row>
	)
}
