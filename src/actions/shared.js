import { getInitialData, saveQuestion, saveQuestionAnswer } from '../utils/api';
import { receiveUsers, addQuestionToUser, answerQuestionToUser } from './users';
import { receiveQuestions, addQuestion, answerQuestion } from './questions';
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

export function handleAddQuestion (optionOne, optionTwo) {
  	return (dispatch, getState) => {
      	const { authedUser } = getState();
        
      	dispatch(showLoading());
      
      	return saveQuestion({
        	optionOneText: optionOne,
          	optionTwoText: optionTwo,
          	author : authedUser,
        })
      	.then((question) => {
          dispatch(addQuestion(question)) 
          dispatch(addQuestionToUser(question)) })
      	.then(() => dispatch(hideLoading()))
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