import React from 'react'
import { Link } from 'react-router-dom'

import { typicSizes } from '../../types/globals'

interface IProps {
	size: typicSizes
}

export const AvatarLink = ({ size }: IProps) => {
	return (
		<Link
			to='#'
			className={'img author-avatar author-avatar-' + size}
			style={{ backgroundImage: 'url(/images/bg_1.jpg)' }}
		></Link>
	)
}
