import { useEffect, useContext } from 'react'

import { useCurrentUserLazyQuery } from '../../types/generated-frontend'

import { CurrentUserContext } from '../contexts'
import { TOKEN_FIELD } from '../../globals'

export const useAuthCurrentUser = () => {
	const [userContext, userDispatch] = useContext(CurrentUserContext)

	const [
		getCurrentUser,
		{ data: currentUserResponse },
	] = useCurrentUserLazyQuery({ fetchPolicy: 'cache-and-network' })

	useEffect(() => {
		getCurrentUser()
		// console.log('auth useffect')
		if (currentUserResponse && localStorage.getItem(TOKEN_FIELD)) {
			userDispatch({
				type: 'SIGN_IN',
				payload: currentUserResponse,
			})
		}
	}, [userContext.token, currentUserResponse, userDispatch, getCurrentUser])
}
