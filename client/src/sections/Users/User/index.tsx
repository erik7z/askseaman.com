import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'

import { Row, Jumbotron, ListGroup } from 'react-bootstrap'
import {
	SideAskBox,
	SideAdvertBox,
	SideNewsBox,
	TagCardItem,
	AvatarLink,
} from '../../../components'

import Section from '../../../components/Layout/Section'
import SideBar from '../../../components/Layout/SideBar'
import { useGetUser } from '../../../lib/hooks'

export const User = () => {
	const { userId } = useParams<{ userId: string }>()

	const { user, loading, error } = useGetUser(userId)

	const errorMessage = error ? <h4>Error occured. Try again later :(</h4> : null

	return (
		<>
			<Section
				sectionName='Users'
				sectionTitle={`${user?.name} ${user?.surname}`}
				sectionClass='section-user-page'
			>
				{!user || loading ? (
					<Skeleton count={25} />
				) : (
					<>
						{errorMessage}
						<Jumbotron className='text-center'>
							<AvatarLink size='lg' avatarUrl={user?.avatar} userId={userId} />
							<h3>
								{user?.name} {user?.surname}
							</h3>
							<p className='lead'>Master</p>

							<ListGroup horizontal className='justify-content-center'>
								<ListGroup.Item>
									<Link to='/questions'>
										<b>{user?.answersCount}</b> <br />
										Answers
									</Link>
								</ListGroup.Item>
								<ListGroup.Item className='text-success'>
									<b>{user?.questionsSolvedCount}</b> <br />
									Solved Problems
								</ListGroup.Item>
								<ListGroup.Item>
									<Link to='/users'>
										<b>{user?.questionsCount}</b> <br />
										Questions
									</Link>
								</ListGroup.Item>
							</ListGroup>
							<hr />
							<p>{user?.description}</p>

							<h5>Contacts:</h5>
							<dl className='row text-left'>
								<dt className='col-sm-3'>E-mail:</dt>
								<dd className='col-sm-9'>
									<Link to={`mailto:${user?.email}`}>{user?.email}</Link>
								</dd>
								<dt className='col-sm-3'>Location:</dt>
								<dd className='col-sm-9'>{user?.location}</dd>
							</dl>
						</Jumbotron>

						<h5 className='module-header text-right'>Favorite tags &lt;</h5>
						<hr className='hr-header hr-bold' />
						<Row className='tags-list text-center'>
							{user?.favoriteTags && (
								<>
									{user.favoriteTags.map((tag) => {
										return tag ? (
											<TagCardItem key={tag.nodeId} tag={tag} />
										) : null
									})}
								</>
							)}
						</Row>
					</>
				)}
			</Section>

			<SideBar>
				<SideAskBox />
				<SideAdvertBox />
				<SideNewsBox />
			</SideBar>
		</>
	)
}
