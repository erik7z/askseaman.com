import React, {
	Dispatch,
	SetStateAction,
	createContext,
	ReactNode,
	useState,
} from 'react'

interface IProps {
	children: ReactNode
}

const initialState = {
	shouldUpdateAnswer: false,
}

export const AnswersContext = createContext<
	[
		{ shouldUpdateAnswer: boolean },
		Dispatch<SetStateAction<{ shouldUpdateAnswer: boolean }>>
	]
>([initialState, () => null])

export const AnswersProvider = ({ children }: IProps) => {
	const value = useState(initialState)

	return (
		<AnswersContext.Provider value={value}>{children}</AnswersContext.Provider>
	)
}
