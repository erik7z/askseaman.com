import React from 'react'
import { Link } from 'react-router-dom'
import { Accordion } from 'react-bootstrap'
import { BsChat, BsEye, BsClock } from 'react-icons/bs'

import { _Neo4jDateTime } from '../../__generated/graphql'
import { normalizeTime } from './../../lib/helpers'

interface IProps {
	toggleEventKey?: string
	subscribersCount?: number | null | undefined
	viewsCount?: number | null | undefined
	commentsCount?: number | null | undefined
	createdAt?: _Neo4jDateTime | null | undefined
}

export const MetaActions = ({
	toggleEventKey,
	subscribersCount,
	viewsCount,
	commentsCount,
	createdAt,
}: IProps) => {
	const subscribersMeta = subscribersCount && (
		<Link to='#' className='btn btn-sm btn-outline-primary mr-1'>
			Subscribe | <b>{subscribersCount} </b>
		</Link>
	)

	const commentsMeta = commentsCount !== null && commentsCount !== undefined && (
		<span>
			<BsChat /> <b>{commentsCount}</b> Comments
		</span>
	)

	const viewsMeta = viewsCount !== null && viewsCount !== undefined && (
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
