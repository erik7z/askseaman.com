import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import bodyParser from 'body-parser'

import { schema, driver } from './database.js'

const app = express()
app.use(bodyParser.json())

const checkErrorHeaderMiddleware = async (req, res, next) => {
	req.error = req.headers['x-error']
	next()
}
app.use('*', checkErrorHeaderMiddleware)

const server = new ApolloServer({
	schema,
	context: ({ req }) => {
		return {
			driver,
			cypherParams: {
				currentUserId: req.headers.userid,
			},
			req,
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

// driver.close()
