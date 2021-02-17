import { History } from 'history'

export type typicSizes = 'md' | 'sm' | 'lg'

export type kvPair = {
	[key: string]: string
}

export interface ComponentWithHistory {
	history: History
}
