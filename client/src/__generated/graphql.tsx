import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};












export enum _AnswerOrdering {
  NodeIdAsc = 'nodeId_asc',
  NodeIdDesc = 'nodeId_desc',
  TextAsc = 'text_asc',
  TextDesc = 'text_desc',
  CreatedAtAsc = 'createdAt_asc',
  CreatedAtDesc = 'createdAt_desc',
  UpdatedAtAsc = 'updatedAt_asc',
  UpdatedAtDesc = 'updatedAt_desc',
  CanAcceptAsc = 'canAccept_asc',
  CanAcceptDesc = 'canAccept_desc',
  AcceptedAsc = 'accepted_asc',
  AcceptedDesc = 'accepted_desc',
  UpVotesCountAsc = 'upVotesCount_asc',
  UpVotesCountDesc = 'upVotesCount_desc',
  DownVotesCountAsc = 'downVotesCount_asc',
  DownVotesCountDesc = 'downVotesCount_desc',
  CommentsCountAsc = 'commentsCount_asc',
  CommentsCountDesc = 'commentsCount_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type _AnswerFilter = {
  AND?: Maybe<Array<_AnswerFilter>>;
  OR?: Maybe<Array<_AnswerFilter>>;
  nodeId?: Maybe<Scalars['ID']>;
  nodeId_not?: Maybe<Scalars['ID']>;
  nodeId_in?: Maybe<Array<Scalars['ID']>>;
  nodeId_not_in?: Maybe<Array<Scalars['ID']>>;
  nodeId_regexp?: Maybe<Scalars['ID']>;
  nodeId_contains?: Maybe<Scalars['ID']>;
  nodeId_not_contains?: Maybe<Scalars['ID']>;
  nodeId_starts_with?: Maybe<Scalars['ID']>;
  nodeId_not_starts_with?: Maybe<Scalars['ID']>;
  nodeId_ends_with?: Maybe<Scalars['ID']>;
  nodeId_not_ends_with?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
  text_not?: Maybe<Scalars['String']>;
  text_in?: Maybe<Array<Scalars['String']>>;
  text_not_in?: Maybe<Array<Scalars['String']>>;
  text_regexp?: Maybe<Scalars['String']>;
  text_contains?: Maybe<Scalars['String']>;
  text_not_contains?: Maybe<Scalars['String']>;
  text_starts_with?: Maybe<Scalars['String']>;
  text_not_starts_with?: Maybe<Scalars['String']>;
  text_ends_with?: Maybe<Scalars['String']>;
  text_not_ends_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<_Neo4jDateTimeInput>;
  createdAt_not?: Maybe<_Neo4jDateTimeInput>;
  createdAt_in?: Maybe<Array<_Neo4jDateTimeInput>>;
  createdAt_not_in?: Maybe<Array<_Neo4jDateTimeInput>>;
  createdAt_lt?: Maybe<_Neo4jDateTimeInput>;
  createdAt_lte?: Maybe<_Neo4jDateTimeInput>;
  createdAt_gt?: Maybe<_Neo4jDateTimeInput>;
  createdAt_gte?: Maybe<_Neo4jDateTimeInput>;
  updatedAt?: Maybe<_Neo4jDateTimeInput>;
  updatedAt_not?: Maybe<_Neo4jDateTimeInput>;
  updatedAt_in?: Maybe<Array<_Neo4jDateTimeInput>>;
  updatedAt_not_in?: Maybe<Array<_Neo4jDateTimeInput>>;
  updatedAt_lt?: Maybe<_Neo4jDateTimeInput>;
  updatedAt_lte?: Maybe<_Neo4jDateTimeInput>;
  updatedAt_gt?: Maybe<_Neo4jDateTimeInput>;
  updatedAt_gte?: Maybe<_Neo4jDateTimeInput>;
  author?: Maybe<_UserFilter>;
  author_not?: Maybe<_UserFilter>;
  author_in?: Maybe<Array<_UserFilter>>;
  author_not_in?: Maybe<Array<_UserFilter>>;
  question?: Maybe<_QuestionFilter>;
  question_not?: Maybe<_QuestionFilter>;
  question_in?: Maybe<Array<_QuestionFilter>>;
  question_not_in?: Maybe<Array<_QuestionFilter>>;
  comments?: Maybe<_CommentFilter>;
  comments_not?: Maybe<_CommentFilter>;
  comments_in?: Maybe<Array<_CommentFilter>>;
  comments_not_in?: Maybe<Array<_CommentFilter>>;
  comments_some?: Maybe<_CommentFilter>;
  comments_none?: Maybe<_CommentFilter>;
  comments_single?: Maybe<_CommentFilter>;
  comments_every?: Maybe<_CommentFilter>;
};

export type Answer = CanBeCommented & CanBeVoted & {
  __typename?: 'Answer';
  nodeId: Scalars['ID'];
  text: Scalars['String'];
  createdAt?: Maybe<_Neo4jDateTime>;
  updatedAt?: Maybe<_Neo4jDateTime>;
  canAccept?: Maybe<Scalars['Boolean']>;
  accepted?: Maybe<Scalars['Boolean']>;
  upVotesCount?: Maybe<Scalars['Int']>;
  downVotesCount?: Maybe<Scalars['Int']>;
  commentsCount?: Maybe<Scalars['Int']>;
  author: User;
  question: Question;
  comments?: Maybe<Array<Maybe<Comment>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
};


export type AnswerAuthorArgs = {
  filter?: Maybe<_UserFilter>;
};


export type AnswerQuestionArgs = {
  filter?: Maybe<_QuestionFilter>;
};


export type AnswerCommentsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_CommentOrdering>>>;
  filter?: Maybe<_CommentFilter>;
};

export enum _CommentOrdering {
  NodeIdAsc = 'nodeId_asc',
  NodeIdDesc = 'nodeId_desc',
  TextAsc = 'text_asc',
  TextDesc = 'text_desc',
  CreatedAtAsc = 'createdAt_asc',
  CreatedAtDesc = 'createdAt_desc',
  UpdatedAtAsc = 'updatedAt_asc',
  UpdatedAtDesc = 'updatedAt_desc',
  LikesCountAsc = 'likesCount_asc',
  LikesCountDesc = 'likesCount_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type _CommentFilter = {
  AND?: Maybe<Array<_CommentFilter>>;
  OR?: Maybe<Array<_CommentFilter>>;
  nodeId?: Maybe<Scalars['ID']>;
  nodeId_not?: Maybe<Scalars['ID']>;
  nodeId_in?: Maybe<Array<Scalars['ID']>>;
  nodeId_not_in?: Maybe<Array<Scalars['ID']>>;
  nodeId_regexp?: Maybe<Scalars['ID']>;
  nodeId_contains?: Maybe<Scalars['ID']>;
  nodeId_not_contains?: Maybe<Scalars['ID']>;
  nodeId_starts_with?: Maybe<Scalars['ID']>;
  nodeId_not_starts_with?: Maybe<Scalars['ID']>;
  nodeId_ends_with?: Maybe<Scalars['ID']>;
  nodeId_not_ends_with?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
  text_not?: Maybe<Scalars['String']>;
  text_in?: Maybe<Array<Scalars['String']>>;
  text_not_in?: Maybe<Array<Scalars['String']>>;
  text_regexp?: Maybe<Scalars['String']>;
  text_contains?: Maybe<Scalars['String']>;
  text_not_contains?: Maybe<Scalars['String']>;
  text_starts_with?: Maybe<Scalars['String']>;
  text_not_starts_with?: Maybe<Scalars['String']>;
  text_ends_with?: Maybe<Scalars['String']>;
  text_not_ends_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<_Neo4jDateTimeInput>;
  createdAt_not?: Maybe<_Neo4jDateTimeInput>;
  createdAt_in?: Maybe<Array<_Neo4jDateTimeInput>>;
  createdAt_not_in?: Maybe<Array<_Neo4jDateTimeInput>>;
  createdAt_lt?: Maybe<_Neo4jDateTimeInput>;
  createdAt_lte?: Maybe<_Neo4jDateTimeInput>;
  createdAt_gt?: Maybe<_Neo4jDateTimeInput>;
  createdAt_gte?: Maybe<_Neo4jDateTimeInput>;
  updatedAt?: Maybe<_Neo4jDateTimeInput>;
  updatedAt_not?: Maybe<_Neo4jDateTimeInput>;
  updatedAt_in?: Maybe<Array<_Neo4jDateTimeInput>>;
  updatedAt_not_in?: Maybe<Array<_Neo4jDateTimeInput>>;
  updatedAt_lt?: Maybe<_Neo4jDateTimeInput>;
  updatedAt_lte?: Maybe<_Neo4jDateTimeInput>;
  updatedAt_gt?: Maybe<_Neo4jDateTimeInput>;
  updatedAt_gte?: Maybe<_Neo4jDateTimeInput>;
  author?: Maybe<_UserFilter>;
  author_not?: Maybe<_UserFilter>;
  author_in?: Maybe<Array<_UserFilter>>;
  author_not_in?: Maybe<Array<_UserFilter>>;
  likes?: Maybe<_UserFilter>;
  likes_not?: Maybe<_UserFilter>;
  likes_in?: Maybe<Array<_UserFilter>>;
  likes_not_in?: Maybe<Array<_UserFilter>>;
  likes_some?: Maybe<_UserFilter>;
  likes_none?: Maybe<_UserFilter>;
  likes_single?: Maybe<_UserFilter>;
  likes_every?: Maybe<_UserFilter>;
};

export type Comment = CanBeLiked & {
  __typename?: 'Comment';
  nodeId: Scalars['ID'];
  text: Scalars['String'];
  createdAt: _Neo4jDateTime;
  updatedAt?: Maybe<_Neo4jDateTime>;
  likesCount?: Maybe<Scalars['Int']>;
  author?: Maybe<User>;
  topic?: Maybe<CanBeCommented>;
  likes?: Maybe<Array<Maybe<User>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
};


export type CommentAuthorArgs = {
  filter?: Maybe<_UserFilter>;
};


export type CommentLikesArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_UserOrdering>>>;
  filter?: Maybe<_UserFilter>;
};

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
  ViewsCountAsc = 'viewsCount_asc',
  ViewsCountDesc = 'viewsCount_desc',
  CanVoteAsc = 'canVote_asc',
  CanVoteDesc = 'canVote_desc',
  UpVotesCountAsc = 'upVotesCount_asc',
  UpVotesCountDesc = 'upVotesCount_desc',
  DownVotesCountAsc = 'downVotesCount_asc',
  DownVotesCountDesc = 'downVotesCount_desc',
  AnswersCountAsc = 'answersCount_asc',
  AnswersCountDesc = 'answersCount_desc',
  CommentsCountAsc = 'commentsCount_asc',
  CommentsCountDesc = 'commentsCount_desc',
  LikesCountAsc = 'likesCount_asc',
  LikesCountDesc = 'likesCount_desc',
  SubscribersCountAsc = 'subscribersCount_asc',
  SubscribersCountDesc = 'subscribersCount_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type _QuestionFilter = {
  AND?: Maybe<Array<_QuestionFilter>>;
  OR?: Maybe<Array<_QuestionFilter>>;
  nodeId?: Maybe<Scalars['ID']>;
  nodeId_not?: Maybe<Scalars['ID']>;
  nodeId_in?: Maybe<Array<Scalars['ID']>>;
  nodeId_not_in?: Maybe<Array<Scalars['ID']>>;
  nodeId_regexp?: Maybe<Scalars['ID']>;
  nodeId_contains?: Maybe<Scalars['ID']>;
  nodeId_not_contains?: Maybe<Scalars['ID']>;
  nodeId_starts_with?: Maybe<Scalars['ID']>;
  nodeId_not_starts_with?: Maybe<Scalars['ID']>;
  nodeId_ends_with?: Maybe<Scalars['ID']>;
  nodeId_not_ends_with?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Scalars['String']>>;
  title_not_in?: Maybe<Array<Scalars['String']>>;
  title_regexp?: Maybe<Scalars['String']>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  title_starts_with?: Maybe<Scalars['String']>;
  title_not_starts_with?: Maybe<Scalars['String']>;
  title_ends_with?: Maybe<Scalars['String']>;
  title_not_ends_with?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  text_not?: Maybe<Scalars['String']>;
  text_in?: Maybe<Array<Scalars['String']>>;
  text_not_in?: Maybe<Array<Scalars['String']>>;
  text_regexp?: Maybe<Scalars['String']>;
  text_contains?: Maybe<Scalars['String']>;
  text_not_contains?: Maybe<Scalars['String']>;
  text_starts_with?: Maybe<Scalars['String']>;
  text_not_starts_with?: Maybe<Scalars['String']>;
  text_ends_with?: Maybe<Scalars['String']>;
  text_not_ends_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<_Neo4jDateTimeInput>;
  createdAt_not?: Maybe<_Neo4jDateTimeInput>;
  createdAt_in?: Maybe<Array<_Neo4jDateTimeInput>>;
  createdAt_not_in?: Maybe<Array<_Neo4jDateTimeInput>>;
  createdAt_lt?: Maybe<_Neo4jDateTimeInput>;
  createdAt_lte?: Maybe<_Neo4jDateTimeInput>;
  createdAt_gt?: Maybe<_Neo4jDateTimeInput>;
  createdAt_gte?: Maybe<_Neo4jDateTimeInput>;
  updatedAt?: Maybe<_Neo4jDateTimeInput>;
  updatedAt_not?: Maybe<_Neo4jDateTimeInput>;
  updatedAt_in?: Maybe<Array<_Neo4jDateTimeInput>>;
  updatedAt_not_in?: Maybe<Array<_Neo4jDateTimeInput>>;
  updatedAt_lt?: Maybe<_Neo4jDateTimeInput>;
  updatedAt_lte?: Maybe<_Neo4jDateTimeInput>;
  updatedAt_gt?: Maybe<_Neo4jDateTimeInput>;
  updatedAt_gte?: Maybe<_Neo4jDateTimeInput>;
  viewsCount?: Maybe<Scalars['Int']>;
  viewsCount_not?: Maybe<Scalars['Int']>;
  viewsCount_in?: Maybe<Array<Scalars['Int']>>;
  viewsCount_not_in?: Maybe<Array<Scalars['Int']>>;
  viewsCount_lt?: Maybe<Scalars['Int']>;
  viewsCount_lte?: Maybe<Scalars['Int']>;
  viewsCount_gt?: Maybe<Scalars['Int']>;
  viewsCount_gte?: Maybe<Scalars['Int']>;
  canVote?: Maybe<Scalars['Boolean']>;
  canVote_not?: Maybe<Scalars['Boolean']>;
  author?: Maybe<_UserFilter>;
  author_not?: Maybe<_UserFilter>;
  author_in?: Maybe<Array<_UserFilter>>;
  author_not_in?: Maybe<Array<_UserFilter>>;
  answers?: Maybe<_AnswerFilter>;
  answers_not?: Maybe<_AnswerFilter>;
  answers_in?: Maybe<Array<_AnswerFilter>>;
  answers_not_in?: Maybe<Array<_AnswerFilter>>;
  answers_some?: Maybe<_AnswerFilter>;
  answers_none?: Maybe<_AnswerFilter>;
  answers_single?: Maybe<_AnswerFilter>;
  answers_every?: Maybe<_AnswerFilter>;
  comments?: Maybe<_CommentFilter>;
  comments_not?: Maybe<_CommentFilter>;
  comments_in?: Maybe<Array<_CommentFilter>>;
  comments_not_in?: Maybe<Array<_CommentFilter>>;
  comments_some?: Maybe<_CommentFilter>;
  comments_none?: Maybe<_CommentFilter>;
  comments_single?: Maybe<_CommentFilter>;
  comments_every?: Maybe<_CommentFilter>;
  tags?: Maybe<_TagFilter>;
  tags_not?: Maybe<_TagFilter>;
  tags_in?: Maybe<Array<_TagFilter>>;
  tags_not_in?: Maybe<Array<_TagFilter>>;
  tags_some?: Maybe<_TagFilter>;
  tags_none?: Maybe<_TagFilter>;
  tags_single?: Maybe<_TagFilter>;
  tags_every?: Maybe<_TagFilter>;
  likes?: Maybe<_UserFilter>;
  likes_not?: Maybe<_UserFilter>;
  likes_in?: Maybe<Array<_UserFilter>>;
  likes_not_in?: Maybe<Array<_UserFilter>>;
  likes_some?: Maybe<_UserFilter>;
  likes_none?: Maybe<_UserFilter>;
  likes_single?: Maybe<_UserFilter>;
  likes_every?: Maybe<_UserFilter>;
  subscribers?: Maybe<_UserFilter>;
  subscribers_not?: Maybe<_UserFilter>;
  subscribers_in?: Maybe<Array<_UserFilter>>;
  subscribers_not_in?: Maybe<Array<_UserFilter>>;
  subscribers_some?: Maybe<_UserFilter>;
  subscribers_none?: Maybe<_UserFilter>;
  subscribers_single?: Maybe<_UserFilter>;
  subscribers_every?: Maybe<_UserFilter>;
};

export type Question = CanBeCommented & CanBeLiked & CanBeVoted & CanBeSubscribed & {
  __typename?: 'Question';
  nodeId: Scalars['ID'];
  title: Scalars['String'];
  text: Scalars['String'];
  createdAt?: Maybe<_Neo4jDateTime>;
  updatedAt?: Maybe<_Neo4jDateTime>;
  viewsCount?: Maybe<Scalars['Int']>;
  canVote?: Maybe<Scalars['Boolean']>;
  upVotesCount?: Maybe<Scalars['Int']>;
  downVotesCount?: Maybe<Scalars['Int']>;
  answersCount?: Maybe<Scalars['Int']>;
  commentsCount?: Maybe<Scalars['Int']>;
  likesCount?: Maybe<Scalars['Int']>;
  subscribersCount?: Maybe<Scalars['Int']>;
  author: User;
  answers?: Maybe<Array<Maybe<Answer>>>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  likes?: Maybe<Array<Maybe<User>>>;
  subscribers?: Maybe<Array<Maybe<User>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
};


export type QuestionAuthorArgs = {
  filter?: Maybe<_UserFilter>;
};


export type QuestionAnswersArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_AnswerOrdering>>>;
  filter?: Maybe<_AnswerFilter>;
};


export type QuestionCommentsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_CommentOrdering>>>;
  filter?: Maybe<_CommentFilter>;
};


export type QuestionTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_TagOrdering>>>;
  filter?: Maybe<_TagFilter>;
};


export type QuestionLikesArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_UserOrdering>>>;
  filter?: Maybe<_UserFilter>;
};


export type QuestionSubscribersArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_UserOrdering>>>;
  filter?: Maybe<_UserFilter>;
};

export enum _RankOrdering {
  RankAsc = 'rank_asc',
  RankDesc = 'rank_desc',
  DescriptionAsc = 'description_asc',
  DescriptionDesc = 'description_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type _RankFilter = {
  AND?: Maybe<Array<_RankFilter>>;
  OR?: Maybe<Array<_RankFilter>>;
  rank?: Maybe<Scalars['String']>;
  rank_not?: Maybe<Scalars['String']>;
  rank_in?: Maybe<Array<Scalars['String']>>;
  rank_not_in?: Maybe<Array<Scalars['String']>>;
  rank_regexp?: Maybe<Scalars['String']>;
  rank_contains?: Maybe<Scalars['String']>;
  rank_not_contains?: Maybe<Scalars['String']>;
  rank_starts_with?: Maybe<Scalars['String']>;
  rank_not_starts_with?: Maybe<Scalars['String']>;
  rank_ends_with?: Maybe<Scalars['String']>;
  rank_not_ends_with?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Scalars['String']>>;
  description_not_in?: Maybe<Array<Scalars['String']>>;
  description_regexp?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  description_starts_with?: Maybe<Scalars['String']>;
  description_not_starts_with?: Maybe<Scalars['String']>;
  description_ends_with?: Maybe<Scalars['String']>;
  description_not_ends_with?: Maybe<Scalars['String']>;
};

export type Rank = {
  __typename?: 'Rank';
  rank: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
};

export enum _TagOrdering {
  NodeIdAsc = 'nodeId_asc',
  NodeIdDesc = 'nodeId_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  DescriptionAsc = 'description_asc',
  DescriptionDesc = 'description_desc',
  CreatedAtAsc = 'createdAt_asc',
  CreatedAtDesc = 'createdAt_desc',
  IsSubscribedAsc = 'isSubscribed_asc',
  IsSubscribedDesc = 'isSubscribed_desc',
  QuestionsCountAsc = 'questionsCount_asc',
  QuestionsCountDesc = 'questionsCount_desc',
  QuestionsSolvedCountAsc = 'questionsSolvedCount_asc',
  QuestionsSolvedCountDesc = 'questionsSolvedCount_desc',
  SubscribersCountAsc = 'subscribersCount_asc',
  SubscribersCountDesc = 'subscribersCount_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type _TagFilter = {
  AND?: Maybe<Array<_TagFilter>>;
  OR?: Maybe<Array<_TagFilter>>;
  nodeId?: Maybe<Scalars['ID']>;
  nodeId_not?: Maybe<Scalars['ID']>;
  nodeId_in?: Maybe<Array<Scalars['ID']>>;
  nodeId_not_in?: Maybe<Array<Scalars['ID']>>;
  nodeId_regexp?: Maybe<Scalars['ID']>;
  nodeId_contains?: Maybe<Scalars['ID']>;
  nodeId_not_contains?: Maybe<Scalars['ID']>;
  nodeId_starts_with?: Maybe<Scalars['ID']>;
  nodeId_not_starts_with?: Maybe<Scalars['ID']>;
  nodeId_ends_with?: Maybe<Scalars['ID']>;
  nodeId_not_ends_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_regexp?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Scalars['String']>>;
  description_not_in?: Maybe<Array<Scalars['String']>>;
  description_regexp?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  description_starts_with?: Maybe<Scalars['String']>;
  description_not_starts_with?: Maybe<Scalars['String']>;
  description_ends_with?: Maybe<Scalars['String']>;
  description_not_ends_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<_Neo4jDateTimeInput>;
  createdAt_not?: Maybe<_Neo4jDateTimeInput>;
  createdAt_in?: Maybe<Array<_Neo4jDateTimeInput>>;
  createdAt_not_in?: Maybe<Array<_Neo4jDateTimeInput>>;
  createdAt_lt?: Maybe<_Neo4jDateTimeInput>;
  createdAt_lte?: Maybe<_Neo4jDateTimeInput>;
  createdAt_gt?: Maybe<_Neo4jDateTimeInput>;
  createdAt_gte?: Maybe<_Neo4jDateTimeInput>;
  questions?: Maybe<_QuestionFilter>;
  questions_not?: Maybe<_QuestionFilter>;
  questions_in?: Maybe<Array<_QuestionFilter>>;
  questions_not_in?: Maybe<Array<_QuestionFilter>>;
  questions_some?: Maybe<_QuestionFilter>;
  questions_none?: Maybe<_QuestionFilter>;
  questions_single?: Maybe<_QuestionFilter>;
  questions_every?: Maybe<_QuestionFilter>;
  addedBy?: Maybe<_UserFilter>;
  addedBy_not?: Maybe<_UserFilter>;
  addedBy_in?: Maybe<Array<_UserFilter>>;
  addedBy_not_in?: Maybe<Array<_UserFilter>>;
  subscribers?: Maybe<_UserFilter>;
  subscribers_not?: Maybe<_UserFilter>;
  subscribers_in?: Maybe<Array<_UserFilter>>;
  subscribers_not_in?: Maybe<Array<_UserFilter>>;
  subscribers_some?: Maybe<_UserFilter>;
  subscribers_none?: Maybe<_UserFilter>;
  subscribers_single?: Maybe<_UserFilter>;
  subscribers_every?: Maybe<_UserFilter>;
  moderators?: Maybe<_UserFilter>;
  moderators_not?: Maybe<_UserFilter>;
  moderators_in?: Maybe<Array<_UserFilter>>;
  moderators_not_in?: Maybe<Array<_UserFilter>>;
  moderators_some?: Maybe<_UserFilter>;
  moderators_none?: Maybe<_UserFilter>;
  moderators_single?: Maybe<_UserFilter>;
  moderators_every?: Maybe<_UserFilter>;
};

export type Tag = CanBeSubscribed & {
  __typename?: 'Tag';
  nodeId: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<_Neo4jDateTime>;
  isSubscribed?: Maybe<Scalars['Boolean']>;
  questionsCount?: Maybe<Scalars['Int']>;
  questionsSolvedCount?: Maybe<Scalars['Int']>;
  subscribersCount?: Maybe<Scalars['Int']>;
  topUsers?: Maybe<Array<Maybe<User>>>;
  topQuestions?: Maybe<Array<Maybe<Question>>>;
  questions?: Maybe<Array<Maybe<Question>>>;
  addedBy?: Maybe<User>;
  subscribers?: Maybe<Array<Maybe<User>>>;
  moderators?: Maybe<Array<Maybe<User>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
};


export type TagTopUsersArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_UserOrdering>>>;
};


export type TagTopQuestionsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_QuestionOrdering>>>;
};


export type TagQuestionsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_QuestionOrdering>>>;
  filter?: Maybe<_QuestionFilter>;
};


export type TagAddedByArgs = {
  filter?: Maybe<_UserFilter>;
};


export type TagSubscribersArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_UserOrdering>>>;
  filter?: Maybe<_UserFilter>;
};


export type TagModeratorsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_UserOrdering>>>;
  filter?: Maybe<_UserFilter>;
};

export enum _UserOrdering {
  NodeIdAsc = 'nodeId_asc',
  NodeIdDesc = 'nodeId_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  SurnameAsc = 'surname_asc',
  SurnameDesc = 'surname_desc',
  CreatedAtAsc = 'createdAt_asc',
  CreatedAtDesc = 'createdAt_desc',
  TokenAsc = 'token_asc',
  TokenDesc = 'token_desc',
  LocationAsc = 'location_asc',
  LocationDesc = 'location_desc',
  QuestionsCountAsc = 'questionsCount_asc',
  QuestionsCountDesc = 'questionsCount_desc',
  AnswersCountAsc = 'answersCount_asc',
  AnswersCountDesc = 'answersCount_desc',
  SolvedQuestionsCountAsc = 'solvedQuestionsCount_asc',
  SolvedQuestionsCountDesc = 'solvedQuestionsCount_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type _UserFilter = {
  AND?: Maybe<Array<_UserFilter>>;
  OR?: Maybe<Array<_UserFilter>>;
  nodeId?: Maybe<Scalars['ID']>;
  nodeId_not?: Maybe<Scalars['ID']>;
  nodeId_in?: Maybe<Array<Scalars['ID']>>;
  nodeId_not_in?: Maybe<Array<Scalars['ID']>>;
  nodeId_regexp?: Maybe<Scalars['ID']>;
  nodeId_contains?: Maybe<Scalars['ID']>;
  nodeId_not_contains?: Maybe<Scalars['ID']>;
  nodeId_starts_with?: Maybe<Scalars['ID']>;
  nodeId_not_starts_with?: Maybe<Scalars['ID']>;
  nodeId_ends_with?: Maybe<Scalars['ID']>;
  nodeId_not_ends_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_regexp?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  surname_not?: Maybe<Scalars['String']>;
  surname_in?: Maybe<Array<Scalars['String']>>;
  surname_not_in?: Maybe<Array<Scalars['String']>>;
  surname_regexp?: Maybe<Scalars['String']>;
  surname_contains?: Maybe<Scalars['String']>;
  surname_not_contains?: Maybe<Scalars['String']>;
  surname_starts_with?: Maybe<Scalars['String']>;
  surname_not_starts_with?: Maybe<Scalars['String']>;
  surname_ends_with?: Maybe<Scalars['String']>;
  surname_not_ends_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<_Neo4jDateTimeInput>;
  createdAt_not?: Maybe<_Neo4jDateTimeInput>;
  createdAt_in?: Maybe<Array<_Neo4jDateTimeInput>>;
  createdAt_not_in?: Maybe<Array<_Neo4jDateTimeInput>>;
  createdAt_lt?: Maybe<_Neo4jDateTimeInput>;
  createdAt_lte?: Maybe<_Neo4jDateTimeInput>;
  createdAt_gt?: Maybe<_Neo4jDateTimeInput>;
  createdAt_gte?: Maybe<_Neo4jDateTimeInput>;
  token?: Maybe<Scalars['String']>;
  token_not?: Maybe<Scalars['String']>;
  token_in?: Maybe<Array<Scalars['String']>>;
  token_not_in?: Maybe<Array<Scalars['String']>>;
  token_regexp?: Maybe<Scalars['String']>;
  token_contains?: Maybe<Scalars['String']>;
  token_not_contains?: Maybe<Scalars['String']>;
  token_starts_with?: Maybe<Scalars['String']>;
  token_not_starts_with?: Maybe<Scalars['String']>;
  token_ends_with?: Maybe<Scalars['String']>;
  token_not_ends_with?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Scalars['String']>>;
  roles_not?: Maybe<Array<Scalars['String']>>;
  roles_regexp?: Maybe<Scalars['String']>;
  roles_contains?: Maybe<Array<Scalars['String']>>;
  roles_not_contains?: Maybe<Array<Scalars['String']>>;
  roles_starts_with?: Maybe<Array<Scalars['String']>>;
  roles_not_starts_with?: Maybe<Array<Scalars['String']>>;
  roles_ends_with?: Maybe<Array<Scalars['String']>>;
  roles_not_ends_with?: Maybe<Array<Scalars['String']>>;
  location?: Maybe<Scalars['String']>;
  location_not?: Maybe<Scalars['String']>;
  location_in?: Maybe<Array<Scalars['String']>>;
  location_not_in?: Maybe<Array<Scalars['String']>>;
  location_regexp?: Maybe<Scalars['String']>;
  location_contains?: Maybe<Scalars['String']>;
  location_not_contains?: Maybe<Scalars['String']>;
  location_starts_with?: Maybe<Scalars['String']>;
  location_not_starts_with?: Maybe<Scalars['String']>;
  location_ends_with?: Maybe<Scalars['String']>;
  location_not_ends_with?: Maybe<Scalars['String']>;
  questions?: Maybe<_QuestionFilter>;
  questions_not?: Maybe<_QuestionFilter>;
  questions_in?: Maybe<Array<_QuestionFilter>>;
  questions_not_in?: Maybe<Array<_QuestionFilter>>;
  questions_some?: Maybe<_QuestionFilter>;
  questions_none?: Maybe<_QuestionFilter>;
  questions_single?: Maybe<_QuestionFilter>;
  questions_every?: Maybe<_QuestionFilter>;
  answers?: Maybe<_AnswerFilter>;
  answers_not?: Maybe<_AnswerFilter>;
  answers_in?: Maybe<Array<_AnswerFilter>>;
  answers_not_in?: Maybe<Array<_AnswerFilter>>;
  answers_some?: Maybe<_AnswerFilter>;
  answers_none?: Maybe<_AnswerFilter>;
  answers_single?: Maybe<_AnswerFilter>;
  answers_every?: Maybe<_AnswerFilter>;
  tags?: Maybe<_TagFilter>;
  tags_not?: Maybe<_TagFilter>;
  tags_in?: Maybe<Array<_TagFilter>>;
  tags_not_in?: Maybe<Array<_TagFilter>>;
  tags_some?: Maybe<_TagFilter>;
  tags_none?: Maybe<_TagFilter>;
  tags_single?: Maybe<_TagFilter>;
  tags_every?: Maybe<_TagFilter>;
  comments?: Maybe<_CommentFilter>;
  comments_not?: Maybe<_CommentFilter>;
  comments_in?: Maybe<Array<_CommentFilter>>;
  comments_not_in?: Maybe<Array<_CommentFilter>>;
  comments_some?: Maybe<_CommentFilter>;
  comments_none?: Maybe<_CommentFilter>;
  comments_single?: Maybe<_CommentFilter>;
  comments_every?: Maybe<_CommentFilter>;
  moderatingTags?: Maybe<_TagFilter>;
  moderatingTags_not?: Maybe<_TagFilter>;
  moderatingTags_in?: Maybe<Array<_TagFilter>>;
  moderatingTags_not_in?: Maybe<Array<_TagFilter>>;
  moderatingTags_some?: Maybe<_TagFilter>;
  moderatingTags_none?: Maybe<_TagFilter>;
  moderatingTags_single?: Maybe<_TagFilter>;
  moderatingTags_every?: Maybe<_TagFilter>;
};

export type User = {
  __typename?: 'User';
  nodeId: Scalars['ID'];
  name: Scalars['String'];
  surname: Scalars['String'];
  rank?: Maybe<Rank>;
  createdAt?: Maybe<_Neo4jDateTime>;
  token?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  location?: Maybe<Scalars['String']>;
  questionsCount?: Maybe<Scalars['Int']>;
  answersCount?: Maybe<Scalars['Int']>;
  solvedQuestionsCount?: Maybe<Scalars['Int']>;
  favoriteTags?: Maybe<Array<Maybe<Tag>>>;
  email?: Maybe<LocalAccount>;
  questions?: Maybe<Array<Maybe<Question>>>;
  answers?: Maybe<Array<Maybe<Answer>>>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  liked?: Maybe<Array<Maybe<CanBeLiked>>>;
  subscriptions?: Maybe<Array<Maybe<CanBeSubscribed>>>;
  moderatingTags?: Maybe<Array<Maybe<Tag>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
};


export type UserFavoriteTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_TagOrdering>>>;
};


export type UserQuestionsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_QuestionOrdering>>>;
  filter?: Maybe<_QuestionFilter>;
};


export type UserAnswersArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_AnswerOrdering>>>;
  filter?: Maybe<_AnswerFilter>;
};


export type UserTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_TagOrdering>>>;
  filter?: Maybe<_TagFilter>;
};


export type UserCommentsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_CommentOrdering>>>;
  filter?: Maybe<_CommentFilter>;
};


export type UserModeratingTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_TagOrdering>>>;
  filter?: Maybe<_TagFilter>;
};

export type LocalAccount = {
  __typename?: 'LocalAccount';
  user: User;
  email: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['Int']>;
};


export type LocalAccountUserArgs = {
  filter?: Maybe<_UserFilter>;
};

export enum VoteIntention {
  UpVote = 'upVote',
  DownVote = 'downVote'
}

export enum Role {
  User = 'user',
  Admin = 'admin',
  Reader = 'reader'
}

export enum ResponseStatus {
  Success = 'success',
  Fail = 'fail'
}

export type RegisterUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  name: Scalars['String'];
  surname: Scalars['String'];
  rank: Scalars['String'];
};

export type LoginUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type EmailInput = {
  email: Scalars['String'];
};

export type NodeIdInput = {
  nodeId: Scalars['ID'];
};

export type DeleteTagInput = {
  name: Scalars['String'];
};

export type CodeInput = {
  code: Scalars['Int'];
};

export type NewPassInput = {
  code: Scalars['Int'];
  new_password: Scalars['String'];
};

export type AskQuestionInput = {
  title: Scalars['String'];
  text: Scalars['String'];
  tags: Array<Scalars['String']>;
};

export type EditQuestionInput = {
  nodeId: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
};

export type AnswerQuestionInput = {
  nodeId: Scalars['ID'];
  text: Scalars['String'];
};

export type AddCommentInput = {
  nodeId: Scalars['ID'];
  text: Scalars['String'];
};

export type EditAnswerInput = {
  nodeId: Scalars['ID'];
  text: Scalars['String'];
};

export type EditCommentInput = {
  nodeId: Scalars['ID'];
  text: Scalars['String'];
};

export type AddTagInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type AddRankInput = {
  rank: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type VoteInput = {
  nodeId: Scalars['ID'];
  action: VoteIntention;
};

export type CanBeCommented = {
  nodeId: Scalars['ID'];
  commentsCount?: Maybe<Scalars['Int']>;
  comments?: Maybe<Array<Maybe<Comment>>>;
};


export type CanBeCommentedCommentsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_CommentOrdering>>>;
  filter?: Maybe<_CommentFilter>;
};

export type CanBeLiked = {
  nodeId: Scalars['ID'];
  likesCount?: Maybe<Scalars['Int']>;
  likes?: Maybe<Array<Maybe<User>>>;
};


export type CanBeLikedLikesArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_UserOrdering>>>;
  filter?: Maybe<_UserFilter>;
};

export type CanBeSubscribed = {
  nodeId: Scalars['ID'];
  subscribersCount?: Maybe<Scalars['Int']>;
  subscribers?: Maybe<Array<Maybe<User>>>;
};


export type CanBeSubscribedSubscribersArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_UserOrdering>>>;
  filter?: Maybe<_UserFilter>;
};

export type CanBeVoted = {
  nodeId: Scalars['ID'];
  upVotesCount?: Maybe<Scalars['Int']>;
  downVotesCount?: Maybe<Scalars['Int']>;
};

export type LikeResponse = Question | Comment;

export type VoteResponse = Question | Answer;

export type SubscribeResponse = Question | Tag;

export type LoginResponse = {
  __typename?: 'LoginResponse';
  nodeId: Scalars['ID'];
  email: Scalars['String'];
  password: Scalars['String'];
  name: Scalars['String'];
  surname: Scalars['String'];
  token?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Maybe<Role>>>;
};

export enum _RedirectUriResponseOrdering {
  RedirectAsc = 'redirect_asc',
  RedirectDesc = 'redirect_desc',
  StatusAsc = 'status_asc',
  StatusDesc = 'status_desc',
  MessageAsc = 'message_asc',
  MessageDesc = 'message_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type _RedirectUriResponseFilter = {
  AND?: Maybe<Array<_RedirectUriResponseFilter>>;
  OR?: Maybe<Array<_RedirectUriResponseFilter>>;
  redirect?: Maybe<Scalars['String']>;
  redirect_not?: Maybe<Scalars['String']>;
  redirect_in?: Maybe<Array<Scalars['String']>>;
  redirect_not_in?: Maybe<Array<Scalars['String']>>;
  redirect_regexp?: Maybe<Scalars['String']>;
  redirect_contains?: Maybe<Scalars['String']>;
  redirect_not_contains?: Maybe<Scalars['String']>;
  redirect_starts_with?: Maybe<Scalars['String']>;
  redirect_not_starts_with?: Maybe<Scalars['String']>;
  redirect_ends_with?: Maybe<Scalars['String']>;
  redirect_not_ends_with?: Maybe<Scalars['String']>;
  status?: Maybe<ResponseStatus>;
  status_not?: Maybe<ResponseStatus>;
  status_in?: Maybe<Array<ResponseStatus>>;
  status_not_in?: Maybe<Array<ResponseStatus>>;
  message?: Maybe<Scalars['String']>;
  message_not?: Maybe<Scalars['String']>;
  message_in?: Maybe<Array<Scalars['String']>>;
  message_not_in?: Maybe<Array<Scalars['String']>>;
  message_regexp?: Maybe<Scalars['String']>;
  message_contains?: Maybe<Scalars['String']>;
  message_not_contains?: Maybe<Scalars['String']>;
  message_starts_with?: Maybe<Scalars['String']>;
  message_not_starts_with?: Maybe<Scalars['String']>;
  message_ends_with?: Maybe<Scalars['String']>;
  message_not_ends_with?: Maybe<Scalars['String']>;
};

export type RedirectUriResponse = {
  __typename?: 'RedirectUriResponse';
  redirect: Scalars['String'];
  status: ResponseStatus;
  message?: Maybe<Scalars['String']>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
};

export type DeleteQuestionResponse = {
  __typename?: 'DeleteQuestionResponse';
  nodeId: Scalars['ID'];
  title: Scalars['String'];
  text: Scalars['String'];
};

export type DeleteAnswerResponse = {
  __typename?: 'DeleteAnswerResponse';
  nodeId: Scalars['ID'];
  text: Scalars['String'];
};

export type DeleteCommentResponse = {
  __typename?: 'DeleteCommentResponse';
  nodeId: Scalars['ID'];
  text: Scalars['String'];
};

export type DeleteTagResponse = {
  __typename?: 'DeleteTagResponse';
  name: Scalars['String'];
};

/** Generated Time input object for Neo4j [Temporal field arguments](https://grandstack.io/docs/graphql-temporal-types-datetime/#temporal-query-arguments). */
export type _Neo4jTimeInput = {
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  timezone?: Maybe<Scalars['String']>;
  /** Creates a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime/#using-temporal-fields-in-mutations) Time value using a [String format](https://neo4j.com/docs/cypher-manual/current/functions/temporal/time/#functions-time-create-string). */
  formatted?: Maybe<Scalars['String']>;
};

/** Generated Time object type for Neo4j [Temporal fields](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries). */
export type _Neo4jTime = {
  __typename?: '_Neo4jTime';
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  timezone?: Maybe<Scalars['String']>;
  /** Outputs a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries) Time value as a String type by using the [toString](https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-tostring) Cypher function. */
  formatted?: Maybe<Scalars['String']>;
};

/** Generated Date input object for Neo4j [Temporal field arguments](https://grandstack.io/docs/graphql-temporal-types-datetime/#temporal-query-arguments). */
export type _Neo4jDateInput = {
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
  /** Creates a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime/#using-temporal-fields-in-mutations) Date value using a [String format](https://neo4j.com/docs/cypher-manual/current/functions/temporal/date/#functions-date-create-string). */
  formatted?: Maybe<Scalars['String']>;
};

/** Generated Date object type for Neo4j [Temporal fields](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries). */
export type _Neo4jDate = {
  __typename?: '_Neo4jDate';
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
  /** Outputs a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries) Date value as a String type by using the [toString](https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-tostring) Cypher function. */
  formatted?: Maybe<Scalars['String']>;
};

/** Generated DateTime input object for Neo4j [Temporal field arguments](https://grandstack.io/docs/graphql-temporal-types-datetime/#temporal-query-arguments). */
export type _Neo4jDateTimeInput = {
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  timezone?: Maybe<Scalars['String']>;
  /** Creates a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime/#using-temporal-fields-in-mutations) DateTime value using a [String format](https://neo4j.com/docs/cypher-manual/current/functions/temporal/datetime/#functions-datetime-create-string). */
  formatted?: Maybe<Scalars['String']>;
};

/** Generated DateTime object type for Neo4j [Temporal fields](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries). */
export type _Neo4jDateTime = {
  __typename?: '_Neo4jDateTime';
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  timezone?: Maybe<Scalars['String']>;
  /** Outputs a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries) DateTime value as a String type by using the [toString](https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-tostring) Cypher function. */
  formatted?: Maybe<Scalars['String']>;
};

/** Generated LocalTime input object for Neo4j [Temporal field arguments](https://grandstack.io/docs/graphql-temporal-types-datetime/#temporal-query-arguments). */
export type _Neo4jLocalTimeInput = {
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  /** Creates a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime/#using-temporal-fields-in-mutations) LocalTime value using a [String format](https://neo4j.com/docs/cypher-manual/current/functions/temporal/localtime/#functions-localtime-create-string). */
  formatted?: Maybe<Scalars['String']>;
};

/** Generated LocalTime object type for Neo4j [Temporal fields](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries). */
export type _Neo4jLocalTime = {
  __typename?: '_Neo4jLocalTime';
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  /** Outputs a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries) LocalTime value as a String type by using the [toString](https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-tostring) Cypher function. */
  formatted?: Maybe<Scalars['String']>;
};

/** Generated LocalDateTime input object for Neo4j [Temporal field arguments](https://grandstack.io/docs/graphql-temporal-types-datetime/#temporal-query-arguments). */
export type _Neo4jLocalDateTimeInput = {
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  /** Creates a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime/#using-temporal-fields-in-mutations) LocalDateTime value using a [String format](https://neo4j.com/docs/cypher-manual/current/functions/temporal/localdatetime/#functions-localdatetime-create-string). */
  formatted?: Maybe<Scalars['String']>;
};

/** Generated LocalDateTime object type for Neo4j [Temporal fields](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries). */
export type _Neo4jLocalDateTime = {
  __typename?: '_Neo4jLocalDateTime';
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  millisecond?: Maybe<Scalars['Int']>;
  microsecond?: Maybe<Scalars['Int']>;
  nanosecond?: Maybe<Scalars['Int']>;
  /** Outputs a Neo4j [Temporal](https://grandstack.io/docs/graphql-temporal-types-datetime#using-temporal-fields-in-queries) LocalDateTime value as a String type by using the [toString](https://neo4j.com/docs/cypher-manual/current/functions/string/#functions-tostring) Cypher function. */
  formatted?: Maybe<Scalars['String']>;
};

export type _Neo4jPointDistanceFilter = {
  point: _Neo4jPointInput;
  distance: Scalars['Float'];
};

/** Generated Point input object for Neo4j [Spatial field arguments](https://grandstack.io/docs/graphql-spatial-types/#point-query-arguments). */
export type _Neo4jPointInput = {
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
  z?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  crs?: Maybe<Scalars['String']>;
  srid?: Maybe<Scalars['Int']>;
};

/** Generated Point object type for Neo4j [Spatial fields](https://grandstack.io/docs/graphql-spatial-types#using-point-in-queries). */
export type _Neo4jPoint = {
  __typename?: '_Neo4jPoint';
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
  z?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  crs?: Maybe<Scalars['String']>;
  srid?: Maybe<Scalars['Int']>;
};

export enum _RelationDirections {
  In = 'IN',
  Out = 'OUT'
}

export type Mutation = {
  __typename?: 'Mutation';
  AnswerQuestion: Answer;
  EditAnswer: Answer;
  DeleteAnswer: DeleteAnswerResponse;
  ToggleAcceptAnswer?: Maybe<Answer>;
  AddComment: Comment;
  EditComment: Comment;
  DeleteComment: DeleteCommentResponse;
  AskQuestion: Question;
  EditQuestion: Question;
  DeleteQuestion: DeleteQuestionResponse;
  AddRank: Rank;
  ToggleLike: LikeResponse;
  ToggleSubscribe: SubscribeResponse;
  Vote: VoteResponse;
  AddTag: Tag;
  DeleteTag: DeleteTagResponse;
  Register: LoginResponse;
  SignIn: LoginResponse;
  ChangePassRequest: RedirectUriResponse;
  ChangePassConfirm: RedirectUriResponse;
  ChangePassComplete: RedirectUriResponse;
};


export type MutationAnswerQuestionArgs = {
  data: AnswerQuestionInput;
};


export type MutationEditAnswerArgs = {
  data: EditAnswerInput;
};


export type MutationDeleteAnswerArgs = {
  data: NodeIdInput;
};


export type MutationToggleAcceptAnswerArgs = {
  data: NodeIdInput;
};


export type MutationAddCommentArgs = {
  data: AddCommentInput;
};


export type MutationEditCommentArgs = {
  data: EditCommentInput;
};


export type MutationDeleteCommentArgs = {
  data: NodeIdInput;
};


export type MutationAskQuestionArgs = {
  data: AskQuestionInput;
};


export type MutationEditQuestionArgs = {
  data: EditQuestionInput;
};


export type MutationDeleteQuestionArgs = {
  data: NodeIdInput;
};


export type MutationAddRankArgs = {
  data: AddRankInput;
};


export type MutationToggleLikeArgs = {
  data: NodeIdInput;
};


export type MutationToggleSubscribeArgs = {
  data: NodeIdInput;
};


export type MutationVoteArgs = {
  data: VoteInput;
};


export type MutationAddTagArgs = {
  data: AddTagInput;
};


export type MutationDeleteTagArgs = {
  data: DeleteTagInput;
};


export type MutationRegisterArgs = {
  data: RegisterUserInput;
};


export type MutationSignInArgs = {
  data: LoginUserInput;
};


export type MutationChangePassRequestArgs = {
  data: EmailInput;
};


export type MutationChangePassConfirmArgs = {
  data: CodeInput;
};


export type MutationChangePassCompleteArgs = {
  data: NewPassInput;
};

export type Query = {
  __typename?: 'Query';
  currentUser?: Maybe<User>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Answer type nodes. */
  Answer?: Maybe<Array<Maybe<Answer>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Comment type nodes. */
  Comment?: Maybe<Array<Maybe<Comment>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Question type nodes. */
  Question?: Maybe<Array<Maybe<Question>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Rank type nodes. */
  Rank?: Maybe<Array<Maybe<Rank>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Tag type nodes. */
  Tag?: Maybe<Array<Maybe<Tag>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for User type nodes. */
  User?: Maybe<Array<Maybe<User>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for RedirectUriResponse type nodes. */
  RedirectUriResponse?: Maybe<Array<Maybe<RedirectUriResponse>>>;
};


export type QueryAnswerArgs = {
  nodeId?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
  createdAt?: Maybe<_Neo4jDateTimeInput>;
  updatedAt?: Maybe<_Neo4jDateTimeInput>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_AnswerOrdering>>>;
  filter?: Maybe<_AnswerFilter>;
};


export type QueryCommentArgs = {
  nodeId?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
  createdAt?: Maybe<_Neo4jDateTimeInput>;
  updatedAt?: Maybe<_Neo4jDateTimeInput>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_CommentOrdering>>>;
  filter?: Maybe<_CommentFilter>;
};


export type QueryQuestionArgs = {
  nodeId?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  createdAt?: Maybe<_Neo4jDateTimeInput>;
  updatedAt?: Maybe<_Neo4jDateTimeInput>;
  viewsCount?: Maybe<Scalars['Int']>;
  canVote?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_QuestionOrdering>>>;
  filter?: Maybe<_QuestionFilter>;
};


export type QueryRankArgs = {
  rank?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_RankOrdering>>>;
  filter?: Maybe<_RankFilter>;
};


export type QueryTagArgs = {
  nodeId?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<_Neo4jDateTimeInput>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_TagOrdering>>>;
  filter?: Maybe<_TagFilter>;
};


export type QueryUserArgs = {
  nodeId?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  createdAt?: Maybe<_Neo4jDateTimeInput>;
  token?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  location?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_UserOrdering>>>;
  filter?: Maybe<_UserFilter>;
};


export type QueryRedirectUriResponseArgs = {
  redirect?: Maybe<Scalars['String']>;
  status?: Maybe<ResponseStatus>;
  message?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_RedirectUriResponseOrdering>>>;
  filter?: Maybe<_RedirectUriResponseFilter>;
};

export type RegisterMutationVariables = Exact<{
  data: RegisterUserInput;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { Register: (
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'nodeId' | 'name' | 'surname' | 'token' | 'roles'>
  ) }
);

export type QuestionQueryVariables = Exact<{ [key: string]: never; }>;


export type QuestionQuery = (
  { __typename?: 'Query' }
  & { Question?: Maybe<Array<Maybe<(
    { __typename?: 'Question' }
    & Pick<Question, 'nodeId' | 'title'>
  )>>> }
);


export const RegisterDocument = gql`
    mutation Register($data: RegisterUserInput!) {
  Register(data: $data) {
    nodeId
    name
    surname
    token
    roles
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

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
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const QuestionDocument = gql`
    query Question {
  Question {
    nodeId
    title
  }
}
    `;

/**
 * __useQuestionQuery__
 *
 * To run a query within a React component, call `useQuestionQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuestionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuestionQuery({
 *   variables: {
 *   },
 * });
 */
export function useQuestionQuery(baseOptions?: Apollo.QueryHookOptions<QuestionQuery, QuestionQueryVariables>) {
        return Apollo.useQuery<QuestionQuery, QuestionQueryVariables>(QuestionDocument, baseOptions);
      }
export function useQuestionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QuestionQuery, QuestionQueryVariables>) {
          return Apollo.useLazyQuery<QuestionQuery, QuestionQueryVariables>(QuestionDocument, baseOptions);
        }
export type QuestionQueryHookResult = ReturnType<typeof useQuestionQuery>;
export type QuestionLazyQueryHookResult = ReturnType<typeof useQuestionLazyQuery>;
export type QuestionQueryResult = Apollo.QueryResult<QuestionQuery, QuestionQueryVariables>;