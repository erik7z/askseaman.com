import { gql } from 'apollo-server-express'

export const typeDefs = gql`
	type Query {
		currentUser: User
			@cypher(
				statement: """
				MATCH (u:User {userId: $cypherParams.currentUserId})
				RETURN u
				"""
			)
	}

	type Mutation {
		SignIn(data: Dummy!): User!
		Register(data: RegisterUserInput!): User!
			@cypher(
				statement: """
				MERGE (l:LOCAL_ACCOUNT {password: $data.password, email: $data.email})<-[:AUTHENTICATED_WITH]-(u:User { email: $data.email, password: $data.password, name: $data.name, surname: $data.surname, rank: $data.rank, userId: apoc.create.uuid(), createdAt: DateTime() }) RETURN u
				"""
			)
		ForgotPass(data: Dummy!): User!

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
		EditQuestion(data: AskQuestionInput!): Question!
		DeleteQuestion(data: Dummy!): Question!
		AddQuestionTag(data: Dummy!): Question!
		AnswerQuestion(data: Dummy!): Answer!
		EditAnswer(data: Dummy!): Answer!
		DeleteAnswer(data: Dummy!): Answer!
		CommentQuestion(data: Dummy!): Comment!
		CommentAnswer(data: Dummy!): Comment!
		EditComment(data: Dummy!): Comment!
		DeleteComment(data: Dummy!): Comment!
		CreateTag(data: Dummy!): Tag!
		EditTag(data: Dummy!): Tag!
		DeleteTag(data: Dummy!): Tag!
		LikeCommentOrQuestion(data: Dummy!): Comment!
		SubscribeQuestion(data: Dummy!): Question!
	}

	input Dummy {
		title: String!
	}

	input RegisterUserInput {
		email: String!
		password: String!
		name: String!
		surname: String!
		rank: Rank!
	}

	input AskQuestionInput {
		title: String!
		text: String!
		tags: [String!]!
	}
	#
	type User @isAuthenticated {
		userId: ID! @id
		email: String! @unique
		password: String!
		name: String!
		surname: String!
		fullName: String
		rank: Rank!
		questions: [Question] @relation(name: "ASKED", direction: OUT)
		answers: [Answer] @relation(name: "ANSWERED", direction: OUT)
		comments: [Comment] @relation(name: "COMMENTED", direction: OUT)
		createdAt: DateTime
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
