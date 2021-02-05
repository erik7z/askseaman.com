import React from 'react'
import { SideNewsItem } from './SideNewsItem'

export const SideNews = () => {
	return (
		<div className='sidebar-box '>
			<h3 className='sidebar-heading'>Top for last 24 hours</h3>
			<SideNewsItem />
		</div>
	)
}
