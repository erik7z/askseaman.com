import React, { useState, useEffect } from 'react'
import {
	Row,
	Col,
	Form,
	Popover,
	OverlayTrigger,
	ListGroup,
} from 'react-bootstrap'
import { BsQuestionCircle } from 'react-icons/bs'

import { PAGINATION_PAGE_SIZE } from '../../env'
import {
	_QuestionOrdering,
	useQuestionsListLazyQuery,
	Question as TQuestion,
} from '../../types/generated-frontend'

const QuestionSearch = () => {
	const [search, setSearch] = useState('')
	const [questionsResults, setQuestionResults] = useState<TQuestion[]>()
	const [show, setShow] = useState(false)

	const [getQuestions, { data, loading, error }] = useQuestionsListLazyQuery({
		variables: {
			orderBy: [_QuestionOrdering.SubscribersCountDesc],
			first: PAGINATION_PAGE_SIZE,
			offset: 0,
			filter: {
				title_regexp: `(?i)${search}.*`,
			},
		},
		fetchPolicy: 'cache-and-network',
	})

	useEffect(() => {
		console.log('searchQuestions useffect')
		const notEmpty = search && search.length > 3
		const haveResults = data?.Question && data?.Question.length

		if (notEmpty) getQuestions()

		if (!notEmpty || !haveResults || error || loading) {
			setShow(false)
			setQuestionResults([])
		}

		if (notEmpty && haveResults) {
			setQuestionResults(data?.Question as TQuestion[])
			setShow(true)
		}
	}, [search, data?.Question, getQuestions, show, error, loading])

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value)
	}

	const popover = (
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
	)

	return (
		<Row>
			<Col md={12}>
				<Form className='search-form'>
					<Form.Group className='form-group'>
						<span className='icon icon-search'></span>
						<OverlayTrigger
							placement='bottom-start'
							transition={true}
							overlay={popover}
							show={show}
						>
							<Form.Control
								type='text'
								placeholder='Search for question or #tag'
								onChange={handleSearch}
							/>
						</OverlayTrigger>
					</Form.Group>
				</Form>
			</Col>
		</Row>
	)
}

export default React.memo(QuestionSearch)
