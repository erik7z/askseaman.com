import { History } from 'history'

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
