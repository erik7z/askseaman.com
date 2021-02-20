import React from 'react'
import { Link } from 'react-router-dom'
import { BsTag } from 'react-icons/bs'
import { Tag as TTag } from '../../__generated/graphql'

export const TagsInlineList = ({
	tagsList = [],
	questionId,
}: {
	tagsList: TTag[]
	questionId: string
}) => {
	return (
		<div className='tags'>
			{tagsList &&
				tagsList.map((tag: TTag) => {
					return (
						<span className='mr-2 tag' key={questionId + tag.nodeId}>
							<Link to={`/tag/${tag.name}`}>
								<BsTag /> {tag.name}
							</Link>
						</span>
					)
				})}
		</div>
	)
}
