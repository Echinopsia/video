import React, { useState, useEffect } from 'react'
import './account.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Spinner } from 'reactstrap';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions/userActions';


function Login(props) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
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
	    const loginData = {
	    	email: email,
			password: password,
	    };
   		props.loginUser(loginData);
	};
	return (
		<div className="accountpage">
			<div className="wrapper">
				<form>
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
							"Log In"
						}
					</button>
				</form>
				<div className="links">
					<Link to="/register">
						Register
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
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI
});

const mapActionsToProps = {
  loginUser
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Login);