import { neo4jgraphql } from 'neo4j-graphql-js'

const userResolvers = {
	Query: {
		User(object, params, ctx, resolveInfo) {
			// if (!ctx.req.headers.userid) {
			// 	throw new Error('request not authenticated')
			// } else {
			return neo4jgraphql(object, params, ctx, resolveInfo)
			// }
		},
	},

	Mutation: {
		Register(object, params, ctx, resolveInfo) {
			return neo4jgraphql(object, params, ctx, resolveInfo)
		},
	},

	User: {
		fullName(obj, params, ctx, resolveInfo) {
			return ` ${obj.name} ${obj.surname}`
		},
	},
}

export default userResolvers
