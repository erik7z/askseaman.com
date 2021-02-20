import React from 'react'
import { Link } from 'react-router-dom'
import { Accordion } from 'react-bootstrap'

interface IProps {
	toggleEventKey?: string
	subscribersCount?: number | null | undefined
	viewsCount?: number | null | undefined
	commentsCount?: number | null | undefined
}

export const MetaActions = ({
	toggleEventKey,
	subscribersCount,
	viewsCount,
	commentsCount,
}: IProps) => {
	const subscribersMeta = (
		<Link to='#' className='btn btn-sm btn-outline-primary mr-1'>
			Subscribe | <b>{subscribersCount ? subscribersCount : 0} </b>
		</Link>
	)

	const commentsMeta = (
		<span>
			<i className='icon-comments-o'></i>
			<b>{commentsCount ? commentsCount : 0}</b> Comments
		</span>
	)

	const viewsMeta = (
		<span>
			<i className='icon-eye'></i>
			{viewsCount ? viewsCount : 0} Views
		</span>
	)

	const timeMeta = (
		<span>
			<i className='icon-clock-o'></i>15 Minutes ago
		</span>
	)

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
