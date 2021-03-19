import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
	{ [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
	{ [SubKey in K]: Maybe<T[SubKey]> }
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
	CanDeleteAsc = 'canDelete_asc',
	CanDeleteDesc = 'canDelete_desc',
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
		canDelete?: Maybe<Scalars['Boolean']>
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
	CanDeleteAsc = 'canDelete_asc',
	CanDeleteDesc = 'canDelete_desc',
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
	canDelete?: Maybe<Scalars['Boolean']>
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
	CanDeleteAsc = 'canDelete_asc',
	CanDeleteDesc = 'canDelete_desc',
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
		canDelete?: Maybe<Scalars['Boolean']>
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
	UpdatedAtAsc = 'updatedAt_asc',
	UpdatedAtDesc = 'updatedAt_desc',
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
	TotalCountAsc = 'totalCount_asc',
	TotalCountDesc = 'totalCount_desc',
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
	totalCount?: Maybe<Scalars['Int']>
	totalCount_not?: Maybe<Scalars['Int']>
	totalCount_in?: Maybe<Array<Scalars['Int']>>
	totalCount_not_in?: Maybe<Array<Scalars['Int']>>
	totalCount_lt?: Maybe<Scalars['Int']>
	totalCount_lte?: Maybe<Scalars['Int']>
	totalCount_gt?: Maybe<Scalars['Int']>
	totalCount_gte?: Maybe<Scalars['Int']>
}

export type Tag = CanBeSubscribed & {
	__typename?: 'Tag'
	nodeId: Scalars['ID']
	name: Scalars['String']
	description?: Maybe<Scalars['String']>
	createdAt?: Maybe<_Neo4jDateTime>
	updatedAt?: Maybe<_Neo4jDateTime>
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
	totalCount?: Maybe<Scalars['Int']>
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
	QuestionsSolvedCountAsc = 'questionsSolvedCount_asc',
	QuestionsSolvedCountDesc = 'questionsSolvedCount_desc',
	EmailAsc = 'email_asc',
	EmailDesc = 'email_desc',
	TotalCountAsc = 'totalCount_asc',
	TotalCountDesc = 'totalCount_desc',
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
	totalCount?: Maybe<Scalars['Int']>
	totalCount_not?: Maybe<Scalars['Int']>
	totalCount_in?: Maybe<Array<Scalars['Int']>>
	totalCount_not_in?: Maybe<Array<Scalars['Int']>>
	totalCount_lt?: Maybe<Scalars['Int']>
	totalCount_lte?: Maybe<Scalars['Int']>
	totalCount_gt?: Maybe<Scalars['Int']>
	totalCount_gte?: Maybe<Scalars['Int']>
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
	questionsSolvedCount?: Maybe<Scalars['Int']>
	favoriteTags?: Maybe<Array<Maybe<Tag>>>
	email?: Maybe<Scalars['String']>
	questions?: Maybe<Array<Maybe<Question>>>
	answers?: Maybe<Array<Maybe<Answer>>>
	tags?: Maybe<Array<Maybe<Tag>>>
	comments?: Maybe<Array<Maybe<Comment>>>
	liked?: Maybe<Array<Maybe<CanBeLiked>>>
	subscriptions?: Maybe<Array<Maybe<CanBeSubscribed>>>
	moderatingTags?: Maybe<Array<Maybe<Tag>>>
	totalCount?: Maybe<Scalars['Int']>
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
	DeleteQuestion?: Maybe<DeleteQuestionResponse>
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
	TagCount?: Maybe<Tag>
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

export type QueryTagCountArgs = {
	filter?: Maybe<_TagFilter>
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
	updatedAt?: Maybe<_Neo4jDateTimeInput>
	timestamp?: Maybe<Scalars['String']>
	totalCount?: Maybe<Scalars['Int']>
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
	totalCount?: Maybe<Scalars['Int']>
	_id?: Maybe<Scalars['String']>
	first?: Maybe<Scalars['Int']>
	offset?: Maybe<Scalars['Int']>
	orderBy?: Maybe<Array<Maybe<_UserOrdering>>>
	filter?: Maybe<_UserFilter>
}

export type DeleteCommentMutationVariables = Exact<{
	data: NodeIdInput
}>

export type DeleteCommentMutation = { __typename?: 'Mutation' } & {
	DeleteComment: { __typename?: 'DeleteCommentResponse' } & Pick<
		DeleteCommentResponse,
		'nodeId' | 'text'
	>
}

export type ToggleLikeMutationVariables = Exact<{
	data: NodeIdInput
}>

export type ToggleLikeMutation = { __typename?: 'Mutation' } & {
	ToggleLike:
		| ({ __typename: 'Question' } & Pick<
				Question,
				'likesCount' | 'isLiked' | 'canLike'
		  >)
		| ({ __typename: 'Comment' } & Pick<
				Comment,
				'likesCount' | 'isLiked' | 'canLike'
		  >)
}

export type ToggleSubscribeMutationVariables = Exact<{
	data: NodeIdInput
}>

export type ToggleSubscribeMutation = { __typename?: 'Mutation' } & {
	ToggleSubscribe:
		| ({ __typename: 'Question' } & Pick<
				Question,
				'nodeId' | 'subscribersCount' | 'isSubscribed'
		  >)
		| ({ __typename: 'Tag' } & Pick<
				Tag,
				'nodeId' | 'subscribersCount' | 'isSubscribed'
		  >)
}

export type UserFieldsFragment = { __typename?: 'User' } & Pick<
	User,
	'nodeId' | 'name' | 'surname' | 'avatar' | 'rank' | 'description'
>

export type TagFieldsFragment = { __typename?: 'Tag' } & Pick<
	Tag,
	| 'nodeId'
	| 'name'
	| 'questionsCount'
	| 'subscribersCount'
	| 'canSubscribe'
	| 'isSubscribed'
>

export type QuestionListItemFieldsFragment = { __typename?: 'Question' } & Pick<
	Question,
	| 'nodeId'
	| 'title'
	| 'text'
	| 'viewsCount'
	| 'answersCount'
	| 'commentsCount'
	| 'canDelete'
	| 'canSubscribe'
	| 'isSubscribed'
	| 'subscribersCount'
> & {
		author?: Maybe<{ __typename?: 'User' } & UserFieldsFragment>
		createdAt?: Maybe<
			{ __typename?: '_Neo4jDateTime' } & DateTimeFieldsFragment
		>
		tags?: Maybe<
			Array<Maybe<{ __typename?: 'Tag' } & Pick<Tag, 'nodeId' | 'name'>>>
		>
	}

export type CommentFieldsFragment = { __typename?: 'Comment' } & Pick<
	Comment,
	'nodeId' | 'text' | 'likesCount' | 'isLiked' | 'canLike'
> & {
		createdAt?: Maybe<
			{ __typename?: '_Neo4jDateTime' } & DateTimeFieldsFragment
		>
		author?: Maybe<{ __typename?: 'User' } & UserFieldsFragment>
	}

export type AnswerFieldsFragment = { __typename?: 'Answer' } & Pick<
	Answer,
	| 'nodeId'
	| 'text'
	| 'canDelete'
	| 'canVote'
	| 'upVotesCount'
	| 'downVotesCount'
	| 'isVotedUp'
	| 'isVotedDown'
	| 'canComment'
	| 'commentsCount'
> & {
		author: { __typename?: 'User' } & UserFieldsFragment
		createdAt?: Maybe<
			{ __typename?: '_Neo4jDateTime' } & DateTimeFieldsFragment
		>
		comments?: Maybe<
			Array<Maybe<{ __typename?: 'Comment' } & CommentFieldsFragment>>
		>
		question: { __typename?: 'Question' } & Pick<Question, 'nodeId' | 'title'>
	}

export type FormErrorFieldsFragment = { __typename?: 'FormError' } & Pick<
	FormError,
	'message'
> & {
		errors?: Maybe<
			Array<
				Maybe<
					{ __typename?: 'FieldError' } & Pick<FieldError, 'message' | 'field'>
				>
			>
		>
	}

export type DateTimeFieldsFragment = { __typename?: '_Neo4jDateTime' } & Pick<
	_Neo4jDateTime,
	'year' | 'month' | 'day' | 'hour' | 'minute'
>

export type RegisterMutationVariables = Exact<{
	data: RegisterUserInput
}>

export type RegisterMutation = { __typename?: 'Mutation' } & {
	Register:
		| ({ __typename: 'TokenResponse' } & Pick<TokenResponse, 'token'>)
		| ({ __typename: 'FormError' } & FormErrorFieldsFragment)
}

export type SignInMutationVariables = Exact<{
	data: LoginUserInput
}>

export type SignInMutation = { __typename?: 'Mutation' } & {
	SignIn:
		| ({ __typename: 'TokenResponse' } & Pick<TokenResponse, 'token'>)
		| ({ __typename: 'FormError' } & Pick<FormError, 'message'> & {
					errors?: Maybe<
						Array<
							Maybe<
								{ __typename?: 'FieldError' } & Pick<
									FieldError,
									'field' | 'message'
								>
							>
						>
					>
				})
}

export type UserRanksQueryVariables = Exact<{ [key: string]: never }>

export type UserRanksQuery = { __typename?: 'Query' } & Pick<Query, 'UserRanks'>

export type CurrentUserQueryVariables = Exact<{ [key: string]: never }>

export type CurrentUserQuery = { __typename?: 'Query' } & {
	CurrentUser: { __typename?: 'User' } & UserFieldsFragment
}

export type EditProfileMutationVariables = Exact<{
	data: UserProfileInput
}>

export type EditProfileMutation = { __typename?: 'Mutation' } & {
	EditProfile:
		| ({ __typename: 'Profile' } & Pick<
				Profile,
				| 'name'
				| 'surname'
				| 'avatar'
				| 'rank'
				| 'description'
				| 'isPasswordChanged'
		  >)
		| ({ __typename: 'FormError' } & FormErrorFieldsFragment)
}

export type AskQuestionMutationVariables = Exact<{
	data: AskQuestionInput
}>

export type AskQuestionMutation = { __typename?: 'Mutation' } & {
	AskQuestion:
		| ({ __typename: 'Question' } & Pick<Question, 'nodeId' | 'title' | 'text'>)
		| ({ __typename: 'FormError' } & Pick<FormError, 'message'> & {
					errors?: Maybe<
						Array<
							Maybe<
								{ __typename?: 'FieldError' } & Pick<
									FieldError,
									'field' | 'message'
								>
							>
						>
					>
				})
}

export type AddCommentMutationVariables = Exact<{
	data: AddCommentInput
}>

export type AddCommentMutation = { __typename?: 'Mutation' } & {
	AddComment:
		| ({ __typename: 'Comment' } & {
				topic?: Maybe<
					| ({ __typename: 'Answer' } & {
							comments?: Maybe<
								Array<Maybe<{ __typename?: 'Comment' } & CommentFieldsFragment>>
							>
					  })
					| ({ __typename: 'Question' } & {
							comments?: Maybe<
								Array<Maybe<{ __typename?: 'Comment' } & CommentFieldsFragment>>
							>
					  })
				>
		  })
		| ({ __typename: 'FormError' } & FormErrorFieldsFragment)
}

export type AnswerCommentsQueryVariables = Exact<{
	nodeId: Scalars['ID']
}>

export type AnswerCommentsQuery = { __typename?: 'Query' } & {
	Answer?: Maybe<
		Array<
			Maybe<
				{ __typename?: 'Answer' } & Pick<Answer, 'nodeId'> & {
						comments?: Maybe<
							Array<Maybe<{ __typename?: 'Comment' } & CommentFieldsFragment>>
						>
					}
			>
		>
	>
}

export type AnswerQuestionMutationVariables = Exact<{
	data: AnswerQuestionInput
}>

export type AnswerQuestionMutation = { __typename?: 'Mutation' } & {
	AnswerQuestion:
		| ({ __typename: 'Answer' } & Pick<Answer, 'nodeId'> & {
					question: { __typename?: 'Question' } & Pick<Question, 'nodeId'> & {
							answers?: Maybe<
								Array<Maybe<{ __typename?: 'Answer' } & AnswerFieldsFragment>>
							>
						}
				})
		| ({ __typename: 'FormError' } & Pick<FormError, 'message'> & {
					errors?: Maybe<
						Array<
							Maybe<
								{ __typename?: 'FieldError' } & Pick<
									FieldError,
									'field' | 'message'
								>
							>
						>
					>
				})
}

export type DeleteAnswerMutationVariables = Exact<{
	data: NodeIdInput
}>

export type DeleteAnswerMutation = { __typename?: 'Mutation' } & {
	DeleteAnswer: { __typename?: 'DeleteAnswerResponse' } & Pick<
		DeleteAnswerResponse,
		'nodeId' | 'text'
	>
}

export type DeleteQuestionMutationVariables = Exact<{
	data: NodeIdInput
}>

export type DeleteQuestionMutation = { __typename?: 'Mutation' } & {
	DeleteQuestion?: Maybe<
		{ __typename?: 'DeleteQuestionResponse' } & Pick<
			DeleteQuestionResponse,
			'nodeId' | 'title'
		>
	>
}

export type QuestionAnswersListQueryVariables = Exact<{
	filter?: Maybe<_AnswerFilter>
}>

export type QuestionAnswersListQuery = { __typename?: 'Query' } & {
	Answer?: Maybe<Array<Maybe<{ __typename?: 'Answer' } & AnswerFieldsFragment>>>
}

export type QuestionCommentsQueryVariables = Exact<{
	nodeId: Scalars['ID']
}>

export type QuestionCommentsQuery = { __typename?: 'Query' } & {
	Question?: Maybe<
		Array<
			Maybe<
				{ __typename?: 'Question' } & Pick<Question, 'nodeId'> & {
						comments?: Maybe<
							Array<Maybe<{ __typename?: 'Comment' } & CommentFieldsFragment>>
						>
					}
			>
		>
	>
}

export type QuestionPageQueryVariables = Exact<{
	nodeId: Scalars['ID']
}>

export type QuestionPageQuery = { __typename?: 'Query' } & {
	Question?: Maybe<
		Array<
			Maybe<
				{ __typename?: 'Question' } & Pick<
					Question,
					| 'nodeId'
					| 'title'
					| 'text'
					| 'viewsCount'
					| 'answersCount'
					| 'canDelete'
					| 'canSubscribe'
					| 'isSubscribed'
					| 'subscribersCount'
					| 'canComment'
					| 'commentsCount'
				> & {
						author?: Maybe<{ __typename?: 'User' } & UserFieldsFragment>
						tags?: Maybe<
							Array<
								Maybe<{ __typename?: 'Tag' } & Pick<Tag, 'nodeId' | 'name'>>
							>
						>
						createdAt?: Maybe<
							{ __typename?: '_Neo4jDateTime' } & DateTimeFieldsFragment
						>
						answers?: Maybe<
							Array<Maybe<{ __typename?: 'Answer' } & AnswerFieldsFragment>>
						>
						comments?: Maybe<
							Array<Maybe<{ __typename?: 'Comment' } & CommentFieldsFragment>>
						>
					}
			>
		>
	>
}

export type VoteMutationVariables = Exact<{
	data: VoteInput
}>

export type VoteMutation = { __typename?: 'Mutation' } & {
	Vote:
		| ({ __typename: 'Question' } & Pick<
				Question,
				| 'nodeId'
				| 'upVotesCount'
				| 'downVotesCount'
				| 'canVote'
				| 'isVotedUp'
				| 'isVotedDown'
		  >)
		| ({ __typename: 'Answer' } & Pick<
				Answer,
				| 'nodeId'
				| 'upVotesCount'
				| 'downVotesCount'
				| 'canVote'
				| 'isVotedUp'
				| 'isVotedDown'
		  >)
}

export type QuestionsListQueryVariables = Exact<{
	orderBy?: Maybe<Array<Maybe<_QuestionOrdering>> | Maybe<_QuestionOrdering>>
	first?: Maybe<Scalars['Int']>
	offset?: Maybe<Scalars['Int']>
	filter?: Maybe<_QuestionFilter>
	tagsCount?: Maybe<Scalars['Int']>
}>

export type QuestionsListQuery = { __typename?: 'Query' } & {
	Question?: Maybe<
		Array<
			Maybe<
				{ __typename?: 'Question' } & Pick<
					Question,
					| 'nodeId'
					| 'title'
					| 'text'
					| 'viewsCount'
					| 'answersCount'
					| 'commentsCount'
					| 'canDelete'
					| 'canSubscribe'
					| 'isSubscribed'
					| 'subscribersCount'
				> & {
						author?: Maybe<{ __typename?: 'User' } & UserFieldsFragment>
						createdAt?: Maybe<
							{ __typename?: '_Neo4jDateTime' } & DateTimeFieldsFragment
						>
						tags?: Maybe<
							Array<
								Maybe<{ __typename?: 'Tag' } & Pick<Tag, 'nodeId' | 'name'>>
							>
						>
					}
			>
		>
	>
	QuestionCount?: Maybe<
		{ __typename?: 'Question' } & Pick<Question, 'totalCount'>
	>
}

export type TagPageQueryVariables = Exact<{
	name?: Maybe<Scalars['String']>
	usersFirst?: Maybe<Scalars['Int']>
	usersOffset?: Maybe<Scalars['Int']>
	questionsFirst?: Maybe<Scalars['Int']>
	questionsOffset?: Maybe<Scalars['Int']>
}>

export type TagPageQuery = { __typename?: 'Query' } & {
	Tag?: Maybe<
		Array<
			Maybe<
				{ __typename?: 'Tag' } & Pick<
					Tag,
					'description' | 'questionsSolvedCount'
				> & {
						moderators?: Maybe<
							Array<Maybe<{ __typename?: 'User' } & UserFieldsFragment>>
						>
						questions?: Maybe<
							Array<
								Maybe<
									{ __typename?: 'Question' } & QuestionListItemFieldsFragment
								>
							>
						>
						topQuestions?: Maybe<
							Array<
								Maybe<
									{ __typename?: 'Question' } & QuestionListItemFieldsFragment
								>
							>
						>
						topUsers?: Maybe<
							Array<
								Maybe<
									{ __typename?: 'User' } & Pick<
										User,
										'questionsCount' | 'answersCount'
									> &
										UserFieldsFragment
								>
							>
						>
					} & TagFieldsFragment
			>
		>
	>
}

export type TagQueryVariables = Exact<{ [key: string]: never }>

export type TagQuery = { __typename?: 'Query' } & {
	Tag?: Maybe<
		Array<Maybe<{ __typename?: 'Tag' } & Pick<Tag, 'name' | 'description'>>>
	>
}

export type TagsListQueryVariables = Exact<{
	orderBy?: Maybe<Array<Maybe<_TagOrdering>> | Maybe<_TagOrdering>>
	first?: Maybe<Scalars['Int']>
	offset?: Maybe<Scalars['Int']>
	filter?: Maybe<_TagFilter>
}>

export type TagsListQuery = { __typename?: 'Query' } & {
	Tag?: Maybe<Array<Maybe<{ __typename?: 'Tag' } & TagFieldsFragment>>>
	TagCount?: Maybe<{ __typename?: 'Tag' } & Pick<Tag, 'totalCount'>>
}

export type UserPageQueryVariables = Exact<{
	nodeId: Scalars['ID']
	tagsFirst?: Maybe<Scalars['Int']>
	questionsFirst?: Maybe<Scalars['Int']>
	questionsOffset?: Maybe<Scalars['Int']>
	answersFirst?: Maybe<Scalars['Int']>
	answersOffset?: Maybe<Scalars['Int']>
}>

export type UserPageQuery = { __typename?: 'Query' } & {
	User?: Maybe<
		Array<
			Maybe<
				{ __typename?: 'User' } & Pick<
					User,
					| 'email'
					| 'location'
					| 'questionsCount'
					| 'answersCount'
					| 'questionsSolvedCount'
				> & {
						favoriteTags?: Maybe<
							Array<Maybe<{ __typename?: 'Tag' } & TagFieldsFragment>>
						>
						questions?: Maybe<
							Array<
								Maybe<
									{ __typename?: 'Question' } & QuestionListItemFieldsFragment
								>
							>
						>
						answers?: Maybe<
							Array<Maybe<{ __typename?: 'Answer' } & AnswerFieldsFragment>>
						>
					} & UserFieldsFragment
			>
		>
	>
}

export type UsersListQueryVariables = Exact<{
	orderBy?: Maybe<Array<Maybe<_UserOrdering>> | Maybe<_UserOrdering>>
	first?: Maybe<Scalars['Int']>
	offset?: Maybe<Scalars['Int']>
	filter?: Maybe<_UserFilter>
}>

export type UsersListQuery = { __typename?: 'Query' } & {
	User?: Maybe<
		Array<
			Maybe<
				{ __typename?: 'User' } & Pick<
					User,
					'questionsCount' | 'answersCount'
				> &
					UserFieldsFragment
			>
		>
	>
	UserCount?: Maybe<{ __typename?: 'User' } & Pick<User, 'totalCount'>>
}

export const TagFieldsFragmentDoc = gql`
	fragment tagFields on Tag {
		nodeId
		name
		questionsCount
		subscribersCount
		canSubscribe
		isSubscribed
	}
`
export const UserFieldsFragmentDoc = gql`
	fragment userFields on User {
		nodeId
		name
		surname
		avatar
		rank
		description
	}
`
export const DateTimeFieldsFragmentDoc = gql`
	fragment dateTimeFields on _Neo4jDateTime {
		year
		month
		day
		hour
		minute
	}
`
export const QuestionListItemFieldsFragmentDoc = gql`
	fragment questionListItemFields on Question {
		nodeId
		title
		text
		author {
			...userFields
		}
		createdAt {
			...dateTimeFields
		}
		tags(first: 5) {
			nodeId
			name
		}
		viewsCount
		answersCount
		commentsCount
		canDelete
		canSubscribe
		isSubscribed
		subscribersCount
	}
	${UserFieldsFragmentDoc}
	${DateTimeFieldsFragmentDoc}
`
export const CommentFieldsFragmentDoc = gql`
	fragment commentFields on Comment {
		nodeId
		text
		likesCount
		isLiked
		canLike
		createdAt {
			...dateTimeFields
		}
		author {
			...userFields
		}
	}
	${DateTimeFieldsFragmentDoc}
	${UserFieldsFragmentDoc}
`
export const AnswerFieldsFragmentDoc = gql`
	fragment answerFields on Answer {
		nodeId
		text
		author {
			...userFields
		}
		createdAt {
			...dateTimeFields
		}
		comments(orderBy: timestamp_asc) {
			...commentFields
		}
		question {
			nodeId
			title
		}
		canDelete
		canVote
		upVotesCount
		downVotesCount
		isVotedUp
		isVotedDown
		canComment
		commentsCount
	}
	${UserFieldsFragmentDoc}
	${DateTimeFieldsFragmentDoc}
	${CommentFieldsFragmentDoc}
`
export const FormErrorFieldsFragmentDoc = gql`
	fragment formErrorFields on FormError {
		message
		errors {
			message
			field
		}
	}
`
export const DeleteCommentDocument = gql`
	mutation DeleteComment($data: nodeIdInput!) {
		DeleteComment(data: $data) {
			nodeId
			text
		}
	}
`
export type DeleteCommentMutationFn = Apollo.MutationFunction<
	DeleteCommentMutation,
	DeleteCommentMutationVariables
>

/**
 * __useDeleteCommentMutation__
 *
 * To run a mutation, you first call `useDeleteCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCommentMutation, { data, loading, error }] = useDeleteCommentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useDeleteCommentMutation(
	baseOptions?: Apollo.MutationHookOptions<
		DeleteCommentMutation,
		DeleteCommentMutationVariables
	>
) {
	return Apollo.useMutation<
		DeleteCommentMutation,
		DeleteCommentMutationVariables
	>(DeleteCommentDocument, baseOptions)
}
export type DeleteCommentMutationHookResult = ReturnType<
	typeof useDeleteCommentMutation
>
export type DeleteCommentMutationResult = Apollo.MutationResult<DeleteCommentMutation>
export type DeleteCommentMutationOptions = Apollo.BaseMutationOptions<
	DeleteCommentMutation,
	DeleteCommentMutationVariables
>
export const ToggleLikeDocument = gql`
	mutation ToggleLike($data: nodeIdInput!) {
		ToggleLike(data: $data) {
			__typename
			... on Comment {
				likesCount
				isLiked
				canLike
			}
			... on Question {
				likesCount
				isLiked
				canLike
			}
		}
	}
`
export type ToggleLikeMutationFn = Apollo.MutationFunction<
	ToggleLikeMutation,
	ToggleLikeMutationVariables
>

/**
 * __useToggleLikeMutation__
 *
 * To run a mutation, you first call `useToggleLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleLikeMutation, { data, loading, error }] = useToggleLikeMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useToggleLikeMutation(
	baseOptions?: Apollo.MutationHookOptions<
		ToggleLikeMutation,
		ToggleLikeMutationVariables
	>
) {
	return Apollo.useMutation<ToggleLikeMutation, ToggleLikeMutationVariables>(
		ToggleLikeDocument,
		baseOptions
	)
}
export type ToggleLikeMutationHookResult = ReturnType<
	typeof useToggleLikeMutation
>
export type ToggleLikeMutationResult = Apollo.MutationResult<ToggleLikeMutation>
export type ToggleLikeMutationOptions = Apollo.BaseMutationOptions<
	ToggleLikeMutation,
	ToggleLikeMutationVariables
>
export const ToggleSubscribeDocument = gql`
	mutation ToggleSubscribe($data: nodeIdInput!) {
		ToggleSubscribe(data: $data) {
			__typename
			... on Question {
				nodeId
				subscribersCount
				isSubscribed
			}
			... on Tag {
				nodeId
				subscribersCount
				isSubscribed
			}
		}
	}
`
export type ToggleSubscribeMutationFn = Apollo.MutationFunction<
	ToggleSubscribeMutation,
	ToggleSubscribeMutationVariables
>

/**
 * __useToggleSubscribeMutation__
 *
 * To run a mutation, you first call `useToggleSubscribeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleSubscribeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleSubscribeMutation, { data, loading, error }] = useToggleSubscribeMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useToggleSubscribeMutation(
	baseOptions?: Apollo.MutationHookOptions<
		ToggleSubscribeMutation,
		ToggleSubscribeMutationVariables
	>
) {
	return Apollo.useMutation<
		ToggleSubscribeMutation,
		ToggleSubscribeMutationVariables
	>(ToggleSubscribeDocument, baseOptions)
}
export type ToggleSubscribeMutationHookResult = ReturnType<
	typeof useToggleSubscribeMutation
>
export type ToggleSubscribeMutationResult = Apollo.MutationResult<ToggleSubscribeMutation>
export type ToggleSubscribeMutationOptions = Apollo.BaseMutationOptions<
	ToggleSubscribeMutation,
	ToggleSubscribeMutationVariables
>
export const RegisterDocument = gql`
	mutation Register($data: RegisterUserInput!) {
		Register(data: $data) {
			__typename
			... on TokenResponse {
				token
			}
			... on FormError {
				...formErrorFields
			}
		}
	}
	${FormErrorFieldsFragmentDoc}
`
export type RegisterMutationFn = Apollo.MutationFunction<
	RegisterMutation,
	RegisterMutationVariables
>

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRegisterMutation(
	baseOptions?: Apollo.MutationHookOptions<
		RegisterMutation,
		RegisterMutationVariables
	>
) {
	return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(
		RegisterDocument,
		baseOptions
	)
}
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>
export type RegisterMutationOptions = Apollo.BaseMutationOptions<
	RegisterMutation,
	RegisterMutationVariables
>
export const SignInDocument = gql`
	mutation SignIn($data: LoginUserInput!) {
		SignIn(data: $data) {
			__typename
			... on TokenResponse {
				token
			}
			... on FormError {
				message
				errors {
					field
					message
				}
			}
		}
	}
`
export type SignInMutationFn = Apollo.MutationFunction<
	SignInMutation,
	SignInMutationVariables
>

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSignInMutation(
	baseOptions?: Apollo.MutationHookOptions<
		SignInMutation,
		SignInMutationVariables
	>
) {
	return Apollo.useMutation<SignInMutation, SignInMutationVariables>(
		SignInDocument,
		baseOptions
	)
}
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>
export type SignInMutationOptions = Apollo.BaseMutationOptions<
	SignInMutation,
	SignInMutationVariables
>
export const UserRanksDocument = gql`
	query UserRanks {
		UserRanks
	}
`

/**
 * __useUserRanksQuery__
 *
 * To run a query within a React component, call `useUserRanksQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserRanksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserRanksQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserRanksQuery(
	baseOptions?: Apollo.QueryHookOptions<UserRanksQuery, UserRanksQueryVariables>
) {
	return Apollo.useQuery<UserRanksQuery, UserRanksQueryVariables>(
		UserRanksDocument,
		baseOptions
	)
}
export function useUserRanksLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		UserRanksQuery,
		UserRanksQueryVariables
	>
) {
	return Apollo.useLazyQuery<UserRanksQuery, UserRanksQueryVariables>(
		UserRanksDocument,
		baseOptions
	)
}
export type UserRanksQueryHookResult = ReturnType<typeof useUserRanksQuery>
export type UserRanksLazyQueryHookResult = ReturnType<
	typeof useUserRanksLazyQuery
>
export type UserRanksQueryResult = Apollo.QueryResult<
	UserRanksQuery,
	UserRanksQueryVariables
>
export const CurrentUserDocument = gql`
	query CurrentUser {
		CurrentUser {
			...userFields
		}
	}
	${UserFieldsFragmentDoc}
`

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(
	baseOptions?: Apollo.QueryHookOptions<
		CurrentUserQuery,
		CurrentUserQueryVariables
	>
) {
	return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(
		CurrentUserDocument,
		baseOptions
	)
}
export function useCurrentUserLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		CurrentUserQuery,
		CurrentUserQueryVariables
	>
) {
	return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(
		CurrentUserDocument,
		baseOptions
	)
}
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>
export type CurrentUserLazyQueryHookResult = ReturnType<
	typeof useCurrentUserLazyQuery
>
export type CurrentUserQueryResult = Apollo.QueryResult<
	CurrentUserQuery,
	CurrentUserQueryVariables
>
export const EditProfileDocument = gql`
	mutation EditProfile($data: UserProfileInput!) {
		EditProfile(data: $data) {
			__typename
			... on Profile {
				name
				surname
				avatar
				rank
				description
				isPasswordChanged
			}
			... on FormError {
				...formErrorFields
			}
		}
	}
	${FormErrorFieldsFragmentDoc}
`
export type EditProfileMutationFn = Apollo.MutationFunction<
	EditProfileMutation,
	EditProfileMutationVariables
>

/**
 * __useEditProfileMutation__
 *
 * To run a mutation, you first call `useEditProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editProfileMutation, { data, loading, error }] = useEditProfileMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useEditProfileMutation(
	baseOptions?: Apollo.MutationHookOptions<
		EditProfileMutation,
		EditProfileMutationVariables
	>
) {
	return Apollo.useMutation<EditProfileMutation, EditProfileMutationVariables>(
		EditProfileDocument,
		baseOptions
	)
}
export type EditProfileMutationHookResult = ReturnType<
	typeof useEditProfileMutation
>
export type EditProfileMutationResult = Apollo.MutationResult<EditProfileMutation>
export type EditProfileMutationOptions = Apollo.BaseMutationOptions<
	EditProfileMutation,
	EditProfileMutationVariables
>
export const AskQuestionDocument = gql`
	mutation AskQuestion($data: AskQuestionInput!) {
		AskQuestion(data: $data) {
			__typename
			... on Question {
				nodeId
				title
				text
			}
			... on FormError {
				message
				errors {
					field
					message
				}
			}
		}
	}
`
export type AskQuestionMutationFn = Apollo.MutationFunction<
	AskQuestionMutation,
	AskQuestionMutationVariables
>

/**
 * __useAskQuestionMutation__
 *
 * To run a mutation, you first call `useAskQuestionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAskQuestionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [askQuestionMutation, { data, loading, error }] = useAskQuestionMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAskQuestionMutation(
	baseOptions?: Apollo.MutationHookOptions<
		AskQuestionMutation,
		AskQuestionMutationVariables
	>
) {
	return Apollo.useMutation<AskQuestionMutation, AskQuestionMutationVariables>(
		AskQuestionDocument,
		baseOptions
	)
}
export type AskQuestionMutationHookResult = ReturnType<
	typeof useAskQuestionMutation
>
export type AskQuestionMutationResult = Apollo.MutationResult<AskQuestionMutation>
export type AskQuestionMutationOptions = Apollo.BaseMutationOptions<
	AskQuestionMutation,
	AskQuestionMutationVariables
>
export const AddCommentDocument = gql`
	mutation AddComment($data: AddCommentInput!) {
		AddComment(data: $data) {
			__typename
			... on Comment {
				topic {
					__typename
					... on Question {
						comments(orderBy: timestamp_asc) {
							...commentFields
						}
					}
					... on Answer {
						comments(orderBy: timestamp_asc) {
							...commentFields
						}
					}
				}
			}
			... on FormError {
				...formErrorFields
			}
		}
	}
	${CommentFieldsFragmentDoc}
	${FormErrorFieldsFragmentDoc}
`
export type AddCommentMutationFn = Apollo.MutationFunction<
	AddCommentMutation,
	AddCommentMutationVariables
>

/**
 * __useAddCommentMutation__
 *
 * To run a mutation, you first call `useAddCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCommentMutation, { data, loading, error }] = useAddCommentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddCommentMutation(
	baseOptions?: Apollo.MutationHookOptions<
		AddCommentMutation,
		AddCommentMutationVariables
	>
) {
	return Apollo.useMutation<AddCommentMutation, AddCommentMutationVariables>(
		AddCommentDocument,
		baseOptions
	)
}
export type AddCommentMutationHookResult = ReturnType<
	typeof useAddCommentMutation
>
export type AddCommentMutationResult = Apollo.MutationResult<AddCommentMutation>
export type AddCommentMutationOptions = Apollo.BaseMutationOptions<
	AddCommentMutation,
	AddCommentMutationVariables
>
export const AnswerCommentsDocument = gql`
	query AnswerComments($nodeId: ID!) {
		Answer(nodeId: $nodeId) {
			nodeId
			comments(orderBy: timestamp_asc) {
				...commentFields
			}
		}
	}
	${CommentFieldsFragmentDoc}
`

/**
 * __useAnswerCommentsQuery__
 *
 * To run a query within a React component, call `useAnswerCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAnswerCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAnswerCommentsQuery({
 *   variables: {
 *      nodeId: // value for 'nodeId'
 *   },
 * });
 */
export function useAnswerCommentsQuery(
	baseOptions: Apollo.QueryHookOptions<
		AnswerCommentsQuery,
		AnswerCommentsQueryVariables
	>
) {
	return Apollo.useQuery<AnswerCommentsQuery, AnswerCommentsQueryVariables>(
		AnswerCommentsDocument,
		baseOptions
	)
}
export function useAnswerCommentsLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		AnswerCommentsQuery,
		AnswerCommentsQueryVariables
	>
) {
	return Apollo.useLazyQuery<AnswerCommentsQuery, AnswerCommentsQueryVariables>(
		AnswerCommentsDocument,
		baseOptions
	)
}
export type AnswerCommentsQueryHookResult = ReturnType<
	typeof useAnswerCommentsQuery
>
export type AnswerCommentsLazyQueryHookResult = ReturnType<
	typeof useAnswerCommentsLazyQuery
>
export type AnswerCommentsQueryResult = Apollo.QueryResult<
	AnswerCommentsQuery,
	AnswerCommentsQueryVariables
>
export const AnswerQuestionDocument = gql`
	mutation AnswerQuestion($data: AnswerQuestionInput!) {
		AnswerQuestion(data: $data) {
			__typename
			... on Answer {
				nodeId
				question {
					nodeId
					answers(orderBy: timestamp_asc) {
						...answerFields
					}
				}
			}
			... on FormError {
				message
				errors {
					field
					message
				}
			}
		}
	}
	${AnswerFieldsFragmentDoc}
`
export type AnswerQuestionMutationFn = Apollo.MutationFunction<
	AnswerQuestionMutation,
	AnswerQuestionMutationVariables
>

/**
 * __useAnswerQuestionMutation__
 *
 * To run a mutation, you first call `useAnswerQuestionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAnswerQuestionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [answerQuestionMutation, { data, loading, error }] = useAnswerQuestionMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAnswerQuestionMutation(
	baseOptions?: Apollo.MutationHookOptions<
		AnswerQuestionMutation,
		AnswerQuestionMutationVariables
	>
) {
	return Apollo.useMutation<
		AnswerQuestionMutation,
		AnswerQuestionMutationVariables
	>(AnswerQuestionDocument, baseOptions)
}
export type AnswerQuestionMutationHookResult = ReturnType<
	typeof useAnswerQuestionMutation
>
export type AnswerQuestionMutationResult = Apollo.MutationResult<AnswerQuestionMutation>
export type AnswerQuestionMutationOptions = Apollo.BaseMutationOptions<
	AnswerQuestionMutation,
	AnswerQuestionMutationVariables
>
export const DeleteAnswerDocument = gql`
	mutation DeleteAnswer($data: nodeIdInput!) {
		DeleteAnswer(data: $data) {
			nodeId
			text
		}
	}
`
export type DeleteAnswerMutationFn = Apollo.MutationFunction<
	DeleteAnswerMutation,
	DeleteAnswerMutationVariables
>

/**
 * __useDeleteAnswerMutation__
 *
 * To run a mutation, you first call `useDeleteAnswerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAnswerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAnswerMutation, { data, loading, error }] = useDeleteAnswerMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useDeleteAnswerMutation(
	baseOptions?: Apollo.MutationHookOptions<
		DeleteAnswerMutation,
		DeleteAnswerMutationVariables
	>
) {
	return Apollo.useMutation<
		DeleteAnswerMutation,
		DeleteAnswerMutationVariables
	>(DeleteAnswerDocument, baseOptions)
}
export type DeleteAnswerMutationHookResult = ReturnType<
	typeof useDeleteAnswerMutation
>
export type DeleteAnswerMutationResult = Apollo.MutationResult<DeleteAnswerMutation>
export type DeleteAnswerMutationOptions = Apollo.BaseMutationOptions<
	DeleteAnswerMutation,
	DeleteAnswerMutationVariables
>
export const DeleteQuestionDocument = gql`
	mutation DeleteQuestion($data: nodeIdInput!) {
		DeleteQuestion(data: $data) {
			nodeId
			title
		}
	}
`
export type DeleteQuestionMutationFn = Apollo.MutationFunction<
	DeleteQuestionMutation,
	DeleteQuestionMutationVariables
>

/**
 * __useDeleteQuestionMutation__
 *
 * To run a mutation, you first call `useDeleteQuestionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteQuestionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteQuestionMutation, { data, loading, error }] = useDeleteQuestionMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useDeleteQuestionMutation(
	baseOptions?: Apollo.MutationHookOptions<
		DeleteQuestionMutation,
		DeleteQuestionMutationVariables
	>
) {
	return Apollo.useMutation<
		DeleteQuestionMutation,
		DeleteQuestionMutationVariables
	>(DeleteQuestionDocument, baseOptions)
}
export type DeleteQuestionMutationHookResult = ReturnType<
	typeof useDeleteQuestionMutation
>
export type DeleteQuestionMutationResult = Apollo.MutationResult<DeleteQuestionMutation>
export type DeleteQuestionMutationOptions = Apollo.BaseMutationOptions<
	DeleteQuestionMutation,
	DeleteQuestionMutationVariables
>
export const QuestionAnswersListDocument = gql`
	query QuestionAnswersList($filter: _AnswerFilter) {
		Answer(filter: $filter) {
			...answerFields
		}
	}
	${AnswerFieldsFragmentDoc}
`

/**
 * __useQuestionAnswersListQuery__
 *
 * To run a query within a React component, call `useQuestionAnswersListQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuestionAnswersListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuestionAnswersListQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useQuestionAnswersListQuery(
	baseOptions?: Apollo.QueryHookOptions<
		QuestionAnswersListQuery,
		QuestionAnswersListQueryVariables
	>
) {
	return Apollo.useQuery<
		QuestionAnswersListQuery,
		QuestionAnswersListQueryVariables
	>(QuestionAnswersListDocument, baseOptions)
}
export function useQuestionAnswersListLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		QuestionAnswersListQuery,
		QuestionAnswersListQueryVariables
	>
) {
	return Apollo.useLazyQuery<
		QuestionAnswersListQuery,
		QuestionAnswersListQueryVariables
	>(QuestionAnswersListDocument, baseOptions)
}
export type QuestionAnswersListQueryHookResult = ReturnType<
	typeof useQuestionAnswersListQuery
>
export type QuestionAnswersListLazyQueryHookResult = ReturnType<
	typeof useQuestionAnswersListLazyQuery
>
export type QuestionAnswersListQueryResult = Apollo.QueryResult<
	QuestionAnswersListQuery,
	QuestionAnswersListQueryVariables
>
export const QuestionCommentsDocument = gql`
	query QuestionComments($nodeId: ID!) {
		Question(nodeId: $nodeId) {
			nodeId
			comments(orderBy: timestamp_asc) {
				...commentFields
			}
		}
	}
	${CommentFieldsFragmentDoc}
`

/**
 * __useQuestionCommentsQuery__
 *
 * To run a query within a React component, call `useQuestionCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuestionCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuestionCommentsQuery({
 *   variables: {
 *      nodeId: // value for 'nodeId'
 *   },
 * });
 */
export function useQuestionCommentsQuery(
	baseOptions: Apollo.QueryHookOptions<
		QuestionCommentsQuery,
		QuestionCommentsQueryVariables
	>
) {
	return Apollo.useQuery<QuestionCommentsQuery, QuestionCommentsQueryVariables>(
		QuestionCommentsDocument,
		baseOptions
	)
}
export function useQuestionCommentsLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		QuestionCommentsQuery,
		QuestionCommentsQueryVariables
	>
) {
	return Apollo.useLazyQuery<
		QuestionCommentsQuery,
		QuestionCommentsQueryVariables
	>(QuestionCommentsDocument, baseOptions)
}
export type QuestionCommentsQueryHookResult = ReturnType<
	typeof useQuestionCommentsQuery
>
export type QuestionCommentsLazyQueryHookResult = ReturnType<
	typeof useQuestionCommentsLazyQuery
>
export type QuestionCommentsQueryResult = Apollo.QueryResult<
	QuestionCommentsQuery,
	QuestionCommentsQueryVariables
>
export const QuestionPageDocument = gql`
	query QuestionPage($nodeId: ID!) {
		Question(nodeId: $nodeId) {
			nodeId
			title
			text
			viewsCount
			author {
				...userFields
			}
			tags {
				nodeId
				name
			}
			createdAt {
				...dateTimeFields
			}
			answersCount
			answers(orderBy: timestamp_asc) {
				...answerFields
			}
			canDelete
			canSubscribe
			isSubscribed
			subscribersCount
			canComment
			commentsCount
			comments(orderBy: timestamp_asc) {
				...commentFields
			}
		}
	}
	${UserFieldsFragmentDoc}
	${DateTimeFieldsFragmentDoc}
	${AnswerFieldsFragmentDoc}
	${CommentFieldsFragmentDoc}
`

/**
 * __useQuestionPageQuery__
 *
 * To run a query within a React component, call `useQuestionPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuestionPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuestionPageQuery({
 *   variables: {
 *      nodeId: // value for 'nodeId'
 *   },
 * });
 */
export function useQuestionPageQuery(
	baseOptions: Apollo.QueryHookOptions<
		QuestionPageQuery,
		QuestionPageQueryVariables
	>
) {
	return Apollo.useQuery<QuestionPageQuery, QuestionPageQueryVariables>(
		QuestionPageDocument,
		baseOptions
	)
}
export function useQuestionPageLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		QuestionPageQuery,
		QuestionPageQueryVariables
	>
) {
	return Apollo.useLazyQuery<QuestionPageQuery, QuestionPageQueryVariables>(
		QuestionPageDocument,
		baseOptions
	)
}
export type QuestionPageQueryHookResult = ReturnType<
	typeof useQuestionPageQuery
>
export type QuestionPageLazyQueryHookResult = ReturnType<
	typeof useQuestionPageLazyQuery
>
export type QuestionPageQueryResult = Apollo.QueryResult<
	QuestionPageQuery,
	QuestionPageQueryVariables
>
export const VoteDocument = gql`
	mutation Vote($data: VoteInput!) {
		Vote(data: $data) {
			__typename
			... on Answer {
				nodeId
				upVotesCount
				downVotesCount
				canVote
				isVotedUp
				isVotedDown
			}
			... on Question {
				nodeId
				upVotesCount
				downVotesCount
				canVote
				isVotedUp
				isVotedDown
			}
		}
	}
`
export type VoteMutationFn = Apollo.MutationFunction<
	VoteMutation,
	VoteMutationVariables
>

/**
 * __useVoteMutation__
 *
 * To run a mutation, you first call `useVoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [voteMutation, { data, loading, error }] = useVoteMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useVoteMutation(
	baseOptions?: Apollo.MutationHookOptions<VoteMutation, VoteMutationVariables>
) {
	return Apollo.useMutation<VoteMutation, VoteMutationVariables>(
		VoteDocument,
		baseOptions
	)
}
export type VoteMutationHookResult = ReturnType<typeof useVoteMutation>
export type VoteMutationResult = Apollo.MutationResult<VoteMutation>
export type VoteMutationOptions = Apollo.BaseMutationOptions<
	VoteMutation,
	VoteMutationVariables
>
export const QuestionsListDocument = gql`
	query QuestionsList(
		$orderBy: [_QuestionOrdering]
		$first: Int
		$offset: Int
		$filter: _QuestionFilter
		$tagsCount: Int = 5
	) {
		Question(
			orderBy: $orderBy
			first: $first
			offset: $offset
			filter: $filter
		) {
			nodeId
			title
			text
			author {
				...userFields
			}
			createdAt {
				...dateTimeFields
			}
			tags(first: $tagsCount) {
				nodeId
				name
			}
			viewsCount
			answersCount
			commentsCount
			canDelete
			canSubscribe
			isSubscribed
			subscribersCount
		}
		QuestionCount(filter: $filter) {
			totalCount
		}
	}
	${UserFieldsFragmentDoc}
	${DateTimeFieldsFragmentDoc}
`

/**
 * __useQuestionsListQuery__
 *
 * To run a query within a React component, call `useQuestionsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuestionsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuestionsListQuery({
 *   variables: {
 *      orderBy: // value for 'orderBy'
 *      first: // value for 'first'
 *      offset: // value for 'offset'
 *      filter: // value for 'filter'
 *      tagsCount: // value for 'tagsCount'
 *   },
 * });
 */
export function useQuestionsListQuery(
	baseOptions?: Apollo.QueryHookOptions<
		QuestionsListQuery,
		QuestionsListQueryVariables
	>
) {
	return Apollo.useQuery<QuestionsListQuery, QuestionsListQueryVariables>(
		QuestionsListDocument,
		baseOptions
	)
}
export function useQuestionsListLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		QuestionsListQuery,
		QuestionsListQueryVariables
	>
) {
	return Apollo.useLazyQuery<QuestionsListQuery, QuestionsListQueryVariables>(
		QuestionsListDocument,
		baseOptions
	)
}
export type QuestionsListQueryHookResult = ReturnType<
	typeof useQuestionsListQuery
>
export type QuestionsListLazyQueryHookResult = ReturnType<
	typeof useQuestionsListLazyQuery
>
export type QuestionsListQueryResult = Apollo.QueryResult<
	QuestionsListQuery,
	QuestionsListQueryVariables
>
export const TagPageDocument = gql`
	query TagPage(
		$name: String
		$usersFirst: Int = 5
		$usersOffset: Int = 0
		$questionsFirst: Int = 5
		$questionsOffset: Int = 0
	) {
		Tag(name: $name) {
			...tagFields
			description
			questionsSolvedCount
			moderators {
				...userFields
			}
			questions(first: $questionsFirst, offset: $questionsOffset) {
				...questionListItemFields
			}
			topQuestions(first: 10, offset: 0) {
				...questionListItemFields
			}
			topUsers(first: $usersFirst, offset: $usersOffset) {
				...userFields
				questionsCount
				answersCount
			}
		}
	}
	${TagFieldsFragmentDoc}
	${UserFieldsFragmentDoc}
	${QuestionListItemFieldsFragmentDoc}
`

/**
 * __useTagPageQuery__
 *
 * To run a query within a React component, call `useTagPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useTagPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTagPageQuery({
 *   variables: {
 *      name: // value for 'name'
 *      usersFirst: // value for 'usersFirst'
 *      usersOffset: // value for 'usersOffset'
 *      questionsFirst: // value for 'questionsFirst'
 *      questionsOffset: // value for 'questionsOffset'
 *   },
 * });
 */
export function useTagPageQuery(
	baseOptions?: Apollo.QueryHookOptions<TagPageQuery, TagPageQueryVariables>
) {
	return Apollo.useQuery<TagPageQuery, TagPageQueryVariables>(
		TagPageDocument,
		baseOptions
	)
}
export function useTagPageLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<TagPageQuery, TagPageQueryVariables>
) {
	return Apollo.useLazyQuery<TagPageQuery, TagPageQueryVariables>(
		TagPageDocument,
		baseOptions
	)
}
export type TagPageQueryHookResult = ReturnType<typeof useTagPageQuery>
export type TagPageLazyQueryHookResult = ReturnType<typeof useTagPageLazyQuery>
export type TagPageQueryResult = Apollo.QueryResult<
	TagPageQuery,
	TagPageQueryVariables
>
export const TagDocument = gql`
	query Tag {
		Tag(first: 10) {
			name
			description
		}
	}
`

/**
 * __useTagQuery__
 *
 * To run a query within a React component, call `useTagQuery` and pass it any options that fit your needs.
 * When your component renders, `useTagQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTagQuery({
 *   variables: {
 *   },
 * });
 */
export function useTagQuery(
	baseOptions?: Apollo.QueryHookOptions<TagQuery, TagQueryVariables>
) {
	return Apollo.useQuery<TagQuery, TagQueryVariables>(TagDocument, baseOptions)
}
export function useTagLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<TagQuery, TagQueryVariables>
) {
	return Apollo.useLazyQuery<TagQuery, TagQueryVariables>(
		TagDocument,
		baseOptions
	)
}
export type TagQueryHookResult = ReturnType<typeof useTagQuery>
export type TagLazyQueryHookResult = ReturnType<typeof useTagLazyQuery>
export type TagQueryResult = Apollo.QueryResult<TagQuery, TagQueryVariables>
export const TagsListDocument = gql`
	query TagsList(
		$orderBy: [_TagOrdering]
		$first: Int
		$offset: Int
		$filter: _TagFilter
	) {
		Tag(orderBy: $orderBy, first: $first, offset: $offset, filter: $filter) {
			...tagFields
		}
		TagCount(filter: $filter) {
			totalCount
		}
	}
	${TagFieldsFragmentDoc}
`

/**
 * __useTagsListQuery__
 *
 * To run a query within a React component, call `useTagsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useTagsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTagsListQuery({
 *   variables: {
 *      orderBy: // value for 'orderBy'
 *      first: // value for 'first'
 *      offset: // value for 'offset'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useTagsListQuery(
	baseOptions?: Apollo.QueryHookOptions<TagsListQuery, TagsListQueryVariables>
) {
	return Apollo.useQuery<TagsListQuery, TagsListQueryVariables>(
		TagsListDocument,
		baseOptions
	)
}
export function useTagsListLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		TagsListQuery,
		TagsListQueryVariables
	>
) {
	return Apollo.useLazyQuery<TagsListQuery, TagsListQueryVariables>(
		TagsListDocument,
		baseOptions
	)
}
export type TagsListQueryHookResult = ReturnType<typeof useTagsListQuery>
export type TagsListLazyQueryHookResult = ReturnType<
	typeof useTagsListLazyQuery
>
export type TagsListQueryResult = Apollo.QueryResult<
	TagsListQuery,
	TagsListQueryVariables
>
export const UserPageDocument = gql`
	query UserPage(
		$nodeId: ID!
		$tagsFirst: Int = 5
		$questionsFirst: Int = 5
		$questionsOffset: Int = 0
		$answersFirst: Int = 5
		$answersOffset: Int = 0
	) {
		User(nodeId: $nodeId) {
			...userFields
			email
			location
			questionsCount
			answersCount
			questionsSolvedCount
			favoriteTags(first: $tagsFirst) {
				...tagFields
			}
			questions(first: $questionsFirst, offset: $questionsOffset) {
				...questionListItemFields
			}
			answers(first: $answersFirst, offset: $answersOffset) {
				...answerFields
			}
		}
	}
	${UserFieldsFragmentDoc}
	${TagFieldsFragmentDoc}
	${QuestionListItemFieldsFragmentDoc}
	${AnswerFieldsFragmentDoc}
`

/**
 * __useUserPageQuery__
 *
 * To run a query within a React component, call `useUserPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserPageQuery({
 *   variables: {
 *      nodeId: // value for 'nodeId'
 *      tagsFirst: // value for 'tagsFirst'
 *      questionsFirst: // value for 'questionsFirst'
 *      questionsOffset: // value for 'questionsOffset'
 *      answersFirst: // value for 'answersFirst'
 *      answersOffset: // value for 'answersOffset'
 *   },
 * });
 */
export function useUserPageQuery(
	baseOptions: Apollo.QueryHookOptions<UserPageQuery, UserPageQueryVariables>
) {
	return Apollo.useQuery<UserPageQuery, UserPageQueryVariables>(
		UserPageDocument,
		baseOptions
	)
}
export function useUserPageLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		UserPageQuery,
		UserPageQueryVariables
	>
) {
	return Apollo.useLazyQuery<UserPageQuery, UserPageQueryVariables>(
		UserPageDocument,
		baseOptions
	)
}
export type UserPageQueryHookResult = ReturnType<typeof useUserPageQuery>
export type UserPageLazyQueryHookResult = ReturnType<
	typeof useUserPageLazyQuery
>
export type UserPageQueryResult = Apollo.QueryResult<
	UserPageQuery,
	UserPageQueryVariables
>
export const UsersListDocument = gql`
	query UsersList(
		$orderBy: [_UserOrdering]
		$first: Int
		$offset: Int
		$filter: _UserFilter
	) {
		User(orderBy: $orderBy, first: $first, offset: $offset, filter: $filter) {
			...userFields
			questionsCount
			answersCount
		}
		UserCount(filter: $filter) {
			totalCount
		}
	}
	${UserFieldsFragmentDoc}
`

/**
 * __useUsersListQuery__
 *
 * To run a query within a React component, call `useUsersListQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersListQuery({
 *   variables: {
 *      orderBy: // value for 'orderBy'
 *      first: // value for 'first'
 *      offset: // value for 'offset'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useUsersListQuery(
	baseOptions?: Apollo.QueryHookOptions<UsersListQuery, UsersListQueryVariables>
) {
	return Apollo.useQuery<UsersListQuery, UsersListQueryVariables>(
		UsersListDocument,
		baseOptions
	)
}
export function useUsersListLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		UsersListQuery,
		UsersListQueryVariables
	>
) {
	return Apollo.useLazyQuery<UsersListQuery, UsersListQueryVariables>(
		UsersListDocument,
		baseOptions
	)
}
export type UsersListQueryHookResult = ReturnType<typeof useUsersListQuery>
export type UsersListLazyQueryHookResult = ReturnType<
	typeof useUsersListLazyQuery
>
export type UsersListQueryResult = Apollo.QueryResult<
	UsersListQuery,
	UsersListQueryVariables
>
