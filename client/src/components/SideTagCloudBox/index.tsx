import React from 'react'
import { Link } from 'react-router-dom'
import { TAGCLOUD_LIMIT } from '../../env'
import Skeleton from 'react-loading-skeleton'
import { useGetTags } from '../../lib/hooks'

import { _TagOrdering } from '../../types/generated-frontend'

export const SideTagCloudBox = () => {
	const { tagsList, loading, error } = useGetTags(
		0,
		TAGCLOUD_LIMIT,
		_TagOrdering.QuestionsCountDesc
	)

	if (error) return <h3>Something went wrong</h3>

	return (
		<div className='sidebar-box'>
			<h3 className='sidebar-heading'>Top tags</h3>
			{loading ? (
				<Skeleton count={25} />
			) : (
				<ul className='tagcloud'>
					{tagsList &&
						tagsList.map((tag) => (
							<Link
								key={tag.nodeId}
								to={`/tag/${tag.name}`}
								className='tag-cloud-link'
							>
								{tag.name}
							</Link>
						))}
				</ul>
			)}
		</div>
	)
}
