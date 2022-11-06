import React, { Fragment} from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { AiOutlineHome, AiFillPlayCircle } from 'react-icons/ai';
import { BsUpload } from 'react-icons/bs';
import { GoSignIn, GoSignOut } from 'react-icons/go';
import { FiLogIn, FiLayers } from 'react-icons/fi';
import ReactTooltip from 'react-tooltip';

function Menu(props) {
	const { authenticated } = props.user;
	const { expand } = props;
	const styles = {
		text:{
			display: expand ? 'inline-block' : 'none'
		},
		tooltip:{
			position: 'absolute', left: '0'
		}
	};
	function Buttons() {
   		return (
    		<Fragment>
    			{!authenticated ? 
    				<Fragment>
    					<li>
    						<NavLink to="/login"  data-tip data-for="login">
    							<FiLogIn />
    							<span style={styles.text}>
    								Sign In
    							</span>
    						</NavLink>
    					</li>
    					<li>
    						<NavLink to="/register"  data-tip data-for="register">
    							<GoSignIn />
    							<span style={styles.text}>
    								Register
    							</span>
    						</NavLink>
    					</li>
    				</Fragment>
    				:
    				<Fragment>
    					<li>
    						<NavLink to="/logout"  data-tip data-for="logout">
    							<GoSignOut />
    							<span style={styles.text}>Log Out</span>
    						</NavLink>
    					</li>
    				</Fragment>
    			}
    		</Fragment>
    	);
  	};
  	function ToolTip() {
  		return (
  			<Fragment>
  				<ReactTooltip style={styles.tooltip} id="home" place="right" effect="float">
	        		Home
	      		</ReactTooltip>
	      		<ReactTooltip style={styles.tooltip} id="upload" place="right" effect="float">
	        		Upload Video
	      		</ReactTooltip>
	      		<ReactTooltip style={styles.tooltip} id="videos" place="right" effect="float">
	        		Videos
	      		</ReactTooltip>
	      		<ReactTooltip style={styles.tooltip} id="categories" place="right" effect="float">
	        		Categories
	      		</ReactTooltip>
	      		<ReactTooltip style={styles.tooltip} id="login" place="right" effect="float">
	        		Sign In
	      		</ReactTooltip>
	      		<ReactTooltip style={styles.tooltip} id="register" place="right" effect="float">
	        		Register
	      		</ReactTooltip>
	      		<ReactTooltip style={styles.tooltip} id="logout" place="right" effect="float">
	        		Log Out
	      		</ReactTooltip>
  			</Fragment>
  		)
  	}
	return (
		<Fragment>
			{!expand ?
				<ToolTip />
			: 
				null 
			}
			<ul>

				<li>
					<NavLink to="/" data-tip data-for="home">
						<AiOutlineHome />
						<span style={styles.text}>
							Home
						</span>
					</NavLink>
				</li>
				<li>
					<NavLink to="/upload"  data-tip data-for="upload">
						<BsUpload />
						<span style={styles.text}>
							Upload
						</span>
					</NavLink>
				</li>
				<li>
					<NavLink to="/"  data-tip data-for="videos">
						<AiFillPlayCircle />
						<span>
							Videos
						</span>
					</NavLink>
				</li>
				<li>
					<NavLink to="/categories"  data-tip data-for="categories">
						<FiLayers />
						<span style={styles.text}>
							Categories
						</span>
					</NavLink>
				</li>
				<Buttons />
			</ul>
		</Fragment>
	)
}

Menu.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
  user: state.user
});


export default connect(mapStateToProps)(Menu);