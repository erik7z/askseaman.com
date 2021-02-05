import React from 'react'
import { Row, Col, Form } from 'react-bootstrap'

export const QuestionSearch = () => {
	return (
		<Row>
			<Col md={12}>
				<Form className='search-form'>
					<Form.Group className='form-group'>
						<span className='icon icon-search'></span>
						<Form.Control
							type='text'
							placeholder='Search for question or #tag'
						/>
					</Form.Group>
				</Form>
			</Col>
		</Row>
	)
}
