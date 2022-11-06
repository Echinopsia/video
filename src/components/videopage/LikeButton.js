import React from 'react'
import { BsHandThumbsUp } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { likeVideo, unlikeVideo } from '../../redux/actions/dataActions';

function LikeButton(props) {

	const { authenticated } = props.user;
	const { video } = props.video;
	
	const {
		video: {
	    	videoId,
    	}
  	} = props;

	const videoIsLiked = () => {
	  if (
	    props.user.likes && 
	    props.user.likes.find(
	      (like) => like.videoId === videoId
	    )
	  )
	  return true;
	  else return false;
	}

	const likeVideo = () => {
		props.likeVideo(videoId);
	}

	const unlikeVideo = () => {
		props.unlikeVideo(videoId);
	}
	
	const likeButton = !authenticated ? (
		<Link to="/login">
			<BsHandThumbsUp size={20}/>
		</Link>
	) : videoIsLiked() ? (
		<button className="liked" onClick={unlikeVideo}>
			<BsHandThumbsUp size={20}/>
		</button>
	) : (
		<button onClick={likeVideo}>
			<BsHandThumbsUp size={20}/>
		</button>
	)

	return likeButton;
}

LikeButton.propTypes = {
  user: PropTypes.object.isRequired,
  likeVideo: PropTypes.func.isRequired,
  unlikeVideo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user
});

const mapActionsToProps = {
  likeVideo,
  unlikeVideo
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(LikeButton);