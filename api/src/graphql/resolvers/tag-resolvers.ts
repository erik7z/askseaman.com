import { cypherQuery } from 'neo4j-graphql-js'
import { Resolvers } from '../../types/generated-backend'
import { ApolloServerContext } from '../../types/backend'

const tagResolvers: Resolvers<ApolloServerContext> = {
	Query: {
		TagCount: async (_parent, params, ctx, resolveInfo) => {
			const [queryString, queryParams] = cypherQuery(params, ctx, resolveInfo)
			const resultsCount = await ctx.driver
				.session()
				.run(queryString, queryParams)
				.then((res) => res.records.length)
			const requiredFieldsMessage =
				'### Only `totalCount` field can be resolved with this query'
			return {
				nodeId: requiredFieldsMessage,
				name: requiredFieldsMessage,
				totalCount: resultsCount,
			}
		},
	},
}

export default tagResolvers
