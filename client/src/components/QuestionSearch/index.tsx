import React, { useState, useEffect, useCallback } from 'react'
import {
	Row,
	Col,
	Form,
	Popover,
	OverlayTrigger,
	ListGroup,
	InputGroup,
} from 'react-bootstrap'
import { BsQuestionCircle } from 'react-icons/bs'
import { BiSearchAlt } from 'react-icons/bi'
import { IoPricetagsOutline } from 'react-icons/io5'

import { PAGINATION_PAGE_SIZE } from '../../globals'
import {
	_QuestionOrdering,
	_TagOrdering,
	useQuestionsListLazyQuery,
	useTagsListLazyQuery,
	Question as TQuestion,
	Tag as TTag,
} from '../../types/generated-frontend'

const QuestionSearch = () => {
	const [search, setSearch] = useState('')
	const [isFocused, setIsFocused] = useState(false)

	const [questionsResults, setQuestionResults] = useState<TQuestion[]>()
	const [tagResults, setTagResults] = useState<TTag[]>()
	const [show, setShow] = useState(true)

	const [getQuestions, { data: QuestionsData }] = useQuestionsListLazyQuery({
		variables: {
			orderBy: [_QuestionOrdering.SubscribersCountDesc],
			first: PAGINATION_PAGE_SIZE,
			offset: 0,
			filter: {
				title_regexp: '(?i).*' + search + '.*',
			},
		},
	})

	const [getTags, { data: TagsData }] = useTagsListLazyQuery({
		variables: {
			orderBy: [_TagOrdering.QuestionsCountDesc],
			first: 3,
			offset: 0,
			filter: {
				name_regexp: '(?i).*' + search.toLocaleUpperCase() + '.*',
			},
		},
	})

	useEffect(() => {
		// console.log('searchQuestions useffect')
		const notEmpty = search && search.length > 2
		const haveQuestionResults =
			QuestionsData?.Question && QuestionsData?.Question.length

		const haveTagsResults = TagsData?.Tag && TagsData?.Tag.length

		if (notEmpty) getQuestions()
		if (notEmpty) getTags()

		if (!notEmpty || (!haveQuestionResults && !haveTagsResults) || !isFocused) {
			setShow(false)
			setQuestionResults([])
			setTagResults([])
		}

		if (notEmpty && haveQuestionResults && isFocused) {
			setQuestionResults(QuestionsData?.Question as TQuestion[])
			setShow(true)
		}

		if (notEmpty && haveTagsResults && isFocused) {
			setTagResults(TagsData?.Tag as TTag[])
			setShow(true)
		}
	}, [
		getQuestions,
		getTags,
		search,
		QuestionsData?.Question,
		TagsData?.Tag,
		show,
		isFocused,
	])

	const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value)
	}, [])

	return (
		<Row>
			<Col md={12}>
				<Form className='search-form'>
					<Form.Group className='form-group'>
						<span className='icon icon-search'></span>
						<OverlayTrigger
							placement='bottom-start'
							overlay={
								<Popover id='search-popover'>
									<Popover.Content>
										<ListGroup>
											{questionsResults && questionsResults.length ? (
												<>
													<ListGroup.Item className='pl-2 py-1 text-center'>
														<i>
															<b>Questions results:</b>
														</i>
													</ListGroup.Item>
													{questionsResults.map((question) => (
														<ListGroup.Item
															key={question.nodeId}
															action
															href={`/question/${question.nodeId}`}
															className='pl-2'
														>
															<BsQuestionCircle /> {question.title}
														</ListGroup.Item>
													))}
												</>
											) : null}
											{tagResults && tagResults.length ? (
												<>
													<ListGroup.Item className='pl-2 py-1 text-center'>
														<i>
															<b>Tags results:</b>
														</i>
													</ListGroup.Item>
													{tagResults.map((tag) => (
														<ListGroup.Item
															key={tag.nodeId}
															action
															href={`/tag/${tag.name}`}
															className='pl-2'
														>
															<IoPricetagsOutline /> {tag.name}
														</ListGroup.Item>
													))}
												</>
											) : null}
										</ListGroup>
									</Popover.Content>
								</Popover>
							}
							show={show}
						>
							<InputGroup>
								<InputGroup.Prepend>
									<InputGroup.Text id='search-prepend'>
										<BiSearchAlt />
									</InputGroup.Text>
								</InputGroup.Prepend>
								<Form.Control
									type='text'
									placeholder='Search for question or #tag'
									onChange={handleSearch}
									onBlur={() =>
										setTimeout(() => {
											setIsFocused(false)
										}, 200)
									}
									onFocus={() => setIsFocused(true)}
								/>
							</InputGroup>
						</OverlayTrigger>
					</Form.Group>
				</Form>
			</Col>
		</Row>
	)
}

export default React.memo(QuestionSearch)
