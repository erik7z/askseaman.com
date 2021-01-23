import merge from 'lodash.merge'
import questionResolvers from './question-resolvers.js'
import userResolvers from './user-resolvers.js'

export const resolvers = merge(userResolvers, questionResolvers)
