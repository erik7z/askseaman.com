import React, { ReactNode } from 'react'
import { Col, Row } from 'react-bootstrap'

import QuestionSearch from '../QuestionSearch'

interface IProps {
	children: ReactNode
	showSearch?: boolean
	showHeader?: boolean
	sectionName?: string
	sectionTitle?: string
	sectionClass?: string
}

const Section = ({
	children,
	showSearch = true,
	showHeader = true,
	sectionName = '',
	sectionTitle = '',
	sectionClass = '',
}: IProps) => {
	return (
		<>
			<Col xl={8} className='main-content'>
				{showSearch && <QuestionSearch />}
				<Row>
					<Col md={12}>
						{showHeader && (
							<>
								{' '}
								<h5 className='module-header'>
									&gt; {sectionName}:
									<span className='text-dark'>&nbsp; {sectionTitle}</span>
								</h5>
								<hr className='hr-header hr-bold' />
							</>
						)}
						<section className={sectionClass}>{children}</section>
					</Col>
				</Row>
			</Col>
		</>
	)
}

export default Section
