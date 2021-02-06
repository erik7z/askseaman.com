import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'

export const MainSorting = () => {
	return (
		<div className='main-sorting'>
			<ButtonGroup size='sm' role='group' aria-label='Sorting & filtering'>
				<Button type='button' variant='outline-primary'>
					By Answers
				</Button>
				<Button type='button' variant='outline-secondary'>
					By Questions
				</Button>
			</ButtonGroup>
			<ButtonGroup size='sm' className='sorting-group ' aria-label='Sorting'>
				<Button id='sort-direction' variant='outline-secondary'>
					Sort
					<i className='icon-arrow-down'></i>
				</Button>
			</ButtonGroup>
		</div>
	)
}
