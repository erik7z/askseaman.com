import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'

interface IProps<SortingType> {
	orderBy: SortingType
	sortHandler: React.Dispatch<React.SetStateAction<SortingType>>
	sortsList: {
		title: string
		orderBy: SortingType
	}[]
}

export function MainSorting<SortingType>({
	orderBy,
	sortsList,
	sortHandler,
}: IProps<SortingType>) {
	return (
		<div className='main-sorting'>
			<ButtonGroup size='sm' role='group' aria-label='Sorting & filtering'>
				{sortsList.map((sort) => (
					<Button
						key={sort.title}
						type='button'
						variant={
							orderBy === sort.orderBy ? 'outline-primary' : 'outline-secondary'
						}
						onClick={() => sortHandler(sort.orderBy)}
					>
						{sort.title}
					</Button>
				))}
			</ButtonGroup>
		</div>
	)
}
