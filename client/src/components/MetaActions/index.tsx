import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { useAccordionToggle } from 'react-bootstrap'
import { BsChat, BsEye, BsClock, BsFillPeopleFill } from 'react-icons/bs'
import { BiLike } from 'react-icons/bi'

import { _Neo4jDateTime } from '../../types/generated-frontend'
import { ApolloLazyQuery as TApolloLazyQuery } from '../../types/frontend'
import { normalizeTime } from './../../lib/helpers'
import { useToggleLike, useToggleSubscribe } from '../../lib/hooks'
import { CurrentUserContext } from '../../lib/contexts'

interface IProps {
	topicId: string
	showViews?: boolean
	viewsCount?: number | null | undefined

	canSubscribe?: boolean | null | undefined
	isSubscribed?: boolean | null | undefined
	subscribersCount?: number | null | undefined
	showSubscribers?: boolean

	canLike?: boolean | null | undefined
	isLiked?: boolean | null | undefined
	likesCount?: number | null | undefined
	showLikes?: boolean

	createdAt?: _Neo4jDateTime | null | undefined

	showComments?: boolean
	showCommentsButton?: boolean
	commentsCount?: number | null | undefined
	getComments?: TApolloLazyQuery
	commentsLoading?: boolean
}

export const MetaActions = ({
	topicId,
	viewsCount = 0,
	showViews = false,
	createdAt,

	canSubscribe = false,
	isSubscribed: isSubscribedInitial = false,
	showSubscribers = false,
	subscribersCount: subscribersCountInitial = 0,

	showComments = false,
	showCommentsButton = false,
	commentsCount = 0,
	commentsLoading,
	getComments,

	canLike = false,
	isLiked: isLikedInitial = false,
	showLikes = false,
	likesCount: likesCountInitial = 0,
}: IProps) => {
	const [currentUserState] = useContext(CurrentUserContext)

	const [isCommentListExpanded, setCommentListExpanded] = useState(false)

	const {
		handleSubscribe,
		subscribeStatus,
		toggleSubscribeLoading,
		toggleSubscribeConnErrors,
	} = useToggleSubscribe(topicId, subscribersCountInitial, isSubscribedInitial)
	if (toggleSubscribeConnErrors) console.log(toggleSubscribeConnErrors)

	const subscribeStatusClass = subscribeStatus.isSubscribed
		? ' btn-primary'
		: ' btn-outline-primary'

	const subscribersButton =
		currentUserState.isLoggedIn && canSubscribe ? (
			<span>
				<Link
					to='#subscribe'
					className={'btn btn-sm mr-1' + subscribeStatusClass}
					onClick={handleSubscribe}
				>
					Subscribe | <b>{subscribeStatus.subscribersCount} </b>
				</Link>
			</span>
		) : (
			<span>
				<BsFillPeopleFill /> <b>{subscribeStatus.subscribersCount}</b>{' '}
				Subscribers
			</span>
		)

	const subscribersMeta = showSubscribers && subscribersButton

	const {
		handleLike,
		likeStatus,
		toggleLikeLoading,
		toggleLikeConnErrors,
	} = useToggleLike(topicId, likesCountInitial, isLikedInitial)
	if (toggleLikeConnErrors) console.log(toggleLikeConnErrors)

	const likeButton =
		currentUserState.isLoggedIn && canLike ? (
			<span>
				<Link
					to='#like'
					className={likeStatus.isLiked ? '' : 'text-gray'}
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
		) : (
			<span>
				<BiLike /> <b>{likeStatus.likesCount} </b> Likes
			</span>
		)

	const likesMeta = showLikes && likeButton

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
