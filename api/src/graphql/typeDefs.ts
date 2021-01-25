import { gql } from 'apollo-server-express'

export const typeDefs = gql`
	type Query {
		currentUser: User
			@isAuthenticated
			@cypher(
				statement: """
				MATCH (u:User {userId: $cypherParams.currentUserId})
				RETURN u
				"""
			)
	}

	type Mutation {
		Register(data: RegisterUserInput!): LoginInfo!
			@cypher(
				statement: """
				CREATE (l:LOCAL_ACCOUNT {password: $data.password, email: $data.email})<-[:AUTHENTICATED_WITH]-(u:User {
					userId: apoc.create.uuid(),
					email: $data.email,
					name: $data.name,
					surname: $data.surname,
					rank: $data.rank,
					roles: $data.roles,
					createdAt: DateTime()
				}) WITH {
					userId: u.userId,
					email: u.email,
					password: l.password,
					name: u.name,
					surname: u.surname,
					roles: u.roles
				} as LoginInfo RETURN LoginInfo
				"""
			)

		SignIn(data: LoginUserInput!): LoginInfo!
			@cypher(
				statement: """
				MATCH (u:User {email: $data.email})-[:AUTHENTICATED_WITH]->(l:LOCAL_ACCOUNT {email: $data.email})
				WITH {
					userId: u.userId,
					email: u.email,
					password: l.password,
					name: u.name,
					surname: u.surname,
					roles: u.roles
				} as LoginInfo RETURN LoginInfo
				"""
			)

		AskQuestion(data: AskQuestionInput!): Question!
			@cypher(
				statement: """
				MATCH (u:User {userId: $cypherParams.currentUserId})
				CREATE (q:Question)<-[:ASKED]-(u)
				SET q += {title: $data.title, text: $data.text, questionId: apoc.create.uuid(), createdAt: DateTime()}
				WITH q
				MATCH (t:Tag) where t.name IN $data.tags
				CREATE (t)-[r:TAGGED]->(q)
				return q
				"""
			)
	}

	# ----------- INPUTS

	input RegisterUserInput {
		email: String!
		password: String!
		name: String!
		surname: String!
		rank: Rank!
	}

	input LoginUserInput {
		email: String!
		password: String!
	}

	input AskQuestionInput {
		title: String!
		text: String!
		tags: [String!]!
	}

	# ----------- TYPES

	type SignedToken {
		token: String!
	}

	type LoginInfo {
		userId: ID!
		email: String!
		password: String!
		name: String!
		surname: String!
		token: String
		roles: [Role]
	}

	type User {
		userId: ID! @id
		email: String! @unique @isAuthenticated
		# password: String! @isAuthenticated
		name: String!
		surname: String!
		rank: Rank!
		questions: [Question] @relation(name: "ASKED", direction: OUT)
		answers: [Answer] @relation(name: "ANSWERED", direction: OUT)
		comments: [Comment] @relation(name: "COMMENTED", direction: OUT)
		createdAt: DateTime
		token: String
		roles: [String]
	}

	type Question @hasRole(roles: [reader]) {
		questionId: ID! @id
		owner: User! @relation(name: "ASKED", direction: IN)
		title: String!
		text: String!
		answers: [Answer] @relation(name: "HAS_ANSWER", direction: IN)
		tagged: [Tag] @relation(name: "TAGGED", direction: IN)
		createdAt: DateTime
	}

	type Answer {
		answerId: ID! @id
		question: Question! @relation(name: "HAS_ANSWER", direction: OUT)
		owner: User! @relation(name: "ANSWERED", direction: IN)
		comments: [Comment] @relation(name: "COMMENTED_ANSWER", direction: IN)
		text: String!
		rate: Int!
		createdAt: DateTime
	}

	type Comment {
		commentId: ID! @id
		owner: User! @relation(name: "COMMENTED", direction: IN)
		answer: Answer! @relation(name: "COMMENTED_ANSWER", direction: OUT)
		text: String!
		createdAt: DateTime
	}

	type Tag {
		name: String! @unique
		questions: [Question] @relation(name: "TAGGED", direction: OUT)
	}

	type Liked @relation(name: "LIKED") {
		from: User
		to: Comment
		createdAt: DateTime
	}

	enum Rank {
		Master
		Chief_Officer
		AB
	}

	enum Role {
		user
		admin
		reader
	}
`
