import { Driver } from 'neo4j-driver'
import { Request } from 'express'

import { neo4jgraphql } from 'neo4j-graphql-js'
import { Resolvers } from '../generated/graphql-backend'

interface IContext {
	driver: Driver
	req: Request
}

const userResolvers: Resolvers = {
	Query: {
		User(parent: any, params: any, ctx: IContext, resolveInfo) {
			// if (!ctx.req.headers.userid) {
			// 	throw new Error('request not authenticated')
			// } else {
			return neo4jgraphql(parent, params, ctx, resolveInfo)
			// }
		},
	},

	Mutation: {
		Register(parent: any, params: any, ctx: IContext, resolveInfo) {
			return neo4jgraphql(parent, params, ctx, resolveInfo)
		},
	},
}

export default userResolvers
