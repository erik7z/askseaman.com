import { ResponseStatus } from './types/generated-backend'
import { iCypherParams } from './types/backend'
import express from 'express'
import { Request, Response, NextFunction } from 'express'
import { ApolloServer } from 'apollo-server-express'
import bodyParser from 'body-parser'

import { schema, driver } from './database'
import { getUserFromToken } from './utils/auth'

const PORT = process.env.GRAPHQL_SERVER_PORT || 4000
const PATH = process.env.GRAPHQL_SERVER_PATH || '/'
const HOST = process.env.GRAPHQL_SERVER_HOST || '0.0.0.0'
const HOST_URI = process.env.HOST_URI || `http://${HOST}:${PORT}`
const AUTH_LOGIN_UI_URI = process.env.AUTH_LOGIN_UI_URI || '/auth'
const AUTH_NEW_PASS_UI_URI =
	process.env.AUTH_NEW_PASS_UI_URI || '/auth/new_pass'
const AUTH_VERIFY_CODE_URI = process.env.AUTH_VERIFY_CODE_URI || '/auth/verify'

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

app.get(AUTH_VERIFY_CODE_URI + '/:code', async (req, res) => {
	let user
	let status = ResponseStatus.Success
	let message = 'Please enter new password'
	let uri = AUTH_NEW_PASS_UI_URI

	const session = driver.session()

	try {
		if (!req.params.code) throw new Error('Confirmation code is not correct')
		const req_code = parseInt(req.params.code)

		const query = `
		MATCH (u:User)
					-[:AUTHENTICATED_WITH]->
					(l:LOCAL_ACCOUNT {code: $req_code})
		RETURN u
	`
		user = await session
			.run(query, { req_code })
			.then((res) => res.records.map((rec) => rec.get(0).properties)[0])

		if (!user) throw new Error('Confirmation code is not correct')
	} catch (e) {
		status = ResponseStatus.Fail
		message = e.message
		uri = AUTH_LOGIN_UI_URI
	} finally {
		await session.close()
	}

	const redirect_uri = `${HOST_URI}${uri}?status=${status}&message=${message}`

	res.redirect(redirect_uri)
	// res.send({
	// 	redirect_uri,
	// })
})

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
