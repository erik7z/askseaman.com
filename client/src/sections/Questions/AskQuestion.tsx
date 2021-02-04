import React from 'react'

export const AskQuestion = () => {
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
						<h5 className='module-header'>&gt; Ask Question</h5>
						<hr className='hr-header hr-bold' />
						<div className='section-ask-question'>
							<form action='#' method='POST'>
								<div className='form-group'>
									<label htmlFor='q_title' className='form-label'>
										Question title
									</label>
									<small id='q_title_help' className='form-text'>
										Short description of your question.
									</small>
									<input
										type='text'
										className='form-control small-input'
										id='q_title'
										aria-describedby='q_title_help'
									/>
								</div>
								<div className='form-group'>
									<label htmlFor='q_tags' className='form-label'>
										Question tags
									</label>
									<small id='q_tags_help' className='form-text'>
										Add 1 to 5 tags for your question.
									</small>
									<input
										type='text'
										className='form-control small-input'
										id='q_tags'
										aria-describedby='q_tags_help'
									/>
								</div>
								<div className='form-group'>
									<label htmlFor='q_text' className='form-label'>
										Question description
									</label>
									<small id='q_text_help' className='form-text'>
										Include all the information someone would need to answer
										your question
									</small>
									<textarea
										className='form-control small-input'
										id='q_text'
										rows={5}
									></textarea>
								</div>
								<div className='form-group'>
									<label htmlFor='hide_name' className='form-label'>
										Hide name
									</label>
									<small id='hide_name_help' className='form-text'>
										Don't show your account to other users
									</small>
									<select className='custom-select mr-sm-2' id='hide_name'>
										<option selected value='1'>
											No
										</option>
										<option value='2'>Yes</option>
									</select>
								</div>
								<div className='form-group text-right'>
									<button type='submit' className='btn btn-primary'>
										Publish
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div className='col-xl-4 sidebar bg-blue'>
				<div className='row'>
					<div className='col-md-12 text-center'>
						<div className='question-instruction card'>
							<div className='card-header'>Asking a good question</div>
							<div className='card-body'>
								<h5 className='card-title'>
									Before you post, search the site to make sure your question
									hasn’t been answered.
								</h5>
								<p className='card-text'>
									&gt; Add more <b>#tags</b>, they are help to categorize your
									question and make it more easy find answer.
								</p>
								<p className='card-text'>
									&gt; We trying to make usefull source of information for all
									seamans. Use examples from your
									<b>real experience</b>.
								</p>
								<p className='card-text'>
									&gt; Provide details for your question.
									<b>Share your research</b> and efforts in finding the answer.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
