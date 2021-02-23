import React, { useEffect, useContext } from 'react'
import ReactDOM from 'react-dom'
import {
	ApolloClient,
	HttpLink,
	ApolloLink,
	InMemoryCache,
	concat,
	ApolloProvider,
} from '@apollo/client'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'

import { CurrentUserProvider, CurrentUserContext } from './lib/contexts'
import { TOKEN_FIELD, HOST_URI } from './env'
import AuthLayout from './components/Layout/Auth'
import MainLayout from './components/Layout'
import { Auth, Me, NotFound, Questions, Tags, Users } from './sections'

import { Tag } from './sections/Tags/Tag'
import { User } from './sections/Users/User'
import { Question } from './sections/Questions/Question'
import { AskQuestion } from './sections/Questions/AskQuestion'
import { Notifications } from './sections/Me/Notifications'
import { Register } from './sections/Auth/Register'

import { useCurrentUserLazyQuery } from './types/generated-frontend'

import reportWebVitals from './reportWebVitals'

const httpLink = new HttpLink({ uri: HOST_URI })

const authMiddleware = new ApolloLink((operation, forward) => {
	const token = localStorage.getItem('token')

	operation.setContext({
		headers: {
			authorization: token ? `Bearer ${token}` : '',
		},
	})
	return forward(operation)
})

const client = new ApolloClient({
	cache: new InMemoryCache({
		typePolicies: {
			TokenResponse: {
				keyFields: [],
			},
			FormError: {
				keyFields: [],
			},
		},
	}),
	link: concat(authMiddleware, httpLink),
})

export const App = () => {
	const [userContext, userDispatch] = useContext(CurrentUserContext)

	const [
		getCurrentUser,
		{ data: currentUserResponse },
	] = useCurrentUserLazyQuery({ fetchPolicy: 'cache-and-network' })

	useEffect(() => {
		getCurrentUser()
		console.log('auth useffect')
		if (currentUserResponse && localStorage.getItem(TOKEN_FIELD)) {
			userDispatch({
				type: 'SIGN_IN',
				payload: currentUserResponse,
			})
		}
	}, [userContext.token, currentUserResponse, userDispatch, getCurrentUser])

	return (
		<Router>
			<Switch>
				<Route path={['/auth', '/register']}>
					<AuthLayout>
						<Switch>
							<Route exact path='/auth' component={Auth} />
							<Route exact path='/register' component={Register} />
						</Switch>
					</AuthLayout>
				</Route>
				<Route
					path={[
						'/',
						'/questions',
						'/question',
						'/ask',
						'/user',
						'/me',
						'/me/notifications',
						'/tags',
						'/tag',
					]}
				>
					<MainLayout>
						<Switch>
							<Route exact path='/'>
								<Questions />
							</Route>
							<Route path='/question/:questionId'>
								<Question />
							</Route>
							<Route exact path='/ask' component={AskQuestion} />
							<Route exact path='/user'>
								<User />
							</Route>
							<Route exact path='/me'>
								<Me />
							</Route>
							<Route exact path='/me/notifications'>
								<Notifications />
							</Route>
							<Route exact path='/tags'>
								<Tags />
							</Route>
							<Route exact path='/tag'>
								<Tag />
							</Route>
							<Route exact path='/users'>
								<Users />
							</Route>

							<Route>
								<NotFound />
							</Route>
						</Switch>
					</MainLayout>
				</Route>
			</Switch>
		</Router>
	)
}

ReactDOM.render(
	// <React.StrictMode>
	<ApolloProvider client={client}>
		<CurrentUserProvider>
			<App />
		</CurrentUserProvider>
	</ApolloProvider>,
	// </React.StrictMode>,
	document.getElementById('root')
)

reportWebVitals()
