import merge from 'lodash.merge'

import questionResolvers from './question-resolvers'
import userResolvers from './user-resolvers'
import typeResolvers from './type-resolvers'
import answerResolvers from './answer-resolvers'

export const resolvers = merge(
	typeResolvers,
	userResolvers,
	questionResolvers,
	answerResolvers
)
