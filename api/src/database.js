import neo4j from 'neo4j-driver'
import { makeAugmentedSchema, assertSchema } from 'neo4j-graphql-js'
import {
	IsAuthenticatedDirective,
	HasRoleDirective,
} from 'graphql-auth-directives'

import { resolvers, typeDefs } from './graphql/index.js'

const schema = makeAugmentedSchema({
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
		query: true,
		mutation: false,

		// query: {
		//   exclude: ["MyCustomPayload"]
		// },
		// mutation: {
		//   exclude: ["MyCustomPayload"]
		// }
	},
})

const driver = neo4j.driver(
	process.env.NEO4J_URI,
	neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD)
)

// synchronize graphl & neo4j schema
// assertSchema({ schema, driver, debug: true })
assertSchema({ schema, driver })

export { schema, driver }
