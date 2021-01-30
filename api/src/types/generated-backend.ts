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
};

export type VoteInput = {
  nodeId: Scalars['ID'];
  action: VoteIntention;
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

export type DeleteCommentResponse = {
  __typename?: 'DeleteCommentResponse';
  nodeId: Scalars['ID'];
  text: Scalars['String'];
};

export type DeleteTagResponse = {
  __typename?: 'DeleteTagResponse';
  name: Scalars['String'];
};

export type SignedToken = {
  __typename?: 'SignedToken';
  token: Scalars['String'];
};

export enum _LocalAccountOrdering {
  EmailAsc = 'email_asc',
  EmailDesc = 'email_desc',
  PasswordAsc = 'password_asc',
  PasswordDesc = 'password_desc',
  CodeAsc = 'code_asc',
  CodeDesc = 'code_desc',
  IdAsc = '_id_asc',
  IdDesc = '_id_desc'
}

export type _LocalAccountFilter = {
  AND?: Maybe<Array<_LocalAccountFilter>>;
  OR?: Maybe<Array<_LocalAccountFilter>>;
  user?: Maybe<_UserFilter>;
  user_not?: Maybe<_UserFilter>;
  user_in?: Maybe<Array<_UserFilter>>;
  user_not_in?: Maybe<Array<_UserFilter>>;
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
  code?: Maybe<Scalars['Int']>;
  code_not?: Maybe<Scalars['Int']>;
  code_in?: Maybe<Array<Scalars['Int']>>;
  code_not_in?: Maybe<Array<Scalars['Int']>>;
  code_lt?: Maybe<Scalars['Int']>;
  code_lte?: Maybe<Scalars['Int']>;
  code_gt?: Maybe<Scalars['Int']>;
  code_gte?: Maybe<Scalars['Int']>;
};

export type LocalAccount = {
  __typename?: 'LocalAccount';
  user: User;
  email: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['Int']>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
};


export type LocalAccountUserArgs = {
  filter?: Maybe<_UserFilter>;
};

export enum _LoginResponseOrdering {
  NodeIdAsc = 'nodeId_asc',
  NodeIdDesc = 'nodeId_desc',
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

export type _LoginResponseFilter = {
  AND?: Maybe<Array<_LoginResponseFilter>>;
  OR?: Maybe<Array<_LoginResponseFilter>>;
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

export type LoginResponse = {
  __typename?: 'LoginResponse';
  nodeId: Scalars['ID'];
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
  email?: Maybe<_LocalAccountFilter>;
  email_not?: Maybe<_LocalAccountFilter>;
  email_in?: Maybe<Array<_LocalAccountFilter>>;
  email_not_in?: Maybe<Array<_LocalAccountFilter>>;
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
  liked?: Maybe<_CanBeLikedFilter>;
  liked_not?: Maybe<_CanBeLikedFilter>;
  liked_in?: Maybe<Array<_CanBeLikedFilter>>;
  liked_not_in?: Maybe<Array<_CanBeLikedFilter>>;
  liked_some?: Maybe<_CanBeLikedFilter>;
  liked_none?: Maybe<_CanBeLikedFilter>;
  liked_single?: Maybe<_CanBeLikedFilter>;
  liked_every?: Maybe<_CanBeLikedFilter>;
  subscriptions?: Maybe<_UserFilter>;
  subscriptions_not?: Maybe<_UserFilter>;
  subscriptions_in?: Maybe<Array<_UserFilter>>;
  subscriptions_not_in?: Maybe<Array<_UserFilter>>;
  subscriptions_some?: Maybe<_UserFilter>;
  subscriptions_none?: Maybe<_UserFilter>;
  subscriptions_single?: Maybe<_UserFilter>;
  subscriptions_every?: Maybe<_UserFilter>;
};

export type User = {
  __typename?: 'User';
  nodeId: Scalars['ID'];
  name: Scalars['String'];
  surname: Scalars['String'];
  rank: Rank;
  createdAt?: Maybe<_Neo4jDateTime>;
  token?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  email?: Maybe<LocalAccount>;
  questions?: Maybe<Array<Maybe<Question>>>;
  answers?: Maybe<Array<Maybe<Answer>>>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  liked?: Maybe<Array<Maybe<CanBeLiked>>>;
  subscriptions?: Maybe<Array<Maybe<User>>>;
  /** Generated field for querying the Neo4j [system id](https://neo4j.com/docs/cypher-manual/current/functions/scalar/#functions-id) of this node. */
  _id?: Maybe<Scalars['String']>;
};


export type UserEmailArgs = {
  filter?: Maybe<_LocalAccountFilter>;
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


export type UserLikedArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_CanBeLikedOrdering>>>;
  filter?: Maybe<_CanBeLikedFilter>;
};


export type UserSubscriptionsArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_UserOrdering>>>;
  filter?: Maybe<_UserFilter>;
};

export type RedirectUri = {
  __typename?: 'RedirectUri';
  redirect: Scalars['String'];
  status: ResponseStatus;
  message?: Maybe<Scalars['String']>;
};

export type CanBeCommented = {
  nodeId: Scalars['ID'];
};

export enum _CanBeLikedOrdering {
  NodeIdAsc = 'nodeId_asc',
  NodeIdDesc = 'nodeId_desc',
  CreatedAtAsc = 'createdAt_asc',
  CreatedAtDesc = 'createdAt_desc'
}

export type _CanBeLikedFilter = {
  AND?: Maybe<Array<_CanBeLikedFilter>>;
  OR?: Maybe<Array<_CanBeLikedFilter>>;
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
  likes?: Maybe<_UserFilter>;
  likes_not?: Maybe<_UserFilter>;
  likes_in?: Maybe<Array<_UserFilter>>;
  likes_not_in?: Maybe<Array<_UserFilter>>;
  likes_some?: Maybe<_UserFilter>;
  likes_none?: Maybe<_UserFilter>;
  likes_single?: Maybe<_UserFilter>;
  likes_every?: Maybe<_UserFilter>;
  createdAt?: Maybe<_Neo4jDateTimeInput>;
  createdAt_not?: Maybe<_Neo4jDateTimeInput>;
  createdAt_in?: Maybe<Array<_Neo4jDateTimeInput>>;
  createdAt_not_in?: Maybe<Array<_Neo4jDateTimeInput>>;
  createdAt_lt?: Maybe<_Neo4jDateTimeInput>;
  createdAt_lte?: Maybe<_Neo4jDateTimeInput>;
  createdAt_gt?: Maybe<_Neo4jDateTimeInput>;
  createdAt_gte?: Maybe<_Neo4jDateTimeInput>;
};

export type CanBeLiked = {
  nodeId: Scalars['ID'];
  likes?: Maybe<Array<Maybe<User>>>;
  createdAt?: Maybe<_Neo4jDateTime>;
};


export type CanBeLikedLikesArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_UserOrdering>>>;
  filter?: Maybe<_UserFilter>;
};

export enum _CanBeVotedOrdering {
  NodeIdAsc = 'nodeId_asc',
  NodeIdDesc = 'nodeId_desc',
  UpVotesAsc = 'upVotes_asc',
  UpVotesDesc = 'upVotes_desc',
  DownVotesAsc = 'downVotes_asc',
  DownVotesDesc = 'downVotes_desc'
}

export type _CanBeVotedFilter = {
  AND?: Maybe<Array<_CanBeVotedFilter>>;
  OR?: Maybe<Array<_CanBeVotedFilter>>;
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
  upVotes?: Maybe<Scalars['Int']>;
  upVotes_not?: Maybe<Scalars['Int']>;
  upVotes_in?: Maybe<Array<Scalars['Int']>>;
  upVotes_not_in?: Maybe<Array<Scalars['Int']>>;
  upVotes_lt?: Maybe<Scalars['Int']>;
  upVotes_lte?: Maybe<Scalars['Int']>;
  upVotes_gt?: Maybe<Scalars['Int']>;
  upVotes_gte?: Maybe<Scalars['Int']>;
  downVotes?: Maybe<Scalars['Int']>;
  downVotes_not?: Maybe<Scalars['Int']>;
  downVotes_in?: Maybe<Array<Scalars['Int']>>;
  downVotes_not_in?: Maybe<Array<Scalars['Int']>>;
  downVotes_lt?: Maybe<Scalars['Int']>;
  downVotes_lte?: Maybe<Scalars['Int']>;
  downVotes_gt?: Maybe<Scalars['Int']>;
  downVotes_gte?: Maybe<Scalars['Int']>;
};

export type CanBeVoted = {
  nodeId: Scalars['ID'];
  upVotes?: Maybe<Scalars['Int']>;
  downVotes?: Maybe<Scalars['Int']>;
};

export type LikeResult = Question | Comment;

export type VoteResult = Question | Answer;

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
  UpVotesAsc = 'upVotes_asc',
  UpVotesDesc = 'upVotes_desc',
  DownVotesAsc = 'downVotes_asc',
  DownVotesDesc = 'downVotes_desc',
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

export type Question = CanBeCommented & CanBeLiked & CanBeVoted & {
  __typename?: 'Question';
  nodeId: Scalars['ID'];
  title: Scalars['String'];
  text: Scalars['String'];
  createdAt?: Maybe<_Neo4jDateTime>;
  updatedAt?: Maybe<_Neo4jDateTime>;
  author: User;
  answers?: Maybe<Array<Maybe<Answer>>>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  likes?: Maybe<Array<Maybe<User>>>;
  subscribers?: Maybe<Array<Maybe<User>>>;
  upVotes?: Maybe<Scalars['Int']>;
  downVotes?: Maybe<Scalars['Int']>;
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

export enum _AnswerOrdering {
  NodeIdAsc = 'nodeId_asc',
  NodeIdDesc = 'nodeId_desc',
  TextAsc = 'text_asc',
  TextDesc = 'text_desc',
  AcceptedAsc = 'accepted_asc',
  AcceptedDesc = 'accepted_desc',
  CreatedAtAsc = 'createdAt_asc',
  CreatedAtDesc = 'createdAt_desc',
  UpdatedAtAsc = 'updatedAt_asc',
  UpdatedAtDesc = 'updatedAt_desc',
  UpVotesAsc = 'upVotes_asc',
  UpVotesDesc = 'upVotes_desc',
  DownVotesAsc = 'downVotes_asc',
  DownVotesDesc = 'downVotes_desc',
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
  accepted?: Maybe<Scalars['Boolean']>;
  accepted_not?: Maybe<Scalars['Boolean']>;
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
  accepted: Scalars['Boolean'];
  createdAt?: Maybe<_Neo4jDateTime>;
  updatedAt?: Maybe<_Neo4jDateTime>;
  author: User;
  question: Question;
  comments?: Maybe<Array<Maybe<Comment>>>;
  upVotes?: Maybe<Scalars['Int']>;
  downVotes?: Maybe<Scalars['Int']>;
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
};

export type Tag = {
  __typename?: 'Tag';
  name: Scalars['String'];
  createdAt?: Maybe<_Neo4jDateTime>;
  questions?: Maybe<Array<Maybe<Question>>>;
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
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for LocalAccount type nodes. */
  LocalAccount?: Maybe<Array<Maybe<LocalAccount>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for LoginResponse type nodes. */
  LoginResponse?: Maybe<Array<Maybe<LoginResponse>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for User type nodes. */
  User?: Maybe<Array<Maybe<User>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for CanBeLiked type nodes. */
  CanBeLiked?: Maybe<Array<Maybe<CanBeLiked>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for CanBeVoted type nodes. */
  CanBeVoted?: Maybe<Array<Maybe<CanBeVoted>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for LikeResult type nodes. */
  LikeResult?: Maybe<Array<Maybe<LikeResult>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for VoteResult type nodes. */
  VoteResult?: Maybe<Array<Maybe<VoteResult>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Question type nodes. */
  Question?: Maybe<Array<Maybe<Question>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Answer type nodes. */
  Answer?: Maybe<Array<Maybe<Answer>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Comment type nodes. */
  Comment?: Maybe<Array<Maybe<Comment>>>;
  /** [Generated query](https://grandstack.io/docs/graphql-schema-generation-augmentation#generated-queries) for Tag type nodes. */
  Tag?: Maybe<Array<Maybe<Tag>>>;
};


export type QueryLocalAccountArgs = {
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['Int']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_LocalAccountOrdering>>>;
  filter?: Maybe<_LocalAccountFilter>;
};


export type QueryLoginResponseArgs = {
  nodeId?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Maybe<Role>>>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_LoginResponseOrdering>>>;
  filter?: Maybe<_LoginResponseFilter>;
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


export type QueryCanBeLikedArgs = {
  nodeId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<_Neo4jDateTimeInput>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_CanBeLikedOrdering>>>;
  filter?: Maybe<_CanBeLikedFilter>;
};


export type QueryCanBeVotedArgs = {
  nodeId?: Maybe<Scalars['ID']>;
  upVotes?: Maybe<Scalars['Int']>;
  downVotes?: Maybe<Scalars['Int']>;
  _id?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_CanBeVotedOrdering>>>;
  filter?: Maybe<_CanBeVotedFilter>;
};


export type QueryLikeResultArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryVoteResultArgs = {
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
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
  accepted?: Maybe<Scalars['Boolean']>;
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
  Register: LoginResponse;
  SignIn: LoginResponse;
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
  EditComment: Comment;
  DeleteComment: DeleteCommentResponse;
  AddTag: Tag;
  DeleteTag: DeleteTagResponse;
  ToggleLike: LikeResult;
  ToggleSubscribe: Question;
  Vote: VoteResult;
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
  data: NodeIdInput;
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


export type MutationAddCommentArgs = {
  data: AddCommentInput;
};


export type MutationEditCommentArgs = {
  data: EditCommentInput;
};


export type MutationDeleteCommentArgs = {
  data: NodeIdInput;
};


export type MutationAddTagArgs = {
  data: AddTagInput;
};


export type MutationDeleteTagArgs = {
  data: DeleteTagInput;
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
  nodeIdInput: NodeIdInput;
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
  EditCommentInput: EditCommentInput;
  AddTagInput: AddTagInput;
  VoteInput: VoteInput;
  DeleteQuestionResponse: ResolverTypeWrapper<DeleteQuestionResponse>;
  DeleteAnswerResponse: ResolverTypeWrapper<DeleteAnswerResponse>;
  DeleteCommentResponse: ResolverTypeWrapper<DeleteCommentResponse>;
  DeleteTagResponse: ResolverTypeWrapper<DeleteTagResponse>;
  SignedToken: ResolverTypeWrapper<SignedToken>;
  _LocalAccountOrdering: _LocalAccountOrdering;
  _LocalAccountFilter: _LocalAccountFilter;
  LocalAccount: ResolverTypeWrapper<LocalAccount>;
  _LoginResponseOrdering: _LoginResponseOrdering;
  _LoginResponseFilter: _LoginResponseFilter;
  LoginResponse: ResolverTypeWrapper<LoginResponse>;
  _UserOrdering: _UserOrdering;
  _UserFilter: _UserFilter;
  User: ResolverTypeWrapper<User>;
  RedirectUri: ResolverTypeWrapper<RedirectUri>;
  CanBeCommented: ResolversTypes['Question'] | ResolversTypes['Answer'];
  _CanBeLikedOrdering: _CanBeLikedOrdering;
  _CanBeLikedFilter: _CanBeLikedFilter;
  CanBeLiked: ResolversTypes['Question'] | ResolversTypes['Comment'];
  _CanBeVotedOrdering: _CanBeVotedOrdering;
  _CanBeVotedFilter: _CanBeVotedFilter;
  CanBeVoted: ResolversTypes['Question'] | ResolversTypes['Answer'];
  LikeResult: ResolversTypes['Question'] | ResolversTypes['Comment'];
  VoteResult: ResolversTypes['Question'] | ResolversTypes['Answer'];
  _QuestionOrdering: _QuestionOrdering;
  _QuestionFilter: _QuestionFilter;
  Question: ResolverTypeWrapper<Question>;
  _AnswerOrdering: _AnswerOrdering;
  _AnswerFilter: _AnswerFilter;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Answer: ResolverTypeWrapper<Answer>;
  _CommentOrdering: _CommentOrdering;
  _CommentFilter: _CommentFilter;
  Comment: ResolverTypeWrapper<Comment>;
  _TagOrdering: _TagOrdering;
  _TagFilter: _TagFilter;
  Tag: ResolverTypeWrapper<Tag>;
  Liked: ResolverTypeWrapper<Liked>;
  Rank: Rank;
  VoteIntention: VoteIntention;
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
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  RegisterUserInput: RegisterUserInput;
  String: Scalars['String'];
  LoginUserInput: LoginUserInput;
  EmailInput: EmailInput;
  nodeIdInput: NodeIdInput;
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
  EditCommentInput: EditCommentInput;
  AddTagInput: AddTagInput;
  VoteInput: VoteInput;
  DeleteQuestionResponse: DeleteQuestionResponse;
  DeleteAnswerResponse: DeleteAnswerResponse;
  DeleteCommentResponse: DeleteCommentResponse;
  DeleteTagResponse: DeleteTagResponse;
  SignedToken: SignedToken;
  _LocalAccountFilter: _LocalAccountFilter;
  LocalAccount: LocalAccount;
  _LoginResponseFilter: _LoginResponseFilter;
  LoginResponse: LoginResponse;
  _UserFilter: _UserFilter;
  User: User;
  RedirectUri: RedirectUri;
  CanBeCommented: ResolversParentTypes['Question'] | ResolversParentTypes['Answer'];
  _CanBeLikedFilter: _CanBeLikedFilter;
  CanBeLiked: ResolversParentTypes['Question'] | ResolversParentTypes['Comment'];
  _CanBeVotedFilter: _CanBeVotedFilter;
  CanBeVoted: ResolversParentTypes['Question'] | ResolversParentTypes['Answer'];
  LikeResult: ResolversParentTypes['Question'] | ResolversParentTypes['Comment'];
  VoteResult: ResolversParentTypes['Question'] | ResolversParentTypes['Answer'];
  _QuestionFilter: _QuestionFilter;
  Question: Question;
  _AnswerFilter: _AnswerFilter;
  Boolean: Scalars['Boolean'];
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

export type DeleteCommentResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteCommentResponse'] = ResolversParentTypes['DeleteCommentResponse']> = ResolversObject<{
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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

export type LocalAccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['LocalAccount'] = ResolversParentTypes['LocalAccount']> = ResolversObject<{
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<LocalAccountUserArgs, never>>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoginResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoginResponse'] = ResolversParentTypes['LoginResponse']> = ResolversObject<{
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
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
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  surname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rank?: Resolver<ResolversTypes['Rank'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['_Neo4jDateTime']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  roles?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['LocalAccount']>, ParentType, ContextType, RequireFields<UserEmailArgs, never>>;
  questions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Question']>>>, ParentType, ContextType, RequireFields<UserQuestionsArgs, never>>;
  answers?: Resolver<Maybe<Array<Maybe<ResolversTypes['Answer']>>>, ParentType, ContextType, RequireFields<UserAnswersArgs, never>>;
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tag']>>>, ParentType, ContextType, RequireFields<UserTagsArgs, never>>;
  comments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Comment']>>>, ParentType, ContextType, RequireFields<UserCommentsArgs, never>>;
  liked?: Resolver<Maybe<Array<Maybe<ResolversTypes['CanBeLiked']>>>, ParentType, ContextType, RequireFields<UserLikedArgs, never>>;
  subscriptions?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<UserSubscriptionsArgs, never>>;
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RedirectUriResolvers<ContextType = any, ParentType extends ResolversParentTypes['RedirectUri'] = ResolversParentTypes['RedirectUri']> = ResolversObject<{
  redirect?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ResponseStatus'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CanBeCommentedResolvers<ContextType = any, ParentType extends ResolversParentTypes['CanBeCommented'] = ResolversParentTypes['CanBeCommented']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Question' | 'Answer', ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
}>;

export type CanBeLikedResolvers<ContextType = any, ParentType extends ResolversParentTypes['CanBeLiked'] = ResolversParentTypes['CanBeLiked']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Question' | 'Comment', ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  likes?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<CanBeLikedLikesArgs, never>>;
  createdAt?: Resolver<Maybe<ResolversTypes['_Neo4jDateTime']>, ParentType, ContextType>;
}>;

export type CanBeVotedResolvers<ContextType = any, ParentType extends ResolversParentTypes['CanBeVoted'] = ResolversParentTypes['CanBeVoted']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Question' | 'Answer', ParentType, ContextType>;
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  upVotes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  downVotes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
}>;

export type LikeResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['LikeResult'] = ResolversParentTypes['LikeResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Question' | 'Comment', ParentType, ContextType>;
}>;

export type VoteResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['VoteResult'] = ResolversParentTypes['VoteResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Question' | 'Answer', ParentType, ContextType>;
}>;

export type QuestionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Question'] = ResolversParentTypes['Question']> = ResolversObject<{
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['_Neo4jDateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['_Neo4jDateTime']>, ParentType, ContextType>;
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QuestionAuthorArgs, never>>;
  answers?: Resolver<Maybe<Array<Maybe<ResolversTypes['Answer']>>>, ParentType, ContextType, RequireFields<QuestionAnswersArgs, never>>;
  comments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Comment']>>>, ParentType, ContextType, RequireFields<QuestionCommentsArgs, never>>;
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tag']>>>, ParentType, ContextType, RequireFields<QuestionTagsArgs, never>>;
  likes?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<QuestionLikesArgs, never>>;
  subscribers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<QuestionSubscribersArgs, never>>;
  upVotes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  downVotes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AnswerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Answer'] = ResolversParentTypes['Answer']> = ResolversObject<{
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  accepted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['_Neo4jDateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['_Neo4jDateTime']>, ParentType, ContextType>;
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<AnswerAuthorArgs, never>>;
  question?: Resolver<ResolversTypes['Question'], ParentType, ContextType, RequireFields<AnswerQuestionArgs, never>>;
  comments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Comment']>>>, ParentType, ContextType, RequireFields<AnswerCommentsArgs, never>>;
  upVotes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  downVotes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = ResolversObject<{
  nodeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['_Neo4jDateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['_Neo4jDateTime']>, ParentType, ContextType>;
  author?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<CommentAuthorArgs, never>>;
  topic?: Resolver<Maybe<ResolversTypes['CanBeCommented']>, ParentType, ContextType>;
  likes?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<CommentLikesArgs, never>>;
  _id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TagResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag']> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['_Neo4jDateTime']>, ParentType, ContextType>;
  questions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Question']>>>, ParentType, ContextType, RequireFields<TagQuestionsArgs, never>>;
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
  LocalAccount?: Resolver<Maybe<Array<Maybe<ResolversTypes['LocalAccount']>>>, ParentType, ContextType, RequireFields<QueryLocalAccountArgs, never>>;
  LoginResponse?: Resolver<Maybe<Array<Maybe<ResolversTypes['LoginResponse']>>>, ParentType, ContextType, RequireFields<QueryLoginResponseArgs, never>>;
  User?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<QueryUserArgs, never>>;
  CanBeLiked?: Resolver<Maybe<Array<Maybe<ResolversTypes['CanBeLiked']>>>, ParentType, ContextType, RequireFields<QueryCanBeLikedArgs, never>>;
  CanBeVoted?: Resolver<Maybe<Array<Maybe<ResolversTypes['CanBeVoted']>>>, ParentType, ContextType, RequireFields<QueryCanBeVotedArgs, never>>;
  LikeResult?: Resolver<Maybe<Array<Maybe<ResolversTypes['LikeResult']>>>, ParentType, ContextType, RequireFields<QueryLikeResultArgs, never>>;
  VoteResult?: Resolver<Maybe<Array<Maybe<ResolversTypes['VoteResult']>>>, ParentType, ContextType, RequireFields<QueryVoteResultArgs, never>>;
  Question?: Resolver<Maybe<Array<Maybe<ResolversTypes['Question']>>>, ParentType, ContextType, RequireFields<QueryQuestionArgs, never>>;
  Answer?: Resolver<Maybe<Array<Maybe<ResolversTypes['Answer']>>>, ParentType, ContextType, RequireFields<QueryAnswerArgs, never>>;
  Comment?: Resolver<Maybe<Array<Maybe<ResolversTypes['Comment']>>>, ParentType, ContextType, RequireFields<QueryCommentArgs, never>>;
  Tag?: Resolver<Maybe<Array<Maybe<ResolversTypes['Tag']>>>, ParentType, ContextType, RequireFields<QueryTagArgs, never>>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  Register?: Resolver<ResolversTypes['LoginResponse'], ParentType, ContextType, RequireFields<MutationRegisterArgs, 'data'>>;
  SignIn?: Resolver<ResolversTypes['LoginResponse'], ParentType, ContextType, RequireFields<MutationSignInArgs, 'data'>>;
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
  EditComment?: Resolver<ResolversTypes['Comment'], ParentType, ContextType, RequireFields<MutationEditCommentArgs, 'data'>>;
  DeleteComment?: Resolver<ResolversTypes['DeleteCommentResponse'], ParentType, ContextType, RequireFields<MutationDeleteCommentArgs, 'data'>>;
  AddTag?: Resolver<ResolversTypes['Tag'], ParentType, ContextType, RequireFields<MutationAddTagArgs, 'data'>>;
  DeleteTag?: Resolver<ResolversTypes['DeleteTagResponse'], ParentType, ContextType, RequireFields<MutationDeleteTagArgs, 'data'>>;
  ToggleLike?: Resolver<ResolversTypes['LikeResult'], ParentType, ContextType, RequireFields<MutationToggleLikeArgs, 'data'>>;
  ToggleSubscribe?: Resolver<ResolversTypes['Question'], ParentType, ContextType, RequireFields<MutationToggleSubscribeArgs, 'data'>>;
  Vote?: Resolver<ResolversTypes['VoteResult'], ParentType, ContextType, RequireFields<MutationVoteArgs, 'data'>>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  DeleteQuestionResponse?: DeleteQuestionResponseResolvers<ContextType>;
  DeleteAnswerResponse?: DeleteAnswerResponseResolvers<ContextType>;
  DeleteCommentResponse?: DeleteCommentResponseResolvers<ContextType>;
  DeleteTagResponse?: DeleteTagResponseResolvers<ContextType>;
  SignedToken?: SignedTokenResolvers<ContextType>;
  LocalAccount?: LocalAccountResolvers<ContextType>;
  LoginResponse?: LoginResponseResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  RedirectUri?: RedirectUriResolvers<ContextType>;
  CanBeCommented?: CanBeCommentedResolvers<ContextType>;
  CanBeLiked?: CanBeLikedResolvers<ContextType>;
  CanBeVoted?: CanBeVotedResolvers<ContextType>;
  LikeResult?: LikeResultResolvers<ContextType>;
  VoteResult?: VoteResultResolvers<ContextType>;
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