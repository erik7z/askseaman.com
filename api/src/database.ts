import neo4j from 'neo4j-driver'
import { makeAugmentedSchema, assertSchema } from 'neo4j-graphql-js'
import {
	IsAuthenticatedDirective,
	HasRoleDirective,
} from 'graphql-auth-directives'

import { resolvers, typeDefs } from './graphql'

export const schema = makeAugmentedSchema({
	typeDefs,
	resolvers,
	schemaDirectives: {
		isAuthenticated: IsAuthenticatedDirective,
		hasRole: HasRoleDirective,
		// hasScope: HasScopeDirective,
	},
	config: {
		auth: {
			isAuthenticated: true,
			hasRole: true,
			// hasScope: true,
		},
		experimental: true,
		query: {
			exclude: ['SignedToken', 'LoginInfo', 'RedirectUri', 'LOCAL_ACCOUNT'],
		},
		mutation: false,
	},
})

export const driver = neo4j.driver(
	process.env.NEO4J_URI || 'bolt://localhost:7687',
	neo4j.auth.basic(
		process.env.NEO4J_USER || 'neo4j',
		process.env.NEO4J_PASSWORD || 'letmein'
	)
)

assertSchema({ schema, driver })
