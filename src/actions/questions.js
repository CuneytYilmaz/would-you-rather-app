import { RECEIVE_QUESTIONS, ADD_QUESTION, ANSWER_QUESTION } from './types';

export function receiveQuestions (questions) {
	return {
    	type: RECEIVE_QUESTIONS,
      	questions,
    }
}

export function addQuestion (question) {
	return {
    	type: ADD_QUESTION,
      	question,
    }
}

export function answerQuestion (authedUser, qid, answer) {
	return {
    	type: ANSWER_QUESTION,
      	authedUser,
      	qid,
      	answer
    }
}