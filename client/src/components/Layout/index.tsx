import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'

import Aside from './Aside'

interface IProps {
	children: ReactNode
	// any other props that come into the component
}

const Layout = ({ children }: IProps) => {
	return (
		<>
			<div id='as-page'>
				<Link to='/#' className='js-as-nav-toggle as-nav-toggle'>
					<i></i>
				</Link>
				<Aside />
				<div id='as-main'>
					<Container>
						<Row className='d-flex'>{children}</Row>
					</Container>
				</div>
			</div>
		</>
	)
}

export default Layout
