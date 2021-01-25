import { Driver } from 'neo4j-driver'
import { Request } from 'express'

export interface tokenParams {
	user: {
		id: string
		name: string
		surname: string
	}
	roles: string[]
}

export interface ApolloServerContext {
	driver: Driver
	req: Request
}
