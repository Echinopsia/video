import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import Latest from './grids/Latest';
import Sidepart from './sidepart/Sidepart';

export default function Section2() {
	return (
		<div className="section2">
			<Container fluid={true}>
				<Row>
					<Col xs={12} md={8}>
						<div className="title">
							<h2>Latest Videos</h2>
						</div>
						<Row>
							<Latest />
						</Row>
					</Col>
					<Col xs={12} md={4}>
						<Sidepart />
					</Col>
				</Row>
			</Container>
		</div>
	)
}