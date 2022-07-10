import React, { ComponentProps, FC } from 'react'

export const About: FC<ComponentProps<any>> = ({ props }) => {
	return (
		<>
			<section
				className='ftco-about img ftco-section ftco-no-pt ftco-no-pb'
				id='about-section'
			>
				<div className='container-fluid px-0'>
					<div className='row d-flex'>
						<div className='col-md-6 d-flex'>
							<div
								className='img d-flex align-self-stretch align-items-center'
								style={{
									backgroundImage: 'url(/images/about.jpg)',
									height: 'calc(100vh)',
								}}
							></div>
						</div>
						<div className='col-md-6 d-flex align-items-center'>
							<div className='text px-4 pt-5 pt-md-0 px-md-4 pr-md-5 '>
								<h2 className='mb-4'>
									We created <span>Ask Seaman</span> project to help other
									seamans
								</h2>
								<p>
									Our project is aimed to improve knowledge of the seafarers and
									promote exchange of information in seamanship community. Feel
									free to ask questions and if you feel you know the answer,
									don't bother contribute by adding new reply.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
