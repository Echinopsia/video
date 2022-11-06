import React, { useState, useEffect, Fragment } from 'react'
import { BsLightbulb, BsFillLightbulbFill } from 'react-icons/bs';
import { AiOutlineCalendar } from 'react-icons/ai';
import { BsEye, BsShare, BsHandThumbsUp } from 'react-icons/bs';
import { FaComment } from 'react-icons/fa';
import { FiLayers } from 'react-icons/fi';
import dayjs from 'dayjs';
import SharePopup from './SharePopup';
import LikeButton from './LikeButton';
import Author from './Author';

export default function Bottom(props) {
	const [darkmode, setDarkmode] = useState(false);
	const [share, setShare] = useState(false);
	
	const toggleDarkmode = () => {
		setDarkmode(!darkmode);
		if (darkmode){
			document.body.classList.remove('darkmode');
		} else if (!darkmode){
			document.body.classList.add('darkmode');
		}
	}
	const toggleShare = () => {
		setShare(!share)
	}
	useEffect(() => {
    	return () => {
    		if (darkmode && document.body.classList.contains('darkmode')){
    			document.body.classList.remove('darkmode');
    			console.log("cleaned up");
    		}
    	};
  	}, []);
	const {
		video: {
	        title,
	    	viewCount,
	    	commentCount,
	    	createdAt,
	    	category,
	    	likeCount,
	    	body
    	}
    } = props;

	return (
		<Fragment>
			<div className="meta p-4">
				<div className="d-lg-flex align-items-start gap-4">
					<div className="d-flex flex-column">
						<h1>
							{title}
						</h1>
						<div className="meta_items">
							<div className="date">
								<AiOutlineCalendar />
								{dayjs(createdAt).fromNow()}
							</div>
							<div className="comments">
								<FaComment />
								{commentCount} {commentCount === 1 ? 'Comment' : 'Comments'}
							</div>
							<div className="meta-category">
								<FiLayers />
								{category}
							</div>
							<div className="views">
								<BsEye/>
								{viewCount} views
							</div>
							<div className="likes">
								<BsHandThumbsUp />
								{likeCount} likes
							</div>
						</div>
					</div>
					<div className="controls d-flex gap-2 ms-lg-auto justify-content-center my-sm-3">
						<div className="likebutton">
							<LikeButton video={props.video}/>
						</div>
						<button className="btn-dark" onClick={toggleDarkmode}>
							{!darkmode ? <BsLightbulb  size={20}/> : <BsFillLightbulbFill  size={20}/> }
						</button>
						<button onClick={toggleShare}>
							<BsShare size={20}/>
						</button>
					</div>
				</div>
				<Author video={props.video} />
				<div className="text">{body}</div>
			</div>
			{share && <SharePopup toggleShare={toggleShare} />}
		</Fragment>
	)
}