import React, { Fragment, useState } from 'react'
import './mobile.css';
import { Row, Container } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineHome, AiFillPlayCircle } from 'react-icons/ai';
import { BsUpload } from 'react-icons/bs';
import { GoSignIn, GoSignOut } from 'react-icons/go';
import { FiLogIn, FiLayers } from 'react-icons/fi';

export default function MobileHeader() {
	const [toggle, setToggle] = useState(false);

	const toggleMenu = () => {
		setToggle(!toggle);
	}

	return (
		<div className="mobile">
			<div className="mobile-header">
				<Container fluid={true}>
					<Row className="align-items-center">
						<button className="toggle" onClick={toggleMenu}>
							<GiHamburgerMenu size={22}/>
						</button>
					</Row>
				</Container>
			</div>
			<div className="mobile-menu" id={toggle ? 'toggled' : ''}>
				<div className="menu-content" id={toggle ? 'toggled' : ''}>
					{toggle ?
						<Fragment>
							<ul>
								<li>
									<NavLink to="/">
										<AiOutlineHome />
										<span>
											Home
										</span>
									</NavLink>
								</li>
								<li>
									<NavLink to="/login">
										<BsUpload />
										<span>
											Upload
										</span>
									</NavLink>
								</li>
								<li>
									<NavLink to="/">
										<AiFillPlayCircle />
										<span>
											Videos
										</span>
									</NavLink>
								</li>
								<li>
									<NavLink to="/categories">
										<FiLayers />
										<span>
											Categories
										</span>
									</NavLink>
								</li>
							</ul>
						</Fragment>
					: null
					}	 
				</div>
			</div>
		</div>
	)
}