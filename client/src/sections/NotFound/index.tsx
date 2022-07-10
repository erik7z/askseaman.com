import React, { ComponentProps, FC } from 'react'

export const NotFound: FC<ComponentProps<any>> = ({ props }) => {
	return (
		<>
			<section
				className='ftco-about img ftco-section ftco-no-pt ftco-no-pb'
				id='about-section'
			>
				<div className='container-fluid px-0'>
					<div className='row d-flex'>
						<div className='col-md-10 d-flex'>
							<div
								className='img d-flex align-self-stretch align-items-center'
								style={{
									backgroundImage: 'url(/images/notfound.jpg)',
									height: 'calc(100vh)',
								}}
							></div>
						</div>
						<div className='col-md-2 d-flex align-items-center'>
							<div className='text px-4 pt-5 pt-md-0 px-md-4 pr-md-5 '>
								<h2 className='mb-4'>Not Found</h2>
								<h2 className='mb-4'>
									<span>404</span>
								</h2>
								<p>
									Unfortunately this page is not found on our website. Check the
									link provided or try to use search.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
