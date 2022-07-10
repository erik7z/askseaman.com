import { neo4jgraphql, cypherQuery } from 'neo4j-graphql-js'
import { Resolvers, FieldError } from '../../types/generated-backend'
import { ApolloServerContext } from '../../types/backend'

const questionResolvers: Resolvers<ApolloServerContext> = {
	Query: {
		Question: async (_parent, params, ctx, resolveInfo) => {
			return neo4jgraphql(_parent, params, ctx, resolveInfo)
		},

		QuestionCount: async (_parent, params, ctx, resolveInfo) => {
			const [queryString, queryParams] = cypherQuery(params, ctx, resolveInfo)

			const resultsCount = await ctx.driver
				.session()
				.run(queryString, queryParams)
				.then((res) => res.records.length)

			const requiredFieldsMessage =
				'### Only `totalCount` field can be resolved with this query'

			return {
				nodeId: requiredFieldsMessage,
				title: requiredFieldsMessage,
				text: requiredFieldsMessage,
				totalCount: resultsCount,
			}
		},
	},
	Mutation: {
		async AskQuestion(parent, { data }, ctx, resolveInfo) {
			//TODO: trim EVERY tag spaces and make uppercase
			//TODO: yup fields checks on backend
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
