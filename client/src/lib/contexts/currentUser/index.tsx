import React, { useReducer, createContext, ReactNode } from 'react'
import {
	User as UserType,
	CurrentUserQuery as CurrentUserQueryType,
} from '../../../types/generated-frontend'

import { TOKEN_FIELD } from '../../../env'

interface IProps {
	children: ReactNode
}

type IUserState = {
	isLoading: boolean
	isLoggedIn: boolean
	token?: string | null | undefined
	currentUser: UserType
	userRank: string | null | undefined
}

type ICurrentUserContext = [IUserState, React.Dispatch<ActionType>]

type ActionType =
	| { type: 'LOADING' }
	| { type: 'SET_TOKEN'; payload: string | null | undefined }
	| { type: 'SIGN_IN'; payload: CurrentUserQueryType }
	| { type: 'UPDATE_USER'; payload: UserType }
	| { type: 'SIGN_OUT' }

const initialUser = {
	nodeId: '',
	name: '',
	surname: '',
	avatar: '',
	rank: null,
}

const initialState: IUserState = {
	isLoading: false,
	isLoggedIn: false,
	token: '',
	currentUser: initialUser,
	userRank: '',
}

const userReducer = (state: IUserState = initialState, action: ActionType) => {
	let currentUser
	switch (action.type) {
		case 'LOADING':
			return {
				...state,
				isLoading: true,
			}

		case 'UPDATE_USER':
			currentUser = action.payload
			return {
				...state,
				currentUser,
			}

		case 'SET_TOKEN':
			localStorage.setItem(TOKEN_FIELD, action.payload as string)
			return {
				...state,
				token: action.payload,
				isLoggedIn: false,
			}

		case 'SIGN_IN':
			currentUser = action.payload.CurrentUser as UserType
			return {
				...state,
				isLoggedIn: true,
				currentUser,
			}

		case 'SIGN_OUT':
			localStorage.setItem(TOKEN_FIELD, '')
			return {
				...state,
				token: '',
				isLoggedIn: false,
				currentUser: initialUser,
			}
		default:
			return state
	}
}

export const CurrentUserContext = createContext<ICurrentUserContext>([
	initialState,
	() => null,
])

export const CurrentUserProvider = ({ children }: IProps) => {
	const value = useReducer(userReducer, initialState)

	return (
		<CurrentUserContext.Provider value={value}>
			{children}
		</CurrentUserContext.Provider>
	)
}
