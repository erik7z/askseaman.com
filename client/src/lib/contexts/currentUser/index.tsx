import React, { useReducer, createContext, ReactNode } from 'react'
import {
	User as UserType,
	CurrentUserQuery as CurrentUserQueryType,
} from '../../../__generated/graphql'

interface IProps {
	children: ReactNode
}

type IUserState = {
	toUpdateProfile: boolean
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
	| { type: 'SIGN_OUT' }

const initialUser = {
	nodeId: '',
	name: '',
	surname: '',
	rank: null,
}

const initialState: IUserState = {
	toUpdateProfile: true,
	isLoading: false,
	isLoggedIn: false,
	token: '',
	currentUser: initialUser,
	userRank: '',
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
				toUpdateProfile: true,
				isLoggedIn: false,
				isLoading: false,
				currentUser: initialUser,
			}
		case 'SIGN_IN':
			const ranks = action.payload.UserRanks
			const userData = action.payload.CurrentUser as UserType
			let userClone = Object.assign({}, userData)
			// assigning human readable rank to userobject
			userClone.rank = ranks[userData.rank as string] //TODO: how ranks will be converted for other users ? change rank display approach

			return {
				...state,
				toUpdateProfile: false,
				isLoggedIn: true,
				isLoading: false,
				currentUser: userClone as UserType,
			}
		case 'SIGN_OUT':
			localStorage.setItem('token', '')
			return {
				...state,
				toUpdateProfile: false,
				isLoggedIn: false,
				isLoading: false,
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
