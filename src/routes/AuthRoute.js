import React from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const AuthRoute = ({ children, authenticated }) => {
      
  if (!authenticated ) {
    return children
  }
  return <Navigate to="/" />
}

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated
});

AuthRoute.propTypes = {
  user: PropTypes.object
};

export default connect(mapStateToProps)(AuthRoute);