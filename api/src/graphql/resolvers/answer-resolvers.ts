import { neo4jgraphql } from 'neo4j-graphql-js'
import { Resolvers, FieldError } from '../../types/generated-backend'
import { ApolloServerContext } from '../../types/backend'

const answerResolvers: Resolvers<ApolloServerContext> = {
	Mutation: {
		async AnswerQuestion(parent, { data }, ctx, resolveInfo) {
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

export default answerResolvers
