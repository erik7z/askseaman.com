import { Resolvers } from '../../types/generated-backend'
import { ApolloServerContext } from '../../types/backend'
import GraphQLJSON, { GraphQLJSONObject } from 'graphql-type-json'

const typeResolvers: Resolvers<ApolloServerContext> = {
	JSON: GraphQLJSON,
	JSONObject: GraphQLJSONObject,
}

export default typeResolvers
