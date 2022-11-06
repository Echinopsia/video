import React, { Fragment } from 'react'
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FaUserAstronaut, FaComment, FaHeart } from 'react-icons/fa';
import { BsEye } from 'react-icons/bs';
import loading from '../../../assets/images/loading.jpg';

export default function Videos1Skeleton() {
	return (
		<Fragment>
			<Col xs={12} sm={6} md={4}>
				<li>
					<Link to="#">
						<div className="overlay"/>
						<img src={loading} />
						<div className="details">
							<h2></h2>
							<div className="meta">
								
								<div className="d-flex gap-3">
									<div className="views">
										<span>
											<BsEye />
										</span>
									</div>
									<div className="comments">
										<FaComment /> 
									</div>
									<div className="likes">
										<FaHeart /> 
									</div>
								</div>
							</div>
						</div>
					</Link>
				</li>
			</Col>
			<Col xs={12} sm={6} md={4}>
				<li>
					<Link to="#">
						<div className="overlay"/>
						<img src={loading} />
						<div className="details">
							<h2></h2>
							<div className="meta">
								
								<div className="d-flex gap-3">
									<div className="views">
										<span>
											<BsEye />
										</span>
									</div>
									<div className="comments">
										<FaComment /> 
									</div>
									<div className="likes">
										<FaHeart /> 
									</div>
								</div>
							</div>
						</div>
					</Link>
				</li>
			</Col>
			<Col xs={12} sm={6} md={4}>
				<li>
					<Link to="#">
						<div className="overlay"/>
						<img src={loading} />
						<div className="details">
							<h2></h2>
							<div className="meta">
								
								<div className="d-flex gap-3">
									<div className="views">
										<span>
											<BsEye />
										</span>
									</div>
									<div className="comments">
										<FaComment /> 
									</div>
									<div className="likes">
										<FaHeart /> 
									</div>
								</div>
							</div>
						</div>
					</Link>
				</li>
			</Col>
		</Fragment>
	)
}