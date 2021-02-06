import React from 'react'
import { Link } from 'react-router-dom'

export const SideTagCloudBox = () => {
	return (
		<div className='sidebar-box'>
			<ul className='tagcloud'>
				<Link to='/' className='tag-cloud-link'>
					animals
				</Link>
				<Link to='/tag' className='tag-cloud-link'>
					human
				</Link>
				<Link to='/tag' className='tag-cloud-link'>
					people
				</Link>
				<Link to='/tag' className='tag-cloud-link'>
					cat
				</Link>
				<Link to='/tag' className='tag-cloud-link'>
					dog
				</Link>
				<Link to='/tag' className='tag-cloud-link'>
					nature
				</Link>
				<Link to='/tag' className='tag-cloud-link'>
					leaves
				</Link>
				<Link to='/tag' className='tag-cloud-link'>
					food
				</Link>
			</ul>
		</div>
	)
}
