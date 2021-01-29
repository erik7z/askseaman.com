import { gql } from 'apollo-server-express'

export const typeDefs = gql`
	type Query {
		currentUser: User
			@isAuthenticated
			@cypher(
				statement: """
				MATCH (u:User {nodeId: $cypherParams.currentUserId})
				RETURN u
				"""
			)
	}

	type Mutation {
		Register(data: RegisterUserInput!): LoginInfo!
			@cypher(
				statement: """
				CREATE (l:LOCAL_ACCOUNT {password: $data.password, email: $data.email})<-[:AUTHENTICATED_WITH]-(u:User {
					nodeId: apoc.create.uuid(),
					email: $data.email,
					name: $data.name,
					surname: $data.surname,
					rank: $data.rank,
					roles: $data.roles,
					createdAt: DateTime()
				}) WITH {
					nodeId: u.nodeId,
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
					nodeId: u.nodeId,
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

		ChangePassComplete(data: newPassInput!): RedirectUri!
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
				MATCH (u:User {nodeId: $cypherParams.currentUserId})
				CREATE (q:Question:CanBeCommented)<-[:ASKED]-(u)
				SET q += {title: $data.title, text: $data.text, nodeId: apoc.create.uuid(), createdAt: DateTime()}
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

		EditQuestion(data: EditQuestionInput!): Question!
			@isAuthenticated
			@cypher(
				statement: """
				MATCH (q:Question {nodeId:$data.nodeId})<-[:ASKED]-(u:User {nodeId: $cypherParams.currentUserId})
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

		#TODO: Delete related comments
		DeleteQuestion(data: deleteNodeInput!): DeleteQuestionResponse!
			@isAuthenticated
			@cypher(
				statement: """
				MATCH (q:Question {nodeId:$data.nodeId})<-[:ASKED]-(u:User {nodeId: $cypherParams.currentUserId})
				WITH q, properties(q) AS m
				DETACH DELETE q
				RETURN m
				"""
			)

		AnswerQuestion(data: AnswerQuestionInput!): Answer!
			@isAuthenticated
			@cypher(
				statement: """
				MATCH (u:User {nodeId: $cypherParams.currentUserId})
				CREATE (a:Answer:CanBeCommented)<-[:ANSWERED]-(u)
				SET a += {text: $data.text, rate: 0, nodeId: apoc.create.uuid(), createdAt: DateTime()}
				WITH a
				MATCH (q:Question {nodeId: $data.nodeId})
				CREATE (q)-[r:HAS_ANSWER]->(a)
				RETURN a
				"""
			)

		EditAnswer(data: EditAnswerInput!): Answer!
			@isAuthenticated
			@cypher(
				statement: """
				MATCH (a:Answer {nodeId: $data.nodeId})<-[:ANSWERED]-(u:User {nodeId: $cypherParams.currentUserId})
				SET a += {text: $data.text, updatedAt: DateTime()}
				RETURN a
				"""
			)

		#TODO: Delete related comments
		DeleteAnswer(data: deleteNodeInput!): DeleteAnswerResponse!
			@isAuthenticated
			@cypher(
				statement: """
				MATCH (a:Answer {nodeId: $data.nodeId})<-[:ANSWERED]-(u:User {nodeId: $cypherParams.currentUserId})
				WITH a, properties(a) AS m
				DETACH DELETE a
				RETURN m
				"""
			)

		AddComment(data: AddCommentInput!): Comment!
			@isAuthenticated
			@cypher(
				statement: """
				MATCH (u:User {nodeId: $cypherParams.currentUserId})
				CREATE (c:Comment)<-[:ADDED_COMMENT]-(u)
				SET c += {text: $data.text, nodeId: apoc.create.uuid(), createdAt: DateTime()}
				WITH c
				MATCH (t:CanBeCommented {nodeId: $data.nodeId})
				CREATE (t)-[:HAS_COMMENT]->(c)
				RETURN c
				"""
			)

		AddTag(data: AddTagInput!): Tag!
			@isAuthenticated
			@cypher(
				statement: """
				MATCH (u:User {nodeId: $cypherParams.currentUserId})
				MERGE (t:Tag {
					name: $data.name,
					createdAt: DateTime()
					})-[a:ADDED_BY]->(u)
				RETURN t
				"""
			)

		DeleteTag(data: deleteTagInput!): DeleteTagResponse!
			@isAuthenticated
			@hasRole(roles: [admin])
			@cypher(
				statement: """
				MATCH (t:Tag {name: $data.name})
				WITH t, properties(t) AS m
				DETACH DELETE t
				RETURN m
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

	input deleteNodeInput {
		nodeId: ID!
	}

	input deleteTagInput {
		name: String!
	}

	input CodeInput {
		code: Int!
	}

	input newPassInput {
		code: Int!
		new_password: String!
	}

	input AskQuestionInput {
		title: String!
		text: String!
		tags: [String!]!
	}

	input EditQuestionInput {
		nodeId: ID!
		title: String
		text: String
		tags: [String!]
	}

	input AnswerQuestionInput {
		nodeId: ID!
		text: String!
	}

	input AddCommentInput {
		nodeId: ID!
		text: String!
	}

	input EditAnswerInput {
		nodeId: ID!
		text: String!
	}

	input AddTagInput {
		name: String!
	}

	# ----------- RESPONSE TYPES
	type DeleteQuestionResponse {
		nodeId: ID! @id
		title: String!
		text: String!
	}

	type DeleteAnswerResponse {
		nodeId: ID! @id
		text: String!
		rate: Int!
	}

	type DeleteTagResponse {
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
		nodeId: ID!
		email: String!
		password: String! #TODO: hide password from outside api (required for compare in BCRYPT)
		name: String!
		surname: String!
		token: String
		roles: [Role]
	}

	type User {
		nodeId: ID! @id
		email: LOCAL_ACCOUNT
			@isAuthenticated
			@relation(name: "AUTHENTICATED_WITH", direction: OUT)
		name: String!
		surname: String!
		rank: Rank!
		questions: [Question] @relation(name: "ASKED", direction: OUT)
		answers: [Answer] @relation(name: "ANSWERED", direction: OUT)
		tags: [Tag] @relation(name: "ADDED_BY", direction: IN)
		comments: [Comment] @relation(name: "ADDED_COMMENT", direction: OUT)
		createdAt: DateTime
		token: String
		roles: [String]
	}

	type RedirectUri {
		redirect: String!
		status: ResponseStatus!
		message: String
	}

	interface CanBeCommented {
		nodeId: ID!
	}

	type Question implements CanBeCommented @hasRole(roles: [reader]) {
		nodeId: ID! @id
		author: User! @relation(name: "ASKED", direction: IN)
		comments: [Comment] @relation(name: "HAS_COMMENT", direction: OUT)
		title: String!
		text: String!
		answers: [Answer] @relation(name: "HAS_ANSWER", direction: OUT)
		tagged: [Tag] @relation(name: "TAGGED", direction: IN)
		createdAt: DateTime
		updatedAt: DateTime
	}

	type Answer implements CanBeCommented {
		nodeId: ID! @id
		question: Question! @relation(name: "HAS_ANSWER", direction: IN)
		author: User! @relation(name: "ANSWERED", direction: IN)
		comments: [Comment] @relation(name: "HAS_COMMENT", direction: OUT)
		text: String!
		rate: Int
		createdAt: DateTime
		updatedAt: DateTime
	}

	type Comment {
		nodeId: ID! @id
		author: User @relation(name: "ADDED_COMMENT", direction: IN)
		topic: CanBeCommented @relation(name: "HAS_COMMENT", direction: IN)
		text: String!
		createdAt: DateTime!
		updatedAt: DateTime
	}

	type Tag {
		name: String! @unique
		questions: [Question] @relation(name: "TAGGED", direction: OUT)
		createdAt: DateTime
		addedBy: User @relation(name: "ADDED_BY", direction: OUT)
	}

	#TODO: How to like comments ?
	type Liked @relation(name: "LIKED") {
		from: User
		# to: Comment
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
