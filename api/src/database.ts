import neo4j from 'neo4j-driver'
import { makeAugmentedSchema, assertSchema } from 'neo4j-graphql-js'
import {
	IsAuthenticatedDirective,
	HasRoleDirective,
} from 'graphql-auth-directives'

import UpperCaseDirective from './graphql/directives/UpperCaseDirective'
import { resolvers, typeDefs } from './graphql'

export const schema = makeAugmentedSchema({
	typeDefs,
	resolvers,
	schemaDirectives: {
		isAuthenticated: IsAuthenticatedDirective,
		hasRole: HasRoleDirective,
		upper: UpperCaseDirective,
		// hasScope: HasScopeDirective,
	},
	config: {
		debug: false,
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
				'Profile',
				'LoginResponse',
				'AuthResponse',
				'EditProfileResponse',
				'TokenResponse',
				'RedirectUriResponse',
				'FormError',
				'FieldError',
				'AskQuestionResponse',
				'AnswerQuestionResponse',
				'AddCommentResponse',
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

// bug fix for the union resolvers (neo4j overwrites them)
schema._typeMap.AuthResponse.resolveType = (obj: any) => {
	if (obj.message || obj.errors || obj.message) return 'FormError'
	else return 'TokenResponse'
}

schema._typeMap.EditProfileResponse.resolveType = (obj: any) => {
	if (obj.message || obj.errors || obj.message) return 'FormError'
	else return 'Profile'
}

schema._typeMap.AskQuestionResponse.resolveType = (obj: any) => {
	if (obj.message || obj.errors || obj.message) return 'FormError'
	else return 'Question'
}

schema._typeMap.AnswerQuestionResponse.resolveType = (obj: any) => {
	if (obj.message || obj.errors || obj.message) return 'FormError'
	else return 'Answer'
}

schema._typeMap.AddCommentResponse.resolveType = (obj: any) => {
	if (obj.message || obj.errors || obj.message) return 'FormError'
	else return 'Comment'
}

export const driver = neo4j.driver(
	process.env.NEO4J_URI || 'bolt://localhost:7687',
	neo4j.auth.basic(
		process.env.NEO4J_USER || 'neo4j',
		process.env.NEO4J_PASSWORD || 'letmein'
	)
)

assertSchema({ schema, driver })
