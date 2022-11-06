import React, { useState, useEffect } from 'react'
import './account.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Spinner } from 'reactstrap';
import { connect } from 'react-redux';
import { signupUser } from '../../redux/actions/userActions';


function Login(props) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [userHandle, setUserhandle] = useState('');
	const [errors, setErrors] = useState({});

	const { UI:{ loading }, UI } = props;

	useEffect(() => {
  		window.scrollTo(0, 0);
		if (UI.errors){
    		setErrors(UI.errors)
    	}
    }, [UI]);

	const handleSubmit = (event) => {
		event.preventDefault();
	    const newUser = {
	    	email: email,
			password: password,
			confirmPassword: confirmPassword,
			userHandle: userHandle,
	    };
    	props.signupUser(newUser);
	};
	return (
		<div className="accountpage">
			<div className="wrapper">
				<form>
					<div className="wrap">
						<label>Username</label>
						<input 
							required
							name="userHandle"
							value={userHandle}
							onChange={(e) => setUserhandle(e.target.value)}  
							type="text" 
						/>
						{errors.userHandle &&
							<div className="error">
								<span>{errors.userHandle}</span>
							</div>
						}
					</div>
					<div className="wrap">
						<label>Email Address</label>
						<input 
							required
							name="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}  
							type="email" 
						/>
						{errors.email &&
							<div className="error">
								<span>{errors.email}</span>
							</div>
						}
					</div>
					<div className="wrap">
						<label>Password</label>
						<input 
							required
							name="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}  
							type="password" 
						/>
						{errors.password &&
							<div className="error">
								<span>{errors.password}</span>
							</div>
						}
					</div>
					<div className="wrap">
						<label>Confirm Password</label>
						<input 
							required
							name="confirmPassword"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}  
							type="password" 
						/>

						{errors.confirmPassword &&
							<div className="error">
								<span>{errors.confirmPassword}</span>
							</div>
						}
						{errors.general &&
							<div className="error">
								<span>{errors.general}</span>
							</div>
						}
					</div>
					<button onClick={handleSubmit}>
						{loading ? 
							<Spinner />
						:
							"Register"
						}
					</button>
				</form>
				<div className="links">
					<Link to="/login">
						Login
					</Link>
					 | 
					 <Link to="/">
					 	Back to StreamTube
					 </Link>
				</div>
			</div>
		</div>
	)
}
Login.propTypes = {
  signupUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI
});

const mapActionsToProps = {
  signupUser
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Login);