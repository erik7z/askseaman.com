import { neo4jgraphql } from 'neo4j-graphql-js'
import { Resolvers } from '../../types/generated-backend'
import { ApolloServerContext } from '../../types/backend'

const questionResolvers: Resolvers<ApolloServerContext> = {
	Query: {
		Question: async (_parent, params, ctx, resolveInfo) => {
			return neo4jgraphql(_parent, params, ctx, resolveInfo)
		},
	},
	Mutation: {
		async AskQuestion(parent, { data }, ctx, resolveInfo) {
			//TODO: trim EVERY tag spaces and make uppercase
			return neo4jgraphql(parent, { data }, ctx, resolveInfo)
		},

		async EditQuestion(parent, { data }, ctx, resolveInfo) {
			return neo4jgraphql(parent, { data }, ctx, resolveInfo)
		},

		async AddTag(parent, { data }, ctx, resolveInfo) {
			//TODO: trim tag spaces and make uppercase

			return neo4jgraphql(parent, { data }, ctx, resolveInfo)
		},
	},
}

export default questionResolvers
