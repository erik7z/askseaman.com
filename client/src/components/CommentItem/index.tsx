import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { AvatarLink } from '../'

import { MetaActions } from './../MetaActions'
import { Comment as TComment } from '../../types/generated-frontend'

interface IProps {
	comment: TComment
}

export const CommentItem = ({ comment }: IProps) => {
	return (
		<Row className='comment-item'>
			<Col md={11} xs={10}>
				<div className='text-right author'>
					<h5 className='author-name'>
						<Link to={`/user/${comment.author?.nodeId}`}>
							{comment.author?.name}
						</Link>
					</h5>
					<span className='author-position'>{comment.author?.rank}</span>
				</div>
			</Col>
			<Col md={1} xs={2} className='pl-0'>
				<AvatarLink size='md' />
			</Col>
			<div className='col-12'>
				<p className='post-item-text'>{comment.text}</p>

				<MetaActions
					topicId={comment.nodeId}
					showSubscribers={false}
					showViews={false}
					showComments={false}
					showLikes={true}
					canLike={comment.canLike}
					isLiked={comment.isLiked}
					likesCount={comment.likesCount}
					createdAt={comment.createdAt}
				/>
			</div>
		</Row>
	)
}
