import React, { useState, useEffect } from 'react'
import './category.css';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { getCategory } from '../../redux/actions/dataActions';
import Videos2 from '../home/grids/Videos2';
import Sidepart from '../home/sidepart/Sidepart';

function Categories(props) {
	const [page, setPage] = useState("");
	const [visible, setVisible] = useState(6);
	const params = useParams();
	const { loading, category } = props.data;
	useEffect(() => {
		if (params.category !== page){
			props.getCategory(params.category);
			setPage(params.category);
  		window.scrollTo(0, 0);
		}
	}, [params.category]);
	const Markup =
	 	!loading ? category && category
	 	.slice(0, visible)
	 	.map((video, i) => <Videos2 key={i} video={video} />)
	 	: null;
	return (
		<div className="category">
			<Container fluid={true}>
				<Row>
					<Col xs={12} md={8}>
						<div className="title">
							<h2>{params.category}</h2>
						</div>
						<Row>
							{Markup}
						</Row>
					</Col>
					<Col xs={12} md={4}>
						<Sidepart />
					</Col>
				</Row>
			</Container>
		</div>
	)
}
Categories.propTypes = {
  getCategory: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  data: state.data
});

export default connect(
  mapStateToProps,
  { getCategory }
)(Categories);