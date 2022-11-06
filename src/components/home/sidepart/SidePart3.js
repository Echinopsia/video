import React from 'react'
import { FaLayerGroup } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; 
import { Row } from 'reactstrap';
import categories from '../../../assets/categories';
import Categories from './Categories';

function SidePart3(props) {

	const { loading } = props.data;
	
	const Markup =
		categories.length && categories
	 	.map((item, i) => <Categories key={i} item={item} />);

	return (
		<div className="sidepart">
			<div className="side-title">
				<h2>
				<span><FaLayerGroup size={15}/></span>
					Categories
				</h2>
			</div>
			<Row>
				{Markup}
			</Row>
		</div>
	)
}
SidePart3.propTypes = {
  data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  data: state.data
});

export default connect(
  mapStateToProps,
)(SidePart3);