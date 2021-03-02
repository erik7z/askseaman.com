import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAccordionToggle } from 'react-bootstrap'
import { BsChat, BsEye, BsClock } from 'react-icons/bs'
import { BiLike } from 'react-icons/bi'

import { _Neo4jDateTime } from '../../types/generated-frontend'
import { ApolloLazyQuery as TApolloLazyQuery } from '../../types/frontend'
import { normalizeTime } from './../../lib/helpers'
import { useToggleLike, useToggleSubscribe } from '../../lib/hooks'

interface IProps {
	topicId: string
	viewsCount?: number | null | undefined
	showViews?: boolean
	subscribersCount?: number | null | undefined
	showSubscribers?: boolean
	likesCount?: number | null | undefined
	showLikes?: boolean
	canLike?: boolean | null | undefined
	createdAt?: _Neo4jDateTime | null | undefined
	showComments?: boolean
	showCommentsButton?: boolean
	commentsCount?: number | null | undefined
	getComments?: TApolloLazyQuery
	commentsLoading?: boolean
}

export const MetaActions = ({
	topicId,
	getComments,
	viewsCount = 0,
	showViews = false,
	subscribersCount: subscribersCountInitial = 0,
	showSubscribers = false,
	commentsCount = 0,
	showComments = false,
	showCommentsButton = false,
	commentsLoading,
	showLikes = false,
	likesCount: likesCountInitial = 0,
	canLike: canLikeInitial = false,
	createdAt,
}: IProps) => {
	const [isCommentListExpanded, setCommentListExpanded] = useState(false)

	const {
		handleSubscribe,
		subscribersCount,
		toggleSubscribeLoading,
		toggleSubscribeConnErrors,
	} = useToggleSubscribe(topicId, subscribersCountInitial)
	if (toggleSubscribeConnErrors) console.log(toggleSubscribeConnErrors)

	const subscribersMeta = showSubscribers && (
		<span>
			<Link
				to='#subscribe'
				className='btn btn-sm btn-outline-primary mr-1'
				onClick={handleSubscribe}
			>
				Subscribe | <b>{subscribersCount} </b>
			</Link>
		</span>
	)

	const {
		handleLike,
		likeStatus,
		toggleLikeLoading,
		toggleLikeConnErrors,
	} = useToggleLike(topicId, likesCountInitial, canLikeInitial)
	if (toggleLikeConnErrors) console.log(toggleLikeConnErrors)

	const likesMeta = showLikes && (
		<span>
			<Link
				to='#like'
				className={likeStatus.canLike ? 'text-gray' : ''}
				onClick={handleLike}
			>
				{toggleLikeLoading ? (
					'Loading...'
				) : (
					<>
						<BiLike /> Like | <b>{likeStatus.likesCount} </b>
					</>
				)}
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

	const toggleCommentExpansion = useAccordionToggle(topicId as string, () =>
		setCommentListExpanded(!isCommentListExpanded)
	)

	const commentsButtonClickEvent = (e: React.MouseEvent) => {
		getComments && !isCommentListExpanded && getComments()
		toggleCommentExpansion(e)
	}

	const commentsButton = showCommentsButton ? (
		<Link to='#showcomments' onClick={commentsButtonClickEvent}>
			{commentsMeta}
		</Link>
	) : (
		commentsMeta
	)

	return (
		<div className='meta d-md-flex align-items-center'>
			{toggleSubscribeLoading ? <span>Loading...</span> : subscribersMeta}
			{commentsLoading ? <span>Loading...</span> : commentsButton}
			{viewsMeta}
			{likesMeta}
			{timeMeta}
		</div>
	)
}
