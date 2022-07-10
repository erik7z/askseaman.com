import express from 'express'
import { Request, Response, NextFunction } from 'express'
import { ApolloServer } from 'apollo-server-express'
import bodyParser from 'body-parser'
import * as dotenv from 'dotenv'
dotenv.config()

import { iCypherParams } from './types/backend'
import { schema, driver } from './database'
import { getUserFromToken } from './utils/auth'

import { PATH, HOST, PORT, BODYPARSER_JSON_LIMIT } from './globals'

export const app = express()
app.use(bodyParser.json({ limit: BODYPARSER_JSON_LIMIT }))

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
