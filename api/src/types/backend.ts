import { Driver } from 'neo4j-driver'
import { Request } from 'express'

export type TKVPair = {
	[key: string]: string
}

export interface AuthUserParams {
	user: {
		id: string
	}
	roles: string[]
}

export interface iCypherParams {
	[key: string]: unknown
}

export interface ApolloServerContext {
	driver: Driver
	req: Request
	cypherParams: iCypherParams
}
