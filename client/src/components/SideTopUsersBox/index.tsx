import React from 'react'
import { Link } from 'react-router-dom'

export const SideTopUsersBox = () => {
	return (
		<div className='sidebar-box'>
			<h3 className='sidebar-heading'>Active Users</h3>
			<div className='sidebar-item d-flex'>
				<Link
					to='/user'
					className='author-avatar mr-2'
					style={{ backgroundImage: 'url(images/person_3.jpg)' }}
				></Link>
				<div className='wrapper'>
					<h5 className='author-name'>
						<Link to='/user'>Grisha Ptitseedov</Link>
					</h5>
					<div className='meta d-md-flex align-items-center'>
						<span>
							<i className='icon-help'></i>154 Questions
						</span>
						<span>
							<i className='icon-chat'></i>15 Answers
						</span>
					</div>
				</div>
			</div>
			<div className='sidebar-item d-flex'>
				<Link
					to='/user'
					className='author-avatar mr-2'
					style={{ backgroundImage: 'url(images/person_3.jpg)' }}
				></Link>
				<div className='wrapper'>
					<h4 className='author-name'>
						<Link to='/#'>Grisha Ptitseedov</Link>
					</h4>
					<div className='meta d-md-flex align-items-center'>
						<span>
							<i className='icon-help'></i>154 Questions
						</span>
						<span>
							<i className='icon-chat'></i>15 Answers
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}
