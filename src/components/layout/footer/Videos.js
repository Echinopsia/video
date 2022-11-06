import React from 'react'
import { Link } from 'react-router-dom';

export default function Videos(props) {
	const {
    	video: {
	        videoImage,
	        videoId,
	        title,
	    	viewCount,
	    },
    } = props;
	return (
		<div className="footer-post">
			<div className="main">
				<Link to={{ pathname:`/video/${videoId}` }}>
					<img src={videoImage} />
				</Link>
			</div>
			<div className="bottom">
				<Link to={{ pathname:`/video/${videoId}` }}>
					<h5>{title}</h5>
				</Link>
			</div>
		</div>
	)
}