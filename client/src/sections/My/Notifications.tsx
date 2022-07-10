import React from 'react'
import { Link } from 'react-router-dom'

export const Notifications = () => {
	return (
		<>
			<div className='main-content col-xl-8'>
				<div className='row'>
					<div className='col-md-12'>
						<form action='#' className='search-form'>
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
						<h5 className='module-header'>&gt; Notifications</h5>
						<hr className='hr-header hr-bold' />
						<div className='notification-item row'>
							<div className='col-md-1 col-1 d-flex d-md-flex align-items-center'>
								<span>
									<Link to='tags.html'>
										<i className='icon-size-sm radio-button-off-outline'></i>
									</Link>
								</span>
							</div>
							<div className='col-md-1 col-2 d-flex d-md-flex align-items-center p-md-0'>
								<span>
									<i
										className='icon-size-md checkbox'
										style={{ color: 'rgb(59, 204, 59)' }}
									></i>
								</span>
							</div>
							<div className='col-md-10 col-9 pl-0'>
								<Link to='#' className='text-secondary'>
									<b>Andrey Balkonsky</b>
								</Link>
								approved an answer on question you subscribed:
								<Link to='question-page.html'>
									What to do if my Master is idiot ?
								</Link>
								<div className='meta d-md-flex align-items-center'>
									<span>
										<i className='icon-clock-o'></i>12 Minutes ago
									</span>
								</div>
							</div>

							<div className='col-md-12'>
								<hr className='my-2' />
							</div>
						</div>

						<div className='notification-item row'>
							<div className='col-md-1 col-1 d-flex d-md-flex align-items-center'>
								<span>
									<Link to='tags.html'>
										<i className='icon-size-sm radio-button-on'></i>
									</Link>
								</span>
							</div>
							<div className='col-md-1 col-2 d-flex d-md-flex align-items-center p-md-0'>
								<span>
									<i
										className='icon-size-md chatbubble-ellipses'
										style={{ color: '#f8ab32' }}
									></i>
								</span>
							</div>
							<div className='col-md-10 col-9 pl-0'>
								<Link to='#' className='text-secondary'>
									<b>Boris Gadov</b>
								</Link>
								has answered on question:
								<Link to='question-page.html'>
									Can i milk my cat on board ?
								</Link>
								<div className='meta d-md-flex align-items-center'>
									<span>
										<i className='icon-clock-o'></i>44 Minutes ago
									</span>
								</div>
							</div>

							<div className='col-md-12'>
								<hr className='my-2' />
							</div>
						</div>

						<div className='notification-item row'>
							<div className='col-md-1 col-1 d-flex d-md-flex align-items-center'>
								<span>
									<Link to='tags.html'>
										<i className='icon-size-sm radio-button-on'></i>
									</Link>
								</span>
							</div>
							<div className='col-md-1 col-2 d-flex d-md-flex align-items-center p-md-0'>
								<span>
									<i
										className='icon-size-md chatbubbles'
										style={{ color: '#32ddf8' }}
									></i>
								</span>
							</div>
							<div className='col-md-10 col-9 pl-0'>
								<Link to='#' className='text-secondary'>
									<b>Boris Harlamov</b>
								</Link>
								has commented your answer on question:
								<Link to='question-page.html'>
									Can i milk my cat on board ?
								</Link>
								<div className='meta d-md-flex align-items-center'>
									<span>
										{' '}
										<i className='icon-clock-o'></i>3 hours ago{' '}
									</span>
								</div>
							</div>

							<div className='col-md-12'>
								<hr className='my-2' />
							</div>
						</div>

						<div className='notification-item row'>
							<div className='col-md-1 col-1 d-flex d-md-flex align-items-center'>
								<span>
									<Link to='tags.html'>
										<i className='icon-size-sm radio-button-off-outline'></i>
									</Link>
								</span>
							</div>
							<div className='col-md-1 col-2 d-flex d-md-flex align-items-center p-md-0'>
								<span>
									<i
										className='icon-size-md checkbox'
										style={{ color: 'rgb(59, 204, 59)' }}
									></i>
								</span>
							</div>
							<div className='col-md-10 col-9 pl-0'>
								<Link to='#' className='text-secondary'>
									<b>Andrey Balkonsky</b>
								</Link>
								approved an answer on question you subscribed:
								<Link to='question-page.html'>
									What to do if my Master is idiot ?
								</Link>
								<div className='meta d-md-flex align-items-center'>
									<span>
										<i className='icon-clock-o'></i>12 Minutes ago
									</span>
								</div>
							</div>

							<div className='col-md-12'>
								<hr className='my-2' />
							</div>
						</div>

						<div className='notification-item row'>
							<div className='col-md-1 col-1 d-flex d-md-flex align-items-center'>
								<span>
									<Link to='tags.html'>
										<i className='icon-size-sm radio-button-on'></i>
									</Link>
								</span>
							</div>
							<div className='col-md-1 col-2 d-flex d-md-flex align-items-center p-md-0'>
								<span>
									<i
										className='icon-size-md chatbubble-ellipses'
										style={{ color: '#f8ab32' }}
									></i>
								</span>
							</div>
							<div className='col-md-10 col-9 pl-0'>
								<Link to='#' className='text-secondary'>
									<b>Boris Gadov</b>
								</Link>
								has answered on question:
								<Link to='question-page.html'>
									Can i milk my cat on board ?
								</Link>
								<div className='meta d-md-flex align-items-center'>
									<span>
										<i className='icon-clock-o'></i>44 Minutes ago
									</span>
								</div>
							</div>

							<div className='col-md-12'>
								<hr className='my-2' />
							</div>
						</div>

						<div className='notification-item row'>
							<div className='col-md-1 col-1 d-flex d-md-flex align-items-center'>
								<span>
									<Link to='tags.html'>
										<i className='icon-size-sm radio-button-on'></i>
									</Link>
								</span>
							</div>
							<div className='col-md-1 col-2 d-flex d-md-flex align-items-center p-md-0'>
								<span>
									<i
										className='icon-size-md chatbubbles'
										style={{ color: '#32ddf8' }}
									></i>
								</span>
							</div>
							<div className='col-md-10 col-9 pl-0'>
								<Link to='#' className='text-secondary'>
									<b>Boris Harlamov</b>
								</Link>
								has commented your answer on question:
								<Link to='question-page.html'>
									Can i milk my cat on board ?
								</Link>
								<div className='meta d-md-flex align-items-center'>
									<span>
										{' '}
										<i className='icon-clock-o'></i>3 hours ago{' '}
									</span>
								</div>
							</div>

							<div className='col-md-12'>
								<hr className='my-2' />
							</div>
						</div>
					</div>
				</div>

				<div className='row'>
					<div className='col'>
						<div className='block-27'>
							<ul>
								<li>
									<Link to='#'>&lt;</Link>
								</li>
								<li className='active'>
									<span>1</span>
								</li>
								<li>
									<Link to='#'>2</Link>
								</li>
								<li>
									<Link to='#'>3</Link>
								</li>
								<li>
									<Link to='#'>4</Link>
								</li>
								<li>
									<Link to='#'>5</Link>
								</li>
								<li>
									<Link to='#'>&gt;</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className='col-xl-4 sidebar  bg-blue-gray'>
				<div className='row'>
					<div className='col-md-12 text-center'>
						<div className='sidebar-box '>
							<Link
								to='ask-question.html'
								className='btn btn-warning px-5 py-2'
							>
								Ask Question
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
