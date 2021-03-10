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

import { PAGINATION_PAGE_SIZE } from '../../env'
import {
	_QuestionOrdering,
	useQuestionsListLazyQuery,
	Question as TQuestion,
} from '../../types/generated-frontend'

const QuestionSearch = () => {
	const [search, setSearch] = useState('')
	const [isFocused, setIsFocused] = useState(false)
	const [questionsResults, setQuestionResults] = useState<TQuestion[]>()
	const [show, setShow] = useState(false)

	const [getQuestions, { data }] = useQuestionsListLazyQuery({
		variables: {
			orderBy: [_QuestionOrdering.SubscribersCountDesc],
			first: PAGINATION_PAGE_SIZE,
			offset: 0,
			filter: {
				title_regexp: '(?i)' + search + '.*',
			},
		},
	})

	useEffect(() => {
		console.log('searchQuestions useffect')
		const notEmpty = search && search.length > 2
		const haveResults = data?.Question && data?.Question.length

		if (notEmpty) getQuestions()

		if (!notEmpty || !haveResults || !isFocused) {
			setShow(false)
			setQuestionResults([])
		}

		if (notEmpty && haveResults && isFocused) {
			setQuestionResults(data?.Question as TQuestion[])
			setShow(true)
		}
	}, [getQuestions, search, data?.Question, show, isFocused])

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
											{questionsResults &&
												questionsResults.map((question) => (
													<ListGroup.Item
														key={question.nodeId}
														action
														href={`/question/${question.nodeId}`}
														className='pl-2'
													>
														<BsQuestionCircle /> {question.title}
													</ListGroup.Item>
												))}
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
									onBlur={() => setIsFocused(false)}
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
