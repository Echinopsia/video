import React from 'react'
import './footer.css';
import logo from '../../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Part2 from './Part2';
import Part3 from './Part3';
import Part4 from './Part4';

export default function Footer() {
	const text = <p>
Pellentesque suscipit pellentesque luctus. Nulla vel tellus nec risus tempus feugiat. Donec nibh orci, sollicitudin sit amet gravida at, varius sit amet sem.</p>;
	return (
		<div className="footer">
			<div className="top">
				<Container>
					<Row>
						<Col lg={3} xs={12}>
							<div className="content">
								<div className="title">
									<h2>
										About Us
									</h2>
								</div>
								<div className="part1">
									<Link to="/">
										<img src={logo} />
									</Link>
									{text}
								</div>
							</div>
						</Col>
						<Col lg={3} xs={12}>
							<Part2 />
						</Col>
						<Col lg={3} xs={12}>
							<Part3 />
						</Col>
						<Col lg={3} xs={12}>
							<Part4 />
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	)
}