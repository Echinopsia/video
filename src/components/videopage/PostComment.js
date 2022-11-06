import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { postComment } from '../../redux/actions/dataActions';

function PostComment(props) {
	const [body, setBody] = useState('');
	const {
		video: {
        	videoId
    	},
    	UI: { loading },
    	authenticated
  	} = props;

	const handleSubmit = () => {
		props.postComment(videoId, { body: body });
		setBody('');
	}

	const Markup = !authenticated ? (
		<div className="not-authenticated p-3">
			<p>
				You must be <Link to="/login">logged in</Link> to post comments.
			</p>
		</div>
	) : (
		<div className="authenticated">
			<input 
				type="text"
				placeholder="Type a comment"
				value={body} 
				onChange={(e) => setBody(e.target.value)}  
			/>
			<button onClick={handleSubmit}>
				Post comment
			</button>
		</div>
	)
	return (
		<div className="postcomment">
			<div className="title">
				<h3>Leave a reply</h3>
			</div>
			{Markup}
		</div>
	)
}
PostComment.propTypes = {
  postComment: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired,
  video: PropTypes.object.isRequired,
  authenticated: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  UI: state.UI,
  authenticated: state.user.authenticated,
  video: state.data.video
});

export default connect(
  mapStateToProps,
  { postComment }
)(PostComment);
