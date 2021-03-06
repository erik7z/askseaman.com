import React from 'react'
import Skeleton from 'react-loading-skeleton'

import { SideNewsItem } from './SideNewsItem'
import { useGetQuestions } from '../../lib/hooks'
import { _QuestionOrdering } from '../../types/generated-frontend'
import { SIDE_QUESTIONS_LIMIT } from '../../env'

export const SideNewsBox = () => {
	const { questionsList, loading, error } = useGetQuestions(
		0,
		SIDE_QUESTIONS_LIMIT,
		_QuestionOrdering.AnswersCountDesc
	)

	if (error) return <h3>Something went wrong</h3>

	return (
		<div className='sidebar-box '>
			<h3 className='sidebar-heading'>Top for last 24 hours</h3>

			{loading ? (
				<Skeleton count={25} />
			) : (
				<ul className='tagcloud'>
					{questionsList &&
						questionsList.map((question) => (
							<SideNewsItem question={question} />
						))}
				</ul>
			)}
		</div>
	)
}
