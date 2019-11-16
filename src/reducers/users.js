import { RECEIVE_USERS, ANSWER_QUESTION_TO_USER } from '../actions/users';

export default function users (state={}, action) {
	switch (action.type) {
      case RECEIVE_USERS:
        return {
          ...state,
          ...action.users
        }
      case ANSWER_QUESTION_TO_USER:
        return {
          ...state,
          [action.authedUser]: { 
            ...state[action.authedUser], 
            questions: state[action.authedUser].questions.concat([action.qid])
          }
        }
      default :
       	return state;
    }
}