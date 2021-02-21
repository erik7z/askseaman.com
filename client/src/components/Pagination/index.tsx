import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'

interface IProps {
	page?: number | null | undefined
	setPage?: React.Dispatch<React.SetStateAction<number>> | null
}

export const Pagination = () => {
	return (
		<Row>
			<Col>
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
			</Col>
		</Row>
	)
}
