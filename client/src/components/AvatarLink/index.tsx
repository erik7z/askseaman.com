import React from 'react'
import { Link } from 'react-router-dom'

import { typicSizes } from '../../types/frontend'

interface IProps {
	size: typicSizes
}

export const AvatarLink = ({ size }: IProps) => {
	return (
		<Link
			to='#'
			className={'img author-avatar author-avatar-' + size}
			style={{ backgroundImage: 'url(/images/avatar_512.png)' }}
		></Link>
	)
}
