import React, { useEffect } from 'react'
import { BsPencil } from 'react-icons/bs'; 
import { Row } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getLatest } from '../../../redux/actions/dataActions';
import Videos4 from './Videos4';
import Videos3Skeleton from './Videos3Skeleton';

function SidePart2(props) {

	const { loading, latest } = props.data;
	
	useEffect(() => {
		if (!latest.length){
			props.getLatest();
		}
	}, []);

	const Markup =
	 	latest.length ? latest && latest
	 	.slice(0, 4)
	 	.map((video, i) => <Videos4 key={i} video={video} />)
	 	: <Videos3Skeleton />;

	return (
		<div className="sidepart">
			<div className="side-title">
				<h2>
				<span><BsPencil size={15}/></span>
					Latest
				</h2>
			</div>
			<Row>
				{Markup}
			</Row>
		</div>
	)
}
SidePart2.propTypes = {
  data: PropTypes.object.isRequired,
  getLatest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data
});

export default connect(
  mapStateToProps,
  { getLatest }
)(SidePart2);