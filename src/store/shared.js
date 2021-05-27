import { getInitialData } from "../utils/api";
import { receiveUsers, addQuestionToUser, addAnswerToUser } from "./user";
import { addQuestion, receiveQuestions, addAnswer } from "./questions";
import { _saveQuestionAnswer, _saveQuestion } from "../utils/_DATA";
export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
    });
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authUser } = getState();
    return _saveQuestion({
      optionOneText,
      optionTwoText,
      author: authUser,
    }).then((question) => {
      dispatch(addQuestion(question));
      dispatch(addQuestionToUser(question));
    });
  };
}

export function handleAnswer(qid, option) {
  return (dispatch, getState) => {
    const { authUser } = getState();
    const info = {
      authedUser: authUser,
      qid,
      answer: option,
    };

    _saveQuestionAnswer(info).then(() => {
      dispatch(addAnswer({ authUser, qid, option }));
      dispatch(addAnswerToUser({ authUser, qid, option }));
    });
  };
}
