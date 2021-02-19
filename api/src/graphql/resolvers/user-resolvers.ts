import { ResponseStatus, FieldError } from './../../types/generated-backend'
import { createToken } from '../../utils/auth'
import { neo4jgraphql } from 'neo4j-graphql-js'
import bcrypt from 'bcryptjs'

import { ApolloServerContext, TkvPair } from './../../types/backend'
import { Resolvers, UserRank } from '../../types/generated-backend'
import { ranks } from './../../data/ranks'

import {
	HOST_URI,
	AUTH_CONFIRM_CODE_UI_URI,
	AUTH_CHANGE_PASS_UI_URI,
	AUTH_LOGIN_UI_URI,
} from '../../index'

enum errorCodes {
	NODE_EXISTS = 'Neo.ClientError.Schema.ConstraintValidationFailed',
}

const userResolvers: Resolvers<ApolloServerContext> = {
	Query: {
		UserRanks() {
			return ranks
		},
	},
	Mutation: {
		async Register(_, { data }, ctx) {
			let errorField = ''

			const salt = bcrypt.genSaltSync(10)
			data.password = bcrypt.hashSync(data.password, salt)
			const roles = [process.env.DEFAULT_ROLE || 'reader']
			const newData = { ...data, roles }
			newData.rank = (<TkvPair>ranks)[<string>data.rank] as UserRank

			try {
				const user = await ctx.driver
					.session()
					.run(
						`CREATE (l:LocalAccount {password: $data.password, email: $data.email})<-[:AUTHENTICATED_WITH]-(u:User {
						nodeId: apoc.create.uuid(),
						email: $data.email,
						name: $data.name,
						surname: $data.surname,
						roles: $data.roles,
						rank: $data.rank,
						createdAt: DateTime()
					}) return u`,
						{ data: newData }
					)
					.then((res) => res.records[0].get(0).properties)

				const token = await createToken({
					user: {
						id: user.nodeId,
					},
					roles,
				})

				return {
					token,
				}
			} catch (e) {
				const errors: FieldError[] = []
				if (e.code === errorCodes.NODE_EXISTS) {
					errorField = 'email'
					errors.push({
						field: errorField,
						message: 'User with such email already exists',
					})
				}

				return {
					message: e.message,
					errors,
				}
			}
		},

		async SignIn(_, { data }, ctx) {
			let errorField = ''

			try {
				const user = await ctx.driver
					.session()
					.run(
						`MATCH (u:User {email: $data.email})-[:AUTHENTICATED_WITH]->(l:LocalAccount {email: $data.email})
						WITH {
							nodeId: u.nodeId,
							email: u.email,
							password: l.password,
							roles: u.roles
						} as LoginResponse
						RETURN LoginResponse
						`,
						{ data }
					)
					.then((res) => res.records.map((rec) => rec.get(0))[0])

				if (!user) {
					errorField = 'email'
					throw new Error('No user was found with this email')
				}

				const valid = bcrypt.compareSync(data.password, user.password)
				if (!valid) {
					errorField = 'password'
					throw new Error('Incorrect password')
				}

				const roles = user.roles
				const token = await createToken({
					user: {
						id: user.nodeId,
					},
					roles,
				})

				return {
					token,
				}
			} catch (e) {
				const errors: FieldError[] = []
				errors.push({
					field: errorField,
					message: e.message,
				})

				console.log(e.code)

				return {
					message: e.message,
					errors,
				}
			}
		},

		async ChangePassRequest(parent, { data }, ctx, resolveInfo) {
			ctx.cypherParams.code = Math.abs(Math.floor(Math.random() * 9999))

			// find user by email and attach code to reg node
			const user = await neo4jgraphql(parent, { data }, ctx, resolveInfo)
			if (!user) throw new Error('No user was found with this email')

			//TODO: send code to the user email with http link to confirm code

			return {
				redirect: HOST_URI + AUTH_CONFIRM_CODE_UI_URI,
				status: ResponseStatus.Success,
				message: 'Confirmation code has been sent. Please check your E-mail',
			}
		},

		async ChangePassConfirm(parent, { data }, ctx, resolveInfo) {
			const user = await neo4jgraphql(parent, { data }, ctx, resolveInfo)
			if (!user) throw new Error('Confirmation code is not correct, try again')

			return {
				redirect: HOST_URI + AUTH_CHANGE_PASS_UI_URI + data.code,
				status: ResponseStatus.Success,
				message: 'Please enter your new password',
			}
		},

		async ChangePassComplete(parent, { data }, ctx, resolveInfo) {
			const salt = bcrypt.genSaltSync(10)
			data.new_password = bcrypt.hashSync(data.new_password, salt)

			const user = await neo4jgraphql(parent, { data }, ctx, resolveInfo)
			if (!user) throw new Error('Something went wrong, please try again')

			return {
				redirect: HOST_URI + AUTH_LOGIN_UI_URI,
				status: ResponseStatus.Success,
				message: 'Password has been changed, please log in using new password',
			}
		},
	},
}

export default userResolvers
