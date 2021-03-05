import React, { useState } from 'react'
import { Row } from 'react-bootstrap'

import Skeleton from 'react-loading-skeleton'

import Section from '../../components/Layout/Section'
import SideBar from '../../components/Layout/SideBar'

import {
	TagCardItem,
	SideAskBox,
	SideAdvertBox,
	SideNewsBox,
	Pagination,
	MainSorting,
} from '../../components'

import { _TagOrdering } from '../../types/generated-frontend'
import { PAGINATION_PAGE_SIZE } from './../../env'
import { useGetTags } from '../../lib/hooks'

export const Tags = () => {
	const [resultsLimit, setResultsLimit] = useState(PAGINATION_PAGE_SIZE)
	const [currentPage, setCurrentPage] = useState(0)
	const [orderBy, setOrderBy] = useState(_TagOrdering.QuestionsCountDesc)

	const { tagsList, tagsCount, loading, error } = useGetTags(
		currentPage,
		resultsLimit,
		orderBy
	)

	const loadingMessage = loading ? <Skeleton count={25} /> : null
	const errorMessage = error ? <h4>Error occured. Try again later :(</h4> : null

	return (
		<>
			<Section
				sectionName='Tags'
				sectionTitle='All'
				sectionClass='section-tags-list'
			>
				{/* <MainSorting /> */}
				{errorMessage}
				{loadingMessage}
				<Row className='tags-list text-center'>
					{tagsList && (
						<>
							{tagsList.map((tag) => {
								return tag ? <TagCardItem key={tag.nodeId} tag={tag} /> : null
							})}
						</>
					)}
				</Row>

				<Pagination
					currentPage={currentPage}
					resultsLimit={resultsLimit}
					totalItems={tagsCount}
					baseUrl='/tags'
					setCurrentPage={setCurrentPage}
					setResultsLimit={setResultsLimit}
				/>
			</Section>

			<SideBar>
				<SideAskBox />
				<SideAdvertBox />
				<SideNewsBox />
			</SideBar>
		</>
	)
}
