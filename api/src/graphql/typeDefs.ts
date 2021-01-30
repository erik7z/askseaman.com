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
		Register(data: RegisterUserInput!): LoginResponse!
			@cypher(
				statement: """
				CREATE (l:LocalAccount {password: $data.password, email: $data.email})<-[:AUTHENTICATED_WITH]-(u:User {
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
				} as LoginResponse
				RETURN LoginResponse
				"""
			)

		SignIn(data: LoginUserInput!): LoginResponse!
			@cypher(
				statement: """
				MATCH (u:User {email: $data.email})-[:AUTHENTICATED_WITH]->(l:LocalAccount {email: $data.email})
				WITH {
					nodeId: u.nodeId,
					email: u.email,
					password: l.password,
					name: u.name,
					surname: u.surname,
					roles: u.roles
				} as LoginResponse
				RETURN LoginResponse
				"""
			)

		ChangePassRequest(data: EmailInput!): RedirectUri!
			@cypher(
				statement: """
				MATCH (u:User {email: $data.email})-[:AUTHENTICATED_WITH]->(l:LocalAccount {email: $data.email})
				SET l.code = $cypherParams.code
				RETURN u
				"""
			)
		ChangePassConfirm(data: CodeInput!): RedirectUri!
			@cypher(
				statement: """
				MATCH (u:User)-[:AUTHENTICATED_WITH]->(l:LocalAccount {code: $data.code})
				RETURN u
				"""
			)

		ChangePassComplete(data: newPassInput!): RedirectUri!
			@cypher(
				statement: """
				MATCH (u:User)-[:AUTHENTICATED_WITH]->(l:LocalAccount {code: $data.code})
				SET l.password = $data.new_password, l.code = null
				RETURN u
				"""
			)

		AskQuestion(data: AskQuestionInput!): Question!
			@isAuthenticated
			@cypher(
				statement: """
				MATCH (u:User {nodeId: $cypherParams.currentUserId})
				CREATE (q:Question:CanBeCommented:CanBeVoted)<-[:ASKED]-(u)
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
		DeleteQuestion(data: nodeIdInput!): DeleteQuestionResponse!
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
				CREATE (a:Answer:CanBeCommented:CanBeVoted)<-[:ANSWERED]-(u)
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
		DeleteAnswer(data: nodeIdInput!): DeleteAnswerResponse!
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

		EditComment(data: EditCommentInput!): Comment!
			@isAuthenticated
			@cypher(
				statement: """
				MATCH (c:Comment {nodeId: $data.nodeId})<-[:ADDED_COMMENT]-(u:User {nodeId: $cypherParams.currentUserId})
				SET c += {text: $data.text, updatedAt: DateTime()}
				RETURN c
				"""
			)

		DeleteComment(data: nodeIdInput!): DeleteCommentResponse!
			@isAuthenticated
			@cypher(
				statement: """
				MATCH (c:Comment {nodeId: $data.nodeId})<-[:ADDED_COMMENT]-(u:User {nodeId: $cypherParams.currentUserId})
				WITH c, properties(c) AS m
				DETACH DELETE c
				RETURN m
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

		ToggleLike(data: nodeIdInput!): LikeResult!
			@isAuthenticated
			@cypher(
				statement: """
				MATCH (u:User {nodeId: $cypherParams.currentUserId}), (t:CanBeLiked {nodeId: $data.nodeId})
					CREATE (u)-[:LIKED]->(t)
					WITH u, t
				CALL {
					MATCH (u)-[r:LIKED]->(t), (u)-[:LIKED]->(t)
					DELETE r
					RETURN t as g
					UNION
					MATCH (g:CanBeLiked {nodeId: $data.nodeId})
					RETURN  g
				}
				RETURN g
				"""
			)

		ToggleSubscribe(data: nodeIdInput!): Question!
			@isAuthenticated
			@cypher(
				statement: """
				MATCH (u:User {nodeId: $cypherParams.currentUserId}), (t:Question {nodeId: $data.nodeId})
					CREATE (u)-[:SUBSCRIBED]->(t)
					WITH u, t
				CALL {
					MATCH (u)-[r:SUBSCRIBED]->(t), (u)-[:SUBSCRIBED]->(t)
					DELETE r
					RETURN t as g
					UNION
					MATCH (g:Question {nodeId: $data.nodeId})
					RETURN  g
				}
				RETURN g
				"""
			)

		Vote(data: VoteInput!): VoteResult!
			@isAuthenticated
			@cypher(
				statement: """
				MATCH (u:User {nodeId: $cypherParams.currentUserId}), (t:CanBeVoted {nodeId: $data.nodeId})
					WHERE $data.action = "upVote"
					CREATE (u)-[:VOTED_UP]->(t)
					WITH u, t
				CALL {
					MATCH (u)-[r:VOTED_UP|VOTED_DOWN]->(t), (u)-[:VOTED_UP]->(t)
					DELETE r
					RETURN t as g
				}
				RETURN g

				UNION

				MATCH (u:User {nodeId: $cypherParams.currentUserId}), (t:CanBeVoted {nodeId: $data.nodeId})
					WHERE $data.action = "downVote"
					CREATE (u)-[:VOTED_DOWN]->(t)
					WITH u, t
				CALL {
					MATCH (u)-[r:VOTED_UP|VOTED_DOWN]->(t), (u)-[:VOTED_DOWN]->(t)
					DELETE r
					RETURN t as g
				}
				RETURN g

				UNION

				MATCH (g:CanBeVoted {nodeId: $data.nodeId})
				RETURN  g
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

	input nodeIdInput {
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

	input EditCommentInput {
		nodeId: ID!
		text: String!
	}

	input AddTagInput {
		name: String!
	}

	input VoteInput {
		nodeId: ID!
		action: VoteIntention!
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

	type DeleteCommentResponse {
		nodeId: ID! @id
		text: String!
	}

	type DeleteTagResponse {
		name: String!
	}

	# ----------- TYPES

	type SignedToken {
		token: String!
	}

	type LocalAccount @isAuthenticated {
		user: User! @relation(name: "AUTHENTICATED_WITH", direction: IN)
		email: String! @unique
		password: String
		code: Int
	}

	type LoginResponse {
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
		name: String!
		surname: String!
		rank: Rank!
		createdAt: DateTime
		token: String
		roles: [String]
		email: LocalAccount
			@isAuthenticated
			@relation(name: "AUTHENTICATED_WITH", direction: OUT)
		questions: [Question] @relation(name: "ASKED", direction: OUT)
		answers: [Answer] @relation(name: "ANSWERED", direction: OUT)
		tags: [Tag] @relation(name: "ADDED_BY", direction: IN)
		comments: [Comment] @relation(name: "ADDED_COMMENT", direction: OUT)
		liked: [CanBeLiked] @relation(name: "LIKED", direction: OUT)
		subscriptions: [User] @relation(name: "SUBSCRIBED", direction: OUT)
	}

	type RedirectUri {
		redirect: String!
		status: ResponseStatus!
		message: String
	}

	interface CanBeCommented {
		nodeId: ID!
	}

	interface CanBeLiked {
		nodeId: ID!
		likes: [User]
		createdAt: DateTime
	}

	interface CanBeVoted {
		nodeId: ID!
		upVotes: Int
		downVotes: Int
	}

	union LikeResult = Question | Comment
	union VoteResult = Question | Answer

	type Question implements CanBeCommented & CanBeLiked & CanBeVoted
		@hasRole(roles: [reader]) {
		nodeId: ID! @id
		title: String!
		text: String!
		createdAt: DateTime
		updatedAt: DateTime
		author: User! @relation(name: "ASKED", direction: IN)
		answers: [Answer] @relation(name: "HAS_ANSWER", direction: OUT)
		comments: [Comment] @relation(name: "HAS_COMMENT", direction: OUT)
		tags: [Tag] @relation(name: "TAGGED", direction: IN)
		likes: [User] @relation(name: "LIKED", direction: IN)
		subscribers: [User] @relation(name: "SUBSCRIBED", direction: IN)
		upVotes: Int
			@cypher(statement: "RETURN size((this)<-[:VOTED_UP]-(:User)) as upvotes")
		downVotes: Int
			@cypher(
				statement: "RETURN size((this)<-[:VOTED_DOWN]-(:User)) as downvotes"
			)
	}

	type Answer implements CanBeCommented & CanBeVoted {
		nodeId: ID! @id
		text: String!
		accepted: Boolean!
		createdAt: DateTime
		updatedAt: DateTime
		author: User! @relation(name: "ANSWERED", direction: IN)
		question: Question! @relation(name: "HAS_ANSWER", direction: IN)
		comments: [Comment] @relation(name: "HAS_COMMENT", direction: OUT)

		upVotes: Int
			@cypher(statement: "RETURN size((this)<-[:VOTED_UP]-(:User)) as upvotes")
		downVotes: Int
			@cypher(
				statement: "RETURN size((this)<-[:VOTED_DOWN]-(:User)) as downvotes"
			)
	}

	type Comment implements CanBeLiked {
		nodeId: ID! @id
		text: String!
		createdAt: DateTime!
		updatedAt: DateTime
		author: User @relation(name: "ADDED_COMMENT", direction: IN)
		topic: CanBeCommented @relation(name: "HAS_COMMENT", direction: IN)
		likes: [User] @relation(name: "LIKED", direction: IN)
	}

	type Tag {
		name: String! @unique
		createdAt: DateTime
		questions: [Question] @relation(name: "TAGGED", direction: OUT)
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

	enum VoteIntention {
		upVote
		downVote
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
