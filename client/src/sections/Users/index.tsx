import React from 'react'
import { Link } from 'react-router-dom'

export const Users = () => {
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
						<h5 className='module-header'>&gt; Users</h5>
						<hr className='hr-header hr-bold' />
						<div className='main-sorting'>
							<div
								className='btn-group btn-group-sm'
								role='group'
								aria-label='Basic outlined example'
							>
								<button type='button' className='btn btn-outline-primary'>
									By Answers
								</button>
								<button type='button' className='btn btn-outline-secondary'>
									By Questions
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
						<div className='section-users-list'>
							<div className='users-list row text-center'>
								<div className='col-md-4 col-6 card-item'>
									<div className='card'>
										<div className='card-body text-center'>
											<Link
												to='user.html'
												className='img author-avatar author-avatar-lg'
												style={{ backgroundImage: 'url(images/person_3.jpg)' }}
											></Link>

											<h5 className='author-name'>
												<Link to='#'>Vasya Batareykin</Link>
												<br />
												<span className='author-position'>Chief Officer</span>
											</h5>
										</div>
										<div className='card-footer'>
											<small>
												<Link to='#'>
													{' '}
													<b>234</b> Answers{' '}
												</Link>
											</small>
											<br />
											<small>
												<Link to='#'>
													{' '}
													<b>17</b> Questions{' '}
												</Link>
											</small>
										</div>
									</div>
								</div>
								<div className='col-md-4 col-6 card-item'>
									<div className='card'>
										<div className='card-body text-center'>
											<Link
												to='user.html'
												className='img author-avatar author-avatar-lg'
												style={{ backgroundImage: 'url(images/person_3.jpg)' }}
											></Link>
											<h5 className='author-name'>
												<Link to='#'>Gena Davydov</Link>
												<br />
												<span className='author-position'>Chief Officer</span>
											</h5>
										</div>
										<div className='card-footer'>
											<small>
												<Link to='#'>
													{' '}
													<b>234</b> Answers{' '}
												</Link>
											</small>
											<br />
											<small>
												<Link to='#'>
													{' '}
													<b>17</b> Questions{' '}
												</Link>
											</small>
										</div>
									</div>
								</div>
								<div className='col-md-4 col-6 card-item'>
									<div className='card'>
										<div className='card-body text-center'>
											<Link
												to='user.html'
												className='img author-avatar author-avatar-lg'
												style={{ backgroundImage: 'url(images/person_3.jpg)' }}
											></Link>
											<h5 className='author-name'>
												<Link to='#'>Gsrisha Ptichkin</Link>
												<br />
												<span className='author-position'>Master</span>
											</h5>
										</div>
										<div className='card-footer'>
											<small>
												<Link to='#'>
													{' '}
													<b>12</b> Answers{' '}
												</Link>
											</small>
											<br />
											<small>
												<Link to='#'>
													{' '}
													<b>45</b> Questions{' '}
												</Link>
											</small>
										</div>
									</div>
								</div>
								<div className='col-md-4 col-6 card-item'>
									<div className='card'>
										<div className='card-body text-center'>
											<Link
												to='user.html'
												className='img author-avatar author-avatar-lg'
												style={{ backgroundImage: 'url(images/person_3.jpg)' }}
											></Link>
											<h5 className='author-name'>
												<Link to='#'>Misha Vovkin</Link>
												<br />
												<span className='author-position'>2nd Officer</span>
											</h5>
										</div>
										<div className='card-footer'>
											<small>
												<Link to='#'>
													{' '}
													<b>67</b> Answers{' '}
												</Link>
											</small>
											<br />
											<small>
												<Link to='#'>
													{' '}
													<b>22</b> Questions{' '}
												</Link>
											</small>
										</div>
									</div>
								</div>
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
			<div className='col-xl-4 sidebar bg-blue'>
				<div className='row'>
					<div className='col-md-12'>
						<div
							className='sidebar-box subs-wrap img py-4 px-4'
							style={{ backgroundImage: 'url(images/person_3.jpg)' }}
						>
							<div className='overlay'></div>
							<h3 className='sidebar-heading'>Advertisement</h3>
							<p>Send your CV to our cool crewing !</p>
							<form action='#' className='subscribe-form'>
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
							<h3 className='sidebar-heading'>Top for last 24 hours</h3>
							<div className='d-flex'>
								<div className='text'>
									<h5 className='heading'>
										<Link to='#'>What are the largest vessels in world?</Link>
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
							<div className='d-flex'>
								<div className='text'>
									<h5 className='heading'>
										<Link to='#'>Can i take my dog on ship?</Link>
									</h5>
									<div className='meta d-md-flex align-items-center'>
										<span>
											<i className='icon-user'></i>13 Subscribers
										</span>
										<span>
											<i className='icon-chat'></i>5 Answers
										</span>
									</div>
									<hr />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
