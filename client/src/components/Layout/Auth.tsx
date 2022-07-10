import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

interface IProps {
	children: ReactNode
	// any other props that come into the component
}

const Layout = ({ children }: IProps) => {
	return (
		<>
			<Container fluid id='as-page' className='px-0'>
				<section id='auth'>
					<Row>
						<Col lg={8} md={7} className='d-none d-md-block'>
							<div
								className='img'
								style={{
									backgroundImage: 'url(images/auth.jpg)',
									height: 'calc(100vh)',
								}}
							></div>
						</Col>
						<Col lg={4} md={5} sm={12}>
							<Container>
								<Row>
									<Col lg={11} md={12}>
										<h1 id='main-logo' className='logo-small'>
											<Link
												to='/'
												style={{ backgroundImage: 'url(images/bg_1.jpg)' }}
											>
												Ask <br />
												<span>Seaman</span>
											</Link>
										</h1>
										<small>Questions & answers for professional seamans</small>
										<hr />
										{children}
									</Col>
								</Row>
							</Container>
						</Col>
					</Row>
				</section>
			</Container>
		</>
	)
}

export default Layout
