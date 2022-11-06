import React from 'react'
import { Link } from 'react-router-dom';

export default function Categories(props) {
	const {
    	item: {
	        title,
	        category,
	        id,
	    	text,
	    	image
	    },
    } = props;
    const imgSrc = `/images/${category}.jpg`
	return (
		<div className="mb-4 side-post2 categories">
			<Link to={{ pathname:`/category/${category}` }}>
				<div className="d-flex align-items-start">
					<div className="main mb-2">
						<div className="overlay"/>
						<img src={imgSrc} />
					</div>
					<div className="meta">
						<h2>
							{title}
						</h2>
					</div>
				</div>
			</Link>
		</div>
	)
}