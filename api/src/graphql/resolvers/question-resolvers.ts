import { neo4jgraphql } from 'neo4j-graphql-js'
import { Resolvers } from '../../types/generated-backend'
import { ApolloServerContext } from '../../types/backend'

const questionResolvers: Resolvers<ApolloServerContext> = {
	Query: {
		Question: async (_parent, params, ctx, resolveInfo) => {
			// console.log(ctx.req)
			// if (!ctx.req.headers.userid) {
			// 	throw new Error('request not authenticated')
			// } else {
			return neo4jgraphql(_parent, params, ctx, resolveInfo)
			// }
		},
	},
	Mutation: {
		AskQuestion(_parent, params, ctx, resolveInfo) {
			return neo4jgraphql(_parent, params, ctx, resolveInfo)
		},
	},
}

export default questionResolvers
