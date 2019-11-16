import { getInitialData, saveQuestionAnswer } from '../utils/api';
import { receiveUsers, answerQuestionToUser } from './users';
import { receiveQuestions, answerQuestion } from './questions';
import { showLoading, hideLoading } from 'react-redux-loading';

export function handleInitialData () {
	return (dispatch) => {
    	dispatch(showLoading());
      	return getInitialData()
      		.then(({users, questions}) => {
        		dispatch(receiveUsers(users));
          		dispatch(receiveQuestions(questions));
          		dispatch(hideLoading());
        	})
    }
}

export function handleAnswerQuestion (qid, answer) {
  
	return (dispatch, getState) => {
    	const { authedUser } = getState();
   
      	dispatch(showLoading());
      	return saveQuestionAnswer({
        	authedUser,
          	qid,
          	answer
        })
      	.then(() => { 
          	dispatch(answerQuestion(authedUser, qid, answer))
            dispatch(answerQuestionToUser(authedUser, qid, answer)) })
      	.then(() => dispatch(hideLoading()))
    }
}