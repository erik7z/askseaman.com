import React from 'react'
import { Link } from 'react-router-dom'

export const SideAskBox = () => {
	return (
		<div className='sidebar-box text-center'>
			<Link to='ask-question.html' className='btn btn-warning px-5 py-2'>
				Ask Question
			</Link>
		</div>
	)
}
