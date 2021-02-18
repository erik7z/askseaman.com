import React, { useReducer, createContext, ReactNode } from 'react'
import { User as UserType } from '../../../__generated/graphql'

interface IProps {
	children: ReactNode
}

type IUserState = {
	isLoading: boolean
	isLoggedIn: boolean
	token?: string | null | undefined
	currentUser: UserType
}

type ICurrentUserContext = [IUserState, React.Dispatch<ActionType>]

type ActionType =
	| { type: 'LOADING' }
	| { type: 'SET_TOKEN'; payload: string | null | undefined }
	| { type: 'SIGN_IN'; payload: UserType }
	| { type: 'SIGN_OUT' }

const initialUser = {
	nodeId: '',
	name: '',
	surname: '',
	rank: null,
}

const initialState: IUserState = {
	isLoading: false,
	isLoggedIn: false,
	token: '',
	currentUser: initialUser,
}

const userReducer = (state: IUserState = initialState, action: ActionType) => {
	switch (action.type) {
		case 'LOADING':
			return {
				...state,
				isLoading: true,
			}
		case 'SET_TOKEN':
			return {
				...state,
				isLoggedIn: true,
				isLoading: false,
				token: action.payload,
			}
		case 'SIGN_IN':
			return {
				...state,
				isLoggedIn: true,
				isLoading: false,
				currentUser: action.payload,
			}
		case 'SIGN_OUT':
			localStorage.setItem('token', '')
			return {
				...state,
				isLoggedIn: false,
				isLoading: false,
				// token: '', TODO: if clear userstate token during signout, index useffect sign in again
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
