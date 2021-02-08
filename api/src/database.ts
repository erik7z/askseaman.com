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
		// debug: true,
		experimental: true,
		auth: {
			isAuthenticated: true,
			hasRole: true,
			// hasScope: true,
		},

		query: {
			exclude: [
				'SignedToken',
				'RedirectUri',
				'LocalAccount',
				'LoginResponse',
				'RegisterResponse',
				'RedirectUriResponse',
				'FormError',
				'FormSuccess',
				'FieldError',
				'LikeResponse',
				'VoteResponse',
				'SubscribeResponse',
				'DeleteQuestionResponse',
				'DeleteAnswerResponse',
				'DeleteTagResponse',
				'DeleteCommentResponse',
				'CanBeCommented',
				'CanBeLiked',
				'CanBeVoted',
				'CanBeSubscribed',
			],
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

schema._typeMap.AuthResponse.resolveType = (obj: any) => {
	if (obj.message) return 'FormError'
	else return 'User'
}

assertSchema({ schema, driver })
