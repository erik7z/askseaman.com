import React from 'react'
import { Link } from 'react-router-dom'

const Aside = () => {
	return (
		<>
			<aside id='as-aside' className='js-fullheight'>
				<h1 id='as-logo'>
					<Link to='/' style={{ backgroundImage: 'url(images/bg_1.jpg)' }}>
						Ask <span>Seaman</span>
					</Link>
				</h1>
				<hr />
				<div className='text-center'>
					<Link to='/auth' className='btn btn-outline-success btn-sm px-5'>
						Sign In
					</Link>
					<hr />
				</div>
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
