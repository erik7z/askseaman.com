import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import AuthLayout from './components/Layout/Auth'
import MainLayout from './components/Layout'
import { Auth, Me, NotFound, Questions, Tags, Users } from './sections'

import { Tag } from './sections/Tags/Tag'
import { User } from './sections/Users/User'
import { Question } from './sections/Questions/Question'
import { AskQuestion } from './sections/Questions/AskQuestion'
import { Notifications } from './sections/Me/Notifications'
import { Settings } from './sections/Me/Settings'
import { Register } from './sections/Auth/Register'
import { useAuthCurrentUser } from './lib/hooks/'

export const App = () => {
	useAuthCurrentUser()

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
						'/me/settings',
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
							<Route exact path='/me/settings'>
								<Settings />
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
