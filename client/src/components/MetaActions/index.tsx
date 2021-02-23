import React from 'react'
import { Link } from 'react-router-dom'
import { Accordion } from 'react-bootstrap'
import { BsChat, BsEye, BsClock } from 'react-icons/bs'

import { _Neo4jDateTime } from '../../types/generated-frontend'
import { normalizeTime } from './../../lib/helpers'

interface IProps {
	toggleEventKey?: string
	viewsCount?: number | null | undefined
	showViews?: boolean
	subscribersCount?: number | null | undefined
	showSubscribers?: boolean
	commentsCount?: number | null | undefined
	showComments?: boolean
	createdAt?: _Neo4jDateTime | null | undefined
}

export const MetaActions = ({
	toggleEventKey,
	viewsCount = 0,
	showViews = false,
	subscribersCount = 0,
	showSubscribers = false,
	commentsCount = 0,
	showComments = false,
	createdAt,
}: IProps) => {
	const subscribersMeta = showSubscribers && (
		<Link to='#' className='btn btn-sm btn-outline-primary mr-1'>
			Subscribe | <b>{subscribersCount} </b>
		</Link>
	)

	const commentsMeta = showComments && (
		<span>
			<BsChat /> <b>{commentsCount}</b> Comments
		</span>
	)

	const viewsMeta = showViews && (
		<span>
			<BsEye /> <b>{viewsCount}</b> Views
		</span>
	)

	const timeMeta = createdAt ? (
		<span>
			<BsClock /> {normalizeTime(createdAt)}
		</span>
	) : null

	const commentsButton = toggleEventKey ? (
		<Accordion.Toggle as={Link} to='#' eventKey={toggleEventKey}>
			{commentsMeta}
		</Accordion.Toggle>
	) : (
		commentsMeta
	)

	return (
		<div className='meta d-md-flex align-items-center'>
			{subscribersMeta}
			{commentsButton}
			{viewsMeta}
			{timeMeta}
		</div>
	)
}
