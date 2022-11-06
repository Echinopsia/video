import React, { useEffect } from 'react'
import './videopage.css';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { connect } from 'react-redux';
import { getVideo } from '../../redux/actions/dataActions';
import { Container, Row, Col } from 'reactstrap';
import VideoPlayer from './VideoPlayer';
import Bottom from './Bottom';
import CommentSection from './CommentSection';
import Section1 from '../home/Section1';


function VideoPage(props) {
	let params = useParams();
	dayjs.extend(relativeTime);

	const { video } = props.video;
	
	const {
		video: {
	    	videoId,
        	body,
        	likeCount,
        	title,
        	url,
        	comments,
        	commentCount,
        	viewCount,
        	category,
        	createdAt
    	},
    	UI: { loading },
  	} = props;

  	useEffect(() => {
  		window.scrollTo(0, 0);
  		props.getVideo(params.videoId);
  	}, [params]);

	return (
		<div className="videopage">
			<Container fluid={true}>
				<Row>
					<Col sm={12} lg={8} xl={9} className="pt-4 main">
						<div className="body">
							<div className="video">
								<VideoPlayer url={url}/>
							</div>
						</div>
						<div className="bottom">
							<Bottom video={props.video} />
						</div>
					</Col>
					<Col sm={12} lg={4} xl={3}>
						<CommentSection />
					</Col>
				</Row>
			</Container>
			<Section1 />
		</div>
	)
}
VideoPage.propTypes = {
	getVideo: PropTypes.func.isRequired,
	video: PropTypes.object.isRequired,
	UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	video: state.data.video,
	UI: state.UI,
});

const mapActionsToProps = {
	getVideo,
};

export default connect(
	mapStateToProps,
	mapActionsToProps
)(VideoPage);