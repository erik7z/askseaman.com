import { driver } from './database'
import { app } from './'

import {
	GRAPHQL_URI,
	AUTH_VERIFY_CODE_URI,
	AUTH_NEW_PASS_UI_URI,
	AUTH_LOGIN_UI_URI,
} from './env'

import { ResponseStatus } from './types/generated-backend'

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

	const redirect_uri = `${GRAPHQL_URI}${uri}?status=${status}&message=${message}`

	res.redirect(redirect_uri)
	// res.send({
	// 	redirect_uri,
	// })
})
