import React from 'react'
import './home.css';
import { Container } from 'reactstrap';
import Section1 from './Section1';
import Section2 from './Section2';

export default function Home() {
	return (
		<div className="home">
			<Container className="p-0" fluid={true}>
				<Section1 />
				<Section2 />
			</Container>
		</div>
	)
}