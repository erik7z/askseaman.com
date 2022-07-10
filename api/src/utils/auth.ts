import jwt from 'jsonwebtoken'
import { AuthUserParams } from '../types/backend'

import { Request } from 'express'

export const createToken = async (payload: AuthUserParams) => {
	const token = await jwt.sign(payload, process.env.JWT_SECRET || '', {
		expiresIn: process.env.JWT_EXPIRY || '7d',
	})
	return token
}

export const getUserFromToken = (req: Request): AuthUserParams | null => {
	if (req.headers && (req.headers.authorization || req.headers.Authorization)) {
		const token = req.headers.authorization || req.headers.Authorization
		try {
			const id_token = (<string>token).replace('Bearer ', '')
			const JWT_SECRET = process.env.JWT_SECRET || ''
			let authUser
			if (!JWT_SECRET) {
				authUser = jwt.decode(id_token)
			} else {
				authUser = jwt.verify(id_token, JWT_SECRET, {
					algorithms: ['HS256', 'RS256'],
				})
			}
			if (authUser) return <AuthUserParams>authUser
		} catch (err) {
			if (err.name === 'TokenExpiredError')
				throw new Error('Your token is expired')
			else throw new Error('You are not authorized for this resource')
		}
	}

	return null
}
