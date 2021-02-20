import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'

import {
	SideQuestInstrBox,
	UserTextFormInput,
	TagsInlineList,
	CommentsBox,
	AvatarLink,
} from '../../components'
import { AnswerItem } from './AnswerItem'

export const Question = () => {
	return (
		<>
			<Col xl={8} className='main-content'>
				<h5 className='module-header'>
					&gt; Question:
					<span className='text-dark'>
						&nbsp; What to do if your captain is idiot ?
					</span>
				</h5>
				<hr className='hr-header hr-bold' />
				<section className='section-question-page'>
					<div className='question-item-full '>
						<div className='author d-flex align-items-center'>
							<AvatarLink size='lg' />
							<div className='post-item-info'>
								<span>Asked by</span>
								<h5 className='author-name'>
									<Link to='#'>Vasya Batareykin</Link>,
									<span className='author-position'>Chief Officer</span>
								</h5>
								{/* <TagsInlineList tagsList={[]} /> */}
							</div>
						</div>

						<p className='post-item-text'>
							My Captain is idiot and i dont know what to do with that. Please
							help. <br />
							Even the all-powerful Pointing has no control about the blind
							texts it is an almost unorthographic life One day however a small
							line of blind text by the name of Lorem Ipsum decided to leave for
							the far World of Grammar.
						</p>
						<CommentsBox toggleEventKey='qcomments-0' />
					</div>
					<h5 className='module-header text-right'>Answers on question &lt;</h5>
					<hr className='hr-header hr-bold' />
					<AnswerItem />
					<hr />
					<h5 className='module-header'>&gt; Your answer</h5>
					<hr className='hr-header hr-bold' />
					<UserTextFormInput />
				</section>
			</Col>
			<div className='col-xl-4 sidebar  bg-blue'>
				<SideQuestInstrBox />
			</div>
		</>
	)
}
