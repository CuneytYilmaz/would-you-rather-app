import { RECEIVE_USERS, ADD_QUESTION_TO_USER, ANSWER_QUESTION_TO_USER } from './types';

export function receiveUsers (users) {
	return {
    	type: RECEIVE_USERS,
      	users,
    }
}

export function addQuestionToUser (question) {
	return {
    	type: ADD_QUESTION_TO_USER,
      	question,
    }
}

export function answerQuestionToUser (authedUser, qid, answer) {
	return {
    	type: ANSWER_QUESTION_TO_USER,
      	authedUser,
      	qid,
      	answer
    }
}