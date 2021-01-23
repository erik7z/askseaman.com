import { neo4jgraphql } from 'neo4j-graphql-js'

const questionResolvers = {
	Query: {
		Question: async (object, params, ctx, resolveInfo) => {
			// console.log(ctx.req)
			// if (!ctx.req.headers.userid) {
			// 	throw new Error('request not authenticated')
			// } else {
			return neo4jgraphql(object, params, ctx, resolveInfo)
			// }
		},
	},
	Mutation: {
		AskQuestion(object, params, ctx, resolveInfo) {
			return neo4jgraphql(object, params, ctx, resolveInfo)
		},
	},
}

export default questionResolvers
