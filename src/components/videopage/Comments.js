import React, { Fragment, useState, useRef } from 'react'
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { SlArrowDown } from 'react-icons/sl';
import DetectOutsideClick from "../hooks/DetectOutsideClick";

function Comments(props) {
    dayjs.extend(relativeTime);
	const [sort, setSort] = useState(true)
	const [dropdown, setDropdown] = useState(false)
	const { video } = props.video;
	const ref = useRef();
	
	const {
		video: {
        	commentCount,
        	comments
    	},
    	UI: { loading },
  	} = props;

  	// Close the popup on outside click
  	DetectOutsideClick(ref, () => {
    	setDropdown(false);
	});

  	const toggleSort = (e) => {
  		if (e.target.id === 'newest' && !sort){
  			setSort(true)
  			setDropdown(false)
  		}
  		else if (e.target.id === 'oldest' && sort)
  			setSort(false);
  			setDropdown(false)

  	}
  	const toggleDropdown = () => {
  		setDropdown(!dropdown);
  	}

  	const sortButton = sort ? (
  		<button onClick={toggleDropdown}>
  			Newest
  			<SlArrowDown size={15} />
  		</button>
  	) : (
  		<button onClick={toggleDropdown}>
  			Oldest
  			<SlArrowDown size={15} />
  		</button>
  	)

  	const options = sort ? (
  		comments && comments.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1))
  	) : (
  		comments && comments.sort((a, b) => (a.createdAt < b.createdAt ? -1 : 1))
  	)


  
	return (
		<div className="comments">
			<div className="title">
				<h2>{commentCount && commentCount} {commentCount && commentCount == 1 ? 'comment' : 'Comments'}</h2>
				<div className="sort">
					<div className="dropdown" ref={dropdown ? ref : null}>
						{sortButton}
						<ul className="dropdown_main" id={dropdown ? 'visible' : 'hidden'}>
							<li 
							className={sort ? 'active' : null}
							onClick={(e) => toggleSort(e)}
							id="newest"
							>
								Newest
							</li>
							<li 
							className={!sort ? 'active' : null}
							onClick={(e) => toggleSort(e)}
							id="oldest"
							 >
								Oldest
							</li>
						</ul>
					</div>
				</div>
			</div>
			<ul className="comments_main">
			  	<Fragment>
			  		{comments && options.map((item, i) => {
			  			const { body, createdAt, userImage, userHandle } = item;
			  			return(
			  				<li key={createdAt}>
			  					<Link to={`/users/${userHandle}`} className="avatar">
									<img src={userImage} />
								</Link>
								<div>
									<h5>
										<Link to={`/users/${userHandle}`}>
											{userHandle}
										</Link>
									</h5>
									<div className="date">
										{dayjs().to(createdAt)}
									</div>
									<div className="text">
										<p>
											{body}
										</p>
									</div>
								</div>
							</li>
						)
					})}
				</Fragment>
			</ul>
		</div>
	)
}
Comments.propTypes = {
	video: PropTypes.object.isRequired,
	UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	UI: state.UI,
	video: state.data.video
});


export default connect(
	mapStateToProps
)(Comments);