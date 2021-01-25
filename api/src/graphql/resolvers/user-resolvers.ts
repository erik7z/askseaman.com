import { ApolloServerContext } from './../../types/backend'
import { Resolvers } from '../../types/generated-backend'
import { neo4jgraphql } from 'neo4j-graphql-js'

const userResolvers: Resolvers<ApolloServerContext> = {
	Query: {
		User(parent, params, ctx, resolveInfo) {
			// if (!ctx.req.headers.userid) {
			// 	throw new Error('request not authenticated')
			// } else {
			return neo4jgraphql(parent, params, ctx, resolveInfo)
			// }
		},
	},

	Mutation: {
		Register(parent, params, ctx, resolveInfo) {
			return neo4jgraphql(parent, params, ctx, resolveInfo)
		},
	},
}

export default userResolvers
