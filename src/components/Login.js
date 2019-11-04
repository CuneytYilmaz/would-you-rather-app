import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import { setAuthedUser } from '../actions/authedUser';
import Home from './Home';
import loginPhoto from '../img/loginPhoto.png';

const formatOptionLabel = ({ id, name, avatarURL, props }) => (
  <div className='login-single-user'>
  	<img src={avatarURL} alt={name} className='login-user-img' />
	{name}
  </div>
);

class Login extends Component {
  	state = {
		userName: '',    
      	toHome: false,
    }

	handleOnChange = (value) => {
      	this.setState({
        	userName: value.id,
        })
    }

	handleSubmit = () => {
    	const { userName } = this.state;
      	const { dispatch } = this.props;

      	dispatch(setAuthedUser(userName));
      
      	this.setState({
        	userName: '',
          	toHome: true,
        });
    }

	render () {
      	const { userName, toHome } = this.state;
		const { users, authedUser } = this.props;

		if (toHome || authedUser) {
        	return <Home />
        }

    	return(
        	<div className='login-container center' >
          		<div className='bg-header'>
          			<h3 className='login-header-text'>Welcome to the Would You Rather App!</h3>
          			<p className='login-subtitle'>Please sign in to continue</p>
         		</div>
          		<hr className='hr-login-color' />
          		<img src={loginPhoto} alt='Login' className='login-img' />
				<h2 className='login-signin-color'>Sign in</h2>

				<Select 
					onChange={this.handleOnChange} 
					formatOptionLabel={formatOptionLabel} 
					options={users} 
					getOptionLabel={(option)=>option.id}
   					getOptionValue={(option)=>option.name}
					placeholder='Select User'
					isSearchable={false}
					className='login-select' />
				<button
					type='submit'
					disabled={userName === ''}
					onClick={this.handleSubmit}
					className='login-btn'
				>
					Sign In
				</button>
          	</div>
        );
    }
}

function mapStateToProps ({ users, authedUser }) {
	return {
    	users: Object.values(users),
      	authedUser
    }
}

export default connect(mapStateToProps)(Login);