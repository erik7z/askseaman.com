import merge from 'lodash.merge'

import questionResolvers from './question-resolvers'
import userResolvers from './user-resolvers'

export const resolvers = merge(userResolvers, questionResolvers)
