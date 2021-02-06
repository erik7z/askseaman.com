import React from 'react'
import { Link } from 'react-router-dom'
import { Accordion } from 'react-bootstrap'

interface IProps {
	toggleEventKey: string
}

export const MetaActions = ({ toggleEventKey }: IProps) => {
	return (
		<div className='meta d-md-flex align-items-center'>
			<Link to='#' className='btn btn-outline-primary p-1'>
				Subscribe | <b>3</b>
			</Link>
			<span>
				<Accordion.Toggle as={Link} to='#' eventKey={toggleEventKey}>
					<i className='icon-comments-o'></i>
					<b>2</b> Comments
				</Accordion.Toggle>
			</span>
			<span>
				<i className='icon-eye'></i>154 Views
			</span>
			<span>
				<i className='icon-clock-o'></i>15 Minutes ago
			</span>
		</div>
	)
}
