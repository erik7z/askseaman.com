import React from 'react'
import { Link } from 'react-router-dom'

export const Tag = () => {
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
				<div className='main-content row'>
					<div className='col-md-12'>
						<h5 className='module-header'>
							&gt; Tag: <span className='text-dark'>#OFFSHORE</span>
						</h5>
						<hr className='hr-header hr-bold' />

						<div className='section-tag-page'>
							<div className='jumbotron text-center'>
								<h2 className='display-5 text-center'>#OFFSHORE</h2>
								<ul className='list-group list-group-horizontal justify-content-center'>
									<li className='list-group-item'>
										<Link to='index.html'>
											<b>4892</b> <br />
											Questions
										</Link>
									</li>
									<li className='list-group-item text-success'>
										<b>45%</b> <br />
										Solved
									</li>
									<li className='list-group-item'>
										<Link to='users.html'>
											<b>1372</b> <br />
											Subscribers
										</Link>
									</li>
								</ul>
								<small>Moderators:</small>
								<div className='avatars-list d-flex justify-content-center'>
									<Link
										to='user.html'
										className='img author-avatar author-avatar-sm'
										style={{ backgroundImage: 'url(images/person_1.jpg)' }}
									></Link>
									<Link
										to='user.html'
										className='img author-avatar author-avatar-sm'
										style={{ backgroundImage: 'url(images/author.jpg)' }}
									></Link>
									<Link
										to='user.html'
										className='img author-avatar author-avatar-sm'
										style={{ backgroundImage: 'url(images/author.jpg)' }}
									></Link>
									<Link
										to='user.html'
										className='img author-avatar author-avatar-sm'
										style={{ backgroundImage: 'url(images/author.jpg)' }}
									></Link>
									<Link
										to='user.html'
										className='img author-avatar author-avatar-sm'
										style={{ backgroundImage: 'url(images/author.jpg)' }}
									></Link>
									<Link
										to='user.html'
										className='img author-avatar author-avatar-sm'
										style={{ backgroundImage: 'url(images/author.jpg)' }}
									></Link>
									<Link
										to='user.html'
										className='img author-avatar author-avatar-sm'
										style={{ backgroundImage: 'url(images/author.jpg)' }}
									></Link>
									<Link
										to='user.html'
										className='img author-avatar author-avatar-sm'
										style={{ backgroundImage: 'url(images/author.jpg)' }}
									></Link>
									<Link
										to='user.html'
										className='img author-avatar author-avatar-sm'
										style={{ backgroundImage: 'url(images/author.jpg)' }}
									></Link>
								</div>
								<hr />
								<p>
									This tag is about everything related to the offshore fleet,
									job on oilrigs jackup barges, drill platforms supply boats,
									tugs etc.
								</p>
								<Link
									className='btn btn-outline-primary btn-lg'
									to='#'
									role='button'
								>
									Subscribe | <b>1298</b>
								</Link>
							</div>

							<h5 className='module-header text-right'>
								Most Active Users &lt;
							</h5>
							<hr className='hr-header hr-bold' />
							<div className='users-list row text-center'>
								<div className='col-md-4 col-6 card-item'>
									<div className='card'>
										<div className='card-body text-center'>
											<Link
												to='user.html'
												className='img author-avatar author-avatar-lg'
												style={{ backgroundImage: 'url(images/author.jpg)' }}
											></Link>

											<h5 className='author-name'>
												<Link to='#'>Vasya Batareykin</Link>,
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
												style={{ backgroundImage: 'url(images/author.jpg)' }}
											></Link>
											<h5 className='author-name'>
												<Link to='#'>Vasya Batareykin</Link>,
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
												style={{ backgroundImage: 'url(images/author.jpg)' }}
											></Link>
											<h5 className='author-name'>
												<Link to='#'>Gsrisha Ptichkin</Link>,
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
												style={{ backgroundImage: 'url(images/author.jpg)' }}
											></Link>
											<h5 className='author-name'>
												<Link to='#'>Misha Vovkin</Link>,
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
							<h5 className='module-header text-right'>Top questions &lt;</h5>
							<hr className='hr-header hr-bold' />
							<div className='question-item row'>
								<div className='col-md-12'>
									<div className='row'>
										<div className='col-md-9'>
											<div className='d-md-flex'>
												<div className='text text-2 pl-md-3'>
													<span className='mr-2 tag'>
														<Link to='single.html'>
															<i className='icon-tag'></i> CDI
														</Link>
													</span>
													<span className='mr-2 tag'>
														<Link to='single.html'>
															<i className='icon-tag'></i> INSPECTIONS
														</Link>
													</span>
													<span className='mr-2 tag'>
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
														<Link
															to='#'
															className='btn btn-sm btn-outline-primary mr-1'
														>
															Subscribe | <b>3</b>
														</Link>
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
												<span className='answers-count-text'>answers</span>
											</Link>
										</div>
									</div>
									<hr />
								</div>
							</div>
							<div className='question-item row'>
								<div className='col-md-12'>
									<div className='row'>
										<div className='col-md-9'>
											<div className='d-md-flex'>
												<div className='text text-2 pl-md-3'>
													<span className='mr-2 tag'>
														<Link to='single.html'>
															<i className='icon-tag'></i> PIRATES
														</Link>
													</span>
													<span className='mr-2 tag'>
														<Link to='single.html'>
															<i className='icon-tag'></i> SHARK
														</Link>
													</span>
													<span className='mr-2 tag'>
														<Link to='single.html'>
															<i className='icon-tag'></i> FOOD
														</Link>
													</span>
													<h5 className='header'>
														<Link to='question-page.html'>
															How to milk a shark ?
														</Link>
													</h5>
													<div className='meta d-md-flex align-items-center'>
														<Link
															to='#'
															className='btn btn-sm btn-outline-primary mr-1'
														>
															Subscribe | <b>15</b>
														</Link>
														<span>
															<i className='icon-eye'></i>22 Views
														</span>
														<span>
															<i className='icon-clock-o'></i>56 Minutes ago
														</span>
													</div>
												</div>
											</div>
										</div>
										<div className='col-md-3 text-center pt-1'>
											<Link to='question-page.html'>
												<span className='answers-count'> 5 </span>
												<br />
												<span className='answers-count-text'>answers</span>
											</Link>
										</div>
									</div>
									<hr />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='col-xl-4 sidebar bg-blue'>
				<div className='row'>
					<div className='col-md-12'>
						<div
							className='sidebar-box subs-wrap img'
							style={{ backgroundImage: 'url(images/author.jpg)' }}
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
						<div className='sidebar-box '>
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
