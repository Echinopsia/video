import React from 'react';
import { Link } from 'react-router-dom';
import { BsEye } from 'react-icons/bs';
import loading from '../../../assets/images/loading.jpg';

export default function Videos3Skeleton() {
	return (
		<div className="mb-4 side-post1">
			<Link to="#">
				<div className="d-flex align-items-start">
					<div className="main me-3">
						<div className="overlay"/>
						<img src={loading} />
					</div>
					<div className="meta">
						
					</div>
				</div>
			</Link>
		</div>
	)
}