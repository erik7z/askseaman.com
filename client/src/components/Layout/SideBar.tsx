import React, { ReactNode } from 'react'
import { Col } from 'react-bootstrap'

interface IProps {
	children: ReactNode
}

const SideBar = ({ children }: IProps) => {
	return (
		<>
			<Col xl={4} className='sidebar bg-blue'>
				{children}
			</Col>
		</>
	)
}

export default SideBar
