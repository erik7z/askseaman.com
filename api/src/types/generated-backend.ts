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

export type EmailInput = {
  email: Scalars['String'];
};

export type DeleteNodeInput = {
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

export type AddTagInput = {
  name: Scalars['String'];
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
  rate: Scalars['Int'];
};

export type DeleteTagResponse = {
  __typename?: 'DeleteTagResponse';
  name: Scalars['String'];
};

export type SignedToken = {
  __typename?: 'SignedToken';
  token: Scalars['String'];
};

export type Local_Account = {
  __typename?: 'LOCAL_ACCOUNT';
  user: User;
  email: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['Int']>;
};


export type Local_AccountUserArgs = {
  filter?: Maybe<_UserFilter>;
};

export type LoginInfo = {
  __typename?: 'LoginInfo';
  nodeId: Scalars['ID'];
  email: Scalars['String'];
  password: Scalars['String'];
  name: Scalars['String'];
  surname: Scalars['String'];
  token?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Maybe<Role>>>;
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
  TokenAsc = 'token_asc',
  TokenDesc = 'token_desc',
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
  tags?: Maybe<_TagFilter>;
  tags_not?: Maybe<_TagFilter>;
  tags_in?: Maybe<Array<_TagFilter>>;
  tags_not_in?: Maybe<Array<_TagFilter>>;
  tags_some?: Maybe<_TagFilter>;
  tags_none?: Maybe<_TagFilter>;
  tags_single?: Maybe<_TagFilter>;
  tags_every?: Maybe<_TagFilter>;
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
  nodeId: Scalars['ID'];
  email?: Maybe<Local_Account>;
  name: Scalars['String'];
  surname: Scalars['String'];
  rank: Rank;
  questions?: Maybe<Array<Maybe<Question>>>;
  answers?: Maybe<Array<Maybe<Answer>>>;
  tags?: Maybe<Array<Maybe<Tag>>>;
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


export type UserTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_TagOrdering>>>;
  filter?: Maybe<_TagFilter>;
};

export type RedirectUri = {
  __typename?: 'RedirectUri';
  redirect: Scalars['String'];
  status: ResponseStatus;
  message?: Maybe<Scalars['String']>;
};

export type _CanBeCommentedComments = {
  __typename?: '_CanBeCommentedComments';
  relId: Scalars['ID'];
  text: Scalars['String'];
  createdAt: _Neo4jDateTime;
  updatedAt?: Maybe<_Neo4jDateTime>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this relationship. */
  _id?: Maybe<Scalars['String']>;
  /** Field for the User node this COMMENT [relationship](https://grandstack.io/docs/graphql-relationship-types) is coming from. */
  user?: Maybe<User>;
};

export type _CanBeCommentedCommentFilter = {
  AND?: Maybe<Array<_CanBeCommentedCommentFilter>>;
  OR?: Maybe<Array<_CanBeCommentedCommentFilter>>;
  relId?: Maybe<Scalars['ID']>;
  relId_not?: Maybe<Scalars['ID']>;
  relId_in?: Maybe<Array<Scalars['ID']>>;
  relId_not_in?: Maybe<Array<Scalars['ID']>>;
  relId_regexp?: Maybe<Scalars['ID']>;
  relId_contains?: Maybe<Scalars['ID']>;
  relId_not_contains?: Maybe<Scalars['ID']>;
  relId_starts_with?: Maybe<Scalars['ID']>;
  relId_not_starts_with?: Maybe<Scalars['ID']>;
  relId_ends_with?: Maybe<Scalars['ID']>;
  relId_not_ends_with?: Maybe<Scalars['ID']>;
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
  user?: Maybe<_UserFilter>;
};

export enum _CommentOrdering {
  RelIdAsc = 'relId_asc',
  RelIdDesc = 'relId_desc',
  TextAsc = 'text_asc',
  TextDesc = 'text_desc',
  CreatedAtAsc = 'createdAt_asc',
  CreatedAtDesc = 'createdAt_desc',
  UpdatedAtAsc = 'updatedAt_asc',
  UpdatedAtDesc = 'updatedAt_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export enum _CanBeCommentedOrdering {
  NodeIdAsc = 'nodeId_asc',
  NodeIdDesc = 'nodeId_desc'
}

export type _CanBeCommentedFilter = {
  AND?: Maybe<Array<_CanBeCommentedFilter>>;
  OR?: Maybe<Array<_CanBeCommentedFilter>>;
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
  comments?: Maybe<_CanBeCommentedCommentFilter>;
  comments_not?: Maybe<_CanBeCommentedCommentFilter>;
  comments_in?: Maybe<Array<_CanBeCommentedCommentFilter>>;
  comments_not_in?: Maybe<Array<_CanBeCommentedCommentFilter>>;
  comments_some?: Maybe<_CanBeCommentedCommentFilter>;
  comments_none?: Maybe<_CanBeCommentedCommentFilter>;
  comments_single?: Maybe<_CanBeCommentedCommentFilter>;
  comments_every?: Maybe<_CanBeCommentedCommentFilter>;
};

export type CanBeCommented = {
  nodeId: Scalars['ID'];
  commentedBy?: Maybe<Array<Maybe<User>>>;
  comments?: Maybe<Array<Maybe<_CanBeCommentedComments>>>;
};


export type CanBeCommentedCommentedByArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_UserOrdering>>>;
  filter?: Maybe<_UserFilter>;
};


export type CanBeCommentedCommentsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_CommentOrdering>>>;
  filter?: Maybe<_CanBeCommentedCommentFilter>;
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
  owner?: Maybe<_UserFilter>;
  owner_not?: Maybe<_UserFilter>;
  owner_in?: Maybe<Array<_UserFilter>>;
  owner_not_in?: Maybe<Array<_UserFilter>>;
  comments?: Maybe<_CanBeCommentedCommentFilter>;
  comments_not?: Maybe<_CanBeCommentedCommentFilter>;
  comments_in?: Maybe<Array<_CanBeCommentedCommentFilter>>;
  comments_not_in?: Maybe<Array<_CanBeCommentedCommentFilter>>;
  comments_some?: Maybe<_CanBeCommentedCommentFilter>;
  comments_none?: Maybe<_CanBeCommentedCommentFilter>;
  comments_single?: Maybe<_CanBeCommentedCommentFilter>;
  comments_every?: Maybe<_CanBeCommentedCommentFilter>;
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
  updatedAt?: Maybe<_Neo4jDateTimeInput>;
  updatedAt_not?: Maybe<_Neo4jDateTimeInput>;
  updatedAt_in?: Maybe<Array<_Neo4jDateTimeInput>>;
  updatedAt_not_in?: Maybe<Array<_Neo4jDateTimeInput>>;
  updatedAt_lt?: Maybe<_Neo4jDateTimeInput>;
  updatedAt_lte?: Maybe<_Neo4jDateTimeInput>;
  updatedAt_gt?: Maybe<_Neo4jDateTimeInput>;
  updatedAt_gte?: Maybe<_Neo4jDateTimeInput>;
};

export type Question = CanBeCommented & {
  __typename?: 'Question';
  nodeId: Scalars['ID'];
  owner: User;
  commentedBy?: Maybe<Array<Maybe<User>>>;
  comments?: Maybe<Array<Maybe<_CanBeCommentedComments>>>;
  title: Scalars['String'];
  text: Scalars['String'];
  answers?: Maybe<Array<Maybe<Answer>>>;
  tagged?: Maybe<Array<Maybe<Tag>>>;
  createdAt?: Maybe<_Neo4jDateTime>;
  updatedAt?: Maybe<_Neo4jDateTime>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
};


export type QuestionOwnerArgs = {
  filter?: Maybe<_UserFilter>;
};


export type QuestionCommentedByArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_UserOrdering>>>;
  filter?: Maybe<_UserFilter>;
};


export type QuestionCommentsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_CommentOrdering>>>;
  filter?: Maybe<_CanBeCommentedCommentFilter>;
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
  NodeIdAsc = 'nodeId_asc',
  NodeIdDesc = 'nodeId_desc',
  TextAsc = 'text_asc',
  TextDesc = 'text_desc',
  RateAsc = 'rate_asc',
  RateDesc = 'rate_desc',
  CreatedAtAsc = 'createdAt_asc',
  CreatedAtDesc = 'createdAt_desc',
  UpdatedAtAsc = 'updatedAt_asc',
  UpdatedAtDesc = 'updatedAt_desc',
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
  question?: Maybe<_QuestionFilter>;
  question_not?: Maybe<_QuestionFilter>;
  question_in?: Maybe<Array<_QuestionFilter>>;
  question_not_in?: Maybe<Array<_QuestionFilter>>;
  owner?: Maybe<_UserFilter>;
  owner_not?: Maybe<_UserFilter>;
  owner_in?: Maybe<Array<_UserFilter>>;
  owner_not_in?: Maybe<Array<_UserFilter>>;
  comments?: Maybe<_CanBeCommentedCommentFilter>;
  comments_not?: Maybe<_CanBeCommentedCommentFilter>;
  comments_in?: Maybe<Array<_CanBeCommentedCommentFilter>>;
  comments_not_in?: Maybe<Array<_CanBeCommentedCommentFilter>>;
  comments_some?: Maybe<_CanBeCommentedCommentFilter>;
  comments_none?: Maybe<_CanBeCommentedCommentFilter>;
  comments_single?: Maybe<_CanBeCommentedCommentFilter>;
  comments_every?: Maybe<_CanBeCommentedCommentFilter>;
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
  updatedAt?: Maybe<_Neo4jDateTimeInput>;
  updatedAt_not?: Maybe<_Neo4jDateTimeInput>;
  updatedAt_in?: Maybe<Array<_Neo4jDateTimeInput>>;
  updatedAt_not_in?: Maybe<Array<_Neo4jDateTimeInput>>;
  updatedAt_lt?: Maybe<_Neo4jDateTimeInput>;
  updatedAt_lte?: Maybe<_Neo4jDateTimeInput>;
  updatedAt_gt?: Maybe<_Neo4jDateTimeInput>;
  updatedAt_gte?: Maybe<_Neo4jDateTimeInput>;
};

export type Answer = CanBeCommented & {
  __typename?: 'Answer';
  nodeId: Scalars['ID'];
  question: Question;
  owner: User;
  commentedBy?: Maybe<Array<Maybe<User>>>;
  comments?: Maybe<Array<Maybe<_CanBeCommentedComments>>>;
  text: Scalars['String'];
  rate?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<_Neo4jDateTime>;
  updatedAt?: Maybe<_Neo4jDateTime>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
};


export type AnswerQuestionArgs = {
  filter?: Maybe<_QuestionFilter>;
};


export type AnswerOwnerArgs = {
  filter?: Maybe<_UserFilter>;
};


export type AnswerCommentedByArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_UserOrdering>>>;
  filter?: Maybe<_UserFilter>;
};


export type AnswerCommentsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_CommentOrdering>>>;
  filter?: Maybe<_CanBeCommentedCommentFilter>;
};

export type Comment = {
  __typename?: 'Comment';
  user?: Maybe<User>;
  commented?: Maybe<CanBeCommented>;
  relId: Scalars['ID'];
  text: Scalars['String'];
  createdAt: _Neo4jDateTime;
  updatedAt?: Maybe<_Neo4jDateTime>;
};

export enum _TagOrdering {
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  CreatedAtAsc = 'createdAt_asc',
  CreatedAtDesc = 'createdAt_desc',
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
  createdAt?: Maybe<_Neo4jDateTimeInput>;
  createdAt_not?: Maybe<_Neo4jDateTimeInput>;
  createdAt_in?: Maybe<Array<_Neo4jDateTimeInput>>;
  createdAt_not_in?: Maybe<Array<_Neo4jDateTimeInput>>;
  createdAt_lt?: Maybe<_Neo4jDateTimeInput>;
  createdAt_lte?: Maybe<_Neo4jDateTimeInput>;
  createdAt_gt?: Maybe<_Neo4jDateTimeInput>;
  createdAt_gte?: Maybe<_Neo4jDateTimeInput>;
  addedBy?: Maybe<_UserFilter>;
  addedBy_not?: Maybe<_UserFilter>;
  addedBy_in?: Maybe<Array<_UserFilter>>;
  addedBy_not_in?: Maybe<Array<_UserFilter>>;
};

export type Tag = {
  __typename?: 'Tag';
  name: Scalars['String'];
  questions?: Maybe<Array<Maybe<Question>>>;
  createdAt?: Maybe<_Neo4jDateTime>;
  addedBy?: Maybe<User>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
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

export type Liked = {
  __typename?: 'Liked';
  from?: Maybe<User>;
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

export enum ResponseStatus {
  Success = 'success',
  Fail = 'fail'
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
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for User type nodes. */
  User?: Maybe<Array<Maybe<User>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for CanBeCommented type nodes. */
  CanBeCommented?: Maybe<Array<Maybe<CanBeCommented>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Question type nodes. */
  Question?: Maybe<Array<Maybe<Question>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Answer type nodes. */
  Answer?: Maybe<Array<Maybe<Answer>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Tag type nodes. */
  Tag?: Maybe<Array<Maybe<Tag>>>;
};


export type QueryUserArgs = {
  nodeId?: Maybe<Scalars['ID']>;
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


export type QueryCanBeCommentedArgs = {
  nodeId?: Maybe<Scalars['ID']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_CanBeCommentedOrdering>>>;
  filter?: Maybe<_CanBeCommentedFilter>;
};


export type QueryQuestionArgs = {
  nodeId?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  createdAt?: Maybe<_Neo4jDateTimeInput>;
  updatedAt?: Maybe<_Neo4jDateTimeInput>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_QuestionOrdering>>>;
  filter?: Maybe<_QuestionFilter>;
};


export type QueryAnswerArgs = {
  nodeId?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
  rate?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<_Neo4jDateTimeInput>;
  updatedAt?: Maybe<_Neo4jDateTimeInput>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_AnswerOrdering>>>;
  filter?: Maybe<_AnswerFilter>;
};


export type QueryTagArgs = {
  name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<_Neo4jDateTimeInput>;
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
  ChangePassRequest: RedirectUri;
  ChangePassConfirm: RedirectUri;
  ChangePassComplete: RedirectUri;
  AskQuestion: Question;
  EditQuestion: Question;
  DeleteQuestion: DeleteQuestionResponse;
  AnswerQuestion: Answer;
  EditAnswer: Answer;
  DeleteAnswer: DeleteAnswerResponse;
  AddComment: Comment;
  AddTag: Tag;
  DeleteTag: DeleteTagResponse;
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


export type MutationAskQuestionArgs = {
  data: AskQuestionInput;
};


export type MutationEditQuestionArgs = {
  data: EditQuestionInput;
};


export type MutationDeleteQuestionArgs = {
  data: DeleteNodeInput;
};


export type MutationAnswerQuestionArgs = {
  data: AnswerQuestionInput;
};


export type MutationEditAnswerArgs = {
  data: EditAnswerInput;
};


export type MutationDeleteAnswerArgs = {
  data: DeleteNodeInput;
};


export type MutationAddCommentArgs = {
  data: AddCommentInput;
};


export type MutationAddTagArgs = {
  data: AddTagInput;
};


export type MutationDeleteTagArgs = {
  data: DeleteTagInput;
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
  EmailInput: EmailInput;
  deleteNodeInput: DeleteNodeInput;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  deleteTagInput: DeleteTagInput;
  CodeInput: CodeInput;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  newPassInput: NewPassInput;
  AskQuestionInput: AskQuestionInput;
  EditQuestionInput: EditQuestionInput;
  AnswerQuestionInput: AnswerQuestionInput;
  AddCommentInput: AddCommentInput;
  EditAnswerInput: EditAnswerInput;
  AddTagInput: AddTagInput;
  DeleteQuestionResponse: ResolverTypeWrapper<DeleteQuestionResponse>;
  DeleteAnswerResponse: ResolverTypeWrapper<DeleteAnswerResponse>;
  DeleteTagResponse: ResolverTypeWrapper<DeleteTagResponse>;
  SignedToken: ResolverTypeWrapper<SignedToken>;
  LOCAL_ACCOUNT: ResolverTypeWrapper<Local_Account>;
  LoginInfo: ResolverTypeWrapper<LoginInfo>;
  _UserOrdering: _UserOrdering;
  _UserFilter: _UserFilter;
  User: ResolverTypeWrapper<User>;
  RedirectUri: ResolverTypeWrapper<RedirectUri>;
  _CanBeCommentedComments: ResolverTypeWrapper<_CanBeCommentedComments>;
  _CanBeCommentedCommentFilter: _CanBeCommentedCommentFilter;
  _CommentOrdering: _CommentOrdering;
  _CanBeCommentedOrdering: _CanBeCommentedOrdering;
  _CanBeCommentedFilter: _CanBeCommentedFilter;
  CanBeCommented: ResolversTypes['Question'] | ResolversTypes['Answer'];
  _QuestionOrdering: _QuestionOrdering;
  _QuestionFilter: _QuestionFilter;
  Question: ResolverTypeWrapper<Question>;
  _AnswerOrdering: _AnswerOrdering;
  _AnswerFilter: _AnswerFilter;
  Answer: ResolverTypeWrapper<Answer>;
  Comment: ResolverTypeWrapper<Comment>;
  _TagOrdering: _TagOrdering;
  _TagFilter: _TagFilter;
  Tag: ResolverTypeWrapper<Tag>;
  Liked: ResolverTypeWrapper<Liked>;
  Rank: Rank;
  Role: Role;
  ResponseStatus: ResponseStatus;
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
  EmailInput: EmailInput;
  deleteNodeInput: DeleteNodeInput;
  ID: Scalars['ID'];
  deleteTagInput: DeleteTagInput;
  CodeInput: CodeInput;
  Int: Scalars['Int'];
  newPassInput: NewPassInput;
  AskQuestionInput: AskQuestionInput;
  EditQuestionInput: EditQuestionInput;
  AnswerQuestionInput: AnswerQuestionInput;
  AddCommentInput: AddCommentInput;
  EditAnswerInput: EditAnswerInput;
  AddTagInput: AddTagInput;
  DeleteQuestionResponse: DeleteQuestionResponse;
  DeleteAnswerResponse: DeleteAnswerResponse;
  DeleteTagResponse: DeleteTagResponse;
  SignedToken: SignedToken;
  LOCAL_ACCOUNT: Local_Account;
  LoginInfo: LoginInfo;
  _UserFilter: _UserFilter;
  User: User;
  RedirectUri: RedirectUri;
  _CanBeCommentedComments: _CanBeCommentedComments;
  _CanBeCommentedCommentFilter: _CanBeCommentedCommentFilter;
  _CanBeCommentedFilter: _CanBeCommentedFilter;
  CanBeCommented: ResolversParentTypes['Question'] | ResolversParentTypes['Answer'];
  _QuestionFilter: _QuestionFilter;
  Question: Question;
  _AnswerFilter: _AnswerFilter;
  Answer: Answer;
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

export type DeleteQuestionResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteQuestionResponse'] = ResolversParentTypes['DeleteQuestionResponse']> = ResolversObject<{
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DeleteAnswerResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteAnswerResponse'] = ResolversParentTypes['DeleteAnswerResponse']> = ResolversObject<{
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DeleteTagResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteTagResponse'] = ResolversParentTypes['DeleteTagResponse']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SignedTokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['SignedToken'] = ResolversParentTypes['SignedToken']> = ResolversObject<{
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Local_AccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['LOCAL_ACCOUNT'] = ResolversParentTypes['LOCAL_ACCOUNT']> = ResolversObject<{
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<Local_AccountUserArgs, never>>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoginInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoginInfo'] = ResolversParentTypes['LoginInfo']> = ResolversObject<{
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  surname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  roles?: Resolver<Maybe<Array<Maybe<ResolversTypes['Role']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['LOCAL_ACCOUNT']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  surname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rank?: Resolver<ResolversTypes['Rank'], ParentType, ContextType>;
  questions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Question']>>>, ParentType, ContextType, RequireFields<UserQuestionsArgs, never>>;
  answers?: Resolver<Maybe<Array<Maybe<ResolversTypes['Answer']>>>, ParentType, ContextType, RequireFields<UserAnswersArgs, never>>;
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tag']>>>, ParentType, ContextType, RequireFields<UserTagsArgs, never>>;
  createdAt?: Resolver<Maybe<ResolversTypes['_Neo4jDateTime']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  roles?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RedirectUriResolvers<ContextType = any, ParentType extends ResolversParentTypes['RedirectUri'] = ResolversParentTypes['RedirectUri']> = ResolversObject<{
  redirect?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ResponseStatus'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _CanBeCommentedCommentsResolvers<ContextType = any, ParentType extends ResolversParentTypes['_CanBeCommentedComments'] = ResolversParentTypes['_CanBeCommentedComments']> = ResolversObject<{
  relId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['_Neo4jDateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['_Neo4jDateTime']>, ParentType, ContextType>;
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CanBeCommentedResolvers<ContextType = any, ParentType extends ResolversParentTypes['CanBeCommented'] = ResolversParentTypes['CanBeCommented']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Question' | 'Answer', ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  commentedBy?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<CanBeCommentedCommentedByArgs, never>>;
  comments?: Resolver<Maybe<Array<Maybe<ResolversTypes['_CanBeCommentedComments']>>>, ParentType, ContextType, RequireFields<CanBeCommentedCommentsArgs, never>>;
}>;

export type QuestionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Question'] = ResolversParentTypes['Question']> = ResolversObject<{
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QuestionOwnerArgs, never>>;
  commentedBy?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<QuestionCommentedByArgs, never>>;
  comments?: Resolver<Maybe<Array<Maybe<ResolversTypes['_CanBeCommentedComments']>>>, ParentType, ContextType, RequireFields<QuestionCommentsArgs, never>>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  answers?: Resolver<Maybe<Array<Maybe<ResolversTypes['Answer']>>>, ParentType, ContextType, RequireFields<QuestionAnswersArgs, never>>;
  tagged?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tag']>>>, ParentType, ContextType, RequireFields<QuestionTaggedArgs, never>>;
  createdAt?: Resolver<Maybe<ResolversTypes['_Neo4jDateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['_Neo4jDateTime']>, ParentType, ContextType>;
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AnswerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Answer'] = ResolversParentTypes['Answer']> = ResolversObject<{
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  question?: Resolver<ResolversTypes['Question'], ParentType, ContextType, RequireFields<AnswerQuestionArgs, never>>;
  owner?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<AnswerOwnerArgs, never>>;
  commentedBy?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<AnswerCommentedByArgs, never>>;
  comments?: Resolver<Maybe<Array<Maybe<ResolversTypes['_CanBeCommentedComments']>>>, ParentType, ContextType, RequireFields<AnswerCommentsArgs, never>>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rate?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['_Neo4jDateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['_Neo4jDateTime']>, ParentType, ContextType>;
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = ResolversObject<{
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  commented?: Resolver<Maybe<ResolversTypes['CanBeCommented']>, ParentType, ContextType>;
  relId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['_Neo4jDateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['_Neo4jDateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TagResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  questions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Question']>>>, ParentType, ContextType, RequireFields<TagQuestionsArgs, never>>;
  createdAt?: Resolver<Maybe<ResolversTypes['_Neo4jDateTime']>, ParentType, ContextType>;
  addedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<TagAddedByArgs, never>>;
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LikedResolvers<ContextType = any, ParentType extends ResolversParentTypes['Liked'] = ResolversParentTypes['Liked']> = ResolversObject<{
  from?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
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
  User?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<QueryUserArgs, never>>;
  CanBeCommented?: Resolver<Maybe<Array<Maybe<ResolversTypes['CanBeCommented']>>>, ParentType, ContextType, RequireFields<QueryCanBeCommentedArgs, never>>;
  Question?: Resolver<Maybe<Array<Maybe<ResolversTypes['Question']>>>, ParentType, ContextType, RequireFields<QueryQuestionArgs, never>>;
  Answer?: Resolver<Maybe<Array<Maybe<ResolversTypes['Answer']>>>, ParentType, ContextType, RequireFields<QueryAnswerArgs, never>>;
  Tag?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tag']>>>, ParentType, ContextType, RequireFields<QueryTagArgs, never>>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  Register?: Resolver<ResolversTypes['LoginInfo'], ParentType, ContextType, RequireFields<MutationRegisterArgs, 'data'>>;
  SignIn?: Resolver<ResolversTypes['LoginInfo'], ParentType, ContextType, RequireFields<MutationSignInArgs, 'data'>>;
  ChangePassRequest?: Resolver<ResolversTypes['RedirectUri'], ParentType, ContextType, RequireFields<MutationChangePassRequestArgs, 'data'>>;
  ChangePassConfirm?: Resolver<ResolversTypes['RedirectUri'], ParentType, ContextType, RequireFields<MutationChangePassConfirmArgs, 'data'>>;
  ChangePassComplete?: Resolver<ResolversTypes['RedirectUri'], ParentType, ContextType, RequireFields<MutationChangePassCompleteArgs, 'data'>>;
  AskQuestion?: Resolver<ResolversTypes['Question'], ParentType, ContextType, RequireFields<MutationAskQuestionArgs, 'data'>>;
  EditQuestion?: Resolver<ResolversTypes['Question'], ParentType, ContextType, RequireFields<MutationEditQuestionArgs, 'data'>>;
  DeleteQuestion?: Resolver<ResolversTypes['DeleteQuestionResponse'], ParentType, ContextType, RequireFields<MutationDeleteQuestionArgs, 'data'>>;
  AnswerQuestion?: Resolver<ResolversTypes['Answer'], ParentType, ContextType, RequireFields<MutationAnswerQuestionArgs, 'data'>>;
  EditAnswer?: Resolver<ResolversTypes['Answer'], ParentType, ContextType, RequireFields<MutationEditAnswerArgs, 'data'>>;
  DeleteAnswer?: Resolver<ResolversTypes['DeleteAnswerResponse'], ParentType, ContextType, RequireFields<MutationDeleteAnswerArgs, 'data'>>;
  AddComment?: Resolver<ResolversTypes['Comment'], ParentType, ContextType, RequireFields<MutationAddCommentArgs, 'data'>>;
  AddTag?: Resolver<ResolversTypes['Tag'], ParentType, ContextType, RequireFields<MutationAddTagArgs, 'data'>>;
  DeleteTag?: Resolver<ResolversTypes['DeleteTagResponse'], ParentType, ContextType, RequireFields<MutationDeleteTagArgs, 'data'>>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  DeleteQuestionResponse?: DeleteQuestionResponseResolvers<ContextType>;
  DeleteAnswerResponse?: DeleteAnswerResponseResolvers<ContextType>;
  DeleteTagResponse?: DeleteTagResponseResolvers<ContextType>;
  SignedToken?: SignedTokenResolvers<ContextType>;
  LOCAL_ACCOUNT?: Local_AccountResolvers<ContextType>;
  LoginInfo?: LoginInfoResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  RedirectUri?: RedirectUriResolvers<ContextType>;
  _CanBeCommentedComments?: _CanBeCommentedCommentsResolvers<ContextType>;
  CanBeCommented?: CanBeCommentedResolvers<ContextType>;
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