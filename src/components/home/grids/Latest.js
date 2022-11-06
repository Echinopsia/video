import React, { useState, Fragment, useEffect } from 'react';
import { Spinner } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getLatest } from '../../../redux/actions/dataActions';
import Videos2 from './Videos2';
import { MdKeyboardArrowDown } from 'react-icons/md';

function Latest(props) {
	const { loading, latest } = props.data;
	const [ visible, setVisible ] = useState(8);

	const toggleVisible = () => {
		setVisible(visible + 4)
	}
	useEffect(() => {
		if (!latest.length){
			props.getLatest();
		}
	}, []);

	const Markup =
	 	!loading ? latest && latest
	 	.slice(0, visible)
	 	.map((video, i) => <Videos2 key={i} video={video} />)
	 	: <Spinner />;

	return (
		<Fragment>
			{Markup}
			<div className="showmore">
				<button onClick={toggleVisible}>
					<MdKeyboardArrowDown />
				</button>
			</div>
		</Fragment>
	)
}
Latest.propTypes = {
  getLatest: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  data: state.data
});

export default connect(
  mapStateToProps,
  { getLatest }
)(Latest);