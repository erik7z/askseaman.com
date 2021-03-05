import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
// import { BsArrowUp } from 'react-icons/bs'

import { _QuestionOrdering } from '../../types/generated-frontend'

interface IProps {
	orderBy: _QuestionOrdering
	setOrderBy: React.Dispatch<React.SetStateAction<_QuestionOrdering>>
}

export const MainSorting = ({ orderBy, setOrderBy }: IProps) => {
	return (
		<div className='main-sorting'>
			{/* <ButtonGroup size='sm' aria-label='Sorting'>
				<Button id='sort-direction' variant='outline-secondary'>
					Sort
					<BsArrowUp />
				</Button>
			</ButtonGroup> */}
			<ButtonGroup
				size='sm'
				role='group'
				className='sorting-group '
				aria-label='Sorting & filtering'
			>
				<Button
					type='button'
					variant={
						orderBy === _QuestionOrdering.TimestampDesc
							? 'outline-primary'
							: 'outline-secondary'
					}
					onClick={() => setOrderBy(_QuestionOrdering.TimestampDesc)}
				>
					Newest
				</Button>
				<Button
					type='button'
					variant={
						orderBy === _QuestionOrdering.AnswersCountDesc
							? 'outline-primary'
							: 'outline-secondary'
					}
					onClick={() => setOrderBy(_QuestionOrdering.AnswersCountDesc)}
				>
					Most Answered
				</Button>
				<Button
					type='button'
					variant={
						orderBy === _QuestionOrdering.CommentsCountDesc
							? 'outline-primary'
							: 'outline-secondary'
					}
					onClick={() => setOrderBy(_QuestionOrdering.CommentsCountDesc)}
				>
					Most Commented
				</Button>
			</ButtonGroup>
		</div>
	)
}
