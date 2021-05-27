import { createAction, createReducer } from "@reduxjs/toolkit";

export const receiveUsers = createAction("receiveUsers");
export const addQuestionToUser = createAction("addQuestionToUser");
export const addAnswerToUser = createAction("addAnswerToUser");

export default createReducer([], {
  [receiveUsers.type]: (state, action) => {
    return {
      ...state,
      ...action.payload,
    };
  },
  [addQuestionToUser.type]: (state, action) => {
    return {
      ...state,
      [action.payload.author]: {
        ...state[action.payload.author],
        questions: state[action.payload.author].questions.concat([
          action.payload.id,
        ]),
      },
    };
  },
  [addAnswerToUser.type]: (state, action) => {
    const { qid, answer, authUser } = action.payload;

    return {
      ...state,
      [authUser]: {
        ...state[authUser],
        answers: {
          ...state[authUser].answers,
          [qid]: answer,
        },
      },
    };
  },
});
