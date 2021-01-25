import { Driver } from 'neo4j-driver'
import { Request } from 'express'

export interface ApolloServerContext {
	driver: Driver
	req: Request
}
