import React from 'react'
import './sidepart.css';
import SidePart1 from './SidePart1';
import SidePart2 from './SidePart2';
import SidePart3 from './SidePart3';

export default function Sidepart() {
	return (
		<div className="sidepart-wrap">
			<SidePart3 />
			<SidePart1 />
			<SidePart2 />
		</div>
	)
}