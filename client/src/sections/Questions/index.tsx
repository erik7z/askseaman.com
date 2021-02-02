import React from 'react'
import { Link } from 'react-router-dom'
import { useQuestionQuery } from '../../generated/graphql'

export const Questions = () => {
	const { data, loading, error } = useQuestionQuery()

	const questions = data?.Question

	const questionsList = questions ? (
		<ul>
			{questions.map((question) => {
				return <li key={question?.nodeId}>{question?.title}</li>
			})}
		</ul>
	) : null

	const loadingMessage = loading ? <h4>Loading in progress</h4> : null
	const errorMessage = error ? <h4>Error occured. Try again later :(</h4> : null
	return (
		<>
			<div className='main-content col-xl-8'>
				<div className='row'>
					<div className='col-md-12'>
						<form action='/' className='search-form'>
							<div className='form-group'>
								<span className='icon icon-search'></span>
								<input
									type='text'
									className='form-control'
									placeholder='Search for question or #tag'
								/>
							</div>
						</form>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-12'>
						<h5 className='module-header'>&gt; All Questions</h5>
						<hr className='hr-header hr-bold' />
						<div className='main-sorting'>
							<div
								className='btn-group btn-group-sm'
								role='group'
								aria-label='Basic outlined example'
							>
								<button type='button' className='btn btn-outline-primary'>
									New Questions
								</button>
								<button type='button' className='btn btn-outline-secondary'>
									Hot
								</button>
								<button type='button' className='btn btn-outline-secondary'>
									Without Answer
								</button>
							</div>
							<div
								className='sorting-group btn-group btn-group-sm'
								aria-label='Sorting'
							>
								<button
									id='btnGroupDrop1'
									type='button'
									className='btn btn-outline-secondary'
								>
									Sort
									<i className='icon-arrow-down'></i>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className='question-item row'>
					<div className='col-md-12'>
						<div className='row'>
							<div className='col-md-9'>
								<div className='d-md-flex'>
									<div className='text'>
										<span className='tag'>
											<Link to='single.html'>
												<i className='icon-tag'></i> CDI
											</Link>
										</span>
										<span className='tag'>
											<Link to='single.html'>
												<i className='icon-tag'></i> INSPECTIONS
											</Link>
										</span>
										<span className='tag'>
											<Link to='single.html'>
												<i className='icon-tag'></i> LPG
											</Link>
										</span>
										<h5 className='header'>
											<Link to='question-page.html'>
												How to pass a CDI inspection ?
											</Link>
										</h5>
										<div className='meta d-md-flex align-items-center'>
											<a
												href='/subscribe'
												className='btn btn-sm btn-outline-primary mr-1'
											>
												Subscribe | <b>3</b>
											</a>
											<span>
												<i className='icon-eye'></i>154 Views
											</span>
											<span>
												<i className='icon-clock-o'></i>15 Minutes ago
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className='col-md-3 text-center pt-1'>
								<Link to='question-page.html'>
									<span className='answers-count'> 12 </span>
									<br />
									<span className='answers-count-text'> answers </span>
								</Link>
							</div>
						</div>
						<hr />
					</div>
				</div>

				<div className='row'>
					<div className='col'>
						<div className='block-27'>
							<ul>
								<li>
									<Link to='/#'>&lt;</Link>
								</li>
								<li className='active'>
									<span>1</span>
								</li>
								<li>
									<Link to='/#'>2</Link>
								</li>
								<li>
									<Link to='/#'>3</Link>
								</li>
								<li>
									<Link to='/#'>4</Link>
								</li>
								<li>
									<Link to='/#'>5</Link>
								</li>
								<li>
									<Link to='/#'>&gt;</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className='col-xl-4 sidebar bg-blue-gray'>
				<div className='row'>
					<div className='col-md-12 text-center'>
						<div className='sidebar-box'>
							<Link
								to='ask-question.html'
								className='btn btn-warning px-5 py-2'
							>
								Ask Question
							</Link>
						</div>
					</div>
				</div>

				<div className='row'>
					<div className='col-md-12 bg-blue'>
						<div
							className='sidebar-box subs-wrap img'
							style={{ backgroundImage: 'url(images/img_1.jpg)' }}
						>
							<div className='overlay'></div>
							<h3 className='sidebar-heading'>Advertisement</h3>
							<p>Send your CV to our cool crewing !</p>
							<form action='/#' className='subscribe-form'>
								<div className='form-group'>
									<input
										type='text'
										className='form-control'
										placeholder='Email Address'
									/>
									<input
										type='submit'
										value='Subscribe'
										className='mt-2 btn btn-white submit'
									/>
								</div>
							</form>
						</div>

						<div className='sidebar-box'>
							<ul className='tagcloud'>
								<Link to='/' className='tag-cloud-link'>
									animals
								</Link>
								<Link to='/tag' className='tag-cloud-link'>
									human
								</Link>
								<Link to='/tag' className='tag-cloud-link'>
									people
								</Link>
								<Link to='/tag' className='tag-cloud-link'>
									cat
								</Link>
								<Link to='/tag' className='tag-cloud-link'>
									dog
								</Link>
								<Link to='/tag' className='tag-cloud-link'>
									nature
								</Link>
								<Link to='/tag' className='tag-cloud-link'>
									leaves
								</Link>
								<Link to='/tag' className='tag-cloud-link'>
									food
								</Link>
							</ul>
						</div>
						<div className='sidebar-box'>
							<h3 className='sidebar-heading'>Active Users</h3>
							<div className='sidebar-item d-flex'>
								<Link
									to='/user'
									className='author-avatar mr-2'
									style={{ backgroundImage: 'url(images/person_3.jpg)' }}
								></Link>
								<div className='wrapper'>
									<h5 className='author-name'>
										<Link to='/user'>Grisha Ptitseedov</Link>
									</h5>
									<div className='meta d-md-flex align-items-center'>
										<span>
											<i className='icon-help'></i>154 Questions
										</span>
										<span>
											<i className='icon-chat'></i>15 Answers
										</span>
									</div>
								</div>
							</div>
							<div className='sidebar-item d-flex'>
								<Link
									to='/user'
									className='author-avatar mr-2'
									style={{ backgroundImage: 'url(images/person_3.jpg)' }}
								></Link>
								<div className='wrapper'>
									<h4 className='author-name'>
										<Link to='/#'>Grisha Ptitseedov</Link>
									</h4>
									<div className='meta d-md-flex align-items-center'>
										<span>
											<i className='icon-help'></i>154 Questions
										</span>
										<span>
											<i className='icon-chat'></i>15 Answers
										</span>
									</div>
								</div>
							</div>
						</div>

						<div className='sidebar-box'>
							<h3 className='sidebar-heading'>Top for last 24 hours</h3>
							<div className='d-flex'>
								<div className='text'>
									<h5 className='heading'>
										<Link to='/questions'>
											What are the largest vessels in world?
										</Link>
									</h5>
									<div className='meta d-md-flex align-items-center'>
										<span>
											<i className='icon-user'></i>12 Subscribers
										</span>
										<span>
											<i className='icon-chat'></i>11 Answers
										</span>
									</div>
									<hr />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<h2>Askseaman Questions</h2>
			{errorMessage}
			{loadingMessage}
			{questionsList}
		</>
	)
}
