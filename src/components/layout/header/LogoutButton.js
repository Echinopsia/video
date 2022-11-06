import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AiOutlineUser } from 'react-icons/ai';
import { logoutUser } from '../../../redux/actions/userActions';

function LogoutButton(props) {
	const handleLogout = () => {
    	props.logoutUser();
  	};
	return (
		<button className="signout" onClick={handleLogout}>
			<AiOutlineUser size={22}/> Log out
		</button>
	)
}
const mapActionsToProps = { logoutUser };

LogoutButton.propTypes = {
  logoutUser: PropTypes.func.isRequired,
};

export default connect(null, mapActionsToProps)(LogoutButton);