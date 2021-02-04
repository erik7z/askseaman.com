import React from 'react'
import { Link } from 'react-router-dom'

export const Question = () => {
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
						<h5 className='module-header'>
							&gt; Question:
							<span className='text-dark'>
								What to do if your captain is idiot ?
							</span>
						</h5>
						<hr className='hr-header hr-bold' />
						<div className='section-question-page'>
							<div className='question-item-full '>
								<div className='text'>
									<div className='author d-flex align-items-center'>
										<Link
											to='#'
											className='img author-avatar author-avatar-lg'
											style={{ backgroundImage: 'url(images/author.jpg)' }}
										></Link>
										<div className='post-item-info'>
											<span>Asked by</span>
											<h5 className='author-name'>
												<Link to='#'>Vasya Batareykin</Link>,
												<span className='author-position'>Chief Officer</span>
											</h5>
											<div className='tags'>
												<span className='tag'>
													<Link to='single.html'>
														<i className='icon-tag'></i> CAPTAIN
													</Link>
												</span>
												<span className='tag'>
													<Link to='single.html'>
														<i className='icon-tag'></i> BULK CARRIER
													</Link>
												</span>
												<span className='tag'>
													<Link to='single.html'>
														<i className='icon-tag'></i> MANAGEMENT
													</Link>
												</span>
											</div>
										</div>
									</div>

									<p className='post-item-text'>
										My Captain is idiot and i dont know what to do with that.
										Please help. <br />
										Even the all-powerful Pointing has no control about the
										blind texts it is an almost unorthographic life One day
										however a small line of blind text by the name of Lorem
										Ipsum decided to leave for the far World of Grammar.
									</p>
									<div className='meta d-md-flex align-items-center'>
										<Link to='#' className='btn btn-outline-primary p-1'>
											Subscribe | <b>3</b>
										</Link>
										<span>
											<Link
												data-toggle='collapse'
												to='#commentsCollapse'
												role='button'
												aria-expanded='false'
												aria-controls='commentsCollapse'
											>
												<i className='icon-comments-o'></i>
												<b>2</b> Comments
											</Link>
										</span>

										<span>
											<i className='icon-eye'></i>154 Views
										</span>
										<span>
											<i className='icon-clock-o'></i>15 Minutes ago
										</span>
									</div>

									<div
										className='comments-collapse collapse'
										id='commentsCollapse'
									>
										<div className='card card-body'>
											<div className='comment-item row'>
												<div className='col-md-11 col-10'>
													<div className='text-right author'>
														<h5 className='author-name'>
															<Link to='#'>Georgiy Dushev</Link>
														</h5>
														<span className='author-position'>2nd Officer</span>
													</div>
												</div>
												<div className='col-md-1 col-2 pl-0'>
													<Link
														to='#'
														className='img author-avatar author-avatar-md'
														style={{
															backgroundImage: 'url(images/author.jpg)',
														}}
													></Link>
												</div>
												<div className='col-12'>
													<p className='post-item-text'>
														Pibero, in gravida nulla. Nulla vel metus
														scelerisque ante sollicitudin. Cras purus odio,
														vestibulum in vulputatsi vulputate fringilla. Donec
														lacinia congue felis in faucibus.
													</p>
													<div className='meta d-md-flex align-items-center'>
														<span>
															<Link to='#'>
																<i className='icon-thumbs-up'></i>Like |<b>2</b>
															</Link>
														</span>
														<span className='datetime'>
															<i className='icon-clock-o'></i>15 Minutes ago
														</span>
													</div>
												</div>
											</div>

											<div className='comment-user-answer row'>
												<div className='col-md-12'>
													<h5 className='module-header'>&gt; Your comment</h5>
													<hr className='hr-header hr-bold' />
												</div>
												<div className='col-2 col-md-1 pr-0 text-right'>
													<Link
														to='#'
														className='img author-avatar author-avatar-md'
														style={{
															backgroundImage: 'url(images/author.jpg)',
														}}
													></Link>
												</div>
												<div className='col-10 col-md-11'>
													<form action='#' method='POST'>
														<div className='form-group'>
															<textarea
																className='form-control small-input'
																id='q_text'
																rows={5}
															></textarea>
														</div>
														<div className='text-right'>
															<button type='submit' className='btn btn-primary'>
																Publish
															</button>
														</div>
													</form>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<h5 className='module-header text-right'>
								Answers on question &lt;
							</h5>
							<hr className='hr-header hr-bold' />

							<div className='question-answer media '>
								<div className='row'>
									<div className='col-md-12'>
										<div className='row'>
											<div className='col-md-11 col-7'>
												<div className='text-right author'>
													<h5 className='author-name'>
														<Link to='#'>Boris Gadov</Link>
													</h5>
													<span className='author-position'>2nd Officer</span>
												</div>
											</div>
											<div className='col-md-1 col-5 pl-0'>
												<Link
													to='#'
													className='img author-avatar author-avatar-md'
													style={{ backgroundImage: 'url(images/author.jpg)' }}
												></Link>
											</div>
										</div>
									</div>

									<div className='col-md-1 col-2 text-center align-items-center'>
										<ul className='question-rating list-unstyled'>
											<li>
												<h3 className='rate rate-up'>
													<Link to='#'>
														<i className='icon-arrow-circle-up'></i>
													</Link>
												</h3>
											</li>
											<li>
												<h5 className='rate rate-value text-secondary'>10</h5>
											</li>
											<li>
												<h3 className='rate rate-down'>
													<Link to='#'>
														<i className='icon-arrow-circle-down'></i>
													</Link>
												</h3>
											</li>
										</ul>
									</div>
									<div className='col-md-11 col-10'>
										<p className='post-item-text'>
											Cras sit amet nibh libero, in gravida nulla. Nulla vel
											metus scelerisque ante sollicitudin. Cras purus odio,
											vestibulum in vulputate at, tempus viverra turpis. Fusce
											condimentum nunc ac nisi vulputate fringilla. Donec
											lacinia congue felis in faucibus.
										</p>
										<div className='meta d-md-flex align-items-center'>
											<span>
												<Link to='#'>
													<i className='icon-comments-o'></i>
													<b>5</b> Comments
												</Link>
											</span>
											<span>
												<i className='icon-clock-o'></i>3 Minutes ago
											</span>
										</div>
									</div>
								</div>
							</div>
							<hr />
							<h5 className='module-header'>&gt; Your answer</h5>
							<hr className='hr-header hr-bold' />
							<div className='question-user-answer row'>
								<div className='col-2 col-md-1 pr-0 text-right'>
									<Link
										to='#'
										className='img author-avatar author-avatar-md'
										style={{ backgroundImage: 'url(images/author.jpg)' }}
									></Link>
								</div>
								<div className='col-10 col-md-11'>
									<form action='#' method='POST'>
										<div className='form-group'>
											<textarea
												className='form-control small-input'
												id='q_text'
												rows={5}
											></textarea>
										</div>
										<div className='text-right'>
											<button type='submit' className='btn btn-primary'>
												Publish
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='col-xl-4 sidebar  bg-blue'>
				<div className='row'>
					<div className='col-md-12 text-center'>
						<div className='question-instruction card'>
							<div className='card-header'>How to answer on questions</div>
							<div className='card-body'>
								<p className='card-text'>
									&gt; Please be sure to answer the question. Provide details
									and share your research.
								</p>
								<p className='card-text'>
									&gt; All of us have some experience, but nobody can know
									everything. Be patient and keep positive attitude.
								</p>
								<h5 className='card-title'>But avoid</h5>
								<p className='card-text'>
									&gt; Asking for help, clarification, or responding to other
									answers.
								</p>
								<p className='card-text'>
									&gt; Making statements based on opinion; back them up with
									references or personal experience.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
