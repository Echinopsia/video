import React from 'react'
import { Link } from 'react-router-dom';

export default function Part3() {
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
							Home
						</Link>
					</li>
					<li>
						<Link to="/categories/funny">
							Funny
						</Link>
					</li>
					<li>
						<Link to="/categories/music">
							Music
						</Link>
					</li>
					<li>
						<Link to="/categories/science">
							Science
						</Link>
					</li>
					<li>
						<Link to="/categories/shocking">
							Shocking
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}