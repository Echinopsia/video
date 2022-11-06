import React from 'react'
import logo from '../../../assets/images/logo.png';
import { NavLink } from 'react-router-dom'

export default function Logo() {
	return (
		<div className="logo d-flex align-items-center">
			<NavLink to="/">
				<img src={logo} />
			</NavLink>
		</div>
	)
}