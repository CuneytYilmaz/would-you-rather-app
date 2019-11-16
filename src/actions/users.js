export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER';
export const ANSWER_QUESTION_TO_USER = 'ANSWER_QUESTION_TO_USER';

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