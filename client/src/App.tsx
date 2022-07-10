import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import AuthLayout from './components/Layout/Auth'
import MainLayout from './components/Layout'
import { Auth, MyFeed, NotFound, Tags, Users, Questions } from './sections'

import { Tag } from './sections/Tags/Tag'
import { User } from './sections/Users/User'
import { Question } from './sections/Questions/Question'
import { AskQuestion } from './sections/Questions/AskQuestion'
import { Register } from './sections/Auth/Register'
import { useAuthCurrentUser } from './lib/hooks/'
import { QuestionsProvider, AnswersProvider } from './lib/contexts'
import { Settings } from './sections/My/Settings'
import { Notifications } from './sections/My/Notifications'
import { MySubscriptions } from './sections/My/MySubscriptions'
import { About } from './sections/About'

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
							<Route exact path={['/', '/questions']}>
								<QuestionsProvider>
									<Questions />
								</QuestionsProvider>
							</Route>
							<Route path='/question/:questionId'>
								<AnswersProvider>
									<Question />
								</AnswersProvider>
							</Route>
							<Route exact path='/ask'>
								<QuestionsProvider>
									<AskQuestion />
								</QuestionsProvider>
							</Route>
							<Route exact path='/users'>
								<Users />
							</Route>
							<Route exact path='/user/:userId'>
								<AnswersProvider>
									<User />
								</AnswersProvider>
							</Route>
							<Route exact path='/my/feed'>
								<MyFeed />
							</Route>
							<Route exact path='/my/subscriptions'>
								<MySubscriptions />
							</Route>
							<Route exact path='/my/notifications'>
								<Notifications />
							</Route>
							<Route exact path='/my/settings'>
								<Settings />
							</Route>
							<Route exact path='/tags'>
								<Tags />
							</Route>
							<Route exact path='/tag/:tagName'>
								<Tag />
							</Route>
							<Route exact path='/about'>
								<About />
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
