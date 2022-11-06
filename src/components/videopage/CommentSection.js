import React from 'react'
import './comments.css'
import PostComment from './PostComment';
import Comments from './Comments';

export default function CommentSection() {
	return (
		<div className="commentsection mb-4">
			<div className="inner">
				<PostComment />
				<Comments />
			</div>
		</div>
	)
}