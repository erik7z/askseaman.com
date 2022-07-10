import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { BsGear, BsBoxArrowRight } from 'react-icons/bs'

import { AvatarLink } from '../..'
import { ucFirstLetter } from '../../../lib/helpers'

import { ActionType } from '../../../lib/contexts/currentUser'
import { User } from '../../../types/generated-frontend'

interface IProps {
	userDispatch: React.Dispatch<ActionType>
	currentUser: User
}

export const AuthModule = ({ currentUser, userDispatch }: IProps) => {
	return (
		<Row className='auth-module'>
			<Col md={3} className='text-right pr-0 pt-1'>
				<AvatarLink
					size='md'
					avatarUrl={currentUser.avatar}
					userId={currentUser.nodeId}
				/>
			</Col>
			<Col md={7}>
				<Link to={`/user/${currentUser.nodeId}`} className='text-secondary'>
					<b>
						{ucFirstLetter(currentUser.name)}{' '}
						{ucFirstLetter(currentUser.surname)}
					</b>
				</Link>
				<br />

				<small>{currentUser.rank && ucFirstLetter(currentUser.rank)}</small>
			</Col>
			<Col md={1} className='pt-1'>
				<span className='text-secondary'>
					<Link to='/my/settings' className='text-secondary'>
						<BsGear />
					</Link>
				</span>
				<br />
				<Link
					to='#'
					className='text-secondary'
					onClick={() =>
						userDispatch({
							type: 'SIGN_OUT',
						})
					}
				>
					<BsBoxArrowRight />
				</Link>
			</Col>
			<Col md={12}>
				<hr />
			</Col>
		</Row>
	)
}
