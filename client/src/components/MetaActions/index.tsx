import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAccordionToggle } from 'react-bootstrap'
import { BsChat, BsEye, BsClock } from 'react-icons/bs'
import { BiLike } from 'react-icons/bi'

import {
	_Neo4jDateTime,
	useToggleSubscribeMutation,
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
	likesCount = 0,
	showLikes = false,
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
