import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};












export type RegisterUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  name: Scalars['String'];
  surname: Scalars['String'];
  rank: Rank;
};

export type LoginUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type AskQuestionInput = {
  title: Scalars['String'];
  text: Scalars['String'];
  tags: Array<Scalars['String']>;
};

export enum _SignedTokenOrdering {
  TokenAsc = 'token_asc',
  TokenDesc = 'token_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type _SignedTokenFilter = {
  AND?: Maybe<Array<_SignedTokenFilter>>;
  OR?: Maybe<Array<_SignedTokenFilter>>;
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
};

export type SignedToken = {
  __typename?: 'SignedToken';
  token: Scalars['String'];
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
};

export enum _LoginInfoOrdering {
  UserIdAsc = 'userId_asc',
  UserIdDesc = 'userId_desc',
  EmailAsc = 'email_asc',
  EmailDesc = 'email_desc',
  PasswordAsc = 'password_asc',
  PasswordDesc = 'password_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  SurnameAsc = 'surname_asc',
  SurnameDesc = 'surname_desc',
  TokenAsc = 'token_asc',
  TokenDesc = 'token_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type _LoginInfoFilter = {
  AND?: Maybe<Array<_LoginInfoFilter>>;
  OR?: Maybe<Array<_LoginInfoFilter>>;
  userId?: Maybe<Scalars['ID']>;
  userId_not?: Maybe<Scalars['ID']>;
  userId_in?: Maybe<Array<Scalars['ID']>>;
  userId_not_in?: Maybe<Array<Scalars['ID']>>;
  userId_regexp?: Maybe<Scalars['ID']>;
  userId_contains?: Maybe<Scalars['ID']>;
  userId_not_contains?: Maybe<Scalars['ID']>;
  userId_starts_with?: Maybe<Scalars['ID']>;
  userId_not_starts_with?: Maybe<Scalars['ID']>;
  userId_ends_with?: Maybe<Scalars['ID']>;
  userId_not_ends_with?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  email_not?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Scalars['String']>>;
  email_not_in?: Maybe<Array<Scalars['String']>>;
  email_regexp?: Maybe<Scalars['String']>;
  email_contains?: Maybe<Scalars['String']>;
  email_not_contains?: Maybe<Scalars['String']>;
  email_starts_with?: Maybe<Scalars['String']>;
  email_not_starts_with?: Maybe<Scalars['String']>;
  email_ends_with?: Maybe<Scalars['String']>;
  email_not_ends_with?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  password_not?: Maybe<Scalars['String']>;
  password_in?: Maybe<Array<Scalars['String']>>;
  password_not_in?: Maybe<Array<Scalars['String']>>;
  password_regexp?: Maybe<Scalars['String']>;
  password_contains?: Maybe<Scalars['String']>;
  password_not_contains?: Maybe<Scalars['String']>;
  password_starts_with?: Maybe<Scalars['String']>;
  password_not_starts_with?: Maybe<Scalars['String']>;
  password_ends_with?: Maybe<Scalars['String']>;
  password_not_ends_with?: Maybe<Scalars['String']>;
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
  roles?: Maybe<Array<Role>>;
  roles_not?: Maybe<Array<Role>>;
};

export type LoginInfo = {
  __typename?: 'LoginInfo';
  userId: Scalars['ID'];
  email: Scalars['String'];
  password: Scalars['String'];
  name: Scalars['String'];
  surname: Scalars['String'];
  token?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Maybe<Role>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
};

export enum _UserOrdering {
  UserIdAsc = 'userId_asc',
  UserIdDesc = 'userId_desc',
  EmailAsc = 'email_asc',
  EmailDesc = 'email_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  SurnameAsc = 'surname_asc',
  SurnameDesc = 'surname_desc',
  RankAsc = 'rank_asc',
  RankDesc = 'rank_desc',
  CreatedAtAsc = 'createdAt_asc',
  CreatedAtDesc = 'createdAt_desc',
  TokenAsc = 'token_asc',
  TokenDesc = 'token_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type _UserFilter = {
  AND?: Maybe<Array<_UserFilter>>;
  OR?: Maybe<Array<_UserFilter>>;
  userId?: Maybe<Scalars['ID']>;
  userId_not?: Maybe<Scalars['ID']>;
  userId_in?: Maybe<Array<Scalars['ID']>>;
  userId_not_in?: Maybe<Array<Scalars['ID']>>;
  userId_regexp?: Maybe<Scalars['ID']>;
  userId_contains?: Maybe<Scalars['ID']>;
  userId_not_contains?: Maybe<Scalars['ID']>;
  userId_starts_with?: Maybe<Scalars['ID']>;
  userId_not_starts_with?: Maybe<Scalars['ID']>;
  userId_ends_with?: Maybe<Scalars['ID']>;
  userId_not_ends_with?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  email_not?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Scalars['String']>>;
  email_not_in?: Maybe<Array<Scalars['String']>>;
  email_regexp?: Maybe<Scalars['String']>;
  email_contains?: Maybe<Scalars['String']>;
  email_not_contains?: Maybe<Scalars['String']>;
  email_starts_with?: Maybe<Scalars['String']>;
  email_not_starts_with?: Maybe<Scalars['String']>;
  email_ends_with?: Maybe<Scalars['String']>;
  email_not_ends_with?: Maybe<Scalars['String']>;
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
  rank?: Maybe<Rank>;
  rank_not?: Maybe<Rank>;
  rank_in?: Maybe<Array<Rank>>;
  rank_not_in?: Maybe<Array<Rank>>;
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
  comments?: Maybe<_CommentFilter>;
  comments_not?: Maybe<_CommentFilter>;
  comments_in?: Maybe<Array<_CommentFilter>>;
  comments_not_in?: Maybe<Array<_CommentFilter>>;
  comments_some?: Maybe<_CommentFilter>;
  comments_none?: Maybe<_CommentFilter>;
  comments_single?: Maybe<_CommentFilter>;
  comments_every?: Maybe<_CommentFilter>;
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
};

export type User = {
  __typename?: 'User';
  userId: Scalars['ID'];
  email: Scalars['String'];
  name: Scalars['String'];
  surname: Scalars['String'];
  rank: Rank;
  questions?: Maybe<Array<Maybe<Question>>>;
  answers?: Maybe<Array<Maybe<Answer>>>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  createdAt?: Maybe<_Neo4jDateTime>;
  token?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
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


export type UserCommentsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_CommentOrdering>>>;
  filter?: Maybe<_CommentFilter>;
};

export enum _QuestionOrdering {
  QuestionIdAsc = 'questionId_asc',
  QuestionIdDesc = 'questionId_desc',
  TitleAsc = 'title_asc',
  TitleDesc = 'title_desc',
  TextAsc = 'text_asc',
  TextDesc = 'text_desc',
  CreatedAtAsc = 'createdAt_asc',
  CreatedAtDesc = 'createdAt_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type _QuestionFilter = {
  AND?: Maybe<Array<_QuestionFilter>>;
  OR?: Maybe<Array<_QuestionFilter>>;
  questionId?: Maybe<Scalars['ID']>;
  questionId_not?: Maybe<Scalars['ID']>;
  questionId_in?: Maybe<Array<Scalars['ID']>>;
  questionId_not_in?: Maybe<Array<Scalars['ID']>>;
  questionId_regexp?: Maybe<Scalars['ID']>;
  questionId_contains?: Maybe<Scalars['ID']>;
  questionId_not_contains?: Maybe<Scalars['ID']>;
  questionId_starts_with?: Maybe<Scalars['ID']>;
  questionId_not_starts_with?: Maybe<Scalars['ID']>;
  questionId_ends_with?: Maybe<Scalars['ID']>;
  questionId_not_ends_with?: Maybe<Scalars['ID']>;
  owner?: Maybe<_UserFilter>;
  owner_not?: Maybe<_UserFilter>;
  owner_in?: Maybe<Array<_UserFilter>>;
  owner_not_in?: Maybe<Array<_UserFilter>>;
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
  answers?: Maybe<_AnswerFilter>;
  answers_not?: Maybe<_AnswerFilter>;
  answers_in?: Maybe<Array<_AnswerFilter>>;
  answers_not_in?: Maybe<Array<_AnswerFilter>>;
  answers_some?: Maybe<_AnswerFilter>;
  answers_none?: Maybe<_AnswerFilter>;
  answers_single?: Maybe<_AnswerFilter>;
  answers_every?: Maybe<_AnswerFilter>;
  tagged?: Maybe<_TagFilter>;
  tagged_not?: Maybe<_TagFilter>;
  tagged_in?: Maybe<Array<_TagFilter>>;
  tagged_not_in?: Maybe<Array<_TagFilter>>;
  tagged_some?: Maybe<_TagFilter>;
  tagged_none?: Maybe<_TagFilter>;
  tagged_single?: Maybe<_TagFilter>;
  tagged_every?: Maybe<_TagFilter>;
  createdAt?: Maybe<_Neo4jDateTimeInput>;
  createdAt_not?: Maybe<_Neo4jDateTimeInput>;
  createdAt_in?: Maybe<Array<_Neo4jDateTimeInput>>;
  createdAt_not_in?: Maybe<Array<_Neo4jDateTimeInput>>;
  createdAt_lt?: Maybe<_Neo4jDateTimeInput>;
  createdAt_lte?: Maybe<_Neo4jDateTimeInput>;
  createdAt_gt?: Maybe<_Neo4jDateTimeInput>;
  createdAt_gte?: Maybe<_Neo4jDateTimeInput>;
};

export type Question = {
  __typename?: 'Question';
  questionId: Scalars['ID'];
  owner: User;
  title: Scalars['String'];
  text: Scalars['String'];
  answers?: Maybe<Array<Maybe<Answer>>>;
  tagged?: Maybe<Array<Maybe<Tag>>>;
  createdAt?: Maybe<_Neo4jDateTime>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
};


export type QuestionOwnerArgs = {
  filter?: Maybe<_UserFilter>;
};


export type QuestionAnswersArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_AnswerOrdering>>>;
  filter?: Maybe<_AnswerFilter>;
};


export type QuestionTaggedArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_TagOrdering>>>;
  filter?: Maybe<_TagFilter>;
};

export enum _AnswerOrdering {
  AnswerIdAsc = 'answerId_asc',
  AnswerIdDesc = 'answerId_desc',
  TextAsc = 'text_asc',
  TextDesc = 'text_desc',
  RateAsc = 'rate_asc',
  RateDesc = 'rate_desc',
  CreatedAtAsc = 'createdAt_asc',
  CreatedAtDesc = 'createdAt_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type _AnswerFilter = {
  AND?: Maybe<Array<_AnswerFilter>>;
  OR?: Maybe<Array<_AnswerFilter>>;
  answerId?: Maybe<Scalars['ID']>;
  answerId_not?: Maybe<Scalars['ID']>;
  answerId_in?: Maybe<Array<Scalars['ID']>>;
  answerId_not_in?: Maybe<Array<Scalars['ID']>>;
  answerId_regexp?: Maybe<Scalars['ID']>;
  answerId_contains?: Maybe<Scalars['ID']>;
  answerId_not_contains?: Maybe<Scalars['ID']>;
  answerId_starts_with?: Maybe<Scalars['ID']>;
  answerId_not_starts_with?: Maybe<Scalars['ID']>;
  answerId_ends_with?: Maybe<Scalars['ID']>;
  answerId_not_ends_with?: Maybe<Scalars['ID']>;
  question?: Maybe<_QuestionFilter>;
  question_not?: Maybe<_QuestionFilter>;
  question_in?: Maybe<Array<_QuestionFilter>>;
  question_not_in?: Maybe<Array<_QuestionFilter>>;
  owner?: Maybe<_UserFilter>;
  owner_not?: Maybe<_UserFilter>;
  owner_in?: Maybe<Array<_UserFilter>>;
  owner_not_in?: Maybe<Array<_UserFilter>>;
  comments?: Maybe<_CommentFilter>;
  comments_not?: Maybe<_CommentFilter>;
  comments_in?: Maybe<Array<_CommentFilter>>;
  comments_not_in?: Maybe<Array<_CommentFilter>>;
  comments_some?: Maybe<_CommentFilter>;
  comments_none?: Maybe<_CommentFilter>;
  comments_single?: Maybe<_CommentFilter>;
  comments_every?: Maybe<_CommentFilter>;
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
  rate?: Maybe<Scalars['Int']>;
  rate_not?: Maybe<Scalars['Int']>;
  rate_in?: Maybe<Array<Scalars['Int']>>;
  rate_not_in?: Maybe<Array<Scalars['Int']>>;
  rate_lt?: Maybe<Scalars['Int']>;
  rate_lte?: Maybe<Scalars['Int']>;
  rate_gt?: Maybe<Scalars['Int']>;
  rate_gte?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<_Neo4jDateTimeInput>;
  createdAt_not?: Maybe<_Neo4jDateTimeInput>;
  createdAt_in?: Maybe<Array<_Neo4jDateTimeInput>>;
  createdAt_not_in?: Maybe<Array<_Neo4jDateTimeInput>>;
  createdAt_lt?: Maybe<_Neo4jDateTimeInput>;
  createdAt_lte?: Maybe<_Neo4jDateTimeInput>;
  createdAt_gt?: Maybe<_Neo4jDateTimeInput>;
  createdAt_gte?: Maybe<_Neo4jDateTimeInput>;
};

export type Answer = {
  __typename?: 'Answer';
  answerId: Scalars['ID'];
  question: Question;
  owner: User;
  comments?: Maybe<Array<Maybe<Comment>>>;
  text: Scalars['String'];
  rate: Scalars['Int'];
  createdAt?: Maybe<_Neo4jDateTime>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
};


export type AnswerQuestionArgs = {
  filter?: Maybe<_QuestionFilter>;
};


export type AnswerOwnerArgs = {
  filter?: Maybe<_UserFilter>;
};


export type AnswerCommentsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_CommentOrdering>>>;
  filter?: Maybe<_CommentFilter>;
};

export enum _CommentOrdering {
  CommentIdAsc = 'commentId_asc',
  CommentIdDesc = 'commentId_desc',
  TextAsc = 'text_asc',
  TextDesc = 'text_desc',
  CreatedAtAsc = 'createdAt_asc',
  CreatedAtDesc = 'createdAt_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type _CommentFilter = {
  AND?: Maybe<Array<_CommentFilter>>;
  OR?: Maybe<Array<_CommentFilter>>;
  commentId?: Maybe<Scalars['ID']>;
  commentId_not?: Maybe<Scalars['ID']>;
  commentId_in?: Maybe<Array<Scalars['ID']>>;
  commentId_not_in?: Maybe<Array<Scalars['ID']>>;
  commentId_regexp?: Maybe<Scalars['ID']>;
  commentId_contains?: Maybe<Scalars['ID']>;
  commentId_not_contains?: Maybe<Scalars['ID']>;
  commentId_starts_with?: Maybe<Scalars['ID']>;
  commentId_not_starts_with?: Maybe<Scalars['ID']>;
  commentId_ends_with?: Maybe<Scalars['ID']>;
  commentId_not_ends_with?: Maybe<Scalars['ID']>;
  owner?: Maybe<_UserFilter>;
  owner_not?: Maybe<_UserFilter>;
  owner_in?: Maybe<Array<_UserFilter>>;
  owner_not_in?: Maybe<Array<_UserFilter>>;
  answer?: Maybe<_AnswerFilter>;
  answer_not?: Maybe<_AnswerFilter>;
  answer_in?: Maybe<Array<_AnswerFilter>>;
  answer_not_in?: Maybe<Array<_AnswerFilter>>;
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
};

export type Comment = {
  __typename?: 'Comment';
  commentId: Scalars['ID'];
  owner: User;
  answer: Answer;
  text: Scalars['String'];
  createdAt?: Maybe<_Neo4jDateTime>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
};


export type CommentOwnerArgs = {
  filter?: Maybe<_UserFilter>;
};


export type CommentAnswerArgs = {
  filter?: Maybe<_AnswerFilter>;
};

export enum _TagOrdering {
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type _TagFilter = {
  AND?: Maybe<Array<_TagFilter>>;
  OR?: Maybe<Array<_TagFilter>>;
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
  questions?: Maybe<_QuestionFilter>;
  questions_not?: Maybe<_QuestionFilter>;
  questions_in?: Maybe<Array<_QuestionFilter>>;
  questions_not_in?: Maybe<Array<_QuestionFilter>>;
  questions_some?: Maybe<_QuestionFilter>;
  questions_none?: Maybe<_QuestionFilter>;
  questions_single?: Maybe<_QuestionFilter>;
  questions_every?: Maybe<_QuestionFilter>;
};

export type Tag = {
  __typename?: 'Tag';
  name: Scalars['String'];
  questions?: Maybe<Array<Maybe<Question>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
};


export type TagQuestionsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_QuestionOrdering>>>;
  filter?: Maybe<_QuestionFilter>;
};

export type Liked = {
  __typename?: 'Liked';
  from?: Maybe<User>;
  to?: Maybe<Comment>;
  createdAt?: Maybe<_Neo4jDateTime>;
};

export enum Rank {
  Master = 'Master',
  ChiefOfficer = 'Chief_Officer',
  Ab = 'AB'
}

export enum Role {
  User = 'user',
  Admin = 'admin',
  Reader = 'reader'
}

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

export type Query = {
  __typename?: 'Query';
  currentUser?: Maybe<User>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for SignedToken type nodes. */
  SignedToken?: Maybe<Array<Maybe<SignedToken>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for LoginInfo type nodes. */
  LoginInfo?: Maybe<Array<Maybe<LoginInfo>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for User type nodes. */
  User?: Maybe<Array<Maybe<User>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Question type nodes. */
  Question?: Maybe<Array<Maybe<Question>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Answer type nodes. */
  Answer?: Maybe<Array<Maybe<Answer>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Comment type nodes. */
  Comment?: Maybe<Array<Maybe<Comment>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Tag type nodes. */
  Tag?: Maybe<Array<Maybe<Tag>>>;
};


export type QuerySignedTokenArgs = {
  token?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_SignedTokenOrdering>>>;
  filter?: Maybe<_SignedTokenFilter>;
};


export type QueryLoginInfoArgs = {
  userId?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Maybe<Role>>>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_LoginInfoOrdering>>>;
  filter?: Maybe<_LoginInfoFilter>;
};


export type QueryUserArgs = {
  userId?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  rank?: Maybe<Rank>;
  createdAt?: Maybe<_Neo4jDateTimeInput>;
  token?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_UserOrdering>>>;
  filter?: Maybe<_UserFilter>;
};


export type QueryQuestionArgs = {
  questionId?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  createdAt?: Maybe<_Neo4jDateTimeInput>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_QuestionOrdering>>>;
  filter?: Maybe<_QuestionFilter>;
};


export type QueryAnswerArgs = {
  answerId?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
  rate?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<_Neo4jDateTimeInput>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_AnswerOrdering>>>;
  filter?: Maybe<_AnswerFilter>;
};


export type QueryCommentArgs = {
  commentId?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
  createdAt?: Maybe<_Neo4jDateTimeInput>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_CommentOrdering>>>;
  filter?: Maybe<_CommentFilter>;
};


export type QueryTagArgs = {
  name?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_TagOrdering>>>;
  filter?: Maybe<_TagFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  Register: LoginInfo;
  SignIn: LoginInfo;
  AskQuestion: Question;
};


export type MutationRegisterArgs = {
  data: RegisterUserInput;
};


export type MutationSignInArgs = {
  data: LoginUserInput;
};


export type MutationAskQuestionArgs = {
  data: AskQuestionInput;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  RegisterUserInput: RegisterUserInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  LoginUserInput: LoginUserInput;
  AskQuestionInput: AskQuestionInput;
  _SignedTokenOrdering: _SignedTokenOrdering;
  _SignedTokenFilter: _SignedTokenFilter;
  SignedToken: ResolverTypeWrapper<SignedToken>;
  _LoginInfoOrdering: _LoginInfoOrdering;
  _LoginInfoFilter: _LoginInfoFilter;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  LoginInfo: ResolverTypeWrapper<LoginInfo>;
  _UserOrdering: _UserOrdering;
  _UserFilter: _UserFilter;
  User: ResolverTypeWrapper<User>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  _QuestionOrdering: _QuestionOrdering;
  _QuestionFilter: _QuestionFilter;
  Question: ResolverTypeWrapper<Question>;
  _AnswerOrdering: _AnswerOrdering;
  _AnswerFilter: _AnswerFilter;
  Answer: ResolverTypeWrapper<Answer>;
  _CommentOrdering: _CommentOrdering;
  _CommentFilter: _CommentFilter;
  Comment: ResolverTypeWrapper<Comment>;
  _TagOrdering: _TagOrdering;
  _TagFilter: _TagFilter;
  Tag: ResolverTypeWrapper<Tag>;
  Liked: ResolverTypeWrapper<Liked>;
  Rank: Rank;
  Role: Role;
  _Neo4jTimeInput: _Neo4jTimeInput;
  _Neo4jTime: ResolverTypeWrapper<_Neo4jTime>;
  _Neo4jDateInput: _Neo4jDateInput;
  _Neo4jDate: ResolverTypeWrapper<_Neo4jDate>;
  _Neo4jDateTimeInput: _Neo4jDateTimeInput;
  _Neo4jDateTime: ResolverTypeWrapper<_Neo4jDateTime>;
  _Neo4jLocalTimeInput: _Neo4jLocalTimeInput;
  _Neo4jLocalTime: ResolverTypeWrapper<_Neo4jLocalTime>;
  _Neo4jLocalDateTimeInput: _Neo4jLocalDateTimeInput;
  _Neo4jLocalDateTime: ResolverTypeWrapper<_Neo4jLocalDateTime>;
  _Neo4jPointDistanceFilter: _Neo4jPointDistanceFilter;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  _Neo4jPointInput: _Neo4jPointInput;
  _Neo4jPoint: ResolverTypeWrapper<_Neo4jPoint>;
  _RelationDirections: _RelationDirections;
  Query: ResolverTypeWrapper<{}>;
  Mutation: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  RegisterUserInput: RegisterUserInput;
  String: Scalars['String'];
  LoginUserInput: LoginUserInput;
  AskQuestionInput: AskQuestionInput;
  _SignedTokenFilter: _SignedTokenFilter;
  SignedToken: SignedToken;
  _LoginInfoFilter: _LoginInfoFilter;
  ID: Scalars['ID'];
  LoginInfo: LoginInfo;
  _UserFilter: _UserFilter;
  User: User;
  Int: Scalars['Int'];
  _QuestionFilter: _QuestionFilter;
  Question: Question;
  _AnswerFilter: _AnswerFilter;
  Answer: Answer;
  _CommentFilter: _CommentFilter;
  Comment: Comment;
  _TagFilter: _TagFilter;
  Tag: Tag;
  Liked: Liked;
  _Neo4jTimeInput: _Neo4jTimeInput;
  _Neo4jTime: _Neo4jTime;
  _Neo4jDateInput: _Neo4jDateInput;
  _Neo4jDate: _Neo4jDate;
  _Neo4jDateTimeInput: _Neo4jDateTimeInput;
  _Neo4jDateTime: _Neo4jDateTime;
  _Neo4jLocalTimeInput: _Neo4jLocalTimeInput;
  _Neo4jLocalTime: _Neo4jLocalTime;
  _Neo4jLocalDateTimeInput: _Neo4jLocalDateTimeInput;
  _Neo4jLocalDateTime: _Neo4jLocalDateTime;
  _Neo4jPointDistanceFilter: _Neo4jPointDistanceFilter;
  Float: Scalars['Float'];
  _Neo4jPointInput: _Neo4jPointInput;
  _Neo4jPoint: _Neo4jPoint;
  Query: {};
  Mutation: {};
  Boolean: Scalars['Boolean'];
}>;

export type CypherDirectiveArgs = {   statement?: Maybe<Scalars['String']>; };

export type CypherDirectiveResolver<Result, Parent, ContextType = any, Args = CypherDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type RelationDirectiveArgs = {   name?: Maybe<Scalars['String']>;
  direction?: Maybe<_RelationDirections>;
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>; };

export type RelationDirectiveResolver<Result, Parent, ContextType = any, Args = RelationDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AdditionalLabelsDirectiveArgs = {   labels?: Maybe<Array<Maybe<Scalars['String']>>>; };

export type AdditionalLabelsDirectiveResolver<Result, Parent, ContextType = any, Args = AdditionalLabelsDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type MutationMetaDirectiveArgs = {   relationship?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>; };

export type MutationMetaDirectiveResolver<Result, Parent, ContextType = any, Args = MutationMetaDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type Neo4j_IgnoreDirectiveArgs = {  };

export type Neo4j_IgnoreDirectiveResolver<Result, Parent, ContextType = any, Args = Neo4j_IgnoreDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IdDirectiveArgs = {  };

export type IdDirectiveResolver<Result, Parent, ContextType = any, Args = IdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type UniqueDirectiveArgs = {  };

export type UniqueDirectiveResolver<Result, Parent, ContextType = any, Args = UniqueDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IndexDirectiveArgs = {  };

export type IndexDirectiveResolver<Result, Parent, ContextType = any, Args = IndexDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type SearchDirectiveArgs = {   index?: Maybe<Scalars['String']>; };

export type SearchDirectiveResolver<Result, Parent, ContextType = any, Args = SearchDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IsAuthenticatedDirectiveArgs = {  };

export type IsAuthenticatedDirectiveResolver<Result, Parent, ContextType = any, Args = IsAuthenticatedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type HasRoleDirectiveArgs = {   roles?: Maybe<Array<Maybe<Role>>>; };

export type HasRoleDirectiveResolver<Result, Parent, ContextType = any, Args = HasRoleDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type SignedTokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['SignedToken'] = ResolversParentTypes['SignedToken']> = ResolversObject<{
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoginInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoginInfo'] = ResolversParentTypes['LoginInfo']> = ResolversObject<{
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  surname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  roles?: Resolver<Maybe<Array<Maybe<ResolversTypes['Role']>>>, ParentType, ContextType>;
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  surname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rank?: Resolver<ResolversTypes['Rank'], ParentType, ContextType>;
  questions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Question']>>>, ParentType, ContextType, RequireFields<UserQuestionsArgs, never>>;
  answers?: Resolver<Maybe<Array<Maybe<ResolversTypes['Answer']>>>, ParentType, ContextType, RequireFields<UserAnswersArgs, never>>;
  comments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Comment']>>>, ParentType, ContextType, RequireFields<UserCommentsArgs, never>>;
  createdAt?: Resolver<Maybe<ResolversTypes['_Neo4jDateTime']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  roles?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuestionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Question'] = ResolversParentTypes['Question']> = ResolversObject<{
  questionId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QuestionOwnerArgs, never>>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  answers?: Resolver<Maybe<Array<Maybe<ResolversTypes['Answer']>>>, ParentType, ContextType, RequireFields<QuestionAnswersArgs, never>>;
  tagged?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tag']>>>, ParentType, ContextType, RequireFields<QuestionTaggedArgs, never>>;
  createdAt?: Resolver<Maybe<ResolversTypes['_Neo4jDateTime']>, ParentType, ContextType>;
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AnswerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Answer'] = ResolversParentTypes['Answer']> = ResolversObject<{
  answerId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  question?: Resolver<ResolversTypes['Question'], ParentType, ContextType, RequireFields<AnswerQuestionArgs, never>>;
  owner?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<AnswerOwnerArgs, never>>;
  comments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Comment']>>>, ParentType, ContextType, RequireFields<AnswerCommentsArgs, never>>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['_Neo4jDateTime']>, ParentType, ContextType>;
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = ResolversObject<{
  commentId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<CommentOwnerArgs, never>>;
  answer?: Resolver<ResolversTypes['Answer'], ParentType, ContextType, RequireFields<CommentAnswerArgs, never>>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['_Neo4jDateTime']>, ParentType, ContextType>;
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TagResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  questions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Question']>>>, ParentType, ContextType, RequireFields<TagQuestionsArgs, never>>;
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LikedResolvers<ContextType = any, ParentType extends ResolversParentTypes['Liked'] = ResolversParentTypes['Liked']> = ResolversObject<{
  from?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['_Neo4jDateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Neo4jTimeResolvers<ContextType = any, ParentType extends ResolversParentTypes['_Neo4jTime'] = ResolversParentTypes['_Neo4jTime']> = ResolversObject<{
  hour?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  minute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  second?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  millisecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  microsecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nanosecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  formatted?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Neo4jDateResolvers<ContextType = any, ParentType extends ResolversParentTypes['_Neo4jDate'] = ResolversParentTypes['_Neo4jDate']> = ResolversObject<{
  year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  month?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  day?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  formatted?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Neo4jDateTimeResolvers<ContextType = any, ParentType extends ResolversParentTypes['_Neo4jDateTime'] = ResolversParentTypes['_Neo4jDateTime']> = ResolversObject<{
  year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  month?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  day?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hour?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  minute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  second?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  millisecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  microsecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nanosecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  formatted?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Neo4jLocalTimeResolvers<ContextType = any, ParentType extends ResolversParentTypes['_Neo4jLocalTime'] = ResolversParentTypes['_Neo4jLocalTime']> = ResolversObject<{
  hour?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  minute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  second?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  millisecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  microsecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nanosecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  formatted?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Neo4jLocalDateTimeResolvers<ContextType = any, ParentType extends ResolversParentTypes['_Neo4jLocalDateTime'] = ResolversParentTypes['_Neo4jLocalDateTime']> = ResolversObject<{
  year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  month?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  day?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hour?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  minute?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  second?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  millisecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  microsecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  nanosecond?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  formatted?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Neo4jPointResolvers<ContextType = any, ParentType extends ResolversParentTypes['_Neo4jPoint'] = ResolversParentTypes['_Neo4jPoint']> = ResolversObject<{
  x?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  y?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  z?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  crs?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  srid?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  currentUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  SignedToken?: Resolver<Maybe<Array<Maybe<ResolversTypes['SignedToken']>>>, ParentType, ContextType, RequireFields<QuerySignedTokenArgs, never>>;
  LoginInfo?: Resolver<Maybe<Array<Maybe<ResolversTypes['LoginInfo']>>>, ParentType, ContextType, RequireFields<QueryLoginInfoArgs, never>>;
  User?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<QueryUserArgs, never>>;
  Question?: Resolver<Maybe<Array<Maybe<ResolversTypes['Question']>>>, ParentType, ContextType, RequireFields<QueryQuestionArgs, never>>;
  Answer?: Resolver<Maybe<Array<Maybe<ResolversTypes['Answer']>>>, ParentType, ContextType, RequireFields<QueryAnswerArgs, never>>;
  Comment?: Resolver<Maybe<Array<Maybe<ResolversTypes['Comment']>>>, ParentType, ContextType, RequireFields<QueryCommentArgs, never>>;
  Tag?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tag']>>>, ParentType, ContextType, RequireFields<QueryTagArgs, never>>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  Register?: Resolver<ResolversTypes['LoginInfo'], ParentType, ContextType, RequireFields<MutationRegisterArgs, 'data'>>;
  SignIn?: Resolver<ResolversTypes['LoginInfo'], ParentType, ContextType, RequireFields<MutationSignInArgs, 'data'>>;
  AskQuestion?: Resolver<ResolversTypes['Question'], ParentType, ContextType, RequireFields<MutationAskQuestionArgs, 'data'>>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  SignedToken?: SignedTokenResolvers<ContextType>;
  LoginInfo?: LoginInfoResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Question?: QuestionResolvers<ContextType>;
  Answer?: AnswerResolvers<ContextType>;
  Comment?: CommentResolvers<ContextType>;
  Tag?: TagResolvers<ContextType>;
  Liked?: LikedResolvers<ContextType>;
  _Neo4jTime?: _Neo4jTimeResolvers<ContextType>;
  _Neo4jDate?: _Neo4jDateResolvers<ContextType>;
  _Neo4jDateTime?: _Neo4jDateTimeResolvers<ContextType>;
  _Neo4jLocalTime?: _Neo4jLocalTimeResolvers<ContextType>;
  _Neo4jLocalDateTime?: _Neo4jLocalDateTimeResolvers<ContextType>;
  _Neo4jPoint?: _Neo4jPointResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = ResolversObject<{
  cypher?: CypherDirectiveResolver<any, any, ContextType>;
  relation?: RelationDirectiveResolver<any, any, ContextType>;
  additionalLabels?: AdditionalLabelsDirectiveResolver<any, any, ContextType>;
  MutationMeta?: MutationMetaDirectiveResolver<any, any, ContextType>;
  neo4j_ignore?: Neo4j_IgnoreDirectiveResolver<any, any, ContextType>;
  id?: IdDirectiveResolver<any, any, ContextType>;
  unique?: UniqueDirectiveResolver<any, any, ContextType>;
  index?: IndexDirectiveResolver<any, any, ContextType>;
  search?: SearchDirectiveResolver<any, any, ContextType>;
  isAuthenticated?: IsAuthenticatedDirectiveResolver<any, any, ContextType>;
  hasRole?: HasRoleDirectiveResolver<any, any, ContextType>;
}>;


/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>;