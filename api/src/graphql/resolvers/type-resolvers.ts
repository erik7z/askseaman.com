import { Resolvers } from '../../types/generated-backend'
import { ApolloServerContext } from '../../types/backend'
import GraphQLJSON, { GraphQLJSONObject } from 'graphql-type-json'

import { ranks } from './../../data/ranks'

const typeResolvers: Resolvers<ApolloServerContext> = {
	Query: {
		UserRanks() {
			return ranks
		},
	},
	JSON: GraphQLJSON,
	JSONObject: GraphQLJSONObject,
}

export default typeResolvers
