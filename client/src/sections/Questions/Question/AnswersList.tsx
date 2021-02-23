import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { Card } from 'react-bootstrap'
import { BsBoxArrowInDown } from 'react-icons/bs'

import { Answer as TAnswer } from '../../../types/generated-frontend'

import { AnswerItem } from './AnswerItem'
import { ApolloError } from '@apollo/client'

interface IProps {
	answers: TAnswer[]
	loading?: boolean
	error?: ApolloError
}

export const AnswersList = ({ answers, loading, error }: IProps) => {
	if (loading) return <Skeleton count={20} />
	if (error) return <h1>Something went wrong</h1>

	if (!answers.length) {
		return (
			<Card
				border='warning'
				style={{
					width: '30rem',
					margin: ' 0 auto',
					float: 'none',
					marginBottom: '10px',
				}}
			>
				<Card.Header>No answers yet :(</Card.Header>
				<Card.Body>
					<Card.Text>
						Unfortunately there is no answers provided yet, but you can be the
						first one. Just write your answer in the form below{' '}
						<b>
							<BsBoxArrowInDown size='20px' color='cadetblue' />
						</b>
					</Card.Text>
				</Card.Body>
			</Card>
		)
	}

	return (
		<>
			{answers.map((answer) => (
				<AnswerItem key={answer?.nodeId} answer={answer as TAnswer} />
			))}
		</>
	)
}
