import React, { useState, createContext, ReactNode } from 'react'
import { User as UserType } from '../../../__generated/graphql'

interface IProps {
	children: ReactNode
}

type IUserState = {
	isLoading: boolean
	isLoggedIn: boolean
	token?: any
	currentUser: UserType
}

type ICurrentUserContext = [
	IUserState,
	React.Dispatch<React.SetStateAction<IUserState>>
]

export const CurrentUserContext = createContext<ICurrentUserContext>([
	{
		isLoading: true,
		isLoggedIn: false,
		token: '',
		currentUser: {
			nodeId: '',
			name: '',
			surname: '',
		},
	},
	() => null,
])

export const CurrentUserProvider = ({ children }: IProps) => {
	const [state, setState] = useState({
		isLoading: false,
		isLoggedIn: false,
		currentUser: {
			nodeId: '',
			name: '',
			surname: '',
		},
	})
	return (
		<CurrentUserContext.Provider value={[state, setState]}>
			{children}
		</CurrentUserContext.Provider>
	)
}
