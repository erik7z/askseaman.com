import { defaultFieldResolver } from 'graphql'
import { SchemaDirectiveVisitor } from 'apollo-server-express'

export default class UpperCaseDirective extends SchemaDirectiveVisitor {
	visitFieldDefinition(field: any) {
		const { resolve = defaultFieldResolver } = field
		field.resolve = async function (...args: any[]) {
			const result = await resolve.apply(this, args)
			if (typeof result === 'string') {
				return result.toUpperCase()
			}
			return result
		}
	}
}
