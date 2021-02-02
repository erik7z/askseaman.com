import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/client'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'

import Layout from './Layout'
import { Auth, Me, NotFound, Questions, Tags, Users } from './sections'
import reportWebVitals from './reportWebVitals'

const client = new ApolloClient({
	uri: 'http://localhost:4000',
	cache: new InMemoryCache(),
})

export const App = () => {
	return (
		<Router>
			<Layout>
				<Switch>
					<Route exact path='/'>
						<Questions />
					</Route>
					<Route exact path='/me'>
						<Me />
					</Route>
					<Route exact path='/auth'>
						<Auth />
					</Route>
					<Route exact path='/tags'>
						<Tags />
					</Route>
					<Route exact path='/users'>
						<Users />
					</Route>
					<Route>
						<NotFound />
					</Route>
				</Switch>
			</Layout>
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
