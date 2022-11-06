import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import LogoutButton from './LogoutButton';


function Account(props) {
	const { authenticated } = props.user;
	return (
		<div className="account d-flex align-items-center">
			<div className="ms-auto">
				{!authenticated ? 
					<NavLink to="/login">
						<AiOutlineUser size={22}/>
						<span>Sign In</span>
					</NavLink>
				:
					<LogoutButton />
				}
			</div>
		</div>
	)
}
Account.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
  user: state.user
});


export default connect(mapStateToProps)(Account);