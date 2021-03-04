import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { typicSizes } from '../../types/frontend'
import { CurrentUserContext } from '../../lib/contexts'

interface IProps {
	size: typicSizes
}

export const AvatarLink = ({ size }: IProps) => {
	const [currentUserState] = useContext(CurrentUserContext)
	const { currentUser } = currentUserState

	const avatar_url =
		currentUser.avatar && currentUser.avatar !== ''
			? currentUser.avatar
			: '/images/avatar_512.png'

	return (
		<Link
			to='#'
			className={'img author-avatar author-avatar-' + size}
			style={{
				backgroundImage: `url(${avatar_url})`,
			}}
		></Link>
	)
}
