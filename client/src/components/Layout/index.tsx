import React, { ReactNode, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'

import Aside from './Aside'

interface IProps {
	children: ReactNode
}

const Layout = ({ children }: IProps) => {
	const [showSideMenu, setShowSideMenu] = useState(false)
	const [isMobile, setIsMobile] = useState(window.innerWidth < 992)

	useEffect(() => {
		window.addEventListener(
			'resize',
			() => {
				const ismobile = window.innerWidth < 991
				if (ismobile !== isMobile) setIsMobile(ismobile)
			},
			false
		)
	}, [isMobile])

	useEffect(() => {
		if (showSideMenu) document.body.classList.add('offcanvas')
		if (!isMobile || !showSideMenu) document.body.classList.remove('offcanvas')
	}, [showSideMenu, isMobile])

	return (
		<>
			<div id='as-page'>
				<Link
					to='/#'
					className={`as-nav-toggle ${showSideMenu ? 'active' : ''}`}
					onClick={() => setShowSideMenu(!showSideMenu)}
				>
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
