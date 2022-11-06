import React, { Fragment, useState } from 'react'
import './header.css';
import { Container, Row, Col } from 'reactstrap';
import Logo from './Logo';
import Search from './Search';
import Account from './Account';

export default function Header() {
	return (
		<Fragment>
			<div className="header">
				<Container fluid={true}>
					<Row className="align-items-center">
						<Col sm={4}>
							<Logo />
						</Col>
						<Col sm={4}>
							<Search />
						</Col>
						<Col sm={4}>
							<Account />
						</Col>
					</Row>
				</Container>
			</div>		
		</Fragment>
	)
}