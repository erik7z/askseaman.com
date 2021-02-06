import React from 'react'
import { Link } from 'react-router-dom'

export const TagsInlineList = () => {
	return (
		<div className='tags'>
			<span className='tag'>
				<Link to='single.html'>
					<i className='icon-tag'></i> CAPTAIN
				</Link>
			</span>
			<span className='tag'>
				<Link to='single.html'>
					<i className='icon-tag'></i> BULK CARRIER
				</Link>
			</span>
			<span className='tag'>
				<Link to='single.html'>
					<i className='icon-tag'></i> MANAGEMENT
				</Link>
			</span>
		</div>
	)
}
