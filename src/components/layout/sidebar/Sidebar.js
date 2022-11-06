import React, { Fragment, useState } from 'react';
import './sidebar.css';
import Menu from './Menu'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';
import ReactTooltip from 'react-tooltip';

export default function Sidebar() {
	const [expand, setExpand] = useState(false);
	
	const styles = {
		sidebar:{
			width: expand ? "200px" : "60px"
		},
	};

	const toggleExpand = () => {
		setExpand(!expand);
		if (expand){
			document.body.classList.remove('sidebar-expanded');
		} else if (!expand){
			document.body.classList.add('sidebar-expanded');
		}
	}
	return (
		<div className="sidebar" style={styles.sidebar}>
			{!expand ? 
				<ReactTooltip id="expand" place="right" effect="float">
	        		Expand Menu
	      		</ReactTooltip>
	      	: 
	      		null
	      	}
			<button onClick={toggleExpand} className="toggle" data-tip data-for="expand">
				<span>
					{expand ? <FaLongArrowAltLeft /> : <FaLongArrowAltRight/>}
				</span>
			</button>
			<Menu expand={expand} />
		</div>
	)
}