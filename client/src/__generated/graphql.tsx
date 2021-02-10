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
  RankAsc = 'rank_asc',
  RankDesc = 'rank_desc',
  CreatedAtAsc = 'createdAt_asc',
  CreatedAtDesc = 'createdAt_desc',
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
  rank?: Maybe<UserRank>;
  rank_not?: Maybe<UserRank>;
  rank_in?: Maybe<Array<UserRank>>;
  rank_not_in?: Maybe<Array<UserRank>>;
  createdAt?: Maybe<_Neo4jDateTimeInput>;
  createdAt_not?: Maybe<_Neo4jDateTimeInput>;
  createdAt_in?: Maybe<Array<_Neo4jDateTimeInput>>;
  createdAt_not_in?: Maybe<Array<_Neo4jDateTimeInput>>;
  createdAt_lt?: Maybe<_Neo4jDateTimeInput>;
  createdAt_lte?: Maybe<_Neo4jDateTimeInput>;
  createdAt_gt?: Maybe<_Neo4jDateTimeInput>;
  createdAt_gte?: Maybe<_Neo4jDateTimeInput>;
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
  rank?: Maybe<UserRank>;
  createdAt?: Maybe<_Neo4jDateTime>;
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
  PipeOperator = 'PIPE_OPERATOR'
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
  rank?: Maybe<UserRank>;
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

export type AuthResponse = TokenResponse | FormError;

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type FormError = {
  __typename?: 'FormError';
  message?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Maybe<FieldError>>>;
};

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

export type TokenResponse = {
  __typename?: 'TokenResponse';
  token?: Maybe<Scalars['String']>;
};

export type RedirectUriResponse = {
  __typename?: 'RedirectUriResponse';
  redirect: Scalars['String'];
  status: ResponseStatus;
  message?: Maybe<Scalars['String']>;
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
  ToggleLike: LikeResponse;
  ToggleSubscribe: SubscribeResponse;
  Vote: VoteResponse;
  AddTag: Tag;
  DeleteTag: DeleteTagResponse;
  Register: AuthResponse;
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
  CurrentUser?: Maybe<User>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Answer type nodes. */
  Answer?: Maybe<Array<Maybe<Answer>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Comment type nodes. */
  Comment?: Maybe<Array<Maybe<Comment>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Question type nodes. */
  Question?: Maybe<Array<Maybe<Question>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Tag type nodes. */
  Tag?: Maybe<Array<Maybe<Tag>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for User type nodes. */
  User?: Maybe<Array<Maybe<User>>>;
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
  rank?: Maybe<UserRank>;
  createdAt?: Maybe<_Neo4jDateTimeInput>;
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  location?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_UserOrdering>>>;
  filter?: Maybe<_UserFilter>;
};

export type RegisterMutationVariables = Exact<{
  data: RegisterUserInput;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { Register: (
    { __typename: 'TokenResponse' }
    & Pick<TokenResponse, 'token'>
  ) | (
    { __typename: 'FormError' }
    & Pick<FormError, 'message'>
    & { errors?: Maybe<Array<Maybe<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>> }
  ) }
);

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = (
  { __typename?: 'Query' }
  & { CurrentUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'nodeId' | 'name' | 'surname' | 'rank'>
  )> }
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
export const CurrentUserDocument = gql`
    query CurrentUser {
  CurrentUser {
    nodeId
    name
    surname
    rank
  }
}
    `;

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
export function useCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, baseOptions);
      }
export function useCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, baseOptions);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = Apollo.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
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