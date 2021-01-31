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
				CREATE (q:Question:CanBeCommented:CanBeVoted:CanBeSubscribed)<-[:ASKED]-(u)
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
				SET a += {text: $data.text, nodeId: apoc.create.uuid(), createdAt: DateTime()}
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
				MERGE (t:Tag:CanBeSubscribed {
					nodeId: apoc.create.uuid(),
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

		ToggleLike(data: nodeIdInput!): LikeResponse!
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

		ToggleSubscribe(data: nodeIdInput!): SubscribeResponse!
			@isAuthenticated
			@cypher(
				statement: """
				MATCH (u:User {nodeId: $cypherParams.currentUserId}), (t:CanBeSubscribed {nodeId: $data.nodeId})
					CREATE (u)-[:SUBSCRIBED]->(t)
					WITH u, t
				CALL {
					MATCH (u)-[r:SUBSCRIBED]->(t), (u)-[:SUBSCRIBED]->(t)
					DELETE r
					RETURN t as g
					UNION
					MATCH (g:CanBeSubscribed {nodeId: $data.nodeId})
					RETURN  g
				}
				RETURN g
				"""
			)

		ToggleAcceptAnswer(data: nodeIdInput!): Answer
			@isAuthenticated
			@cypher(
				statement: """
				MATCH (u:User {nodeId: $cypherParams.currentUserId})-[:ASKED]->(:Question)-[:HAS_ANSWER]->(t:Answer {nodeId: $data.nodeId})
					CREATE (u)-[:ACCEPTED]->(t)
					WITH u, t
				CALL {
					MATCH (u)-[r:ACCEPTED]->(t), (u)-[:ACCEPTED]->(t)
					DELETE r
					RETURN t as g
					UNION
					MATCH (g:Answer {nodeId: $data.nodeId})
					RETURN  g
				}
				RETURN g
				"""
			)

		Vote(data: VoteInput!): VoteResponse!
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
		description: String
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
		password: String! #TODO: hide password from outside api (which is required in resolver to compare with BCRYPT)
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
		location: String

		questionsCount: Int
			@cypher(
				statement: "RETURN size((this)-[:ASKED]->(:Question)) as questionsCount"
			)
		answersCount: Int
			@cypher(
				statement: "RETURN size((this)-[:ANSWERED]->(:Answer)) as answersCount"
			)
		solvedQuestionsCount: Int
			@cypher(
				statement: "RETURN size((this)-[:ANSWERED]->(:Answer)<-[:ACCEPTED]-(:User)) as solvedQuestionsCount"
			)
		#TODO: logic to select favorite tags
		favoriteTags: [Tag]
			@cypher(
				statement: """
				MATCH (this)-[:ASKED]->(:Question)<-[:TAGGED]-(t:Tag) RETURN t as favoriteTags
				UNION
				MATCH (this)-[:ANSWERED]->(:Answer)<-[:HAS_ANSWER]-(:Question)<-[:TAGGED]-(t:Tag) RETURN t as favoriteTags
				"""
			)

		email: LocalAccount  #TODO: hide email from outer world
			@isAuthenticated
			@relation(name: "AUTHENTICATED_WITH", direction: OUT)
		questions: [Question] @relation(name: "ASKED", direction: OUT)
		answers: [Answer] @relation(name: "ANSWERED", direction: OUT)
		tags: [Tag] @relation(name: "ADDED_BY", direction: IN)
		comments: [Comment] @relation(name: "ADDED_COMMENT", direction: OUT)
		liked: [CanBeLiked] @relation(name: "LIKED", direction: OUT)
		subscriptions: [CanBeSubscribed]
			@relation(name: "SUBSCRIBED", direction: OUT)
		moderatingTags: [Tag] @relation(name: "MODERATED_BY", direction: IN)
	}

	type RedirectUri {
		redirect: String!
		status: ResponseStatus!
		message: String
	}

	interface CanBeCommented {
		nodeId: ID!
		commentsCount: Int
		comments: [Comment]
	}

	interface CanBeLiked {
		nodeId: ID!
		likesCount: Int
		likes: [User]
	}

	interface CanBeSubscribed {
		nodeId: ID!
		subscribersCount: Int
		subscribers: [User]
	}

	interface CanBeVoted {
		nodeId: ID!
		upVotesCount: Int
		downVotesCount: Int
	}

	union LikeResponse = Question | Comment
	union VoteResponse = Question | Answer
	union SubscribeResponse = Question | Tag

	type Question implements CanBeCommented & CanBeLiked & CanBeVoted & CanBeSubscribed
		@hasRole(roles: [reader]) {
		nodeId: ID! @id
		title: String!
		text: String!
		createdAt: DateTime
		updatedAt: DateTime
		viewsCount: Int
		canVote: Boolean #TODO:logic to decide if user can vote (depended on some rating)
		upVotesCount: Int
			@cypher(
				statement: "RETURN size((this)<-[:VOTED_UP]-(:User)) as upVotesCount"
			)
		downVotesCount: Int
			@cypher(
				statement: "RETURN size((this)<-[:VOTED_DOWN]-(:User)) as downVotesCount"
			)
		answersCount: Int
			@cypher(
				statement: "RETURN size((this)-[:HAS_ANSWER]->(:Answer)) as answersCount"
			)
		commentsCount: Int
			@cypher(
				statement: "RETURN size((this)-[:HAS_COMMENT]->(:Comment)) as commentsCount"
			)
		likesCount: Int
			@cypher(statement: "RETURN size((this)<-[:LIKED]-(:User)) as likesCount")
		subscribersCount: Int
			@cypher(
				statement: "RETURN size((this)<-[:SUBSCRIBED]-(:User)) as subscribersCount"
			)

		author: User! @relation(name: "ASKED", direction: IN)
		answers: [Answer] @relation(name: "HAS_ANSWER", direction: OUT)
		comments: [Comment] @relation(name: "HAS_COMMENT", direction: OUT)
		tags: [Tag] @relation(name: "TAGGED", direction: IN)
		likes: [User] @relation(name: "LIKED", direction: IN)
		subscribers: [User] @relation(name: "SUBSCRIBED", direction: IN)
	}

	type Answer implements CanBeCommented & CanBeVoted {
		nodeId: ID! @id
		text: String!
		createdAt: DateTime
		updatedAt: DateTime

		canAccept: Boolean
			@isAuthenticated
			@cypher(
				statement: "MATCH (u:User {nodeId: $cypherParams.currentUserId})-[:ASKED]->(:Question)-[:HAS_ANSWER]->(this) RETURN count(u) > 0 as canAccept"
			)
		accepted: Boolean
			@cypher(
				statement: "MATCH (this)<-[r:ACCEPTED]-(:User) RETURN count(r) > 0 as accepted"
			)
		upVotesCount: Int
			@cypher(
				statement: "RETURN size((this)<-[:VOTED_UP]-(:User)) as upVotesCount"
			)
		downVotesCount: Int
			@cypher(
				statement: "RETURN size((this)<-[:VOTED_DOWN]-(:User)) as downVotesCount"
			)
		commentsCount: Int
			@cypher(
				statement: "RETURN size((this)-[:HAS_COMMENT]->(:Comment)) as commentsCount"
			)

		author: User! @relation(name: "ANSWERED", direction: IN)
		question: Question! @relation(name: "HAS_ANSWER", direction: IN)
		comments: [Comment] @relation(name: "HAS_COMMENT", direction: OUT)
	}

	type Comment implements CanBeLiked {
		nodeId: ID! @id
		text: String!
		createdAt: DateTime!
		updatedAt: DateTime

		likesCount: Int
			@cypher(statement: "RETURN size((this)<-[:LIKED]-(:User)) as likesCount")

		author: User @relation(name: "ADDED_COMMENT", direction: IN)
		topic: CanBeCommented @relation(name: "HAS_COMMENT", direction: IN)
		likes: [User] @relation(name: "LIKED", direction: IN)
	}

	type Tag implements CanBeSubscribed {
		nodeId: ID! @id
		name: String! @unique
		description: String
		createdAt: DateTime
		isSubscribed: Boolean
			@isAuthenticated
			@cypher(
				statement: "MATCH (u:User {nodeId: $cypherParams.currentUserId})-[:SUBSCRIBED]->(this) RETURN count(u) > 0 as isSubscribed"
			)

		questionsCount: Int
			@cypher(
				statement: "RETURN size((this)-[:TAGGED]->(:Question)) as questionsCount"
			)
		questionsSolvedCount: Int
			@cypher(
				statement: "RETURN size((this)-[:TAGGED]->(:Question)<-[:ACCEPTED]-(:User)) as questionsSolvedCount"
			)
		subscribersCount: Int
			@cypher(
				statement: "RETURN size((this)<-[:SUBSCRIBED]-(:User)) as subscribersCount"
			)
		topUsers: [User]  #TODO:complete logic to select top users
			@cypher(
				statement: """
				MATCH (this)-[:TAGGED]->(:Question)<-[:ASKED]-(u:User) RETURN u as topUsers
				UNION
				MATCH (this)-[:TAGGED]->(:Question)-[:HAS_ANSWER]->(:Answer)<-[:ANSWERED]-(u:User) RETURN u as topUsers
				"""
			)

		topQuestions: [Question]  #TODO:complete logic to select top questions
			@cypher(
				statement: """
				MATCH (this)-[:TAGGED]->(q:Question)<-[:SUBSCRIBED]-(u:User) RETURN q as topQuestions
				"""
			)
		questions: [Question] @relation(name: "TAGGED", direction: OUT)
		addedBy: User @relation(name: "ADDED_BY", direction: OUT)
		subscribers: [User] @relation(name: "SUBSCRIBED", direction: IN)
		moderators: [User] @relation(name: "MODERATED_BY", direction: OUT)
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
