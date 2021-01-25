import express from 'express'
import { Request, Response, NextFunction } from 'express'
import { ApolloServer } from 'apollo-server-express'
import bodyParser from 'body-parser'

import { schema, driver } from './database'
import { getUserFromToken } from './utils/auth'

const app = express()
app.use(bodyParser.json())

const checkErrorHeaderMiddleware = async (
	req: Request,
	_res: Response,
	next: NextFunction
) => {
	req.error = req.headers['x-error']
	next()
}
app.use('*', checkErrorHeaderMiddleware)

const server = new ApolloServer({
	schema,
	context: ({ req }) => {
		const authParams = getUserFromToken(req)

		return {
			driver,
			req,
			cypherParams: {
				currentUserId: authParams?.user.id || null,
			},
		}
	},
})

server.applyMiddleware({ app, path: '/' })

const port = process.env.GRAPHQL_SERVER_PORT || 4000
const path = process.env.GRAPHQL_SERVER_PATH || '/'
const host = process.env.GRAPHQL_SERVER_HOST || '0.0.0.0'

app.listen({ host, port, path }, () => {
	console.log(`GraphQL server ready at http://${host}:${port}${path}`)
})
