import React, { useContext } from 'react'
import { BsPeople } from 'react-icons/bs'
import { IoPricetagsOutline, IoPlanetOutline } from 'react-icons/io5'
import { IoIosHelpCircleOutline } from 'react-icons/io'

import { Link, NavLink } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'

import { CurrentUserContext } from '../../../lib/contexts'
import { AuthModule } from './AuthModule'

const Aside = () => {
	const [currentUserState, userDispatch] = useContext(CurrentUserContext)
	const { currentUser } = currentUserState

	return (
		<>
			<aside id='as-aside' className='js-fullheight'>
				<h1 id='as-logo'>
					<Link to='/' style={{ backgroundImage: 'url(/images/bg_1.jpg)' }}>
						Ask <span>Seaman</span>
					</Link>
				</h1>
				<hr />

				{currentUser && currentUserState.isLoggedIn ? (
					<>
						<AuthModule currentUser={currentUser} userDispatch={userDispatch} />
					</>
				) : (
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

				<nav id='as-main-menu' role='navigation'>
					<ul>
						<li>
							<NavLink exact={true} to='/my/feed' activeClassName='as-active'>
								<IoPlanetOutline /> My Feed
							</NavLink>
						</li>
						<li>
							<NavLink exact={true} to='/' activeClassName='as-active'>
								<IoIosHelpCircleOutline /> Questions
							</NavLink>
						</li>
						<li>
							<NavLink exact={true} to='/tags' activeClassName='as-active'>
								<IoPricetagsOutline /> Tags
							</NavLink>
						</li>
						<li>
							<NavLink exact={true} to='/users' activeClassName='as-active'>
								<BsPeople /> Users
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
						<div className='text-right mb-2'>
							<Link
								to='/about'
								className='btn btn-outline-primary btn-sm text-secondary'
							>
								Read More
							</Link>
						</div>
					</div>
				</div>
			</aside>
		</>
	)
}

export default Aside
