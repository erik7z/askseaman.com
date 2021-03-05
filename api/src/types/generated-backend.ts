import {
	GraphQLResolveInfo,
	GraphQLScalarType,
	GraphQLScalarTypeConfig,
} from 'graphql'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
	{ [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
	{ [SubKey in K]: Maybe<T[SubKey]> }
export type RequireFields<T, K extends keyof T> = {
	[X in Exclude<keyof T, K>]?: T[X]
} &
	{ [P in K]-?: NonNullable<T[P]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string
	String: string
	Boolean: boolean
	Int: number
	Float: number
	/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
	JSON: any
	/** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
	JSONObject: any
}

export enum _AnswerOrdering {
	NodeIdAsc = 'nodeId_asc',
	NodeIdDesc = 'nodeId_desc',
	TextAsc = 'text_asc',
	TextDesc = 'text_desc',
	CreatedAtAsc = 'createdAt_asc',
	CreatedAtDesc = 'createdAt_desc',
	UpdatedAtAsc = 'updatedAt_asc',
	UpdatedAtDesc = 'updatedAt_desc',
	TimestampAsc = 'timestamp_asc',
	TimestampDesc = 'timestamp_desc',
	CanAcceptAsc = 'canAccept_asc',
	CanAcceptDesc = 'canAccept_desc',
	AcceptedAsc = 'accepted_asc',
	AcceptedDesc = 'accepted_desc',
	CommentsCountAsc = 'commentsCount_asc',
	CommentsCountDesc = 'commentsCount_desc',
	CanCommentAsc = 'canComment_asc',
	CanCommentDesc = 'canComment_desc',
	CanVoteAsc = 'canVote_asc',
	CanVoteDesc = 'canVote_desc',
	IsVotedUpAsc = 'isVotedUp_asc',
	IsVotedUpDesc = 'isVotedUp_desc',
	IsVotedDownAsc = 'isVotedDown_asc',
	IsVotedDownDesc = 'isVotedDown_desc',
	UpVotesCountAsc = 'upVotesCount_asc',
	UpVotesCountDesc = 'upVotesCount_desc',
	DownVotesCountAsc = 'downVotesCount_asc',
	DownVotesCountDesc = 'downVotesCount_desc',
	IdAsc = '_id_asc',
	IdDesc = '_id_desc',
}

export type _AnswerFilter = {
	AND?: Maybe<Array<_AnswerFilter>>
	OR?: Maybe<Array<_AnswerFilter>>
	nodeId?: Maybe<Scalars['ID']>
	nodeId_not?: Maybe<Scalars['ID']>
	nodeId_in?: Maybe<Array<Scalars['ID']>>
	nodeId_not_in?: Maybe<Array<Scalars['ID']>>
	nodeId_regexp?: Maybe<Scalars['ID']>
	nodeId_contains?: Maybe<Scalars['ID']>
	nodeId_not_contains?: Maybe<Scalars['ID']>
	nodeId_starts_with?: Maybe<Scalars['ID']>
	nodeId_not_starts_with?: Maybe<Scalars['ID']>
	nodeId_ends_with?: Maybe<Scalars['ID']>
	nodeId_not_ends_with?: Maybe<Scalars['ID']>
	text?: Maybe<Scalars['String']>
	text_not?: Maybe<Scalars['String']>
	text_in?: Maybe<Array<Scalars['String']>>
	text_not_in?: Maybe<Array<Scalars['String']>>
	text_regexp?: Maybe<Scalars['String']>
	text_contains?: Maybe<Scalars['String']>
	text_not_contains?: Maybe<Scalars['String']>
	text_starts_with?: Maybe<Scalars['String']>
	text_not_starts_with?: Maybe<Scalars['String']>
	text_ends_with?: Maybe<Scalars['String']>
	text_not_ends_with?: Maybe<Scalars['String']>
	createdAt?: Maybe<_Neo4jDateTimeInput>
	createdAt_not?: Maybe<_Neo4jDateTimeInput>
	createdAt_in?: Maybe<Array<_Neo4jDateTimeInput>>
	createdAt_not_in?: Maybe<Array<_Neo4jDateTimeInput>>
	createdAt_lt?: Maybe<_Neo4jDateTimeInput>
	createdAt_lte?: Maybe<_Neo4jDateTimeInput>
	createdAt_gt?: Maybe<_Neo4jDateTimeInput>
	createdAt_gte?: Maybe<_Neo4jDateTimeInput>
	updatedAt?: Maybe<_Neo4jDateTimeInput>
	updatedAt_not?: Maybe<_Neo4jDateTimeInput>
	updatedAt_in?: Maybe<Array<_Neo4jDateTimeInput>>
	updatedAt_not_in?: Maybe<Array<_Neo4jDateTimeInput>>
	updatedAt_lt?: Maybe<_Neo4jDateTimeInput>
	updatedAt_lte?: Maybe<_Neo4jDateTimeInput>
	updatedAt_gt?: Maybe<_Neo4jDateTimeInput>
	updatedAt_gte?: Maybe<_Neo4jDateTimeInput>
	timestamp?: Maybe<Scalars['String']>
	timestamp_not?: Maybe<Scalars['String']>
	timestamp_in?: Maybe<Array<Scalars['String']>>
	timestamp_not_in?: Maybe<Array<Scalars['String']>>
	timestamp_regexp?: Maybe<Scalars['String']>
	timestamp_contains?: Maybe<Scalars['String']>
	timestamp_not_contains?: Maybe<Scalars['String']>
	timestamp_starts_with?: Maybe<Scalars['String']>
	timestamp_not_starts_with?: Maybe<Scalars['String']>
	timestamp_ends_with?: Maybe<Scalars['String']>
	timestamp_not_ends_with?: Maybe<Scalars['String']>
	author?: Maybe<_UserFilter>
	author_not?: Maybe<_UserFilter>
	author_in?: Maybe<Array<_UserFilter>>
	author_not_in?: Maybe<Array<_UserFilter>>
	question?: Maybe<_QuestionFilter>
	question_not?: Maybe<_QuestionFilter>
	question_in?: Maybe<Array<_QuestionFilter>>
	question_not_in?: Maybe<Array<_QuestionFilter>>
	comments?: Maybe<_CommentFilter>
	comments_not?: Maybe<_CommentFilter>
	comments_in?: Maybe<Array<_CommentFilter>>
	comments_not_in?: Maybe<Array<_CommentFilter>>
	comments_some?: Maybe<_CommentFilter>
	comments_none?: Maybe<_CommentFilter>
	comments_single?: Maybe<_CommentFilter>
	comments_every?: Maybe<_CommentFilter>
}

export type Answer = CanBeCommented &
	CanBeVoted & {
		__typename?: 'Answer'
		nodeId: Scalars['ID']
		text: Scalars['String']
		createdAt?: Maybe<_Neo4jDateTime>
		updatedAt?: Maybe<_Neo4jDateTime>
		timestamp?: Maybe<Scalars['String']>
		author: User
		question: Question
		canAccept?: Maybe<Scalars['Boolean']>
		accepted?: Maybe<Scalars['Boolean']>
		comments?: Maybe<Array<Maybe<Comment>>>
		commentsCount?: Maybe<Scalars['Int']>
		canComment?: Maybe<Scalars['Boolean']>
		canVote?: Maybe<Scalars['Boolean']>
		isVotedUp?: Maybe<Scalars['Boolean']>
		isVotedDown?: Maybe<Scalars['Boolean']>
		upVotesCount?: Maybe<Scalars['Int']>
		downVotesCount?: Maybe<Scalars['Int']>
		/** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
		_id?: Maybe<Scalars['String']>
	}

export type AnswerAuthorArgs = {
	filter?: Maybe<_UserFilter>
}

export type AnswerQuestionArgs = {
	filter?: Maybe<_QuestionFilter>
}

export type AnswerCommentsArgs = {
	first?: Maybe<Scalars['Int']>
	offset?: Maybe<Scalars['Int']>
	orderBy?: Maybe<Array<Maybe<_CommentOrdering>>>
	filter?: Maybe<_CommentFilter>
}

export enum _CommentOrdering {
	NodeIdAsc = 'nodeId_asc',
	NodeIdDesc = 'nodeId_desc',
	TextAsc = 'text_asc',
	TextDesc = 'text_desc',
	CreatedAtAsc = 'createdAt_asc',
	CreatedAtDesc = 'createdAt_desc',
	UpdatedAtAsc = 'updatedAt_asc',
	UpdatedAtDesc = 'updatedAt_desc',
	TimestampAsc = 'timestamp_asc',
	TimestampDesc = 'timestamp_desc',
	LikesCountAsc = 'likesCount_asc',
	LikesCountDesc = 'likesCount_desc',
	CanLikeAsc = 'canLike_asc',
	CanLikeDesc = 'canLike_desc',
	IsLikedAsc = 'isLiked_asc',
	IsLikedDesc = 'isLiked_desc',
	IdAsc = '_id_asc',
	IdDesc = '_id_desc',
}

export type _CommentFilter = {
	AND?: Maybe<Array<_CommentFilter>>
	OR?: Maybe<Array<_CommentFilter>>
	nodeId?: Maybe<Scalars['ID']>
	nodeId_not?: Maybe<Scalars['ID']>
	nodeId_in?: Maybe<Array<Scalars['ID']>>
	nodeId_not_in?: Maybe<Array<Scalars['ID']>>
	nodeId_regexp?: Maybe<Scalars['ID']>
	nodeId_contains?: Maybe<Scalars['ID']>
	nodeId_not_contains?: Maybe<Scalars['ID']>
	nodeId_starts_with?: Maybe<Scalars['ID']>
	nodeId_not_starts_with?: Maybe<Scalars['ID']>
	nodeId_ends_with?: Maybe<Scalars['ID']>
	nodeId_not_ends_with?: Maybe<Scalars['ID']>
	text?: Maybe<Scalars['String']>
	text_not?: Maybe<Scalars['String']>
	text_in?: Maybe<Array<Scalars['String']>>
	text_not_in?: Maybe<Array<Scalars['String']>>
	text_regexp?: Maybe<Scalars['String']>
	text_contains?: Maybe<Scalars['String']>
	text_not_contains?: Maybe<Scalars['String']>
	text_starts_with?: Maybe<Scalars['String']>
	text_not_starts_with?: Maybe<Scalars['String']>
	text_ends_with?: Maybe<Scalars['String']>
	text_not_ends_with?: Maybe<Scalars['String']>
	createdAt?: Maybe<_Neo4jDateTimeInput>
	createdAt_not?: Maybe<_Neo4jDateTimeInput>
	createdAt_in?: Maybe<Array<_Neo4jDateTimeInput>>
	createdAt_not_in?: Maybe<Array<_Neo4jDateTimeInput>>
	createdAt_lt?: Maybe<_Neo4jDateTimeInput>
	createdAt_lte?: Maybe<_Neo4jDateTimeInput>
	createdAt_gt?: Maybe<_Neo4jDateTimeInput>
	createdAt_gte?: Maybe<_Neo4jDateTimeInput>
	updatedAt?: Maybe<_Neo4jDateTimeInput>
	updatedAt_not?: Maybe<_Neo4jDateTimeInput>
	updatedAt_in?: Maybe<Array<_Neo4jDateTimeInput>>
	updatedAt_not_in?: Maybe<Array<_Neo4jDateTimeInput>>
	updatedAt_lt?: Maybe<_Neo4jDateTimeInput>
	updatedAt_lte?: Maybe<_Neo4jDateTimeInput>
	updatedAt_gt?: Maybe<_Neo4jDateTimeInput>
	updatedAt_gte?: Maybe<_Neo4jDateTimeInput>
	timestamp?: Maybe<Scalars['String']>
	timestamp_not?: Maybe<Scalars['String']>
	timestamp_in?: Maybe<Array<Scalars['String']>>
	timestamp_not_in?: Maybe<Array<Scalars['String']>>
	timestamp_regexp?: Maybe<Scalars['String']>
	timestamp_contains?: Maybe<Scalars['String']>
	timestamp_not_contains?: Maybe<Scalars['String']>
	timestamp_starts_with?: Maybe<Scalars['String']>
	timestamp_not_starts_with?: Maybe<Scalars['String']>
	timestamp_ends_with?: Maybe<Scalars['String']>
	timestamp_not_ends_with?: Maybe<Scalars['String']>
	author?: Maybe<_UserFilter>
	author_not?: Maybe<_UserFilter>
	author_in?: Maybe<Array<_UserFilter>>
	author_not_in?: Maybe<Array<_UserFilter>>
	likes?: Maybe<_UserFilter>
	likes_not?: Maybe<_UserFilter>
	likes_in?: Maybe<Array<_UserFilter>>
	likes_not_in?: Maybe<Array<_UserFilter>>
	likes_some?: Maybe<_UserFilter>
	likes_none?: Maybe<_UserFilter>
	likes_single?: Maybe<_UserFilter>
	likes_every?: Maybe<_UserFilter>
}

export type Comment = CanBeLiked & {
	__typename?: 'Comment'
	nodeId: Scalars['ID']
	text: Scalars['String']
	createdAt?: Maybe<_Neo4jDateTime>
	updatedAt?: Maybe<_Neo4jDateTime>
	timestamp?: Maybe<Scalars['String']>
	author?: Maybe<User>
	topic?: Maybe<CanBeCommented>
	likes?: Maybe<Array<Maybe<User>>>
	likesCount?: Maybe<Scalars['Int']>
	canLike?: Maybe<Scalars['Boolean']>
	isLiked?: Maybe<Scalars['Boolean']>
	/** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
	_id?: Maybe<Scalars['String']>
}

export type CommentAuthorArgs = {
	filter?: Maybe<_UserFilter>
}

export type CommentLikesArgs = {
	first?: Maybe<Scalars['Int']>
	offset?: Maybe<Scalars['Int']>
	orderBy?: Maybe<Array<Maybe<_UserOrdering>>>
	filter?: Maybe<_UserFilter>
}

export enum _QuestionOrdering {
	NodeIdAsc = 'nodeId_asc',
	NodeIdDesc = 'nodeId_desc',
	TitleAsc = 'title_asc',
	TitleDesc = 'title_desc',
	TextAsc = 'text_asc',
	TextDesc = 'text_desc',
	CreatedAtAsc = 'createdAt_asc',
	CreatedAtDesc = 'createdAt_desc',
	UpdatedAtAsc = 'updatedAt_asc',
	UpdatedAtDesc = 'updatedAt_desc',
	TimestampAsc = 'timestamp_asc',
	TimestampDesc = 'timestamp_desc',
	ViewsCountAsc = 'viewsCount_asc',
	ViewsCountDesc = 'viewsCount_desc',
	CanVoteAsc = 'canVote_asc',
	CanVoteDesc = 'canVote_desc',
	IsVotedUpAsc = 'isVotedUp_asc',
	IsVotedUpDesc = 'isVotedUp_desc',
	IsVotedDownAsc = 'isVotedDown_asc',
	IsVotedDownDesc = 'isVotedDown_desc',
	UpVotesCountAsc = 'upVotesCount_asc',
	UpVotesCountDesc = 'upVotesCount_desc',
	DownVotesCountAsc = 'downVotesCount_asc',
	DownVotesCountDesc = 'downVotesCount_desc',
	AnswersCountAsc = 'answersCount_asc',
	AnswersCountDesc = 'answersCount_desc',
	CommentsCountAsc = 'commentsCount_asc',
	CommentsCountDesc = 'commentsCount_desc',
	CanCommentAsc = 'canComment_asc',
	CanCommentDesc = 'canComment_desc',
	LikesCountAsc = 'likesCount_asc',
	LikesCountDesc = 'likesCount_desc',
	CanLikeAsc = 'canLike_asc',
	CanLikeDesc = 'canLike_desc',
	IsLikedAsc = 'isLiked_asc',
	IsLikedDesc = 'isLiked_desc',
	SubscribersCountAsc = 'subscribersCount_asc',
	SubscribersCountDesc = 'subscribersCount_desc',
	CanSubscribeAsc = 'canSubscribe_asc',
	CanSubscribeDesc = 'canSubscribe_desc',
	IsSubscribedAsc = 'isSubscribed_asc',
	IsSubscribedDesc = 'isSubscribed_desc',
	TotalCountAsc = 'totalCount_asc',
	TotalCountDesc = 'totalCount_desc',
	IdAsc = '_id_asc',
	IdDesc = '_id_desc',
}

export type _QuestionFilter = {
	AND?: Maybe<Array<_QuestionFilter>>
	OR?: Maybe<Array<_QuestionFilter>>
	nodeId?: Maybe<Scalars['ID']>
	nodeId_not?: Maybe<Scalars['ID']>
	nodeId_in?: Maybe<Array<Scalars['ID']>>
	nodeId_not_in?: Maybe<Array<Scalars['ID']>>
	nodeId_regexp?: Maybe<Scalars['ID']>
	nodeId_contains?: Maybe<Scalars['ID']>
	nodeId_not_contains?: Maybe<Scalars['ID']>
	nodeId_starts_with?: Maybe<Scalars['ID']>
	nodeId_not_starts_with?: Maybe<Scalars['ID']>
	nodeId_ends_with?: Maybe<Scalars['ID']>
	nodeId_not_ends_with?: Maybe<Scalars['ID']>
	title?: Maybe<Scalars['String']>
	title_not?: Maybe<Scalars['String']>
	title_in?: Maybe<Array<Scalars['String']>>
	title_not_in?: Maybe<Array<Scalars['String']>>
	title_regexp?: Maybe<Scalars['String']>
	title_contains?: Maybe<Scalars['String']>
	title_not_contains?: Maybe<Scalars['String']>
	title_starts_with?: Maybe<Scalars['String']>
	title_not_starts_with?: Maybe<Scalars['String']>
	title_ends_with?: Maybe<Scalars['String']>
	title_not_ends_with?: Maybe<Scalars['String']>
	text?: Maybe<Scalars['String']>
	text_not?: Maybe<Scalars['String']>
	text_in?: Maybe<Array<Scalars['String']>>
	text_not_in?: Maybe<Array<Scalars['String']>>
	text_regexp?: Maybe<Scalars['String']>
	text_contains?: Maybe<Scalars['String']>
	text_not_contains?: Maybe<Scalars['String']>
	text_starts_with?: Maybe<Scalars['String']>
	text_not_starts_with?: Maybe<Scalars['String']>
	text_ends_with?: Maybe<Scalars['String']>
	text_not_ends_with?: Maybe<Scalars['String']>
	createdAt?: Maybe<_Neo4jDateTimeInput>
	createdAt_not?: Maybe<_Neo4jDateTimeInput>
	createdAt_in?: Maybe<Array<_Neo4jDateTimeInput>>
	createdAt_not_in?: Maybe<Array<_Neo4jDateTimeInput>>
	createdAt_lt?: Maybe<_Neo4jDateTimeInput>
	createdAt_lte?: Maybe<_Neo4jDateTimeInput>
	createdAt_gt?: Maybe<_Neo4jDateTimeInput>
	createdAt_gte?: Maybe<_Neo4jDateTimeInput>
	updatedAt?: Maybe<_Neo4jDateTimeInput>
	updatedAt_not?: Maybe<_Neo4jDateTimeInput>
	updatedAt_in?: Maybe<Array<_Neo4jDateTimeInput>>
	updatedAt_not_in?: Maybe<Array<_Neo4jDateTimeInput>>
	updatedAt_lt?: Maybe<_Neo4jDateTimeInput>
	updatedAt_lte?: Maybe<_Neo4jDateTimeInput>
	updatedAt_gt?: Maybe<_Neo4jDateTimeInput>
	updatedAt_gte?: Maybe<_Neo4jDateTimeInput>
	timestamp?: Maybe<Scalars['String']>
	timestamp_not?: Maybe<Scalars['String']>
	timestamp_in?: Maybe<Array<Scalars['String']>>
	timestamp_not_in?: Maybe<Array<Scalars['String']>>
	timestamp_regexp?: Maybe<Scalars['String']>
	timestamp_contains?: Maybe<Scalars['String']>
	timestamp_not_contains?: Maybe<Scalars['String']>
	timestamp_starts_with?: Maybe<Scalars['String']>
	timestamp_not_starts_with?: Maybe<Scalars['String']>
	timestamp_ends_with?: Maybe<Scalars['String']>
	timestamp_not_ends_with?: Maybe<Scalars['String']>
	author?: Maybe<_UserFilter>
	author_not?: Maybe<_UserFilter>
	author_in?: Maybe<Array<_UserFilter>>
	author_not_in?: Maybe<Array<_UserFilter>>
	answers?: Maybe<_AnswerFilter>
	answers_not?: Maybe<_AnswerFilter>
	answers_in?: Maybe<Array<_AnswerFilter>>
	answers_not_in?: Maybe<Array<_AnswerFilter>>
	answers_some?: Maybe<_AnswerFilter>
	answers_none?: Maybe<_AnswerFilter>
	answers_single?: Maybe<_AnswerFilter>
	answers_every?: Maybe<_AnswerFilter>
	comments?: Maybe<_CommentFilter>
	comments_not?: Maybe<_CommentFilter>
	comments_in?: Maybe<Array<_CommentFilter>>
	comments_not_in?: Maybe<Array<_CommentFilter>>
	comments_some?: Maybe<_CommentFilter>
	comments_none?: Maybe<_CommentFilter>
	comments_single?: Maybe<_CommentFilter>
	comments_every?: Maybe<_CommentFilter>
	likes?: Maybe<_UserFilter>
	likes_not?: Maybe<_UserFilter>
	likes_in?: Maybe<Array<_UserFilter>>
	likes_not_in?: Maybe<Array<_UserFilter>>
	likes_some?: Maybe<_UserFilter>
	likes_none?: Maybe<_UserFilter>
	likes_single?: Maybe<_UserFilter>
	likes_every?: Maybe<_UserFilter>
	subscribers?: Maybe<_UserFilter>
	subscribers_not?: Maybe<_UserFilter>
	subscribers_in?: Maybe<Array<_UserFilter>>
	subscribers_not_in?: Maybe<Array<_UserFilter>>
	subscribers_some?: Maybe<_UserFilter>
	subscribers_none?: Maybe<_UserFilter>
	subscribers_single?: Maybe<_UserFilter>
	subscribers_every?: Maybe<_UserFilter>
	tags?: Maybe<_TagFilter>
	tags_not?: Maybe<_TagFilter>
	tags_in?: Maybe<Array<_TagFilter>>
	tags_not_in?: Maybe<Array<_TagFilter>>
	tags_some?: Maybe<_TagFilter>
	tags_none?: Maybe<_TagFilter>
	tags_single?: Maybe<_TagFilter>
	tags_every?: Maybe<_TagFilter>
	totalCount?: Maybe<Scalars['Int']>
	totalCount_not?: Maybe<Scalars['Int']>
	totalCount_in?: Maybe<Array<Scalars['Int']>>
	totalCount_not_in?: Maybe<Array<Scalars['Int']>>
	totalCount_lt?: Maybe<Scalars['Int']>
	totalCount_lte?: Maybe<Scalars['Int']>
	totalCount_gt?: Maybe<Scalars['Int']>
	totalCount_gte?: Maybe<Scalars['Int']>
}

export type Question = CanBeCommented &
	CanBeLiked &
	CanBeVoted &
	CanBeSubscribed & {
		__typename?: 'Question'
		nodeId: Scalars['ID']
		title: Scalars['String']
		text: Scalars['String']
		createdAt?: Maybe<_Neo4jDateTime>
		updatedAt?: Maybe<_Neo4jDateTime>
		timestamp?: Maybe<Scalars['String']>
		author?: Maybe<User>
		viewsCount?: Maybe<Scalars['Int']>
		canVote?: Maybe<Scalars['Boolean']>
		isVotedUp?: Maybe<Scalars['Boolean']>
		isVotedDown?: Maybe<Scalars['Boolean']>
		upVotesCount?: Maybe<Scalars['Int']>
		downVotesCount?: Maybe<Scalars['Int']>
		answers?: Maybe<Array<Maybe<Answer>>>
		answersCount?: Maybe<Scalars['Int']>
		comments?: Maybe<Array<Maybe<Comment>>>
		commentsCount?: Maybe<Scalars['Int']>
		canComment?: Maybe<Scalars['Boolean']>
		likes?: Maybe<Array<Maybe<User>>>
		likesCount?: Maybe<Scalars['Int']>
		canLike?: Maybe<Scalars['Boolean']>
		isLiked?: Maybe<Scalars['Boolean']>
		subscribers?: Maybe<Array<Maybe<User>>>
		subscribersCount?: Maybe<Scalars['Int']>
		canSubscribe?: Maybe<Scalars['Boolean']>
		isSubscribed?: Maybe<Scalars['Boolean']>
		tags?: Maybe<Array<Maybe<Tag>>>
		totalCount?: Maybe<Scalars['Int']>
		/** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
		_id?: Maybe<Scalars['String']>
	}

export type QuestionAuthorArgs = {
	filter?: Maybe<_UserFilter>
}

export type QuestionAnswersArgs = {
	first?: Maybe<Scalars['Int']>
	offset?: Maybe<Scalars['Int']>
	orderBy?: Maybe<Array<Maybe<_AnswerOrdering>>>
	filter?: Maybe<_AnswerFilter>
}

export type QuestionCommentsArgs = {
	first?: Maybe<Scalars['Int']>
	offset?: Maybe<Scalars['Int']>
	orderBy?: Maybe<Array<Maybe<_CommentOrdering>>>
	filter?: Maybe<_CommentFilter>
}

export type QuestionLikesArgs = {
	first?: Maybe<Scalars['Int']>
	offset?: Maybe<Scalars['Int']>
	orderBy?: Maybe<Array<Maybe<_UserOrdering>>>
	filter?: Maybe<_UserFilter>
}

export type QuestionSubscribersArgs = {
	first?: Maybe<Scalars['Int']>
	offset?: Maybe<Scalars['Int']>
	orderBy?: Maybe<Array<Maybe<_UserOrdering>>>
	filter?: Maybe<_UserFilter>
}

export type QuestionTagsArgs = {
	first?: Maybe<Scalars['Int']>
	offset?: Maybe<Scalars['Int']>
	orderBy?: Maybe<Array<Maybe<_TagOrdering>>>
	filter?: Maybe<_TagFilter>
}

export enum _TagOrdering {
	NodeIdAsc = 'nodeId_asc',
	NodeIdDesc = 'nodeId_desc',
	NameAsc = 'name_asc',
	NameDesc = 'name_desc',
	DescriptionAsc = 'description_asc',
	DescriptionDesc = 'description_desc',
	CreatedAtAsc = 'createdAt_asc',
	CreatedAtDesc = 'createdAt_desc',
	TimestampAsc = 'timestamp_asc',
	TimestampDesc = 'timestamp_desc',
	QuestionsCountAsc = 'questionsCount_asc',
	QuestionsCountDesc = 'questionsCount_desc',
	QuestionsSolvedCountAsc = 'questionsSolvedCount_asc',
	QuestionsSolvedCountDesc = 'questionsSolvedCount_desc',
	SubscribersCountAsc = 'subscribersCount_asc',
	SubscribersCountDesc = 'subscribersCount_desc',
	CanSubscribeAsc = 'canSubscribe_asc',
	CanSubscribeDesc = 'canSubscribe_desc',
	IsSubscribedAsc = 'isSubscribed_asc',
	IsSubscribedDesc = 'isSubscribed_desc',
	IdAsc = '_id_asc',
	IdDesc = '_id_desc',
}

export type _TagFilter = {
	AND?: Maybe<Array<_TagFilter>>
	OR?: Maybe<Array<_TagFilter>>
	nodeId?: Maybe<Scalars['ID']>
	nodeId_not?: Maybe<Scalars['ID']>
	nodeId_in?: Maybe<Array<Scalars['ID']>>
	nodeId_not_in?: Maybe<Array<Scalars['ID']>>
	nodeId_regexp?: Maybe<Scalars['ID']>
	nodeId_contains?: Maybe<Scalars['ID']>
	nodeId_not_contains?: Maybe<Scalars['ID']>
	nodeId_starts_with?: Maybe<Scalars['ID']>
	nodeId_not_starts_with?: Maybe<Scalars['ID']>
	nodeId_ends_with?: Maybe<Scalars['ID']>
	nodeId_not_ends_with?: Maybe<Scalars['ID']>
	name?: Maybe<Scalars['String']>
	name_not?: Maybe<Scalars['String']>
	name_in?: Maybe<Array<Scalars['String']>>
	name_not_in?: Maybe<Array<Scalars['String']>>
	name_regexp?: Maybe<Scalars['String']>
	name_contains?: Maybe<Scalars['String']>
	name_not_contains?: Maybe<Scalars['String']>
	name_starts_with?: Maybe<Scalars['String']>
	name_not_starts_with?: Maybe<Scalars['String']>
	name_ends_with?: Maybe<Scalars['String']>
	name_not_ends_with?: Maybe<Scalars['String']>
	description?: Maybe<Scalars['String']>
	description_not?: Maybe<Scalars['String']>
	description_in?: Maybe<Array<Scalars['String']>>
	description_not_in?: Maybe<Array<Scalars['String']>>
	description_regexp?: Maybe<Scalars['String']>
	description_contains?: Maybe<Scalars['String']>
	description_not_contains?: Maybe<Scalars['String']>
	description_starts_with?: Maybe<Scalars['String']>
	description_not_starts_with?: Maybe<Scalars['String']>
	description_ends_with?: Maybe<Scalars['String']>
	description_not_ends_with?: Maybe<Scalars['String']>
	createdAt?: Maybe<_Neo4jDateTimeInput>
	createdAt_not?: Maybe<_Neo4jDateTimeInput>
	createdAt_in?: Maybe<Array<_Neo4jDateTimeInput>>
	createdAt_not_in?: Maybe<Array<_Neo4jDateTimeInput>>
	createdAt_lt?: Maybe<_Neo4jDateTimeInput>
	createdAt_lte?: Maybe<_Neo4jDateTimeInput>
	createdAt_gt?: Maybe<_Neo4jDateTimeInput>
	createdAt_gte?: Maybe<_Neo4jDateTimeInput>
	timestamp?: Maybe<Scalars['String']>
	timestamp_not?: Maybe<Scalars['String']>
	timestamp_in?: Maybe<Array<Scalars['String']>>
	timestamp_not_in?: Maybe<Array<Scalars['String']>>
	timestamp_regexp?: Maybe<Scalars['String']>
	timestamp_contains?: Maybe<Scalars['String']>
	timestamp_not_contains?: Maybe<Scalars['String']>
	timestamp_starts_with?: Maybe<Scalars['String']>
	timestamp_not_starts_with?: Maybe<Scalars['String']>
	timestamp_ends_with?: Maybe<Scalars['String']>
	timestamp_not_ends_with?: Maybe<Scalars['String']>
	addedBy?: Maybe<_UserFilter>
	addedBy_not?: Maybe<_UserFilter>
	addedBy_in?: Maybe<Array<_UserFilter>>
	addedBy_not_in?: Maybe<Array<_UserFilter>>
	moderators?: Maybe<_UserFilter>
	moderators_not?: Maybe<_UserFilter>
	moderators_in?: Maybe<Array<_UserFilter>>
	moderators_not_in?: Maybe<Array<_UserFilter>>
	moderators_some?: Maybe<_UserFilter>
	moderators_none?: Maybe<_UserFilter>
	moderators_single?: Maybe<_UserFilter>
	moderators_every?: Maybe<_UserFilter>
	questions?: Maybe<_QuestionFilter>
	questions_not?: Maybe<_QuestionFilter>
	questions_in?: Maybe<Array<_QuestionFilter>>
	questions_not_in?: Maybe<Array<_QuestionFilter>>
	questions_some?: Maybe<_QuestionFilter>
	questions_none?: Maybe<_QuestionFilter>
	questions_single?: Maybe<_QuestionFilter>
	questions_every?: Maybe<_QuestionFilter>
	subscribers?: Maybe<_UserFilter>
	subscribers_not?: Maybe<_UserFilter>
	subscribers_in?: Maybe<Array<_UserFilter>>
	subscribers_not_in?: Maybe<Array<_UserFilter>>
	subscribers_some?: Maybe<_UserFilter>
	subscribers_none?: Maybe<_UserFilter>
	subscribers_single?: Maybe<_UserFilter>
	subscribers_every?: Maybe<_UserFilter>
}

export type Tag = CanBeSubscribed & {
	__typename?: 'Tag'
	nodeId: Scalars['ID']
	name: Scalars['String']
	description?: Maybe<Scalars['String']>
	createdAt?: Maybe<_Neo4jDateTime>
	timestamp?: Maybe<Scalars['String']>
	addedBy?: Maybe<User>
	moderators?: Maybe<Array<Maybe<User>>>
	questions?: Maybe<Array<Maybe<Question>>>
	questionsCount?: Maybe<Scalars['Int']>
	questionsSolvedCount?: Maybe<Scalars['Int']>
	subscribers?: Maybe<Array<Maybe<User>>>
	subscribersCount?: Maybe<Scalars['Int']>
	canSubscribe?: Maybe<Scalars['Boolean']>
	isSubscribed?: Maybe<Scalars['Boolean']>
	topUsers?: Maybe<Array<Maybe<User>>>
	topQuestions?: Maybe<Array<Maybe<Question>>>
	/** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
	_id?: Maybe<Scalars['String']>
}

export type TagAddedByArgs = {
	filter?: Maybe<_UserFilter>
}

export type TagModeratorsArgs = {
	first?: Maybe<Scalars['Int']>
	offset?: Maybe<Scalars['Int']>
	orderBy?: Maybe<Array<Maybe<_UserOrdering>>>
	filter?: Maybe<_UserFilter>
}

export type TagQuestionsArgs = {
	first?: Maybe<Scalars['Int']>
	offset?: Maybe<Scalars['Int']>
	orderBy?: Maybe<Array<Maybe<_QuestionOrdering>>>
	filter?: Maybe<_QuestionFilter>
}

export type TagSubscribersArgs = {
	first?: Maybe<Scalars['Int']>
	offset?: Maybe<Scalars['Int']>
	orderBy?: Maybe<Array<Maybe<_UserOrdering>>>
	filter?: Maybe<_UserFilter>
}

export type TagTopUsersArgs = {
	first?: Maybe<Scalars['Int']>
	offset?: Maybe<Scalars['Int']>
	orderBy?: Maybe<Array<Maybe<_UserOrdering>>>
}

export type TagTopQuestionsArgs = {
	first?: Maybe<Scalars['Int']>
	offset?: Maybe<Scalars['Int']>
	orderBy?: Maybe<Array<Maybe<_QuestionOrdering>>>
}

export enum _UserOrdering {
	NodeIdAsc = 'nodeId_asc',
	NodeIdDesc = 'nodeId_desc',
	NameAsc = 'name_asc',
	NameDesc = 'name_desc',
	SurnameAsc = 'surname_asc',
	SurnameDesc = 'surname_desc',
	AvatarAsc = 'avatar_asc',
	AvatarDesc = 'avatar_desc',
	RankAsc = 'rank_asc',
	RankDesc = 'rank_desc',
	DescriptionAsc = 'description_asc',
	DescriptionDesc = 'description_desc',
	CreatedAtAsc = 'createdAt_asc',
	CreatedAtDesc = 'createdAt_desc',
	TimestampAsc = 'timestamp_asc',
	TimestampDesc = 'timestamp_desc',
	LocationAsc = 'location_asc',
	LocationDesc = 'location_desc',
	QuestionsCountAsc = 'questionsCount_asc',
	QuestionsCountDesc = 'questionsCount_desc',
	AnswersCountAsc = 'answersCount_asc',
	AnswersCountDesc = 'answersCount_desc',
	SolvedQuestionsCountAsc = 'solvedQuestionsCount_asc',
	SolvedQuestionsCountDesc = 'solvedQuestionsCount_desc',
	IdAsc = '_id_asc',
	IdDesc = '_id_desc',
}

export type _UserFilter = {
	AND?: Maybe<Array<_UserFilter>>
	OR?: Maybe<Array<_UserFilter>>
	nodeId?: Maybe<Scalars['ID']>
	nodeId_not?: Maybe<Scalars['ID']>
	nodeId_in?: Maybe<Array<Scalars['ID']>>
	nodeId_not_in?: Maybe<Array<Scalars['ID']>>
	nodeId_regexp?: Maybe<Scalars['ID']>
	nodeId_contains?: Maybe<Scalars['ID']>
	nodeId_not_contains?: Maybe<Scalars['ID']>
	nodeId_starts_with?: Maybe<Scalars['ID']>
	nodeId_not_starts_with?: Maybe<Scalars['ID']>
	nodeId_ends_with?: Maybe<Scalars['ID']>
	nodeId_not_ends_with?: Maybe<Scalars['ID']>
	name?: Maybe<Scalars['String']>
	name_not?: Maybe<Scalars['String']>
	name_in?: Maybe<Array<Scalars['String']>>
	name_not_in?: Maybe<Array<Scalars['String']>>
	name_regexp?: Maybe<Scalars['String']>
	name_contains?: Maybe<Scalars['String']>
	name_not_contains?: Maybe<Scalars['String']>
	name_starts_with?: Maybe<Scalars['String']>
	name_not_starts_with?: Maybe<Scalars['String']>
	name_ends_with?: Maybe<Scalars['String']>
	name_not_ends_with?: Maybe<Scalars['String']>
	surname?: Maybe<Scalars['String']>
	surname_not?: Maybe<Scalars['String']>
	surname_in?: Maybe<Array<Scalars['String']>>
	surname_not_in?: Maybe<Array<Scalars['String']>>
	surname_regexp?: Maybe<Scalars['String']>
	surname_contains?: Maybe<Scalars['String']>
	surname_not_contains?: Maybe<Scalars['String']>
	surname_starts_with?: Maybe<Scalars['String']>
	surname_not_starts_with?: Maybe<Scalars['String']>
	surname_ends_with?: Maybe<Scalars['String']>
	surname_not_ends_with?: Maybe<Scalars['String']>
	avatar?: Maybe<Scalars['String']>
	avatar_not?: Maybe<Scalars['String']>
	avatar_in?: Maybe<Array<Scalars['String']>>
	avatar_not_in?: Maybe<Array<Scalars['String']>>
	avatar_regexp?: Maybe<Scalars['String']>
	avatar_contains?: Maybe<Scalars['String']>
	avatar_not_contains?: Maybe<Scalars['String']>
	avatar_starts_with?: Maybe<Scalars['String']>
	avatar_not_starts_with?: Maybe<Scalars['String']>
	avatar_ends_with?: Maybe<Scalars['String']>
	avatar_not_ends_with?: Maybe<Scalars['String']>
	rank?: Maybe<Scalars['String']>
	rank_not?: Maybe<Scalars['String']>
	rank_in?: Maybe<Array<Scalars['String']>>
	rank_not_in?: Maybe<Array<Scalars['String']>>
	rank_regexp?: Maybe<Scalars['String']>
	rank_contains?: Maybe<Scalars['String']>
	rank_not_contains?: Maybe<Scalars['String']>
	rank_starts_with?: Maybe<Scalars['String']>
	rank_not_starts_with?: Maybe<Scalars['String']>
	rank_ends_with?: Maybe<Scalars['String']>
	rank_not_ends_with?: Maybe<Scalars['String']>
	description?: Maybe<Scalars['String']>
	description_not?: Maybe<Scalars['String']>
	description_in?: Maybe<Array<Scalars['String']>>
	description_not_in?: Maybe<Array<Scalars['String']>>
	description_regexp?: Maybe<Scalars['String']>
	description_contains?: Maybe<Scalars['String']>
	description_not_contains?: Maybe<Scalars['String']>
	description_starts_with?: Maybe<Scalars['String']>
	description_not_starts_with?: Maybe<Scalars['String']>
	description_ends_with?: Maybe<Scalars['String']>
	description_not_ends_with?: Maybe<Scalars['String']>
	createdAt?: Maybe<_Neo4jDateTimeInput>
	createdAt_not?: Maybe<_Neo4jDateTimeInput>
	createdAt_in?: Maybe<Array<_Neo4jDateTimeInput>>
	createdAt_not_in?: Maybe<Array<_Neo4jDateTimeInput>>
	createdAt_lt?: Maybe<_Neo4jDateTimeInput>
	createdAt_lte?: Maybe<_Neo4jDateTimeInput>
	createdAt_gt?: Maybe<_Neo4jDateTimeInput>
	createdAt_gte?: Maybe<_Neo4jDateTimeInput>
	timestamp?: Maybe<Scalars['String']>
	timestamp_not?: Maybe<Scalars['String']>
	timestamp_in?: Maybe<Array<Scalars['String']>>
	timestamp_not_in?: Maybe<Array<Scalars['String']>>
	timestamp_regexp?: Maybe<Scalars['String']>
	timestamp_contains?: Maybe<Scalars['String']>
	timestamp_not_contains?: Maybe<Scalars['String']>
	timestamp_starts_with?: Maybe<Scalars['String']>
	timestamp_not_starts_with?: Maybe<Scalars['String']>
	timestamp_ends_with?: Maybe<Scalars['String']>
	timestamp_not_ends_with?: Maybe<Scalars['String']>
	roles?: Maybe<Array<Scalars['String']>>
	roles_not?: Maybe<Array<Scalars['String']>>
	roles_regexp?: Maybe<Scalars['String']>
	roles_contains?: Maybe<Array<Scalars['String']>>
	roles_not_contains?: Maybe<Array<Scalars['String']>>
	roles_starts_with?: Maybe<Array<Scalars['String']>>
	roles_not_starts_with?: Maybe<Array<Scalars['String']>>
	roles_ends_with?: Maybe<Array<Scalars['String']>>
	roles_not_ends_with?: Maybe<Array<Scalars['String']>>
	location?: Maybe<Scalars['String']>
	location_not?: Maybe<Scalars['String']>
	location_in?: Maybe<Array<Scalars['String']>>
	location_not_in?: Maybe<Array<Scalars['String']>>
	location_regexp?: Maybe<Scalars['String']>
	location_contains?: Maybe<Scalars['String']>
	location_not_contains?: Maybe<Scalars['String']>
	location_starts_with?: Maybe<Scalars['String']>
	location_not_starts_with?: Maybe<Scalars['String']>
	location_ends_with?: Maybe<Scalars['String']>
	location_not_ends_with?: Maybe<Scalars['String']>
	questions?: Maybe<_QuestionFilter>
	questions_not?: Maybe<_QuestionFilter>
	questions_in?: Maybe<Array<_QuestionFilter>>
	questions_not_in?: Maybe<Array<_QuestionFilter>>
	questions_some?: Maybe<_QuestionFilter>
	questions_none?: Maybe<_QuestionFilter>
	questions_single?: Maybe<_QuestionFilter>
	questions_every?: Maybe<_QuestionFilter>
	answers?: Maybe<_AnswerFilter>
	answers_not?: Maybe<_AnswerFilter>
	answers_in?: Maybe<Array<_AnswerFilter>>
	answers_not_in?: Maybe<Array<_AnswerFilter>>
	answers_some?: Maybe<_AnswerFilter>
	answers_none?: Maybe<_AnswerFilter>
	answers_single?: Maybe<_AnswerFilter>
	answers_every?: Maybe<_AnswerFilter>
	tags?: Maybe<_TagFilter>
	tags_not?: Maybe<_TagFilter>
	tags_in?: Maybe<Array<_TagFilter>>
	tags_not_in?: Maybe<Array<_TagFilter>>
	tags_some?: Maybe<_TagFilter>
	tags_none?: Maybe<_TagFilter>
	tags_single?: Maybe<_TagFilter>
	tags_every?: Maybe<_TagFilter>
	comments?: Maybe<_CommentFilter>
	comments_not?: Maybe<_CommentFilter>
	comments_in?: Maybe<Array<_CommentFilter>>
	comments_not_in?: Maybe<Array<_CommentFilter>>
	comments_some?: Maybe<_CommentFilter>
	comments_none?: Maybe<_CommentFilter>
	comments_single?: Maybe<_CommentFilter>
	comments_every?: Maybe<_CommentFilter>
	moderatingTags?: Maybe<_TagFilter>
	moderatingTags_not?: Maybe<_TagFilter>
	moderatingTags_in?: Maybe<Array<_TagFilter>>
	moderatingTags_not_in?: Maybe<Array<_TagFilter>>
	moderatingTags_some?: Maybe<_TagFilter>
	moderatingTags_none?: Maybe<_TagFilter>
	moderatingTags_single?: Maybe<_TagFilter>
	moderatingTags_every?: Maybe<_TagFilter>
}

export type User = {
	__typename?: 'User'
	nodeId: Scalars['ID']
	name: Scalars['String']
	surname: Scalars['String']
	avatar?: Maybe<Scalars['String']>
	rank?: Maybe<Scalars['String']>
	description?: Maybe<Scalars['String']>
	createdAt?: Maybe<_Neo4jDateTime>
	timestamp?: Maybe<Scalars['String']>
	roles?: Maybe<Array<Maybe<Scalars['String']>>>
	location?: Maybe<Scalars['String']>
	questionsCount?: Maybe<Scalars['Int']>
	answersCount?: Maybe<Scalars['Int']>
	solvedQuestionsCount?: Maybe<Scalars['Int']>
	favoriteTags?: Maybe<Array<Maybe<Tag>>>
	email?: Maybe<LocalAccount>
	questions?: Maybe<Array<Maybe<Question>>>
	answers?: Maybe<Array<Maybe<Answer>>>
	tags?: Maybe<Array<Maybe<Tag>>>
	comments?: Maybe<Array<Maybe<Comment>>>
	liked?: Maybe<Array<Maybe<CanBeLiked>>>
	subscriptions?: Maybe<Array<Maybe<CanBeSubscribed>>>
	moderatingTags?: Maybe<Array<Maybe<Tag>>>
	/** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
	_id?: Maybe<Scalars['String']>
}

export type UserFavoriteTagsArgs = {
	first?: Maybe<Scalars['Int']>
	offset?: Maybe<Scalars['Int']>
	orderBy?: Maybe<Array<Maybe<_TagOrdering>>>
}

export type UserQuestionsArgs = {
	first?: Maybe<Scalars['Int']>
	offset?: Maybe<Scalars['Int']>
	orderBy?: Maybe<Array<Maybe<_QuestionOrdering>>>
	filter?: Maybe<_QuestionFilter>
}

export type UserAnswersArgs = {
	first?: Maybe<Scalars['Int']>
	offset?: Maybe<Scalars['Int']>
	orderBy?: Maybe<Array<Maybe<_AnswerOrdering>>>
	filter?: Maybe<_AnswerFilter>
}

export type UserTagsArgs = {
	first?: Maybe<Scalars['Int']>
	offset?: Maybe<Scalars['Int']>
	orderBy?: Maybe<Array<Maybe<_TagOrdering>>>
	filter?: Maybe<_TagFilter>
}

export type UserCommentsArgs = {
	first?: Maybe<Scalars['Int']>
	offset?: Maybe<Scalars['Int']>
	orderBy?: Maybe<Array<Maybe<_CommentOrdering>>>
	filter?: Maybe<_CommentFilter>
}

export type UserModeratingTagsArgs = {
	first?: Maybe<Scalars['Int']>
	offset?: Maybe<Scalars['Int']>
	orderBy?: Maybe<Array<Maybe<_TagOrdering>>>
	filter?: Maybe<_TagFilter>
}

export type Profile = {
	__typename?: 'Profile'
	name?: Maybe<Scalars['String']>
	surname?: Maybe<Scalars['String']>
	avatar?: Maybe<Scalars['String']>
	rank?: Maybe<Scalars['String']>
	description?: Maybe<Scalars['String']>
	isPasswordChanged?: Maybe<Scalars['String']>
}

export type LocalAccount = {
	__typename?: 'LocalAccount'
	user: User
	email: Scalars['String']
	password?: Maybe<Scalars['String']>
	code?: Maybe<Scalars['Int']>
}

export type LocalAccountUserArgs = {
	filter?: Maybe<_UserFilter>
}

export enum VoteIntention {
	UpVote = 'upVote',
	DownVote = 'downVote',
}

export enum Role {
	User = 'user',
	Admin = 'admin',
	Reader = 'reader',
}

export enum ResponseStatus {
	Success = 'success',
	Fail = 'fail',
}

export type RegisterUserInput = {
	email: Scalars['String']
	password: Scalars['String']
	name: Scalars['String']
	surname: Scalars['String']
	rank?: Maybe<UserRank>
}

export type UserProfileInput = {
	password?: Maybe<Scalars['String']>
	name?: Maybe<Scalars['String']>
	surname?: Maybe<Scalars['String']>
	avatar?: Maybe<Scalars['String']>
	rank?: Maybe<UserRank>
	description?: Maybe<Scalars['String']>
}

export type LoginUserInput = {
	email: Scalars['String']
	password: Scalars['String']
}

export type EmailInput = {
	email: Scalars['String']
}

export type NodeIdInput = {
	nodeId: Scalars['ID']
}

export type DeleteTagInput = {
	name: Scalars['String']
}

export type CodeInput = {
	code: Scalars['Int']
}

export type NewPassInput = {
	code: Scalars['Int']
	new_password: Scalars['String']
}

export type AskQuestionInput = {
	title: Scalars['String']
	text: Scalars['String']
	tags: Array<Scalars['String']>
}

export type EditQuestionInput = {
	nodeId: Scalars['ID']
	title?: Maybe<Scalars['String']>
	text?: Maybe<Scalars['String']>
	tags?: Maybe<Array<Scalars['String']>>
}

export type AnswerQuestionInput = {
	nodeId: Scalars['ID']
	text: Scalars['String']
}

export type AddCommentInput = {
	nodeId: Scalars['ID']
	text: Scalars['String']
}

export type EditAnswerInput = {
	nodeId: Scalars['ID']
	text: Scalars['String']
}

export type EditCommentInput = {
	nodeId: Scalars['ID']
	text: Scalars['String']
}

export type AddTagInput = {
	name: Scalars['String']
	description?: Maybe<Scalars['String']>
}

export type AddRankInput = {
	rank: Scalars['String']
	description?: Maybe<Scalars['String']>
}

export type VoteInput = {
	nodeId: Scalars['ID']
	action: VoteIntention
}

export type CanBeCommented = {
	nodeId: Scalars['ID']
	comments?: Maybe<Array<Maybe<Comment>>>
	commentsCount?: Maybe<Scalars['Int']>
	canComment?: Maybe<Scalars['Boolean']>
}

export type CanBeCommentedCommentsArgs = {
	first?: Maybe<Scalars['Int']>
	offset?: Maybe<Scalars['Int']>
	orderBy?: Maybe<Array<Maybe<_CommentOrdering>>>
	filter?: Maybe<_CommentFilter>
}

export type CanBeLiked = {
	nodeId: Scalars['ID']
	likes?: Maybe<Array<Maybe<User>>>
	likesCount?: Maybe<Scalars['Int']>
	canLike?: Maybe<Scalars['Boolean']>
	isLiked?: Maybe<Scalars['Boolean']>
}

export type CanBeLikedLikesArgs = {
	first?: Maybe<Scalars['Int']>
	offset?: Maybe<Scalars['Int']>
	orderBy?: Maybe<Array<Maybe<_UserOrdering>>>
	filter?: Maybe<_UserFilter>
}

export type CanBeSubscribed = {
	nodeId: Scalars['ID']
	subscribers?: Maybe<Array<Maybe<User>>>
	subscribersCount?: Maybe<Scalars['Int']>
	canSubscribe?: Maybe<Scalars['Boolean']>
	isSubscribed?: Maybe<Scalars['Boolean']>
}

export type CanBeSubscribedSubscribersArgs = {
	first?: Maybe<Scalars['Int']>
	offset?: Maybe<Scalars['Int']>
	orderBy?: Maybe<Array<Maybe<_UserOrdering>>>
	filter?: Maybe<_UserFilter>
}

export type CanBeVoted = {
	nodeId: Scalars['ID']
	upVotesCount?: Maybe<Scalars['Int']>
	downVotesCount?: Maybe<Scalars['Int']>
	canVote?: Maybe<Scalars['Boolean']>
	isVotedUp?: Maybe<Scalars['Boolean']>
	isVotedDown?: Maybe<Scalars['Boolean']>
}

export type LikeResponse = Question | Comment

export type VoteResponse = Question | Answer

export type SubscribeResponse = Question | Tag

export type AskQuestionResponse = Question | FormError

export type AnswerQuestionResponse = Answer | FormError

export type AddCommentResponse = Comment | FormError

export type AuthResponse = TokenResponse | FormError

export type EditProfileResponse = Profile | FormError

export type FieldError = {
	__typename?: 'FieldError'
	field?: Maybe<Scalars['String']>
	message?: Maybe<Scalars['String']>
}

export type FormError = {
	__typename?: 'FormError'
	message?: Maybe<Scalars['String']>
	errors?: Maybe<Array<Maybe<FieldError>>>
}

export type LoginResponse = {
	__typename?: 'LoginResponse'
	nodeId: Scalars['ID']
	email: Scalars['String']
	password: Scalars['String']
	name: Scalars['String']
	surname: Scalars['String']
	token?: Maybe<Scalars['String']>
	roles?: Maybe<Array<Maybe<Role>>>
}

export type TokenResponse = {
	__typename?: 'TokenResponse'
	token?: Maybe<Scalars['String']>
}

export type RedirectUriResponse = {
	__typename?: 'RedirectUriResponse'
	redirect: Scalars['String']
	status: ResponseStatus
	message?: Maybe<Scalars['String']>
}

export type DeleteQuestionResponse = {
	__typename?: 'DeleteQuestionResponse'
	nodeId: Scalars['ID']
	title: Scalars['String']
	text: Scalars['String']
}

export type DeleteAnswerResponse = {
	__typename?: 'DeleteAnswerResponse'
	nodeId: Scalars['ID']
	text: Scalars['String']
}

export type DeleteCommentResponse = {
	__typename?: 'DeleteCommentResponse'
	nodeId: Scalars['ID']
	text: Scalars['String']
}

export type DeleteTagResponse = {
	__typename?: 'DeleteTagResponse'
	name: Scalars['String']
}

export enum UserRank {
	ChiefOfficer = 'CHIEF_OFFICER',
	RadioOfficer = 'RADIO_OFFICER',
	SingleOfficer = 'SINGLE_OFFICER',
	S2NdOfficer = 'S2ND_OFFICER',
	T3RdOfficer = 'T3RD_OFFICER',
	SeniorDpo = 'SENIOR_DPO',
	JuniorDpo = 'JUNIOR_DPO',
	Dpo = 'DPO',
	TraineeOfficer = 'TRAINEE_OFFICER',
	BosunBoatswain = 'BOSUN_BOATSWAIN',
	AbAbleSeaman = 'AB_ABLE_SEAMAN',
	OsOrdinarySeaman = 'OS_ORDINARY_SEAMAN',
	CraneOperator = 'CRANE_OPERATOR',
	DredgeMaster = 'DREDGE_MASTER',
	DeckCadet = 'DECK_CADET',
	Cook = 'COOK',
	Messboy = 'MESSBOY',
	Abcook = 'ABCOOK',
	Abwelder = 'ABWELDER',
	Cadettrainee = 'CADETTRAINEE',
	ChiefEngineer = 'CHIEF_ENGINEER',
	SingleEngineer = 'SINGLE_ENGINEER',
	S2NdEngineer = 'S2ND_ENGINEER',
	T3RdEngineer = 'T3RD_ENGINEER',
	F4ThEngineer = 'F4TH_ENGINEER',
	RefEngineer = 'REF_ENGINEER',
	GasEngineer = 'GAS_ENGINEER',
	ElectricalEngineer = 'ELECTRICAL_ENGINEER',
	Eto = 'ETO_',
	TraineeEngineer = 'TRAINEE_ENGINEER',
	Motormanoiler = 'MOTORMANOILER',
	Fitterwelder = 'FITTERWELDER',
	Turner = 'TURNER',
	Electrician = 'ELECTRICIAN',
	Pumpman = 'PUMPMAN',
	EngineCadet = 'ENGINE_CADET',
	Superintendent = 'SUPERINTENDENT',
	Abmm = 'ABMM',
	ChiefCook = 'CHIEF_COOK',
	S2NdCook = 'S2ND_COOK',
	Diver = 'DIVER',
	Wiper = 'WIPER',
	Motormanelectrician = 'MOTORMANELECTRICIAN',
	AssistantElectricalEngineer = 'ASSISTANT_ELECTRICAL_ENGINEER',
	WatchEngineer = 'WATCH_ENGINEER',
	StaffEngineer = 'STAFF_ENGINEER',
	HotelAccommodationEngineer = 'HOTEL_ACCOMMODATION_ENGINEER',
	Stewardess = 'STEWARDESS',
	HydroAcousticOperator = 'HYDRO_ACOUSTIC_OPERATOR',
	ChiefTrawlMaster = 'CHIEF_TRAWL_MASTER',
	WatchTrawlMaster = 'WATCH_TRAWL_MASTER',
	SeamanWinchman = 'SEAMAN_WINCHMAN',
	TrawlSeaman = 'TRAWL_SEAMAN',
	MasterOfTheProduct = 'MASTER_OF_THE_PRODUCT',
	FishMaster = 'FISH_MASTER',
	WorkersOfTheProductPlant = 'WORKERS_OF_THE_PRODUCT_PLANT',
	EngineerAdjuster = 'ENGINEER_ADJUSTER',
	FishmillOperator = 'FISHMILL_OPERATOR',
	RefrigeratorOperator = 'REFRIGERATOR_OPERATOR',
	LaundryOperator = 'LAUNDRY_OPERATOR',
	GeneralManager = 'GENERAL_MANAGER',
	HotelManager = 'HOTEL_MANAGER',
	CasinoManager = 'CASINO_MANAGER',
	ShopManager = 'SHOP_MANAGER',
	ProvisionMaster = 'PROVISION_MASTER',
	StoreManager = 'STORE_MANAGER',
	Purser = 'PURSER',
	Accountant = 'ACCOUNTANT',
	CruiseDirector = 'CRUISE_DIRECTOR',
	HotelManagerDirector = 'HOTEL_MANAGER_DIRECTOR',
	HotelManagerSecretary = 'HOTEL_MANAGER_SECRETARY',
	Receptionist = 'RECEPTIONIST',
	Storekeeper = 'STOREKEEPER',
	Cashier = 'CASHIER',
	Photographer = 'PHOTOGRAPHER',
	SecurityOfficer = 'SECURITY_OFFICER',
	SecurityGuard = 'SECURITY_GUARD',
	StewardHeadRoom = 'STEWARD_HEAD_ROOM',
	StewardstewardessCabin = 'STEWARDSTEWARDESS_CABIN',
	StewardstewardessAssistantCabin = 'STEWARDSTEWARDESS_ASSISTANT_CABIN',
	BellCaptain = 'BELL_CAPTAIN',
	BellBoy = 'BELL_BOY',
	Cleaner = 'CLEANER',
	LaundryMan = 'LAUNDRY_MAN',
	LinenKeeper = 'LINEN_KEEPER',
	Chambermaid = 'CHAMBERMAID',
	PoolAttendant = 'POOL_ATTENDANT',
	FoodbeverageManager = 'FOODBEVERAGE_MANAGER',
	FoodbeverageAssistantManager = 'FOODBEVERAGE_ASSISTANT_MANAGER',
	BarManager = 'BAR_MANAGER',
	BarAssistantManager = 'BAR_ASSISTANT_MANAGER',
	Bartender = 'BARTENDER',
	BarWaiter = 'BAR_WAITER',
	HeadWaiter = 'HEAD_WAITER',
	Waiterwaitress = 'WAITERWAITRESS',
	WineSteward = 'WINE_STEWARD',
	Busboy = 'BUSBOY',
	Plumber = 'PLUMBER',
	Upholsterer = 'UPHOLSTERER',
	Tailor = 'TAILOR',
	Carpenter = 'CARPENTER',
	AcRepairman = 'AC_REPAIRMAN',
	GeneralPurposeRepairman = 'GENERAL_PURPOSE_REPAIRMAN',
	Doctor = 'DOCTOR',
	AdministrativeAssistant = 'ADMINISTRATIVE_ASSISTANT',
	ArtAuctioneer = 'ART_AUCTIONEER',
	AssistantCruiseDirector = 'ASSISTANT_CRUISE_DIRECTOR',
	AssistantShoreExcursionsManager = 'ASSISTANT_SHORE_EXCURSIONS_MANAGER',
	AudioVisualCoordinator = 'AUDIO_VISUAL_COORDINATOR',
	Avit = 'AVIT',
	Baker = 'BAKER',
	BarSteward = 'BAR_STEWARD',
	Beautician = 'BEAUTICIAN',
	BeautyTherapist = 'BEAUTY_THERAPIST',
	BedroomSteward = 'BEDROOM_STEWARD',
	BookingAgent = 'BOOKING_AGENT',
	Bookkeeper = 'BOOKKEEPER',
	BrandManager = 'BRAND_MANAGER',
	BuffetServer = 'BUFFET_SERVER',
	Butcher = 'BUTCHER',
	CabinStewardess = 'CABIN_STEWARDESS',
	Ceto = 'CETO',
	ChefDePartie = 'CHEF_DE_PARTIE',
	ChiefCabinSteward = 'CHIEF_CABIN_STEWARD',
	ChiefPurser = 'CHIEF_PURSER',
	ChiefStewardhousekeeper = 'CHIEF_STEWARDHOUSEKEEPER',
	ChiefStewardess = 'CHIEF_STEWARDESS',
	CocktailServer = 'COCKTAIL_SERVER_',
	ComputerSystemsManagerit = 'COMPUTER_SYSTEMS_MANAGERIT',
	Cosmetologist = 'COSMETOLOGIST',
	CruiseConsultant = 'CRUISE_CONSULTANT',
	CustomerServiceRepresentative = 'CUSTOMER_SERVICE_REPRESENTATIVE',
	Dancer = 'DANCER',
	DanceInstructor = 'DANCE_INSTRUCTOR',
	DeckHand = 'DECK_HAND',
	DiningRoomHeadWaiter = 'DINING_ROOM_HEAD_WAITER',
	DiningRoomManager = 'DINING_ROOM_MANAGER',
	DiscJockey = 'DISC_JOCKEY',
	DiveInstructor = 'DIVE_INSTRUCTOR',
	Entertainer = 'ENTERTAINER',
	ExpeditionLeader = 'EXPEDITION_LEADER',
	FieldRepresentative = 'FIELD_REPRESENTATIVE',
	FitnessDirector = 'FITNESS_DIRECTOR',
	FitnessInstructor = 'FITNESS_INSTRUCTOR',
	GalleyStewardess = 'GALLEY_STEWARDESS',
	GeneralCook = 'GENERAL_COOK',
	GentlemenHost = 'GENTLEMEN_HOST',
	GiftShopManager = 'GIFT_SHOP_MANAGER',
	GiftShopSalesAssistant = 'GIFT_SHOP_SALES_ASSISTANT',
	HairStylist = 'HAIR_STYLIST',
	HousekeeperAssistant = 'HOUSEKEEPER_ASSISTANT',
	HousekeeperChief = 'HOUSEKEEPER_CHIEF',
	HrManager = 'HR_MANAGER',
	InsideSalesRepresentative = 'INSIDE_SALES_REPRESENTATIVE',
	ItLeadDeveloper = 'IT_LEAD_DEVELOPER',
	ItStaff = 'IT_STAFF',
	LaundryHelper = 'LAUNDRY_HELPER',
	LaundryKeeper = 'LAUNDRY_KEEPER',
	LaundrySupervisor = 'LAUNDRY_SUPERVISOR',
	LeadDeckhand = 'LEAD_DECKHAND_',
	LecturerSpecialGuestSpeaker = 'LECTURER_SPECIAL_GUEST_SPEAKER',
	Lifeguard = 'LIFEGUARD',
	MaitreDHotel = 'MAITRE_D_HOTEL',
	Manicurist = 'MANICURIST',
	Marketingpr = 'MARKETINGPR',
	MarketingResearchAnalyst = 'MARKETING_RESEARCH_ANALYST',
	MassageTherapist = 'MASSAGE_THERAPIST',
	Naturalist = 'NATURALIST',
	Nursestewardess = 'NURSESTEWARDESS',
	OperationsAdministrator = 'OPERATIONS_ADMINISTRATOR',
	OperationsAnalyst = 'OPERATIONS_ANALYST',
	OutsideSalesRepresentative = 'OUTSIDE_SALES_REPRESENTATIVE',
	PayrollClerk = 'PAYROLL_CLERK',
	PersonalTrainer = 'PERSONAL_TRAINER',
	ProductionManager = 'PRODUCTION_MANAGER',
	ProgramCoordinator = 'PROGRAM_COORDINATOR',
	PurchasingAgent = 'PURCHASING_AGENT',
	QuarterMaster = 'QUARTER_MASTER',
	SafetyOfficer = 'SAFETY_OFFICER',
	SeniorBusinessAnalyst = 'SENIOR_BUSINESS_ANALYST',
	SeniorHousekeeper = 'SENIOR_HOUSEKEEPER',
	SeniorStaffAccountant = 'SENIOR_STAFF_ACCOUNTANT',
	SeniorStewardess = 'SENIOR_STEWARDESS',
	ShoreExcursionsManager = 'SHORE_EXCURSIONS_MANAGER',
	SocialHosthostess = 'SOCIAL_HOSTHOSTESS',
	SoftwareEngineer = 'SOFTWARE_ENGINEER',
	SoundAndLightTechnician = 'SOUND_AND_LIGHT_TECHNICIAN',
	SpaAttendant = 'SPA_ATTENDANT',
	SpaStewardess = 'SPA_STEWARDESS',
	StaffAccountant = 'STAFF_ACCOUNTANT',
	StaffCaptain = 'STAFF_CAPTAIN',
	TourAccounting = 'TOUR_ACCOUNTING',
	WaterSportsInstructor = 'WATER_SPORTS_INSTRUCTOR',
	WorkerOfTheProductPlant = 'WORKER_OF_THE_PRODUCT_PLANT',
	ContractsAdministrator = 'CONTRACTS_ADMINISTRATOR',
	ContractsManager = 'CONTRACTS_MANAGER',
	CharteringManager = 'CHARTERING_MANAGER',
	SystemsEngineer = 'SYSTEMS_ENGINEER',
	NavalArchitect = 'NAVAL_ARCHITECT',
	SalesManager = 'SALES_MANAGER',
	BusinessDevelopmentManager = 'BUSINESS_DEVELOPMENT_MANAGER',
	SuperintendentElectrical = 'SUPERINTENDENT_ELECTRICAL',
	Trader = 'TRADER',
	Analyst = 'ANALYST',
	PortManager = 'PORT_MANAGER',
	EngineeringManager = 'ENGINEERING_MANAGER',
	MaintenanceTechnician = 'MAINTENANCE_TECHNICIAN',
	CadOperator = 'CAD_OPERATOR',
	Sg1A = 'SG1A',
	ServiceManager = 'SERVICE_MANAGER',
	TechnicalManager = 'TECHNICAL_MANAGER',
	Underwriter = 'UNDERWRITER',
	HeadOfNetworkPlanning = 'HEAD_OF_NETWORK_PLANNING',
	NetworkPlanningManager = 'NETWORK_PLANNING_MANAGER',
	MarineSurveyor = 'MARINE_SURVEYOR',
	MarineConsultant = 'MARINE_CONSULTANT',
	Buyer = 'BUYER',
	TerminalManager = 'TERMINAL_MANAGER',
	SuperintendentTechnical = 'SUPERINTENDENT_TECHNICAL',
	ItManager = 'IT_MANAGER',
	TechnicalAssistant = 'TECHNICAL_ASSISTANT',
	OperationsManager = 'OPERATIONS_MANAGER',
	ShipPlanner = 'SHIP_PLANNER',
	MarineManager = 'MARINE_MANAGER',
	Associate = 'ASSOCIATE',
	ShipOperator = 'SHIP_OPERATOR',
	CrewingManager = 'CREWING_MANAGER',
	ServiceEngineer = 'SERVICE_ENGINEER',
	ControlsEngineer = 'CONTROLS_ENGINEER',
	AccountExecutive = 'ACCOUNT_EXECUTIVE',
	ClaimsExecutive = 'CLAIMS_EXECUTIVE',
	RiskAdvisor = 'RISK_ADVISOR',
	AccountManager = 'ACCOUNT_MANAGER',
	CommercialManager = 'COMMERCIAL_MANAGER',
	HumanResources = 'HUMAN_RESOURCES',
	WeldingEngineer = 'WELDING_ENGINEER',
	ExportClerk = 'EXPORT_CLERK',
	ProjectManager = 'PROJECT_MANAGER',
	VettingSuperintendent = 'VETTING_SUPERINTENDENT',
	ProcurementOfficer = 'PROCUREMENT_OFFICER',
	SuperintendentOperations = 'SUPERINTENDENT_OPERATIONS',
	OperationsAssistant = 'OPERATIONS_ASSISTANT',
	OperationsExecutive = 'OPERATIONS_EXECUTIVE',
	LogisticsExecutive = 'LOGISTICS_EXECUTIVE',
	QualityManager = 'QUALITY_MANAGER',
	MarineEngineer = 'MARINE_ENGINEER',
	OperationsOfficer = 'OPERATIONS_OFFICER',
	SalesEngineer = 'SALES_ENGINEER',
	CargoEngineer = 'CARGO_ENGINEER',
	TechnicalDirector = 'TECHNICAL_DIRECTOR',
	ProcurementManager = 'PROCUREMENT_MANAGER',
	CustomerServiceExecutive = 'CUSTOMER_SERVICE_EXECUTIVE',
	BunkerPurchaser = 'BUNKER_PURCHASER',
	ProjectEngineer = 'PROJECT_ENGINEER',
	BunkerTrader = 'BUNKER_TRADER',
	RecruitmentConsultant = 'RECRUITMENT_CONSULTANT',
	StructuralEngineer = 'STRUCTURAL_ENGINEER',
	ProjectOfficer = 'PROJECT_OFFICER',
	PortEngineer = 'PORT_ENGINEER',
	ClientRepresentative = 'CLIENT_REPRESENTATIVE',
	ShipsAgent = 'SHIPS_AGENT',
	PortAgent = 'PORT_AGENT',
	Charterer = 'CHARTERER',
	SuperintendentCargo = 'SUPERINTENDENT_CARGO',
	CrewingOfficer = 'CREWING_OFFICER',
	OperationsDirector = 'OPERATIONS_DIRECTOR',
	AssistantHseSuperintendent = 'ASSISTANT_HSE_SUPERINTENDENT',
	EnvironmentalManager = 'ENVIRONMENTAL_MANAGER',
	MarketingExecutive = 'MARKETING_EXECUTIVE',
	PortCaptain = 'PORT_CAPTAIN',
	Broker = 'BROKER',
	HseManager = 'HSE_MANAGER',
	Surveyor = 'SURVEYOR',
	AdministrationManager = 'ADMINISTRATION_MANAGER',
	Roustabout = 'ROUSTABOUT',
	Derrickman = 'DERRICKMAN',
	FloorMan = 'FLOOR_MAN',
	Pipefitter = 'PIPEFITTER',
	Fabricator = 'FABRICATOR',
	Coxswain = 'COXSWAIN',
	RepairEngineer = 'REPAIR_ENGINEER',
	PersonalAssistantSecretary = 'PERSONAL_ASSISTANT_SECRETARY',
	AdministrationSupport = 'ADMINISTRATION_SUPPORT',
	InjectionMoldingMachineOperator = 'INJECTION_MOLDING_MACHINE_OPERATOR',
	JuniorMechanicalEngineer = 'JUNIOR_MECHANICAL_ENGINEER',
	SpringMachineOperator = 'SPRING_MACHINE_OPERATOR',
	LatheMachineOperator = 'LATHE_MACHINE_OPERATOR',
	SlotTechnician = 'SLOT_TECHNICIAN',
	CommissioningEngineer = 'COMMISSIONING_ENGINEER',
	CommunicationOfficer = 'COMMUNICATION_OFFICER',
	HydrographicSurveyor = 'HYDROGRAPHIC_SURVEYOR',
	PipeOperator = 'PIPE_OPERATOR',
}

/** Generated Time input object for Neo4j [Temporal field arguments](https://grandstack.io/docs/graphql-temporal-types-datetime/#temporal-query-arguments). */
export type _Neo4jTimeInput = {
	hour?: Maybe<Scalars['Int']>
	minute?: Maybe<Scalars['Int']>
	second?: Maybe<Scalars['Int']>
	millisecond?: Maybe<Scalars['Int']>
	microsecond?: Maybe<Scalars['Int']>
	nanosecond?: Maybe<Scalars['Int']>
	timezone?: Maybe<Scalars['String']>
	/** Creates a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime/#using-temporal-fields-in-mutations) Time value using a [String format](https://neo4j.com/docs/cypher-manual/current/functions/temporal/time/#functions-time-create-string). */
	formatted?: Maybe<Scalars['String']>
}

/** Generated Time object type for Neo4j [Temporal fields](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries). */
export type _Neo4jTime = {
	__typename?: '_Neo4jTime'
	hour?: Maybe<Scalars['Int']>
	minute?: Maybe<Scalars['Int']>
	second?: Maybe<Scalars['Int']>
	millisecond?: Maybe<Scalars['Int']>
	microsecond?: Maybe<Scalars['Int']>
	nanosecond?: Maybe<Scalars['Int']>
	timezone?: Maybe<Scalars['String']>
	/** Outputs a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries) Time value as a String type by using the [toString](https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-tostring) Cypher function. */
	formatted?: Maybe<Scalars['String']>
}

/** Generated Date input object for Neo4j [Temporal field arguments](https://grandstack.io/docs/graphql-temporal-types-datetime/#temporal-query-arguments). */
export type _Neo4jDateInput = {
	year?: Maybe<Scalars['Int']>
	month?: Maybe<Scalars['Int']>
	day?: Maybe<Scalars['Int']>
	/** Creates a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime/#using-temporal-fields-in-mutations) Date value using a [String format](https://neo4j.com/docs/cypher-manual/current/functions/temporal/date/#functions-date-create-string). */
	formatted?: Maybe<Scalars['String']>
}

/** Generated Date object type for Neo4j [Temporal fields](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries). */
export type _Neo4jDate = {
	__typename?: '_Neo4jDate'
	year?: Maybe<Scalars['Int']>
	month?: Maybe<Scalars['Int']>
	day?: Maybe<Scalars['Int']>
	/** Outputs a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries) Date value as a String type by using the [toString](https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-tostring) Cypher function. */
	formatted?: Maybe<Scalars['String']>
}

/** Generated DateTime input object for Neo4j [Temporal field arguments](https://grandstack.io/docs/graphql-temporal-types-datetime/#temporal-query-arguments). */
export type _Neo4jDateTimeInput = {
	year?: Maybe<Scalars['Int']>
	month?: Maybe<Scalars['Int']>
	day?: Maybe<Scalars['Int']>
	hour?: Maybe<Scalars['Int']>
	minute?: Maybe<Scalars['Int']>
	second?: Maybe<Scalars['Int']>
	millisecond?: Maybe<Scalars['Int']>
	microsecond?: Maybe<Scalars['Int']>
	nanosecond?: Maybe<Scalars['Int']>
	timezone?: Maybe<Scalars['String']>
	/** Creates a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime/#using-temporal-fields-in-mutations) DateTime value using a [String format](https://neo4j.com/docs/cypher-manual/current/functions/temporal/datetime/#functions-datetime-create-string). */
	formatted?: Maybe<Scalars['String']>
}

/** Generated DateTime object type for Neo4j [Temporal fields](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries). */
export type _Neo4jDateTime = {
	__typename?: '_Neo4jDateTime'
	year?: Maybe<Scalars['Int']>
	month?: Maybe<Scalars['Int']>
	day?: Maybe<Scalars['Int']>
	hour?: Maybe<Scalars['Int']>
	minute?: Maybe<Scalars['Int']>
	second?: Maybe<Scalars['Int']>
	millisecond?: Maybe<Scalars['Int']>
	microsecond?: Maybe<Scalars['Int']>
	nanosecond?: Maybe<Scalars['Int']>
	timezone?: Maybe<Scalars['String']>
	/** Outputs a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries) DateTime value as a String type by using the [toString](https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-tostring) Cypher function. */
	formatted?: Maybe<Scalars['String']>
}

/** Generated LocalTime input object for Neo4j [Temporal field arguments](https://grandstack.io/docs/graphql-temporal-types-datetime/#temporal-query-arguments). */
export type _Neo4jLocalTimeInput = {
	hour?: Maybe<Scalars['Int']>
	minute?: Maybe<Scalars['Int']>
	second?: Maybe<Scalars['Int']>
	millisecond?: Maybe<Scalars['Int']>
	microsecond?: Maybe<Scalars['Int']>
	nanosecond?: Maybe<Scalars['Int']>
	/** Creates a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime/#using-temporal-fields-in-mutations) LocalTime value using a [String format](https://neo4j.com/docs/cypher-manual/current/functions/temporal/localtime/#functions-localtime-create-string). */
	formatted?: Maybe<Scalars['String']>
}

/** Generated LocalTime object type for Neo4j [Temporal fields](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries). */
export type _Neo4jLocalTime = {
	__typename?: '_Neo4jLocalTime'
	hour?: Maybe<Scalars['Int']>
	minute?: Maybe<Scalars['Int']>
	second?: Maybe<Scalars['Int']>
	millisecond?: Maybe<Scalars['Int']>
	microsecond?: Maybe<Scalars['Int']>
	nanosecond?: Maybe<Scalars['Int']>
	/** Outputs a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries) LocalTime value as a String type by using the [toString](https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-tostring) Cypher function. */
	formatted?: Maybe<Scalars['String']>
}

/** Generated LocalDateTime input object for Neo4j [Temporal field arguments](https://grandstack.io/docs/graphql-temporal-types-datetime/#temporal-query-arguments). */
export type _Neo4jLocalDateTimeInput = {
	year?: Maybe<Scalars['Int']>
	month?: Maybe<Scalars['Int']>
	day?: Maybe<Scalars['Int']>
	hour?: Maybe<Scalars['Int']>
	minute?: Maybe<Scalars['Int']>
	second?: Maybe<Scalars['Int']>
	millisecond?: Maybe<Scalars['Int']>
	microsecond?: Maybe<Scalars['Int']>
	nanosecond?: Maybe<Scalars['Int']>
	/** Creates a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime/#using-temporal-fields-in-mutations) LocalDateTime value using a [String format](https://neo4j.com/docs/cypher-manual/current/functions/temporal/localdatetime/#functions-localdatetime-create-string). */
	formatted?: Maybe<Scalars['String']>
}

/** Generated LocalDateTime object type for Neo4j [Temporal fields](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries). */
export type _Neo4jLocalDateTime = {
	__typename?: '_Neo4jLocalDateTime'
	year?: Maybe<Scalars['Int']>
	month?: Maybe<Scalars['Int']>
	day?: Maybe<Scalars['Int']>
	hour?: Maybe<Scalars['Int']>
	minute?: Maybe<Scalars['Int']>
	second?: Maybe<Scalars['Int']>
	millisecond?: Maybe<Scalars['Int']>
	microsecond?: Maybe<Scalars['Int']>
	nanosecond?: Maybe<Scalars['Int']>
	/** Outputs a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries) LocalDateTime value as a String type by using the [toString](https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-tostring) Cypher function. */
	formatted?: Maybe<Scalars['String']>
}

export type _Neo4jPointDistanceFilter = {
	point: _Neo4jPointInput
	distance: Scalars['Float']
}

/** Generated Point input object for Neo4j [Spatial field arguments](https://grandstack.io/docs/graphql-spatial-types/#point-query-arguments). */
export type _Neo4jPointInput = {
	x?: Maybe<Scalars['Float']>
	y?: Maybe<Scalars['Float']>
	z?: Maybe<Scalars['Float']>
	longitude?: Maybe<Scalars['Float']>
	latitude?: Maybe<Scalars['Float']>
	height?: Maybe<Scalars['Float']>
	crs?: Maybe<Scalars['String']>
	srid?: Maybe<Scalars['Int']>
}

/** Generated Point object type for Neo4j [Spatial fields](https://grandstack.io/docs/graphql-spatial-types#using-point-in-queries). */
export type _Neo4jPoint = {
	__typename?: '_Neo4jPoint'
	x?: Maybe<Scalars['Float']>
	y?: Maybe<Scalars['Float']>
	z?: Maybe<Scalars['Float']>
	longitude?: Maybe<Scalars['Float']>
	latitude?: Maybe<Scalars['Float']>
	height?: Maybe<Scalars['Float']>
	crs?: Maybe<Scalars['String']>
	srid?: Maybe<Scalars['Int']>
}

export enum _RelationDirections {
	In = 'IN',
	Out = 'OUT',
}

export type Mutation = {
	__typename?: 'Mutation'
	AnswerQuestion: AnswerQuestionResponse
	EditAnswer: Answer
	DeleteAnswer: DeleteAnswerResponse
	ToggleAcceptAnswer?: Maybe<Answer>
	AddComment: AddCommentResponse
	EditComment: Comment
	DeleteComment: DeleteCommentResponse
	AskQuestion: AskQuestionResponse
	EditQuestion: Question
	DeleteQuestion: DeleteQuestionResponse
	ToggleLike: LikeResponse
	ToggleSubscribe: SubscribeResponse
	Vote: VoteResponse
	AddTag?: Maybe<Tag>
	DeleteTag: DeleteTagResponse
	Register: AuthResponse
	SignIn: AuthResponse
	ChangePassRequest: RedirectUriResponse
	ChangePassConfirm: RedirectUriResponse
	ChangePassComplete: RedirectUriResponse
	EditProfile: EditProfileResponse
}

export type MutationAnswerQuestionArgs = {
	data: AnswerQuestionInput
}

export type MutationEditAnswerArgs = {
	data: EditAnswerInput
}

export type MutationDeleteAnswerArgs = {
	data: NodeIdInput
}

export type MutationToggleAcceptAnswerArgs = {
	data: NodeIdInput
}

export type MutationAddCommentArgs = {
	data: AddCommentInput
}

export type MutationEditCommentArgs = {
	data: EditCommentInput
}

export type MutationDeleteCommentArgs = {
	data: NodeIdInput
}

export type MutationAskQuestionArgs = {
	data: AskQuestionInput
}

export type MutationEditQuestionArgs = {
	data: EditQuestionInput
}

export type MutationDeleteQuestionArgs = {
	data: NodeIdInput
}

export type MutationToggleLikeArgs = {
	data: NodeIdInput
}

export type MutationToggleSubscribeArgs = {
	data: NodeIdInput
}

export type MutationVoteArgs = {
	data: VoteInput
}

export type MutationAddTagArgs = {
	data: AddTagInput
}

export type MutationDeleteTagArgs = {
	data: DeleteTagInput
}

export type MutationRegisterArgs = {
	data: RegisterUserInput
}

export type MutationSignInArgs = {
	data: LoginUserInput
}

export type MutationChangePassRequestArgs = {
	data: EmailInput
}

export type MutationChangePassConfirmArgs = {
	data: CodeInput
}

export type MutationChangePassCompleteArgs = {
	data: NewPassInput
}

export type MutationEditProfileArgs = {
	data: UserProfileInput
}

export type Query = {
	__typename?: 'Query'
	QuestionCount?: Maybe<Question>
	UserCount?: Maybe<User>
	CurrentUser: User
	UserRanks?: Maybe<Scalars['JSONObject']>
	/** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Answer type nodes. */
	Answer?: Maybe<Array<Maybe<Answer>>>
	/** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Comment type nodes. */
	Comment?: Maybe<Array<Maybe<Comment>>>
	/** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Question type nodes. */
	Question?: Maybe<Array<Maybe<Question>>>
	/** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Tag type nodes. */
	Tag?: Maybe<Array<Maybe<Tag>>>
	/** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for User type nodes. */
	User?: Maybe<Array<Maybe<User>>>
}

export type QueryQuestionCountArgs = {
	filter?: Maybe<_QuestionFilter>
}

export type QueryUserCountArgs = {
	filter?: Maybe<_UserFilter>
}

export type QueryAnswerArgs = {
	nodeId?: Maybe<Scalars['ID']>
	text?: Maybe<Scalars['String']>
	createdAt?: Maybe<_Neo4jDateTimeInput>
	updatedAt?: Maybe<_Neo4jDateTimeInput>
	timestamp?: Maybe<Scalars['String']>
	_id?: Maybe<Scalars['String']>
	first?: Maybe<Scalars['Int']>
	offset?: Maybe<Scalars['Int']>
	orderBy?: Maybe<Array<Maybe<_AnswerOrdering>>>
	filter?: Maybe<_AnswerFilter>
}

export type QueryCommentArgs = {
	nodeId?: Maybe<Scalars['ID']>
	text?: Maybe<Scalars['String']>
	createdAt?: Maybe<_Neo4jDateTimeInput>
	updatedAt?: Maybe<_Neo4jDateTimeInput>
	timestamp?: Maybe<Scalars['String']>
	_id?: Maybe<Scalars['String']>
	first?: Maybe<Scalars['Int']>
	offset?: Maybe<Scalars['Int']>
	orderBy?: Maybe<Array<Maybe<_CommentOrdering>>>
	filter?: Maybe<_CommentFilter>
}

export type QueryQuestionArgs = {
	nodeId?: Maybe<Scalars['ID']>
	title?: Maybe<Scalars['String']>
	text?: Maybe<Scalars['String']>
	createdAt?: Maybe<_Neo4jDateTimeInput>
	updatedAt?: Maybe<_Neo4jDateTimeInput>
	timestamp?: Maybe<Scalars['String']>
	totalCount?: Maybe<Scalars['Int']>
	_id?: Maybe<Scalars['String']>
	first?: Maybe<Scalars['Int']>
	offset?: Maybe<Scalars['Int']>
	orderBy?: Maybe<Array<Maybe<_QuestionOrdering>>>
	filter?: Maybe<_QuestionFilter>
}

export type QueryTagArgs = {
	nodeId?: Maybe<Scalars['ID']>
	name?: Maybe<Scalars['String']>
	description?: Maybe<Scalars['String']>
	createdAt?: Maybe<_Neo4jDateTimeInput>
	timestamp?: Maybe<Scalars['String']>
	_id?: Maybe<Scalars['String']>
	first?: Maybe<Scalars['Int']>
	offset?: Maybe<Scalars['Int']>
	orderBy?: Maybe<Array<Maybe<_TagOrdering>>>
	filter?: Maybe<_TagFilter>
}

export type QueryUserArgs = {
	nodeId?: Maybe<Scalars['ID']>
	name?: Maybe<Scalars['String']>
	surname?: Maybe<Scalars['String']>
	avatar?: Maybe<Scalars['String']>
	rank?: Maybe<Scalars['String']>
	description?: Maybe<Scalars['String']>
	createdAt?: Maybe<_Neo4jDateTimeInput>
	timestamp?: Maybe<Scalars['String']>
	roles?: Maybe<Array<Maybe<Scalars['String']>>>
	location?: Maybe<Scalars['String']>
	_id?: Maybe<Scalars['String']>
	first?: Maybe<Scalars['Int']>
	offset?: Maybe<Scalars['Int']>
	orderBy?: Maybe<Array<Maybe<_UserOrdering>>>
	filter?: Maybe<_UserFilter>
}

export type WithIndex<TObject> = TObject & Record<string, any>
export type ResolversObject<TObject> = WithIndex<TObject>

export type ResolverTypeWrapper<T> = Promise<T> | T

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
	fragment: string
	resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
	selectionSet: string
	resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
	| LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
	| NewStitchingResolver<TResult, TParent, TContext, TArgs>
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
	| ResolverFn<TResult, TParent, TContext, TArgs>
	| StitchingResolver<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<
	TResult,
	TKey extends string,
	TParent,
	TContext,
	TArgs
> {
	subscribe: SubscriptionSubscribeFn<
		{ [key in TKey]: TResult },
		TParent,
		TContext,
		TArgs
	>
	resolve?: SubscriptionResolveFn<
		TResult,
		{ [key in TKey]: TResult },
		TContext,
		TArgs
	>
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
	subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
	resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<
	TResult,
	TKey extends string,
	TParent,
	TContext,
	TArgs
> =
	| SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
	| SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<
	TResult,
	TKey extends string,
	TParent = {},
	TContext = {},
	TArgs = {}
> =
	| ((
			...args: any[]
	  ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
	| SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
	parent: TParent,
	context: TContext,
	info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
	obj: T,
	context: TContext,
	info: GraphQLResolveInfo
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<
	TResult = {},
	TParent = {},
	TContext = {},
	TArgs = {}
> = (
	next: NextResolverFn<TResult>,
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
	_AnswerOrdering: _AnswerOrdering
	_AnswerFilter: _AnswerFilter
	ID: ResolverTypeWrapper<Scalars['ID']>
	String: ResolverTypeWrapper<Scalars['String']>
	Answer: ResolverTypeWrapper<Answer>
	Boolean: ResolverTypeWrapper<Scalars['Boolean']>
	Int: ResolverTypeWrapper<Scalars['Int']>
	_CommentOrdering: _CommentOrdering
	_CommentFilter: _CommentFilter
	Comment: ResolverTypeWrapper<Comment>
	_QuestionOrdering: _QuestionOrdering
	_QuestionFilter: _QuestionFilter
	Question: ResolverTypeWrapper<Question>
	_TagOrdering: _TagOrdering
	_TagFilter: _TagFilter
	Tag: ResolverTypeWrapper<Tag>
	_UserOrdering: _UserOrdering
	_UserFilter: _UserFilter
	User: ResolverTypeWrapper<User>
	Profile: ResolverTypeWrapper<Profile>
	LocalAccount: ResolverTypeWrapper<LocalAccount>
	VoteIntention: VoteIntention
	Role: Role
	ResponseStatus: ResponseStatus
	RegisterUserInput: RegisterUserInput
	UserProfileInput: UserProfileInput
	LoginUserInput: LoginUserInput
	EmailInput: EmailInput
	nodeIdInput: NodeIdInput
	deleteTagInput: DeleteTagInput
	CodeInput: CodeInput
	newPassInput: NewPassInput
	AskQuestionInput: AskQuestionInput
	EditQuestionInput: EditQuestionInput
	AnswerQuestionInput: AnswerQuestionInput
	AddCommentInput: AddCommentInput
	EditAnswerInput: EditAnswerInput
	EditCommentInput: EditCommentInput
	AddTagInput: AddTagInput
	AddRankInput: AddRankInput
	VoteInput: VoteInput
	CanBeCommented: ResolversTypes['Answer'] | ResolversTypes['Question']
	CanBeLiked: ResolversTypes['Comment'] | ResolversTypes['Question']
	CanBeSubscribed: ResolversTypes['Question'] | ResolversTypes['Tag']
	CanBeVoted: ResolversTypes['Answer'] | ResolversTypes['Question']
	LikeResponse: ResolversTypes['Question'] | ResolversTypes['Comment']
	VoteResponse: ResolversTypes['Question'] | ResolversTypes['Answer']
	SubscribeResponse: ResolversTypes['Question'] | ResolversTypes['Tag']
	AskQuestionResponse: ResolversTypes['Question'] | ResolversTypes['FormError']
	AnswerQuestionResponse: ResolversTypes['Answer'] | ResolversTypes['FormError']
	AddCommentResponse: ResolversTypes['Comment'] | ResolversTypes['FormError']
	AuthResponse: ResolversTypes['TokenResponse'] | ResolversTypes['FormError']
	EditProfileResponse: ResolversTypes['Profile'] | ResolversTypes['FormError']
	FieldError: ResolverTypeWrapper<FieldError>
	FormError: ResolverTypeWrapper<FormError>
	LoginResponse: ResolverTypeWrapper<LoginResponse>
	TokenResponse: ResolverTypeWrapper<TokenResponse>
	RedirectUriResponse: ResolverTypeWrapper<RedirectUriResponse>
	DeleteQuestionResponse: ResolverTypeWrapper<DeleteQuestionResponse>
	DeleteAnswerResponse: ResolverTypeWrapper<DeleteAnswerResponse>
	DeleteCommentResponse: ResolverTypeWrapper<DeleteCommentResponse>
	DeleteTagResponse: ResolverTypeWrapper<DeleteTagResponse>
	JSON: ResolverTypeWrapper<Scalars['JSON']>
	JSONObject: ResolverTypeWrapper<Scalars['JSONObject']>
	UserRank: UserRank
	_Neo4jTimeInput: _Neo4jTimeInput
	_Neo4jTime: ResolverTypeWrapper<_Neo4jTime>
	_Neo4jDateInput: _Neo4jDateInput
	_Neo4jDate: ResolverTypeWrapper<_Neo4jDate>
	_Neo4jDateTimeInput: _Neo4jDateTimeInput
	_Neo4jDateTime: ResolverTypeWrapper<_Neo4jDateTime>
	_Neo4jLocalTimeInput: _Neo4jLocalTimeInput
	_Neo4jLocalTime: ResolverTypeWrapper<_Neo4jLocalTime>
	_Neo4jLocalDateTimeInput: _Neo4jLocalDateTimeInput
	_Neo4jLocalDateTime: ResolverTypeWrapper<_Neo4jLocalDateTime>
	_Neo4jPointDistanceFilter: _Neo4jPointDistanceFilter
	Float: ResolverTypeWrapper<Scalars['Float']>
	_Neo4jPointInput: _Neo4jPointInput
	_Neo4jPoint: ResolverTypeWrapper<_Neo4jPoint>
	_RelationDirections: _RelationDirections
	Mutation: ResolverTypeWrapper<{}>
	Query: ResolverTypeWrapper<{}>
}>

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
	_AnswerFilter: _AnswerFilter
	ID: Scalars['ID']
	String: Scalars['String']
	Answer: Answer
	Boolean: Scalars['Boolean']
	Int: Scalars['Int']
	_CommentFilter: _CommentFilter
	Comment: Comment
	_QuestionFilter: _QuestionFilter
	Question: Question
	_TagFilter: _TagFilter
	Tag: Tag
	_UserFilter: _UserFilter
	User: User
	Profile: Profile
	LocalAccount: LocalAccount
	RegisterUserInput: RegisterUserInput
	UserProfileInput: UserProfileInput
	LoginUserInput: LoginUserInput
	EmailInput: EmailInput
	nodeIdInput: NodeIdInput
	deleteTagInput: DeleteTagInput
	CodeInput: CodeInput
	newPassInput: NewPassInput
	AskQuestionInput: AskQuestionInput
	EditQuestionInput: EditQuestionInput
	AnswerQuestionInput: AnswerQuestionInput
	AddCommentInput: AddCommentInput
	EditAnswerInput: EditAnswerInput
	EditCommentInput: EditCommentInput
	AddTagInput: AddTagInput
	AddRankInput: AddRankInput
	VoteInput: VoteInput
	CanBeCommented:
		| ResolversParentTypes['Answer']
		| ResolversParentTypes['Question']
	CanBeLiked: ResolversParentTypes['Comment'] | ResolversParentTypes['Question']
	CanBeSubscribed:
		| ResolversParentTypes['Question']
		| ResolversParentTypes['Tag']
	CanBeVoted: ResolversParentTypes['Answer'] | ResolversParentTypes['Question']
	LikeResponse:
		| ResolversParentTypes['Question']
		| ResolversParentTypes['Comment']
	VoteResponse:
		| ResolversParentTypes['Question']
		| ResolversParentTypes['Answer']
	SubscribeResponse:
		| ResolversParentTypes['Question']
		| ResolversParentTypes['Tag']
	AskQuestionResponse:
		| ResolversParentTypes['Question']
		| ResolversParentTypes['FormError']
	AnswerQuestionResponse:
		| ResolversParentTypes['Answer']
		| ResolversParentTypes['FormError']
	AddCommentResponse:
		| ResolversParentTypes['Comment']
		| ResolversParentTypes['FormError']
	AuthResponse:
		| ResolversParentTypes['TokenResponse']
		| ResolversParentTypes['FormError']
	EditProfileResponse:
		| ResolversParentTypes['Profile']
		| ResolversParentTypes['FormError']
	FieldError: FieldError
	FormError: FormError
	LoginResponse: LoginResponse
	TokenResponse: TokenResponse
	RedirectUriResponse: RedirectUriResponse
	DeleteQuestionResponse: DeleteQuestionResponse
	DeleteAnswerResponse: DeleteAnswerResponse
	DeleteCommentResponse: DeleteCommentResponse
	DeleteTagResponse: DeleteTagResponse
	JSON: Scalars['JSON']
	JSONObject: Scalars['JSONObject']
	_Neo4jTimeInput: _Neo4jTimeInput
	_Neo4jTime: _Neo4jTime
	_Neo4jDateInput: _Neo4jDateInput
	_Neo4jDate: _Neo4jDate
	_Neo4jDateTimeInput: _Neo4jDateTimeInput
	_Neo4jDateTime: _Neo4jDateTime
	_Neo4jLocalTimeInput: _Neo4jLocalTimeInput
	_Neo4jLocalTime: _Neo4jLocalTime
	_Neo4jLocalDateTimeInput: _Neo4jLocalDateTimeInput
	_Neo4jLocalDateTime: _Neo4jLocalDateTime
	_Neo4jPointDistanceFilter: _Neo4jPointDistanceFilter
	Float: Scalars['Float']
	_Neo4jPointInput: _Neo4jPointInput
	_Neo4jPoint: _Neo4jPoint
	Mutation: {}
	Query: {}
}>

export type UpperDirectiveArgs = {}

export type UpperDirectiveResolver<
	Result,
	Parent,
	ContextType = any,
	Args = UpperDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type CypherDirectiveArgs = { statement?: Maybe<Scalars['String']> }

export type CypherDirectiveResolver<
	Result,
	Parent,
	ContextType = any,
	Args = CypherDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type RelationDirectiveArgs = {
	name?: Maybe<Scalars['String']>
	direction?: Maybe<_RelationDirections>
	from?: Maybe<Scalars['String']>
	to?: Maybe<Scalars['String']>
}

export type RelationDirectiveResolver<
	Result,
	Parent,
	ContextType = any,
	Args = RelationDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type AdditionalLabelsDirectiveArgs = {
	labels?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type AdditionalLabelsDirectiveResolver<
	Result,
	Parent,
	ContextType = any,
	Args = AdditionalLabelsDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type MutationMetaDirectiveArgs = {
	relationship?: Maybe<Scalars['String']>
	from?: Maybe<Scalars['String']>
	to?: Maybe<Scalars['String']>
}

export type MutationMetaDirectiveResolver<
	Result,
	Parent,
	ContextType = any,
	Args = MutationMetaDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type Neo4j_IgnoreDirectiveArgs = {}

export type Neo4j_IgnoreDirectiveResolver<
	Result,
	Parent,
	ContextType = any,
	Args = Neo4j_IgnoreDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type IdDirectiveArgs = {}

export type IdDirectiveResolver<
	Result,
	Parent,
	ContextType = any,
	Args = IdDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type UniqueDirectiveArgs = {}

export type UniqueDirectiveResolver<
	Result,
	Parent,
	ContextType = any,
	Args = UniqueDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type IndexDirectiveArgs = {}

export type IndexDirectiveResolver<
	Result,
	Parent,
	ContextType = any,
	Args = IndexDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type SearchDirectiveArgs = { index?: Maybe<Scalars['String']> }

export type SearchDirectiveResolver<
	Result,
	Parent,
	ContextType = any,
	Args = SearchDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type IsAuthenticatedDirectiveArgs = {}

export type IsAuthenticatedDirectiveResolver<
	Result,
	Parent,
	ContextType = any,
	Args = IsAuthenticatedDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type HasRoleDirectiveArgs = { roles?: Maybe<Array<Maybe<Role>>> }

export type HasRoleDirectiveResolver<
	Result,
	Parent,
	ContextType = any,
	Args = HasRoleDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type AnswerResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Answer'] = ResolversParentTypes['Answer']
> = ResolversObject<{
	nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
	text?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	createdAt?: Resolver<
		Maybe<ResolversTypes['_Neo4jDateTime']>,
		ParentType,
		ContextType
	>
	updatedAt?: Resolver<
		Maybe<ResolversTypes['_Neo4jDateTime']>,
		ParentType,
		ContextType
	>
	timestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	author?: Resolver<
		ResolversTypes['User'],
		ParentType,
		ContextType,
		RequireFields<AnswerAuthorArgs, never>
	>
	question?: Resolver<
		ResolversTypes['Question'],
		ParentType,
		ContextType,
		RequireFields<AnswerQuestionArgs, never>
	>
	canAccept?: Resolver<
		Maybe<ResolversTypes['Boolean']>,
		ParentType,
		ContextType
	>
	accepted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
	comments?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['Comment']>>>,
		ParentType,
		ContextType,
		RequireFields<AnswerCommentsArgs, never>
	>
	commentsCount?: Resolver<
		Maybe<ResolversTypes['Int']>,
		ParentType,
		ContextType
	>
	canComment?: Resolver<
		Maybe<ResolversTypes['Boolean']>,
		ParentType,
		ContextType
	>
	canVote?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
	isVotedUp?: Resolver<
		Maybe<ResolversTypes['Boolean']>,
		ParentType,
		ContextType
	>
	isVotedDown?: Resolver<
		Maybe<ResolversTypes['Boolean']>,
		ParentType,
		ContextType
	>
	upVotesCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	downVotesCount?: Resolver<
		Maybe<ResolversTypes['Int']>,
		ParentType,
		ContextType
	>
	_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type CommentResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']
> = ResolversObject<{
	nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
	text?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	createdAt?: Resolver<
		Maybe<ResolversTypes['_Neo4jDateTime']>,
		ParentType,
		ContextType
	>
	updatedAt?: Resolver<
		Maybe<ResolversTypes['_Neo4jDateTime']>,
		ParentType,
		ContextType
	>
	timestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	author?: Resolver<
		Maybe<ResolversTypes['User']>,
		ParentType,
		ContextType,
		RequireFields<CommentAuthorArgs, never>
	>
	topic?: Resolver<
		Maybe<ResolversTypes['CanBeCommented']>,
		ParentType,
		ContextType
	>
	likes?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['User']>>>,
		ParentType,
		ContextType,
		RequireFields<CommentLikesArgs, never>
	>
	likesCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	canLike?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
	isLiked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
	_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type QuestionResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Question'] = ResolversParentTypes['Question']
> = ResolversObject<{
	nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
	title?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	text?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	createdAt?: Resolver<
		Maybe<ResolversTypes['_Neo4jDateTime']>,
		ParentType,
		ContextType
	>
	updatedAt?: Resolver<
		Maybe<ResolversTypes['_Neo4jDateTime']>,
		ParentType,
		ContextType
	>
	timestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	author?: Resolver<
		Maybe<ResolversTypes['User']>,
		ParentType,
		ContextType,
		RequireFields<QuestionAuthorArgs, never>
	>
	viewsCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	canVote?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
	isVotedUp?: Resolver<
		Maybe<ResolversTypes['Boolean']>,
		ParentType,
		ContextType
	>
	isVotedDown?: Resolver<
		Maybe<ResolversTypes['Boolean']>,
		ParentType,
		ContextType
	>
	upVotesCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	downVotesCount?: Resolver<
		Maybe<ResolversTypes['Int']>,
		ParentType,
		ContextType
	>
	answers?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['Answer']>>>,
		ParentType,
		ContextType,
		RequireFields<QuestionAnswersArgs, never>
	>
	answersCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	comments?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['Comment']>>>,
		ParentType,
		ContextType,
		RequireFields<QuestionCommentsArgs, never>
	>
	commentsCount?: Resolver<
		Maybe<ResolversTypes['Int']>,
		ParentType,
		ContextType
	>
	canComment?: Resolver<
		Maybe<ResolversTypes['Boolean']>,
		ParentType,
		ContextType
	>
	likes?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['User']>>>,
		ParentType,
		ContextType,
		RequireFields<QuestionLikesArgs, never>
	>
	likesCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	canLike?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
	isLiked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
	subscribers?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['User']>>>,
		ParentType,
		ContextType,
		RequireFields<QuestionSubscribersArgs, never>
	>
	subscribersCount?: Resolver<
		Maybe<ResolversTypes['Int']>,
		ParentType,
		ContextType
	>
	canSubscribe?: Resolver<
		Maybe<ResolversTypes['Boolean']>,
		ParentType,
		ContextType
	>
	isSubscribed?: Resolver<
		Maybe<ResolversTypes['Boolean']>,
		ParentType,
		ContextType
	>
	tags?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['Tag']>>>,
		ParentType,
		ContextType,
		RequireFields<QuestionTagsArgs, never>
	>
	totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type TagResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag']
> = ResolversObject<{
	nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
	name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	description?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>
	createdAt?: Resolver<
		Maybe<ResolversTypes['_Neo4jDateTime']>,
		ParentType,
		ContextType
	>
	timestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	addedBy?: Resolver<
		Maybe<ResolversTypes['User']>,
		ParentType,
		ContextType,
		RequireFields<TagAddedByArgs, never>
	>
	moderators?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['User']>>>,
		ParentType,
		ContextType,
		RequireFields<TagModeratorsArgs, never>
	>
	questions?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['Question']>>>,
		ParentType,
		ContextType,
		RequireFields<TagQuestionsArgs, never>
	>
	questionsCount?: Resolver<
		Maybe<ResolversTypes['Int']>,
		ParentType,
		ContextType
	>
	questionsSolvedCount?: Resolver<
		Maybe<ResolversTypes['Int']>,
		ParentType,
		ContextType
	>
	subscribers?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['User']>>>,
		ParentType,
		ContextType,
		RequireFields<TagSubscribersArgs, never>
	>
	subscribersCount?: Resolver<
		Maybe<ResolversTypes['Int']>,
		ParentType,
		ContextType
	>
	canSubscribe?: Resolver<
		Maybe<ResolversTypes['Boolean']>,
		ParentType,
		ContextType
	>
	isSubscribed?: Resolver<
		Maybe<ResolversTypes['Boolean']>,
		ParentType,
		ContextType
	>
	topUsers?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['User']>>>,
		ParentType,
		ContextType,
		RequireFields<TagTopUsersArgs, never>
	>
	topQuestions?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['Question']>>>,
		ParentType,
		ContextType,
		RequireFields<TagTopQuestionsArgs, never>
	>
	_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type UserResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
> = ResolversObject<{
	nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
	name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	surname?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	rank?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	description?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>
	createdAt?: Resolver<
		Maybe<ResolversTypes['_Neo4jDateTime']>,
		ParentType,
		ContextType
	>
	timestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	roles?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['String']>>>,
		ParentType,
		ContextType
	>
	location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	questionsCount?: Resolver<
		Maybe<ResolversTypes['Int']>,
		ParentType,
		ContextType
	>
	answersCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	solvedQuestionsCount?: Resolver<
		Maybe<ResolversTypes['Int']>,
		ParentType,
		ContextType
	>
	favoriteTags?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['Tag']>>>,
		ParentType,
		ContextType,
		RequireFields<UserFavoriteTagsArgs, never>
	>
	email?: Resolver<
		Maybe<ResolversTypes['LocalAccount']>,
		ParentType,
		ContextType
	>
	questions?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['Question']>>>,
		ParentType,
		ContextType,
		RequireFields<UserQuestionsArgs, never>
	>
	answers?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['Answer']>>>,
		ParentType,
		ContextType,
		RequireFields<UserAnswersArgs, never>
	>
	tags?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['Tag']>>>,
		ParentType,
		ContextType,
		RequireFields<UserTagsArgs, never>
	>
	comments?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['Comment']>>>,
		ParentType,
		ContextType,
		RequireFields<UserCommentsArgs, never>
	>
	liked?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['CanBeLiked']>>>,
		ParentType,
		ContextType
	>
	subscriptions?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['CanBeSubscribed']>>>,
		ParentType,
		ContextType
	>
	moderatingTags?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['Tag']>>>,
		ParentType,
		ContextType,
		RequireFields<UserModeratingTagsArgs, never>
	>
	_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type ProfileResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Profile'] = ResolversParentTypes['Profile']
> = ResolversObject<{
	name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	surname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	rank?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	description?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>
	isPasswordChanged?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type LocalAccountResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['LocalAccount'] = ResolversParentTypes['LocalAccount']
> = ResolversObject<{
	user?: Resolver<
		ResolversTypes['User'],
		ParentType,
		ContextType,
		RequireFields<LocalAccountUserArgs, never>
	>
	email?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type CanBeCommentedResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['CanBeCommented'] = ResolversParentTypes['CanBeCommented']
> = ResolversObject<{
	__resolveType: TypeResolveFn<'Answer' | 'Question', ParentType, ContextType>
	nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
	comments?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['Comment']>>>,
		ParentType,
		ContextType,
		RequireFields<CanBeCommentedCommentsArgs, never>
	>
	commentsCount?: Resolver<
		Maybe<ResolversTypes['Int']>,
		ParentType,
		ContextType
	>
	canComment?: Resolver<
		Maybe<ResolversTypes['Boolean']>,
		ParentType,
		ContextType
	>
}>

export type CanBeLikedResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['CanBeLiked'] = ResolversParentTypes['CanBeLiked']
> = ResolversObject<{
	__resolveType: TypeResolveFn<'Comment' | 'Question', ParentType, ContextType>
	nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
	likes?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['User']>>>,
		ParentType,
		ContextType,
		RequireFields<CanBeLikedLikesArgs, never>
	>
	likesCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	canLike?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
	isLiked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
}>

export type CanBeSubscribedResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['CanBeSubscribed'] = ResolversParentTypes['CanBeSubscribed']
> = ResolversObject<{
	__resolveType: TypeResolveFn<'Question' | 'Tag', ParentType, ContextType>
	nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
	subscribers?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['User']>>>,
		ParentType,
		ContextType,
		RequireFields<CanBeSubscribedSubscribersArgs, never>
	>
	subscribersCount?: Resolver<
		Maybe<ResolversTypes['Int']>,
		ParentType,
		ContextType
	>
	canSubscribe?: Resolver<
		Maybe<ResolversTypes['Boolean']>,
		ParentType,
		ContextType
	>
	isSubscribed?: Resolver<
		Maybe<ResolversTypes['Boolean']>,
		ParentType,
		ContextType
	>
}>

export type CanBeVotedResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['CanBeVoted'] = ResolversParentTypes['CanBeVoted']
> = ResolversObject<{
	__resolveType: TypeResolveFn<'Answer' | 'Question', ParentType, ContextType>
	nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
	upVotesCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	downVotesCount?: Resolver<
		Maybe<ResolversTypes['Int']>,
		ParentType,
		ContextType
	>
	canVote?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
	isVotedUp?: Resolver<
		Maybe<ResolversTypes['Boolean']>,
		ParentType,
		ContextType
	>
	isVotedDown?: Resolver<
		Maybe<ResolversTypes['Boolean']>,
		ParentType,
		ContextType
	>
}>

export type LikeResponseResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['LikeResponse'] = ResolversParentTypes['LikeResponse']
> = ResolversObject<{
	__resolveType: TypeResolveFn<'Question' | 'Comment', ParentType, ContextType>
}>

export type VoteResponseResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['VoteResponse'] = ResolversParentTypes['VoteResponse']
> = ResolversObject<{
	__resolveType: TypeResolveFn<'Question' | 'Answer', ParentType, ContextType>
}>

export type SubscribeResponseResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['SubscribeResponse'] = ResolversParentTypes['SubscribeResponse']
> = ResolversObject<{
	__resolveType: TypeResolveFn<'Question' | 'Tag', ParentType, ContextType>
}>

export type AskQuestionResponseResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['AskQuestionResponse'] = ResolversParentTypes['AskQuestionResponse']
> = ResolversObject<{
	__resolveType: TypeResolveFn<
		'Question' | 'FormError',
		ParentType,
		ContextType
	>
}>

export type AnswerQuestionResponseResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['AnswerQuestionResponse'] = ResolversParentTypes['AnswerQuestionResponse']
> = ResolversObject<{
	__resolveType: TypeResolveFn<'Answer' | 'FormError', ParentType, ContextType>
}>

export type AddCommentResponseResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['AddCommentResponse'] = ResolversParentTypes['AddCommentResponse']
> = ResolversObject<{
	__resolveType: TypeResolveFn<'Comment' | 'FormError', ParentType, ContextType>
}>

export type AuthResponseResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['AuthResponse'] = ResolversParentTypes['AuthResponse']
> = ResolversObject<{
	__resolveType: TypeResolveFn<
		'TokenResponse' | 'FormError',
		ParentType,
		ContextType
	>
}>

export type EditProfileResponseResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['EditProfileResponse'] = ResolversParentTypes['EditProfileResponse']
> = ResolversObject<{
	__resolveType: TypeResolveFn<'Profile' | 'FormError', ParentType, ContextType>
}>

export type FieldErrorResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['FieldError'] = ResolversParentTypes['FieldError']
> = ResolversObject<{
	field?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type FormErrorResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['FormError'] = ResolversParentTypes['FormError']
> = ResolversObject<{
	message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	errors?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['FieldError']>>>,
		ParentType,
		ContextType
	>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type LoginResponseResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['LoginResponse'] = ResolversParentTypes['LoginResponse']
> = ResolversObject<{
	nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
	email?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	password?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	surname?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	roles?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['Role']>>>,
		ParentType,
		ContextType
	>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type TokenResponseResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['TokenResponse'] = ResolversParentTypes['TokenResponse']
> = ResolversObject<{
	token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type RedirectUriResponseResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['RedirectUriResponse'] = ResolversParentTypes['RedirectUriResponse']
> = ResolversObject<{
	redirect?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	status?: Resolver<ResolversTypes['ResponseStatus'], ParentType, ContextType>
	message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type DeleteQuestionResponseResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['DeleteQuestionResponse'] = ResolversParentTypes['DeleteQuestionResponse']
> = ResolversObject<{
	nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
	title?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	text?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type DeleteAnswerResponseResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['DeleteAnswerResponse'] = ResolversParentTypes['DeleteAnswerResponse']
> = ResolversObject<{
	nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
	text?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type DeleteCommentResponseResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['DeleteCommentResponse'] = ResolversParentTypes['DeleteCommentResponse']
> = ResolversObject<{
	nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
	text?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type DeleteTagResponseResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['DeleteTagResponse'] = ResolversParentTypes['DeleteTagResponse']
> = ResolversObject<{
	name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export interface JsonScalarConfig
	extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
	name: 'JSON'
}

export interface JsonObjectScalarConfig
	extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
	name: 'JSONObject'
}

export type _Neo4jTimeResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['_Neo4jTime'] = ResolversParentTypes['_Neo4jTime']
> = ResolversObject<{
	hour?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	minute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	second?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	millisecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	microsecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	nanosecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	formatted?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type _Neo4jDateResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['_Neo4jDate'] = ResolversParentTypes['_Neo4jDate']
> = ResolversObject<{
	year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	month?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	day?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	formatted?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type _Neo4jDateTimeResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['_Neo4jDateTime'] = ResolversParentTypes['_Neo4jDateTime']
> = ResolversObject<{
	year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	month?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	day?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	hour?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	minute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	second?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	millisecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	microsecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	nanosecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	formatted?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type _Neo4jLocalTimeResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['_Neo4jLocalTime'] = ResolversParentTypes['_Neo4jLocalTime']
> = ResolversObject<{
	hour?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	minute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	second?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	millisecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	microsecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	nanosecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	formatted?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type _Neo4jLocalDateTimeResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['_Neo4jLocalDateTime'] = ResolversParentTypes['_Neo4jLocalDateTime']
> = ResolversObject<{
	year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	month?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	day?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	hour?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	minute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	second?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	millisecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	microsecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	nanosecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	formatted?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type _Neo4jPointResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['_Neo4jPoint'] = ResolversParentTypes['_Neo4jPoint']
> = ResolversObject<{
	x?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	y?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	z?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
	crs?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
	srid?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type MutationResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = ResolversObject<{
	AnswerQuestion?: Resolver<
		ResolversTypes['AnswerQuestionResponse'],
		ParentType,
		ContextType,
		RequireFields<MutationAnswerQuestionArgs, 'data'>
	>
	EditAnswer?: Resolver<
		ResolversTypes['Answer'],
		ParentType,
		ContextType,
		RequireFields<MutationEditAnswerArgs, 'data'>
	>
	DeleteAnswer?: Resolver<
		ResolversTypes['DeleteAnswerResponse'],
		ParentType,
		ContextType,
		RequireFields<MutationDeleteAnswerArgs, 'data'>
	>
	ToggleAcceptAnswer?: Resolver<
		Maybe<ResolversTypes['Answer']>,
		ParentType,
		ContextType,
		RequireFields<MutationToggleAcceptAnswerArgs, 'data'>
	>
	AddComment?: Resolver<
		ResolversTypes['AddCommentResponse'],
		ParentType,
		ContextType,
		RequireFields<MutationAddCommentArgs, 'data'>
	>
	EditComment?: Resolver<
		ResolversTypes['Comment'],
		ParentType,
		ContextType,
		RequireFields<MutationEditCommentArgs, 'data'>
	>
	DeleteComment?: Resolver<
		ResolversTypes['DeleteCommentResponse'],
		ParentType,
		ContextType,
		RequireFields<MutationDeleteCommentArgs, 'data'>
	>
	AskQuestion?: Resolver<
		ResolversTypes['AskQuestionResponse'],
		ParentType,
		ContextType,
		RequireFields<MutationAskQuestionArgs, 'data'>
	>
	EditQuestion?: Resolver<
		ResolversTypes['Question'],
		ParentType,
		ContextType,
		RequireFields<MutationEditQuestionArgs, 'data'>
	>
	DeleteQuestion?: Resolver<
		ResolversTypes['DeleteQuestionResponse'],
		ParentType,
		ContextType,
		RequireFields<MutationDeleteQuestionArgs, 'data'>
	>
	ToggleLike?: Resolver<
		ResolversTypes['LikeResponse'],
		ParentType,
		ContextType,
		RequireFields<MutationToggleLikeArgs, 'data'>
	>
	ToggleSubscribe?: Resolver<
		ResolversTypes['SubscribeResponse'],
		ParentType,
		ContextType,
		RequireFields<MutationToggleSubscribeArgs, 'data'>
	>
	Vote?: Resolver<
		ResolversTypes['VoteResponse'],
		ParentType,
		ContextType,
		RequireFields<MutationVoteArgs, 'data'>
	>
	AddTag?: Resolver<
		Maybe<ResolversTypes['Tag']>,
		ParentType,
		ContextType,
		RequireFields<MutationAddTagArgs, 'data'>
	>
	DeleteTag?: Resolver<
		ResolversTypes['DeleteTagResponse'],
		ParentType,
		ContextType,
		RequireFields<MutationDeleteTagArgs, 'data'>
	>
	Register?: Resolver<
		ResolversTypes['AuthResponse'],
		ParentType,
		ContextType,
		RequireFields<MutationRegisterArgs, 'data'>
	>
	SignIn?: Resolver<
		ResolversTypes['AuthResponse'],
		ParentType,
		ContextType,
		RequireFields<MutationSignInArgs, 'data'>
	>
	ChangePassRequest?: Resolver<
		ResolversTypes['RedirectUriResponse'],
		ParentType,
		ContextType,
		RequireFields<MutationChangePassRequestArgs, 'data'>
	>
	ChangePassConfirm?: Resolver<
		ResolversTypes['RedirectUriResponse'],
		ParentType,
		ContextType,
		RequireFields<MutationChangePassConfirmArgs, 'data'>
	>
	ChangePassComplete?: Resolver<
		ResolversTypes['RedirectUriResponse'],
		ParentType,
		ContextType,
		RequireFields<MutationChangePassCompleteArgs, 'data'>
	>
	EditProfile?: Resolver<
		ResolversTypes['EditProfileResponse'],
		ParentType,
		ContextType,
		RequireFields<MutationEditProfileArgs, 'data'>
	>
}>

export type QueryResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = ResolversObject<{
	QuestionCount?: Resolver<
		Maybe<ResolversTypes['Question']>,
		ParentType,
		ContextType,
		RequireFields<QueryQuestionCountArgs, never>
	>
	UserCount?: Resolver<
		Maybe<ResolversTypes['User']>,
		ParentType,
		ContextType,
		RequireFields<QueryUserCountArgs, never>
	>
	CurrentUser?: Resolver<ResolversTypes['User'], ParentType, ContextType>
	UserRanks?: Resolver<
		Maybe<ResolversTypes['JSONObject']>,
		ParentType,
		ContextType
	>
	Answer?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['Answer']>>>,
		ParentType,
		ContextType,
		RequireFields<QueryAnswerArgs, never>
	>
	Comment?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['Comment']>>>,
		ParentType,
		ContextType,
		RequireFields<QueryCommentArgs, never>
	>
	Question?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['Question']>>>,
		ParentType,
		ContextType,
		RequireFields<QueryQuestionArgs, never>
	>
	Tag?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['Tag']>>>,
		ParentType,
		ContextType,
		RequireFields<QueryTagArgs, never>
	>
	User?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['User']>>>,
		ParentType,
		ContextType,
		RequireFields<QueryUserArgs, never>
	>
}>

export type Resolvers<ContextType = any> = ResolversObject<{
	Answer?: AnswerResolvers<ContextType>
	Comment?: CommentResolvers<ContextType>
	Question?: QuestionResolvers<ContextType>
	Tag?: TagResolvers<ContextType>
	User?: UserResolvers<ContextType>
	Profile?: ProfileResolvers<ContextType>
	LocalAccount?: LocalAccountResolvers<ContextType>
	CanBeCommented?: CanBeCommentedResolvers<ContextType>
	CanBeLiked?: CanBeLikedResolvers<ContextType>
	CanBeSubscribed?: CanBeSubscribedResolvers<ContextType>
	CanBeVoted?: CanBeVotedResolvers<ContextType>
	LikeResponse?: LikeResponseResolvers<ContextType>
	VoteResponse?: VoteResponseResolvers<ContextType>
	SubscribeResponse?: SubscribeResponseResolvers<ContextType>
	AskQuestionResponse?: AskQuestionResponseResolvers<ContextType>
	AnswerQuestionResponse?: AnswerQuestionResponseResolvers<ContextType>
	AddCommentResponse?: AddCommentResponseResolvers<ContextType>
	AuthResponse?: AuthResponseResolvers<ContextType>
	EditProfileResponse?: EditProfileResponseResolvers<ContextType>
	FieldError?: FieldErrorResolvers<ContextType>
	FormError?: FormErrorResolvers<ContextType>
	LoginResponse?: LoginResponseResolvers<ContextType>
	TokenResponse?: TokenResponseResolvers<ContextType>
	RedirectUriResponse?: RedirectUriResponseResolvers<ContextType>
	DeleteQuestionResponse?: DeleteQuestionResponseResolvers<ContextType>
	DeleteAnswerResponse?: DeleteAnswerResponseResolvers<ContextType>
	DeleteCommentResponse?: DeleteCommentResponseResolvers<ContextType>
	DeleteTagResponse?: DeleteTagResponseResolvers<ContextType>
	JSON?: GraphQLScalarType
	JSONObject?: GraphQLScalarType
	_Neo4jTime?: _Neo4jTimeResolvers<ContextType>
	_Neo4jDate?: _Neo4jDateResolvers<ContextType>
	_Neo4jDateTime?: _Neo4jDateTimeResolvers<ContextType>
	_Neo4jLocalTime?: _Neo4jLocalTimeResolvers<ContextType>
	_Neo4jLocalDateTime?: _Neo4jLocalDateTimeResolvers<ContextType>
	_Neo4jPoint?: _Neo4jPointResolvers<ContextType>
	Mutation?: MutationResolvers<ContextType>
	Query?: QueryResolvers<ContextType>
}>

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>
export type DirectiveResolvers<ContextType = any> = ResolversObject<{
	upper?: UpperDirectiveResolver<any, any, ContextType>
	cypher?: CypherDirectiveResolver<any, any, ContextType>
	relation?: RelationDirectiveResolver<any, any, ContextType>
	additionalLabels?: AdditionalLabelsDirectiveResolver<any, any, ContextType>
	MutationMeta?: MutationMetaDirectiveResolver<any, any, ContextType>
	neo4j_ignore?: Neo4j_IgnoreDirectiveResolver<any, any, ContextType>
	id?: IdDirectiveResolver<any, any, ContextType>
	unique?: UniqueDirectiveResolver<any, any, ContextType>
	index?: IndexDirectiveResolver<any, any, ContextType>
	search?: SearchDirectiveResolver<any, any, ContextType>
	isAuthenticated?: IsAuthenticatedDirectiveResolver<any, any, ContextType>
	hasRole?: HasRoleDirectiveResolver<any, any, ContextType>
}>

/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<
	ContextType = any
> = DirectiveResolvers<ContextType>
