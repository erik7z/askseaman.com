import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface IProps {
	children: ReactNode
	// any other props that come into the component
}

const Layout = ({ children }: IProps) => {
	return (
		<>
			<div id='as-page' className='container-fluid px-0'>
				<section id='auth'>
					<div className='row'>
						<div className='col-lg-8 col-md-7 d-none d-md-block'>
							<div
								className='img'
								style={{
									backgroundImage: 'url(images/about.jpg)',
									height: 'calc(100vh)',
								}}
							></div>
						</div>
						<div className='col-lg-4 col-md-5 col-sm-12'>
							<div className='container'>
								<div className='row'>
									<div className='col-lg-11 col-md-12'>
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
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	)
}

export default Layout
