import { getInitialData } from "../utils/api";
import { receiveUsers, addQuestionToUser, addAnswerToUser } from "./user";
import { addQuestion, receiveQuestions, addAnswer } from "./questions";
import { _saveQuestionAnswer, _saveQuestion } from "../utils/_DATA";

export const handleInitialData = () => {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
    });
  };
}

export const handleAddQuestion = (optionOneValue, optionTwoValue) => {
  return (dispatch, getState) => {
    const { authUser } = getState();
    return _saveQuestion({
      optionOneValue,
      optionTwoValue,
      author: authUser,
    }).then((question) => {
      dispatch(addQuestion(question));
      dispatch(addQuestionToUser(question));
    });
  };
}

export const handleAnswer = (qid, option) => {
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
