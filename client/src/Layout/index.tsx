import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'
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
					<section className='ftco-section ftco-no-pt ftco-no-pb'>
						<div className='container'>
							<div className='row d-flex'>{children}</div>
						</div>
					</section>
				</div>
			</div>
		</>
	)
}

export default Layout
