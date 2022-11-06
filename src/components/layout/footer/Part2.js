import React from 'react'
import { Link } from 'react-router-dom';

export default function Part2() {
	return (
		<div className="content">
			<div className="title">
				<h2>
					Information
				</h2>
			</div>
			<div className="part2">
				<ul>
					<li>
						<Link to="/">
							About us
						</Link>
					</li>
					<li>
						<Link to="/">
							Contact us
						</Link>
					</li>
					<li>
						<Link to="/">
							Terms & Conditions
						</Link>
					</li>
					<li>
						<Link to="/">
							Privacy policy
						</Link>
					</li>
					<li>
						<Link to="/">
							Press
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}