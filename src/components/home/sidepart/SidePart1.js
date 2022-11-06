import React, { Fragment, useEffect } from 'react'
import { AiOutlineStar } from 'react-icons/ai'; 
import { Row } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPopular } from '../../../redux/actions/dataActions';
import Videos3 from './Videos3';
import Videos3Skeleton from './Videos3Skeleton';

function SidePart1(props) {

	const { loading, popular } = props.data;
	
	useEffect(() => {
		if (!popular.length){
			props.getPopular();
		}
	}, []);

	const Markup =
	 	popular.length ? popular && popular
	 	.slice(0, 3)
	 	.map((video, i) => <Videos3 key={i} video={video} />)
	 	: <Fragment><Videos3Skeleton /><Videos3Skeleton /><Videos3Skeleton /> </Fragment>;

	return (
		<div className="sidepart">
			<div className="side-title">
				<h2>
				<span><AiOutlineStar size={15}/></span>
					Popular
				</h2>
			</div>
			<Row>
				{Markup}
			</Row>
		</div>
	)
}
SidePart1.propTypes = {
  data: PropTypes.object.isRequired,
  getPopular: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data
});

export default connect(
  mapStateToProps,
  { getPopular }
)(SidePart1);