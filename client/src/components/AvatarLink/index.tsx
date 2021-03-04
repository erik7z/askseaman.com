import React from 'react'
import { Link } from 'react-router-dom'
import { BLANK_AVATAR_URL } from '../../env'

import { typicSizes } from '../../types/frontend'

interface IProps {
	size: typicSizes
	avatarUrl?: string | null | undefined
}

export const AvatarLink = ({
	size,
	avatarUrl = '/images/avatar_512.png',
}: IProps) => {
	const fixedUrl =
		avatarUrl === null || avatarUrl === undefined || avatarUrl === ''
			? BLANK_AVATAR_URL
			: avatarUrl

	return (
		<Link
			to='#'
			className={'img author-avatar author-avatar-' + size}
			style={{
				backgroundImage: `url(${fixedUrl})`,
			}}
		></Link>
	)
}
