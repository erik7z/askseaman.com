import { ResponseStatus } from './../../types/generated-backend'
import { createToken } from '../../utils/auth'
import { neo4jgraphql } from 'neo4j-graphql-js'
import bcrypt from 'bcryptjs'

import { ApolloServerContext } from './../../types/backend'
import { Resolvers } from '../../types/generated-backend'

const HOST_URI = process.env.HOST_URI || 'http://localhost:4000'
const AUTH_LOGIN_UI_URI = process.env.AUTH_LOGIN_UI_URI || '/auth'
// const AUTH_VERIFY_CODE_URI = process.env.AUTH_VERIFY_CODE_URI || '/auth/verify'
const AUTH_CONFIRM_CODE_UI_URI =
	process.env.AUTH_CONFIRM_CODE_UI_URI || '/auth/confirm-code'
const AUTH_CHANGE_PASS_UI_URI =
	process.env.AUTH_CHANGE_PASS_UI_URI || '/auth/change-pass?code='

const userResolvers: Resolvers<ApolloServerContext> = {
	Mutation: {
		async Register(parent, { data }, ctx, resolveInfo) {
			const salt = bcrypt.genSaltSync(10)
			data.password = bcrypt.hashSync(data.password, salt)
			const roles = [process.env.DEFAULT_ROLE || 'reader']
			const newData = { ...data, roles }

			try {
				const user = await neo4jgraphql(
					parent,
					{ data: newData },
					ctx,
					resolveInfo
				)

				user.token = await createToken({
					user: {
						id: user.nodeId,
					},
					roles,
				})

				return user
			} catch (e) {
				return {
					message: e,
				}
			}
		},
		async SignIn(parent, { data }, ctx, resolveInfo) {
			const loginUser = await neo4jgraphql(parent, { data }, ctx, resolveInfo)
			if (!loginUser) throw new Error('No user was found with this email')

			//#TODO: !!! If password field not requested from client, it cannot authanticate ??

			const valid = bcrypt.compareSync(data.password, loginUser.password)
			if (!valid) throw new Error('Incorrect password')

			loginUser.token = await createToken({
				user: {
					id: loginUser.nodeId,
				},
				roles: loginUser.roles || [process.env.DEFAULT_ROLE || 'reader'],
			})

			return loginUser
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
