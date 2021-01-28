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
				} as LoginInfo
				RETURN LoginInfo
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
				} as LoginInfo
				RETURN LoginInfo
				"""
			)

		ChangePassRequest(data: EmailInput!): RedirectUri!
			@cypher(
				statement: """
				MATCH (u:User {email: $data.email})-[:AUTHENTICATED_WITH]->(l:LOCAL_ACCOUNT {email: $data.email})
				SET l.code = $cypherParams.code
				RETURN u
				"""
			)
		ChangePassConfirm(data: CodeInput!): RedirectUri!
			@cypher(
				statement: """
				MATCH (u:User)-[:AUTHENTICATED_WITH]->(l:LOCAL_ACCOUNT {code: $data.code})
				RETURN u
				"""
			)

		ChangePassComplete(data: CodeAndPassInput!): RedirectUri!
			@cypher(
				statement: """
				MATCH (u:User)-[:AUTHENTICATED_WITH]->(l:LOCAL_ACCOUNT {code: $data.code})
				SET l.password = $data.new_password, l.code = null
				RETURN u
				"""
			)

		AskQuestion(data: AskQuestionInput!): Question!
			@isAuthenticated
			@cypher(
				statement: """
				MATCH (u:User {userId: $cypherParams.currentUserId})
				CREATE (q:Question)<-[:ASKED]-(u)
				SET q += {title: $data.title, text: $data.text, questionId: apoc.create.uuid(), createdAt: DateTime()}
				WITH q
				MATCH (t:Tag) where t.name IN $data.tags
				CREATE (t)-[r:TAGGED]->(q)
				RETURN q
				"""
			)

		EditQuestion(data: EditQuestionInput!): Question!
			@isAuthenticated
			@cypher(
				statement: """
				MATCH (q:Question {questionId:$data.questionId})<-[:ASKED]-(u:User)
				SET q += {title: $data.title, text: $data.text, updatedAt: DateTime()}
				WITH q
				CALL {
					WITH q
					MATCH (t:Tag)-[r:TAGGED]->(q)
					DELETE r
					RETURN count(t) as deleted_tags
				}
				WITH q
				CALL {
					WITH q
					MATCH (t:Tag) where t.name IN $data.tags
					MERGE (t)-[r:TAGGED]->(q)
					RETURN count(t) as added_tags
				}
				RETURN q
				"""
			)

		DeleteQuestion(data: IdInput!): Question! @isAuthenticated

		AddTag(data: AddTagInput!): Tag!
			@isAuthenticated
			@cypher(
				statement: """
				MATCH (u:User {userId: $cypherParams.currentUserId})
				MERGE (t:Tag {
					name: $data.name,
					createdAt: DateTime()
					})-[a:ADDED_BY]->(u)
				RETURN t
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

	input EmailInput {
		email: String!
	}

	input IdInput {
		itemId: ID!
	}

	input CodeInput {
		code: Int!
	}

	input CodeAndPassInput {
		code: Int!
		new_password: String!
	}

	input AskQuestionInput {
		title: String!
		text: String!
		tags: [String!]!
	}

	input EditQuestionInput {
		questionId: ID!
		title: String
		text: String
		tags: [String!]
	}

	input AddTagInput {
		name: String!
	}

	# ----------- TYPES

	type SignedToken {
		token: String!
	}

	type LOCAL_ACCOUNT @isAuthenticated {
		user: User! @relation(name: "AUTHENTICATED_WITH", direction: IN)
		email: String! @unique
		password: String
		code: Int
	}

	type LoginInfo {
		userId: ID!
		email: String!
		# password: String! #TODO: hide password from outside api
		name: String!
		surname: String!
		token: String
		roles: [Role]
	}

	type User {
		userId: ID! @id
		email: LOCAL_ACCOUNT
			@isAuthenticated
			@relation(name: "AUTHENTICATED_WITH", direction: OUT)
		name: String!
		surname: String!
		rank: Rank!
		questions: [Question] @relation(name: "ASKED", direction: OUT)
		answers: [Answer] @relation(name: "ANSWERED", direction: OUT)
		comments: [Comment] @relation(name: "COMMENTED", direction: OUT)
		tags: [Tag] @relation(name: "ADDED_BY", direction: IN)
		createdAt: DateTime
		token: String
		roles: [String]
	}

	type RedirectUri {
		redirect: String!
		status: ResponseStatus!
		message: String
	}

	type Question @hasRole(roles: [reader]) {
		questionId: ID! @id
		owner: User! @relation(name: "ASKED", direction: IN)
		title: String!
		text: String!
		answers: [Answer] @relation(name: "HAS_ANSWER", direction: IN)
		tagged: [Tag] @relation(name: "TAGGED", direction: IN)
		createdAt: DateTime
		updatedAt: DateTime
	}

	type Answer {
		answerId: ID! @id
		question: Question! @relation(name: "HAS_ANSWER", direction: OUT)
		owner: User! @relation(name: "ANSWERED", direction: IN)
		comments: [Comment] @relation(name: "COMMENTED_ANSWER", direction: IN)
		text: String!
		rate: Int!
		createdAt: DateTime
		updatedAt: DateTime
	}

	type Comment {
		commentId: ID! @id
		owner: User! @relation(name: "COMMENTED", direction: IN)
		answer: Answer! @relation(name: "COMMENTED_ANSWER", direction: OUT)
		text: String!
		createdAt: DateTime
		updatedAt: DateTime
	}

	type Tag {
		name: String! @unique
		questions: [Question] @relation(name: "TAGGED", direction: OUT)
		createdAt: DateTime
		addedBy: User @relation(name: "ADDED_BY", direction: OUT)
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

	enum ResponseStatus {
		success
		fail
	}
`
