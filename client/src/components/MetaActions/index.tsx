import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAccordionToggle } from 'react-bootstrap'
import { BsChat, BsEye, BsClock } from 'react-icons/bs'
import { BiLike } from 'react-icons/bi'

import { _Neo4jDateTime } from '../../types/generated-frontend'
import { ApolloLazyQuery } from '../../types/frontend'
import { normalizeTime } from './../../lib/helpers'

interface IProps {
	accordionId?: string
	viewsCount?: number | null | undefined
	showViews?: boolean
	subscribersCount?: number | null | undefined
	showSubscribers?: boolean
	likesCount?: number | null | undefined
	showLikes?: boolean
	createdAt?: _Neo4jDateTime | null | undefined
	showComments?: boolean
	commentsCount?: number | null | undefined
	getComments?: ApolloLazyQuery
	commentsLoading?: boolean
}

export const MetaActions = ({
	accordionId,
	viewsCount = 0,
	showViews = false,
	subscribersCount = 0,
	showSubscribers = false,
	commentsCount = 0,
	showComments = false,
	getComments,
	commentsLoading,
	likesCount = 0,
	showLikes = false,
	createdAt,
}: IProps) => {
	const [isCommentListExpanded, setCommentListExpanded] = useState(false)

	const subscribersMeta = showSubscribers && (
		<span>
			<Link to='#' className='btn btn-sm btn-outline-primary mr-1'>
				Subscribe | <b>{subscribersCount} </b>
			</Link>
		</span>
	)

	const likesMeta = showLikes && (
		<span>
			<Link to='#' className=''>
				<BiLike /> Like | <b>{likesCount} </b>
			</Link>
		</span>
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

	const toggleCommentExpansion = useAccordionToggle(accordionId as string, () =>
		setCommentListExpanded(!isCommentListExpanded)
	)

	const commentsButtonClickEvent = (e: React.MouseEvent) => {
		getComments && !isCommentListExpanded && getComments()
		toggleCommentExpansion(e)
	}

	const commentsButton = accordionId ? (
		<Link to='#showcomments' onClick={commentsButtonClickEvent}>
			{commentsMeta}
		</Link>
	) : (
		commentsMeta
	)

	return (
		<div className='meta d-md-flex align-items-center'>
			{subscribersMeta}
			{commentsLoading ? <span>Loading...</span> : commentsButton}
			{viewsMeta}
			{likesMeta}
			{timeMeta}
		</div>
	)
}
