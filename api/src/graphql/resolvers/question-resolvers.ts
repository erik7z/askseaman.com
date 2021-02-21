import { neo4jgraphql, cypherQuery } from 'neo4j-graphql-js'
import { Resolvers, FieldError } from '../../types/generated-backend'
import { ApolloServerContext } from '../../types/backend'
import fs from 'fs'

const questionResolvers: Resolvers<ApolloServerContext> = {
	Query: {
		Question: async (_parent, params, ctx, resolveInfo) => {
			// const query = cypherQuery(params, ctx, resolveInfo)

			// const resultsCount = await ctx.driver
			// 	.session()
			// 	.run(query[0], { ...params, cypherParams: ctx.cypherParams })
			// 	.then((res) => res.records.length)

			const neo4jResult = await neo4jgraphql(_parent, params, ctx, resolveInfo)

			// console.log(neo4jResult)

			// fs.writeFile('lastquery.txt', query[0], function (err) {
			// 	if (err) return console.log(err)
			// 	console.log('Query generated to > lastquery.txt')
			// })

			return neo4jResult
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
