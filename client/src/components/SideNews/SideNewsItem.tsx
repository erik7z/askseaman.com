import React from 'react'
import { Link } from 'react-router-dom'

export const SideNewsItem = () => {
	return (
		<div className='d-flex'>
			<div className='text'>
				<h5 className='heading'>
					<Link to='#'>What are the largest vessels in world?</Link>
				</h5>
				<div className='meta d-md-flex align-items-center'>
					<span>
						<i className='icon-user'></i>12 Subscribers
					</span>
					<span>
						<i className='icon-chat'></i>11 Answers
					</span>
				</div>
				<hr />
			</div>
		</div>
	)
}
