import React, { createContext, ReactNode } from 'react'

interface IProps {
	children: ReactNode
}

const initialState = {
	shouldUpdateToggle: false,
}

export const QuestionsContext = createContext(initialState)

export const QuestionsProvider = ({ children }: IProps) => {
	return (
		<QuestionsContext.Provider value={initialState}>
			{children}
		</QuestionsContext.Provider>
	)
}
