import jwt from 'jsonwebtoken'
import { tokenParams } from './../types/backend'

export const createToken = async (payload: tokenParams) => {
	const token = await jwt.sign(payload, process.env.JWT_SECRET || '', {
		expiresIn: process.env.JWT_EXPIRY || 30000,
	})
	return {
		token,
	}
}
