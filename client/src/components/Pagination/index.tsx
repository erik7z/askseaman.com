import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { PAGINATION_PAGE_SIZE, PAGINATION_PAGES_VISIBLE } from './../../env'
import { paginate } from '../../lib/helpers'

interface IProps {
	totalItems?: number | null | undefined
	currentPage?: number
	resultsLimit?: number
	baseUrl?: string
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>
	setResultsLimit?: React.Dispatch<React.SetStateAction<number>>
	pagesVisible?: number
}

export const Pagination = ({
	totalItems = 0,
	currentPage = 0,
	resultsLimit = PAGINATION_PAGE_SIZE,
	pagesVisible = PAGINATION_PAGES_VISIBLE,
	baseUrl = '/',
	setCurrentPage,
	setResultsLimit = () => {},
}: IProps) => {
	const finalPageNumber = Math.ceil((totalItems as number) / resultsLimit)

	const pagination = paginate(
		totalItems as number,
		currentPage as number,
		resultsLimit as number,
		pagesVisible as number
	)

	const handleClick = (e: React.SyntheticEvent) => {
		e.preventDefault()
		setCurrentPage(parseInt(e.currentTarget.id))
	}

	const firstButtonText = currentPage < pagesVisible ? '1' : '|<'
	const showLastButton = currentPage <= finalPageNumber + 1 - pagesVisible

	return (totalItems as number) <= resultsLimit ? (
		<></>
	) : (
		<Row>
			<Col>
				<div className='block-27'>
					<ul>
						{
							<li className={currentPage === 0 ? 'active' : ''}>
								<Link
									to={`${baseUrl}?page-0`}
									onClick={handleClick}
									id={(0).toString()}
								>
									{firstButtonText}
								</Link>
							</li>
						}

						{pagination.pages.map((number) => {
							const urlStr = `${baseUrl}?page-${number}`
							const visibleNumber = number + 1
							const active = number === currentPage ? 'active' : ''
							const buttonText = visibleNumber

							return number >= finalPageNumber ? (
								''
							) : (
								<li key={urlStr} className={active}>
									<Link
										to={urlStr}
										onClick={handleClick}
										id={number.toString()}
									>
										{buttonText}
									</Link>
								</li>
							)
						})}

						{showLastButton && (
							<li>
								<Link
									to={`${baseUrl}?page-${finalPageNumber}`}
									onClick={handleClick}
									id={(finalPageNumber - 1).toString()}
								>
									&gt;|
								</Link>
							</li>
						)}
					</ul>
				</div>
			</Col>
		</Row>
	)
}
