import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import LoadingBar from 'react-redux-loading';
import Login from './Login';
import AddQuestion from './AddQuestion';
import QuestionContainer from './QuestionContainer';
import LeaderBoard from './LeaderBoard';
import Nav from './Nav';

class App extends Component {
  componentDidMount() {
  	this.props.dispatch(handleInitialData());
  }
  
  render() {
    return (
      <Router>
      	<Fragment>
      		<LoadingBar />
      		<div className='nav-container'>
      			<Nav />
      		</div>
      		<hr className='hr-app-color' />
      		<div className='container'>
      			<div>
      				<Route path='/' exact component={Login} />
					<Route path='/add' exact component={AddQuestion} />
					<Route path='/questions/:id' component={QuestionContainer} />
					<Route path='/leaderboard' exact component={LeaderBoard} />
      			</div>
      		</div>
      	</Fragment>
      </Router>
    );
  }
}

export default connect()(App);
