import React from 'react'
import { Link } from 'react-router-dom'

export const Tags = () => {
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
						<h5 className='module-header'>&gt; Tags</h5>
						<hr className='hr-header hr-bold' />
						<div className='main-sorting'>
							<div
								className='btn-group btn-group-sm'
								role='group'
								aria-label='Basic outlined example'
							>
								<button type='button' className='btn btn-outline-primary'>
									By Subscribers
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

						<div className='section-tags-list-page'>
							<div className='tags-list row text-center'>
								<div className='col-md-4 col-6 card-item'>
									<div className='card'>
										<div className='card-body'>
											<h5 className='card-title'>
												<Link to='tag-page.html'>LPG</Link>
											</h5>
											<p className='card-text'>234 Questions</p>
										</div>
										<div className='card-footer'>
											<Link
												to='/'
												className='btn btn-outline-primary btn-sm mr-1'
											>
												Subscribe | <b>305</b>
											</Link>
										</div>
									</div>
								</div>
								<div className='col-md-4 col-6 card-item'>
									<div className='card'>
										<div className='card-body'>
											<h5 className='card-title'>
												<Link to='tag-page.html'>OIL TANKERS</Link>
											</h5>
											<p className='card-text'>32 Questions</p>
										</div>
										<div className='card-footer'>
											<Link
												to='/'
												className='btn btn-outline-primary btn-sm mr-1'
											>
												Subscribe | <b>45</b>
											</Link>
										</div>
									</div>
								</div>
								<div className='col-md-4 col-6 card-item'>
									<div className='card'>
										<div className='card-body'>
											<h5 className='card-title'>
												<Link to='tag-page.html'>MASTER</Link>
											</h5>
											<p className='card-text'>12 Questions</p>
										</div>
										<div className='card-footer'>
											<Link
												to='/'
												className='btn btn-outline-primary btn-sm mr-1'
											>
												Subscribe | <b>231</b>
											</Link>
										</div>
									</div>
								</div>
								<div className='col-md-4 col-6 card-item'>
									<div className='card'>
										<div className='card-body'>
											<h5 className='card-title'>
												<Link to='tag-page.html'>OFFSHORE</Link>
											</h5>
											<p className='card-text'>12 Questions</p>
										</div>
										<div className='card-footer'>
											<Link
												to='/'
												className='btn btn-outline-primary btn-sm mr-1'
											>
												Subscribe | <b>123</b>
											</Link>
										</div>
									</div>
								</div>
								<div className='col-md-4 col-6 card-item'>
									<div className='card'>
										<div className='card-body'>
											<h5 className='card-title'>
												<Link to='tag-page.html'>CREWING</Link>
											</h5>
											<p className='card-text'>66 Questions</p>
										</div>
										<div className='card-footer'>
											<Link
												to='/'
												className='btn btn-outline-primary btn-sm mr-1'
											>
												Subscribe | <b>124</b>
											</Link>
										</div>
									</div>
								</div>
								<div className='col-md-4 col-6 card-item'>
									<div className='card'>
										<div className='card-body'>
											<h5 className='card-title'>
												<Link to='tag-page.html'>BSM</Link>
											</h5>
											<p className='card-text'>11 Questions</p>
										</div>
										<div className='card-footer'>
											<Link
												to='/'
												className='btn btn-outline-primary btn-sm mr-1'
											>
												Subscribe | <b>12k</b>
											</Link>
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
									<Link to='/'>&lt;</Link>
								</li>
								<li className='active'>
									<span>1</span>
								</li>
								<li>
									<Link to='/'>2</Link>
								</li>
								<li>
									<Link to='/'>3</Link>
								</li>
								<li>
									<Link to='/'>4</Link>
								</li>
								<li>
									<Link to='/'>5</Link>
								</li>
								<li>
									<Link to='/'>&gt;</Link>
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
							className='sidebar-box subs-wrap img'
							style={{ backgroundImage: 'url(images/img_1.jpg)' }}
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
										<Link to='/'>What are the largest vessels in world?</Link>
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
										<Link to='/'>Can i take my dog on ship?</Link>
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
