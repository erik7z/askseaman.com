import { createToken } from './../../middleware/auth'
import { neo4jgraphql } from 'neo4j-graphql-js'
import bcrypt from 'bcryptjs'

import { ApolloServerContext } from './../../types/backend'
import { Resolvers } from '../../types/generated-backend'

const userResolvers: Resolvers<ApolloServerContext> = {
	Query: {
		User(parent, params, ctx, resolveInfo) {
			// if (!ctx.req.headers.userid) {
			// 	throw new Error('request not authenticated')
			return neo4jgraphql(parent, params, ctx, resolveInfo)
			// }
		},
	},

	Mutation: {
		async Register(parent, { data }, ctx, resolveInfo) {
			const salt = bcrypt.genSaltSync(10)
			data.password = bcrypt.hashSync(data.password, salt)

			const user = await neo4jgraphql(parent, { data }, ctx, resolveInfo)

			const token = await createToken({
				user: {
					id: user.userId,
					name: user.name,
					surname: user.surname,
				},
				roles: [process.env.DEFAULT_ROLE || 'reader'],
			})

			return token
		},
	},
}

export default userResolvers
