import { createToken } from '../../utils/auth'
import { neo4jgraphql } from 'neo4j-graphql-js'
import bcrypt from 'bcryptjs'

import { ApolloServerContext } from './../../types/backend'
import { Resolvers } from '../../types/generated-backend'

const userResolvers: Resolvers<ApolloServerContext> = {
	Query: {
		User(parent, params, ctx, resolveInfo) {
			// console.log(ctx.authParams)
			return neo4jgraphql(parent, params, ctx, resolveInfo)
		},
	},

	Mutation: {
		async Register(parent, { data }, ctx, resolveInfo) {
			const salt = bcrypt.genSaltSync(10)
			data.password = bcrypt.hashSync(data.password, salt)
			const roles = [process.env.DEFAULT_ROLE || 'reader']
			const newData = { ...data, roles }
			const user = await neo4jgraphql(
				parent,
				{ data: newData },
				ctx,
				resolveInfo
			)

			user.token = await createToken({
				user: {
					id: user.userId,
					name: user.name,
					surname: user.surname,
				},
				roles,
			})

			return user
		},
		async SignIn(parent, { data }, ctx, resolveInfo) {
			const loginUser = await neo4jgraphql(parent, { data }, ctx, resolveInfo)
			if (!loginUser) throw new Error('No user was found with this email')

			const valid = bcrypt.compareSync(data.password, loginUser.password)
			if (!valid) throw new Error('Incorrect password')

			loginUser.token = await createToken({
				user: {
					id: loginUser.userId,
					name: loginUser.name,
					surname: loginUser.surname,
				},
				roles: loginUser.roles || [process.env.DEFAULT_ROLE || 'reader'],
			})

			return loginUser
		},
	},
}

export default userResolvers
