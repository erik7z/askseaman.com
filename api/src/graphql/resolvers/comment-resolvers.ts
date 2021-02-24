import { neo4jgraphql } from 'neo4j-graphql-js'
import { Resolvers, FieldError } from '../../types/generated-backend'
import { ApolloServerContext } from '../../types/backend'

const commentResolvers: Resolvers<ApolloServerContext> = {
	Mutation: {
		async AddComment(parent, { data }, ctx, resolveInfo) {
			const errorField = ''
			try {
				return neo4jgraphql(parent, { data }, ctx, resolveInfo)
			} catch (e) {
				const errors: FieldError[] = []
				errors.push({
					field: errorField,
					message: e.message,
				})
				return {
					message: e.message,
					errors,
				}
			}
		},
	},
}

export default commentResolvers
