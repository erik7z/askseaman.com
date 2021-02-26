import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAccordionToggle } from 'react-bootstrap'
import { BsChat, BsEye, BsClock } from 'react-icons/bs'
import { BiLike } from 'react-icons/bi'

import {
	_Neo4jDateTime,
	useToggleSubscribeMutation,
	useToggleLikeMutation,
} from '../../types/generated-frontend'
import { ApolloLazyQuery } from '../../types/frontend'
import { normalizeTime } from './../../lib/helpers'

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
	getComments?: ApolloLazyQuery
	commentsLoading?: boolean
}

export const MetaActions = ({
	topicId,
	viewsCount = 0,
	showViews = false,
	subscribersCount: subscribersCountInitial = 0,
	showSubscribers = false,
	commentsCount = 0,
	showComments = false,
	showCommentsButton = false,
	getComments,
	commentsLoading,
	showLikes = false,
	likesCount: likesCountInitial = 0,
	canLike: canLikeInitial = false,
	createdAt,
}: IProps) => {
	const [isCommentListExpanded, setCommentListExpanded] = useState(false)

	const [subscribersCount, setSubscribersCount] = useState(
		subscribersCountInitial
	)

	const [
		toggleSubscribeMutation,
		{
			data: toggleSubscribeResponse,
			error: toggleSubscribeConnErrors,
			loading: toggleSubscribeLoading,
		},
	] = useToggleSubscribeMutation({
		variables: {
			data: {
				nodeId: topicId,
			},
		},
	})

	const handleSubscribe = (e: React.SyntheticEvent) => {
		e.preventDefault()
		toggleSubscribeMutation()
	}

	useEffect(() => {
		if (toggleSubscribeResponse) {
			setSubscribersCount(
				toggleSubscribeResponse.ToggleSubscribe.subscribersCount as number
			)
		}
	}, [toggleSubscribeResponse])

	const [likeStatus, setLikeStatus] = useState({
		canLike: canLikeInitial,
		likesCount: likesCountInitial,
	})

	const [
		toggleLikeMutation,
		{
			data: toggleLikeResponse,
			error: toggleLikeConnErrors,
			loading: toggleLikeLoading,
		},
	] = useToggleLikeMutation({
		variables: {
			data: {
				nodeId: topicId,
			},
		},
	})

	if (toggleLikeConnErrors) console.log(toggleLikeConnErrors)

	useEffect(() => {
		if (toggleLikeResponse) {
			setLikeStatus({
				likesCount: toggleLikeResponse.ToggleLike.likesCount as number,
				canLike: toggleLikeResponse.ToggleLike.canLike as boolean,
			})
		}
	}, [toggleLikeResponse])

	const handleLike = (e: React.SyntheticEvent) => {
		e.preventDefault()
		toggleLikeMutation()
	}

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

	if (toggleSubscribeConnErrors) console.log(toggleSubscribeConnErrors)

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
