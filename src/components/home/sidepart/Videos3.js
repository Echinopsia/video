import React from 'react';
import { Link } from 'react-router-dom';
import { BsEye } from 'react-icons/bs';

export default function Videos3(props) {
	const {
    	video: {
	        videoImage,
	        videoId,
	        title,
	    	viewCount,
	    },
    } = props;

	return (
		<div className="mb-4 side-post1">
			<Link to={{ pathname:`/video/${videoId}` }}>
				<div className="d-flex align-items-start">
					<div className="main me-3">
						<div className="overlay"/>
						<img src={videoImage} />
					</div>
					<div className="meta">
						<h2>
							{title}
						</h2>
						<span>
							<BsEye />
							{viewCount} views
						</span>
					</div>
				</div>
			</Link>
		</div>
	)
}