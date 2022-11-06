import React, { useState, Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPopular } from '../../../redux/actions/dataActions';
import Videos1 from './Videos1';
import Videos1Skeleton from './Videos1Skeleton';

function Popular(props) {
	const { loading, popular } = props.data;

	useEffect(() => {
		if (!popular.length){
			props.getPopular();
		}
	}, []);

	const Markup =
	 	!loading ? popular && popular
	 	.slice(0, 9)
	 	.map((video, i) => <Videos1 key={i} video={video} />)
	 	: <Videos1Skeleton />;

	return (
		<Fragment>
			{Markup}
		</Fragment>
	)
}
Popular.propTypes = {
  getPopular: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  data: state.data
});

export default connect(
  mapStateToProps,
  { getPopular }
)(Popular);