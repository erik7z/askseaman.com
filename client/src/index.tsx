import React from 'react'
import ReactDOM from 'react-dom'
import {
	ApolloClient,
	HttpLink,
	ApolloLink,
	InMemoryCache,
	concat,
	ApolloProvider,
} from '@apollo/client'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'

import { App } from './App'

import { CurrentUserProvider } from './lib/contexts'
import { GRAPHQL_HOST, GRAPHQL_PORT } from './env'

import reportWebVitals from './reportWebVitals'

const httpLink = new HttpLink({ uri: `${GRAPHQL_HOST}:${GRAPHQL_PORT}` })

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
	uri: `${GRAPHQL_HOST}:${GRAPHQL_PORT}`,
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
