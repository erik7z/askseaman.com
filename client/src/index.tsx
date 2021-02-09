import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/client'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'

import AuthLayout from './Layout/Auth'
import MainLayout from './Layout'
import { Auth, Me, NotFound, Questions, Tags, Users } from './sections'

import { Tag } from './sections/Tags/Tag'
import { User } from './sections/Users/User'
import { Question } from './sections/Questions/Question'
import { AskQuestion } from './sections/Questions/AskQuestion'
import { Notifications } from './sections/Me/Notifications'
import { Register } from './sections/Auth/Register'

import reportWebVitals from './reportWebVitals'

const client = new ApolloClient({
	uri: 'http://localhost:4000',
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
})

export const App = () => {
	return (
		<Router>
			<Switch>
				<Route path={['/auth', '/register']}>
					<AuthLayout>
						<Switch>
							<Route exact path='/auth'>
								<Auth />
							</Route>
							<Route exact path='/register'>
								<Register />
							</Route>
						</Switch>
					</AuthLayout>
				</Route>

				<MainLayout>
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
						<Switch>
							<Route exact path='/'>
								<Questions />
							</Route>
							<Route exact path='/question'>
								<Question />
							</Route>
							<Route exact path='/ask'>
								<AskQuestion />
							</Route>
							<Route exact path='/user'>
								<User />
							</Route>
							<Route exact path='/me'>
								<Me />
							</Route>
							<Route exact path='/notifications'>
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
					</Route>
				</MainLayout>
			</Switch>
		</Router>
	)
}

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById('root')
)

reportWebVitals()
