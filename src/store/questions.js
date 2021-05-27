import { createAction, createReducer } from "@reduxjs/toolkit";

export const receiveQuestions = createAction("receiveQuestions");
export const addQuestion = createAction("addQuestion");
export const addAnswer = createAction("addAnswer");

export default createReducer(
  {},
  {
    [receiveQuestions.type]: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    [addQuestion.type]: (state, action) => {
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    },
    [addAnswer.type]: (state, action) => {
      const { qid, option, authUser } = action.payload;
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [option]: {
            ...state[qid][option],
            votes: state[qid][option].votes.concat([authUser]),
          },
        },
      };
    },
  }
);
