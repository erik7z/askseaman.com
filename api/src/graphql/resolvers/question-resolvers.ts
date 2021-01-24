import { IResolvers } from 'apollo-server-express'
import { Driver } from 'neo4j-driver'
import { Request } from 'express'

import { neo4jgraphql } from 'neo4j-graphql-js'

interface IContext {
	driver: Driver
	req: Request
}

const questionResolvers: IResolvers = {
	Query: {
		Question: async (
			_parent: undefined,
			params: undefined,
			ctx: IContext,
			resolveInfo
		) => {
			// console.log(ctx.req)
			// if (!ctx.req.headers.userid) {
			// 	throw new Error('request not authenticated')
			// } else {
			return neo4jgraphql(_parent, params, ctx, resolveInfo)
			// }
		},
	},
	Mutation: {
		AskQuestion(
			_parent: undefined,
			params: undefined,
			ctx: IContext,
			resolveInfo
		) {
			return neo4jgraphql(_parent, params, ctx, resolveInfo)
		},
	},
}

export default questionResolvers
