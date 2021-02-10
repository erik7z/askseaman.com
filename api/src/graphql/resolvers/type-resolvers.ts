import { Resolvers } from '../../types/generated-backend'
import { ApolloServerContext } from '../../types/backend'

import { ranks } from './../../data/ranks'

const typeResolvers: Resolvers<ApolloServerContext> = {
	UserRank: ranks,
}

export default typeResolvers
