import React from 'react'
import { Link } from 'react-router-dom'

export default function Author(props) {
	const {
		video: {
	        userHandle,
	        userImage
    	}
    } = props;
	return (
		<div className="author">
			<div className="avatar">
				<Link to={`/users/${userHandle}`} className="avatar">
					<img src={userImage} />
				</Link>
			</div>
			<div className="title">
				<h6>
					<Link to={`/users/${userHandle}`} className="avatar">
						{userHandle}
					</Link>
				</h6>
			</div>
		</div>
	)
}