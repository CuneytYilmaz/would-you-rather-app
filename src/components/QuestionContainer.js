import React, { Component } from 'react';
import Question from './Question';
import Result from './Result';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class QuestionContainer extends Component {
  
	render() {
      	const { isError, isAnswered, authedUser } = this.props;

		if (authedUser === null) {
        	return(<Redirect to='/' />)
        }
      
      	// This If-Else logic created to handle init time of questions array to store. It occurs only when refresh "/questions:id" URL.
      	if (isError && isAnswered === null) {
          	// todo: Error Page
        	return(<div>Error Page</div>) 
        } 
      	else if (isAnswered !== null) {
        	return(
              <div>
                  {!isAnswered
                      ? ( <Question /> )
                      : ( <Result /> )}
              </div>
        	)
        }
  		else {
        	return (<div>Loading...</div>)
        }
    }
}

function mapStateToProps ({ questions, authedUser }, props ) {
  	const { id } = props.match.params;
  	const question = questions[id];
  
  	return {
      	isError: Object.entries(questions).length !== 0,
      	isAnswered: question
      				? question.optionOne.votes.includes(authedUser) || 
      				  question.optionTwo.votes.includes(authedUser)
                  	: null,
      	authedUser,
    }
}

export default connect(mapStateToProps)(QuestionContainer);