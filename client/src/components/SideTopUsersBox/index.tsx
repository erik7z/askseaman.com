import React from 'react'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import { BiChat, BiHelpCircle } from 'react-icons/bi'

import { useGetUsers } from '../../lib/hooks'
import { _UserOrdering } from '../../types/generated-frontend'

import { SIDE_USERS_LIMIT } from './../../env'
import { AvatarLink } from './../AvatarLink/index'

export const SideTopUsersBox = () => {
	const { usersList, loading, error } = useGetUsers(
		0,
		SIDE_USERS_LIMIT,
		_UserOrdering.AnswersCountDesc
	)

	if (error) return <h3>Something went wrong</h3>

	return (
		<div className='sidebar-box'>
			<h3 className='sidebar-heading'>Active Users</h3>

			{loading ? (
				<Skeleton count={25} />
			) : (
				<ul className='tagcloud'>
					{usersList &&
						usersList.map((user) => (
							<div className='sidebar-item d-flex'>
								<AvatarLink
									size='md'
									avatarUrl={user.avatar}
									userId={user.nodeId}
								/>
								<div className='wrapper'>
									<h5 className='author-name'>
										<Link to={`/user/${user.nodeId}`}>
											{user.name} {user.surname}
										</Link>
									</h5>
									<div className='meta d-md-flex align-items-center'>
										<span>
											<BiChat /> {user.answersCount} Answers
										</span>
										<span>
											<BiHelpCircle /> {user.questionsCount} Questions
										</span>
									</div>
								</div>
							</div>
						))}
				</ul>
			)}
		</div>
	)
}
