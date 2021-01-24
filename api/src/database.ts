import neo4j from 'neo4j-driver'
import { makeAugmentedSchema, assertSchema } from 'neo4j-graphql-js'
import {
	IsAuthenticatedDirective,
	HasRoleDirective,
} from 'graphql-auth-directives'

import { resolvers, typeDefs } from './graphql'

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

/*TODO*/
// export const createDriver = async (config: Neo4jConfig) => {
//   const driver: Driver = neo4j.driver(
//       `${config.scheme}://${config.host}:${config.port}`,
//       neo4j.auth.basic(config.username, config.password)
//   );

//   await driver.verifyConnectivity()

//   return driver;
// }

const driver = neo4j.driver(
	process.env.NEO4J_URI || 'bolt://localhost:7687',
	neo4j.auth.basic(
		process.env.NEO4J_USER || 'neo4j',
		process.env.NEO4J_PASSWORD || 'letmein'
	)
)

// synchronize graphl & neo4j schema
// assertSchema({ schema, driver, debug: true })
assertSchema({ schema, driver })

export { schema, driver }
