import React from 'react'
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { FaUserAstronaut, FaComment, FaHeart } from 'react-icons/fa';
import { BsEye } from 'react-icons/bs';

export default function Videos1(props) {
	const {
    	video: {
	        videoImage,
	        videoId,
	        title,
	    	viewCount,
	    	commentCount,
	    	likeCount,
	    	createdAt,
	    	userHandle
	    },
    } = props;

	return (
		<Col xs={12} sm={6} md={4}>
			<li>
				<Link to={{ pathname:`/video/${videoId}` }}>
					<div className="overlay"/>
					<img src={videoImage} />
					<div className="date">
						{dayjs(createdAt).format('D MMMM YYYY')}
					</div>
				</Link>
				<div className="details">
					<Link to={{ pathname:`/video/${videoId}` }}>
						<h2>{title}</h2>
					</Link>
					<div className="meta">
						<div className="author">
							<Link to={`/users/${userHandle}`}>
								<FaUserAstronaut /> 
								<span>
									{userHandle}
								</span>
							</Link>
						</div>
						<Link to={{ pathname:`/video/${videoId}` }}>
							<div className="d-flex gap-3">
								<div className="views">
									<span>
										<BsEye />
										{viewCount} views
									</span>
								</div>
								<div className="comments">
									<FaComment /> 
									{commentCount} comments
								</div>
								<div className="likes">
									<FaHeart /> 
									{likeCount} likes
								</div>
							</div>
						</Link>
					</div>
				</div>
			</li>
		</Col>
	)
}