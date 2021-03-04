import { iCypherParams } from './types/backend'
import express from 'express'
import { Request, Response, NextFunction } from 'express'
import { ApolloServer } from 'apollo-server-express'
import bodyParser from 'body-parser'

import { schema, driver } from './database'
import { getUserFromToken } from './utils/auth'

export const PORT = process.env.GRAPHQL_SERVER_PORT || 4000
export const PATH = process.env.GRAPHQL_SERVER_PATH || '/'
export const HOST = process.env.GRAPHQL_SERVER_HOST || '0.0.0.0'
export const HOST_URI = process.env.HOST_URI || `http://${HOST}:${PORT}`
export const AUTH_LOGIN_UI_URI = process.env.AUTH_LOGIN_UI_URI || '/auth'
export const AUTH_NEW_PASS_UI_URI =
	process.env.AUTH_NEW_PASS_UI_URI || '/auth/new_pass'
export const AUTH_VERIFY_CODE_URI =
	process.env.AUTH_VERIFY_CODE_URI || '/auth/verify'
export const AUTH_CONFIRM_CODE_UI_URI =
	process.env.AUTH_CONFIRM_CODE_UI_URI || '/auth/confirm-code'
export const AUTH_CHANGE_PASS_UI_URI =
	process.env.AUTH_CHANGE_PASS_UI_URI || '/auth/change-pass?code='

export const app = express()
app.use(bodyParser.json({ limit: '5mb' }))

const checkErrorHeaderMiddleware = async (
	req: Request,
	_res: Response,
	next: NextFunction
) => {
	req.error = req.headers['x-error']
	next()
}
app.use('*', checkErrorHeaderMiddleware)

require('./routes')

const server = new ApolloServer({
	schema,
	context: ({ req }) => {
		const authParams = getUserFromToken(req)
		const cypherParams: iCypherParams = {
			currentUserId: authParams?.user.id || null,
		}
		return {
			driver,
			req,
			cypherParams,
		}
	},
})

server.applyMiddleware({ app, path: PATH })

app.listen({ host: HOST, port: PORT, path: PATH }, () => {
	console.log(`GraphQL server ready at http://${HOST}:${PORT}${PATH}`)
})
