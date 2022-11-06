import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Row } from 'reactstrap';
import Videos from './Videos';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getLatest } from '../../../redux/actions/dataActions';

function Part4(props) {
	const { loading, latest } = props.data;

	const Markup =
	 	!loading ? latest && latest
	 	.slice(0, 2)
	 	.map((video, i) => <Videos key={i} video={video} />)
	 	: null;

	 	useEffect(() => {
		if (!latest.length){
			props.getLatest();
    	}
    	}, []);

	return (
		<div className="content">
			<div className="title">
				<h2>
					Latest
				</h2>
			</div>
			<Row>
				{Markup}
			</Row>
		</div>
	)
}
Part4.propTypes = {
  getLatest: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  data: state.data
});

export default connect(
  mapStateToProps,
  { getLatest }
)(Part4);