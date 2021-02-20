import React, { useContext } from 'react'
import { BsGear, BsBoxArrowRight } from 'react-icons/bs'

import { Link, NavLink } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'

import { AvatarLink } from '../'

import { CurrentUserContext } from '../../lib/contexts'
import { ucFirstLetter } from '../../lib/helpers'

const Aside = () => {
	const [currentUserState, userDispatch] = useContext(CurrentUserContext)
	const { currentUser } = currentUserState
	let authModule = (
		<>
			<Row className='text-center'>
				<Col md={12}>
					<Link to='/auth' className='btn btn-outline-success btn-sm px-5'>
						Sign In
					</Link>
					<hr />
				</Col>
			</Row>
		</>
	)

	if (currentUser && currentUserState.isLoggedIn) {
		authModule = (
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

						<small>{currentUser.rank && ucFirstLetter(currentUser.rank)}</small>
					</Col>
					<Col md={1} className='pt-1'>
						<span className='text-secondary'>
							<BsGear />
						</span>
						<br />
						<Link
							to='#'
							className='text-secondary'
							onClick={() =>
								userDispatch({
									type: 'SIGN_OUT',
								})
							}
						>
							<BsBoxArrowRight />
						</Link>
					</Col>
					<Col md={12}>
						<hr />
					</Col>
				</Row>
			</>
		)
	}

	return (
		<>
			<aside id='as-aside' className='js-fullheight'>
				<h1 id='as-logo'>
					<Link to='/' style={{ backgroundImage: 'url(images/bg_1.jpg)' }}>
						Ask <span>Seaman</span>
					</Link>
				</h1>
				<hr />

				{authModule}

				<nav id='as-main-menu' role='navigation'>
					<ul>
						<li>
							<NavLink exact={true} to='/' activeClassName='as-active'>
								<span className='icon-question'></span> Questions
							</NavLink>
						</li>
						<li>
							<NavLink exact={true} to='/tags' activeClassName='as-active'>
								<span className='icon-tag'></span> Tags
							</NavLink>
						</li>
						<li>
							<NavLink exact={true} to='/users' activeClassName='as-active'>
								<span className='icon-user'></span> Users
							</NavLink>
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
