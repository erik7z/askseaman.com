import React from 'react'

import { Answer as TAnswer } from './../../__generated/graphql'

import { AnswerItem } from './AnswerItem'
import { ApolloError } from '@apollo/client'

interface IProps {
	answers: TAnswer[]
	loading?: boolean
	error?: ApolloError
}

export const AnswersList = ({ answers, loading, error }: IProps) => {
	if (loading) return <h1>Loading in progress...</h1>
	if (error) return <h1>Something went wrong</h1>

	return (
		<>
			{answers.map((answer) => (
				<AnswerItem key={answer?.nodeId} answer={answer as TAnswer} />
			))}
		</>
	)
}
