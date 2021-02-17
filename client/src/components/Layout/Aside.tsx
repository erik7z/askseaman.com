import React, { useContext } from 'react'

import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'

import { AvatarLink } from '../'

import { CurrentUserContext } from '../../lib/contexts'
import { ucFirstLetter } from '../../lib/helpers'

const Aside = () => {
	const [currentUserState] = useContext(CurrentUserContext)
	const { currentUser } = currentUserState

	return (
		<>
			<aside id='as-aside' className='js-fullheight'>
				<h1 id='as-logo'>
					<Link to='/' style={{ backgroundImage: 'url(images/bg_1.jpg)' }}>
						Ask <span>Seaman</span>
					</Link>
				</h1>
				<hr />

				{currentUserState.isLoggedIn === false && (
					<>
						<Row className='text-center'>
							<Col md={12}>
								<Link
									to='/auth'
									className='btn btn-outline-success btn-sm px-5'
								>
									Sign In
								</Link>
								<hr />
							</Col>
						</Row>
					</>
				)}

				{currentUserState.isLoggedIn && (
					<>
						<Row className='auth-module'>
							<Col md={3} className='text-right pr-0 pt-1'>
								<AvatarLink size='md' />
							</Col>
							<Col md={7}>
								<Link to='#' className='text-secondary'>
									<b>
										{ucFirstLetter(currentUser.name)}{' '}
										{ucFirstLetter(currentUser.surname)}
									</b>
								</Link>
								<br />

								<small>
									{currentUser.rank && ucFirstLetter(currentUser.rank)}
								</small>
							</Col>
							<Col md={1} className='pt-1'>
								<Link to='#' className='text-secondary'>
									<i className='icon-gear'></i>
								</Link>
								<br />
								<Link to='#' className='text-secondary'>
									<i className='icon-sign-out'></i>
								</Link>
							</Col>
							<Col md={12}>
								<hr />
							</Col>
						</Row>
					</>
				)}

				<nav id='as-main-menu' role='navigation'>
					<ul>
						<li className='as-active'>
							<Link to='/'>
								<span className='icon-question'></span> Questions
							</Link>
						</li>
						<li>
							<Link to='/tags'>
								<span className='icon-tag'></span> Tags
							</Link>
						</li>
						<li>
							<Link to='/users'>
								<span className='icon-user'></span> Users
							</Link>
						</li>
					</ul>
				</nav>

				<div className='as-footer'>
					<div className='footer-wrapper'>
						<hr />
						<h5 className='menu-heading'>
							AskSeaman - questions & answers for seamans
						</h5>
						<p className='menu-paragraph'>
							Get answers on any seamanship related topic from experienced
							professionals.
						</p>
						<p className='text-right'>
							<Link
								to='/about'
								className='btn btn-outline-primary btn-sm text-secondary'
							>
								Read More
							</Link>
						</p>
					</div>
				</div>
			</aside>
		</>
	)
}

export default Aside
