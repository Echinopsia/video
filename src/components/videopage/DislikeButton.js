import React from 'react'
import { BsHandThumbsDown } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { unlikeVideo } from '../../redux/actions/dataActions';

function LikeButton(props) {

	const { likeCount } = props;
	const { authenticated } = props.user;

	const videoIsLiked = () => {
		if (
			props.user.likes && 
			props.user.likes.find(
				(like) => like.videoId === props.videoId
			)
		)
		return true;
		else return false;
	}

	const unlikeVideo = () => {
		props.unlikeVideo(props.videoId);
	}
	
	const likeButton = !authenticated ? (
		<Link to="/login">
			<BsHandThumbsDown size={25}/>
			<span>{likeCount}</span>
		</Link>
	) : videoIsLiked() ? (
		<button>
			<BsHandThumbsDown size={25}/>
			<span>{likeCount}</span>
		</button>
	) : (
		<button onClick={unlikeVideo}>
			<BsHandThumbsDown size={25}/>
			<span>{likeCount}</span>
		</button>
	)

	return likeButton;
}

LikeButton.propTypes = {
  user: PropTypes.object.isRequired,
  unlikeVideo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user
});

const mapActionsToProps = {
  unlikeVideo,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(LikeButton);