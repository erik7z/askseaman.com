import { History } from 'history'
import Apollo from '@apollo/client'

export type typicSizes = 'md' | 'sm' | 'lg'

export type TkvPair = {
	[key: string]: string
}

export type kvAny = {
	[key: string]: any
}

export interface TComponentWithHistory {
	history: History
}

export type ApolloLazyQuery =
	| ((
			options?:
				| Apollo.QueryLazyOptions<{
						nodeId: string
				  }>
				| undefined
	  ) => void)
	| ((
			options?:
				| Apollo.QueryLazyOptions<{
						nodeId: string
				  }>
				| undefined
	  ) => void)
