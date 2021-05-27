import { createAction, createReducer } from "@reduxjs/toolkit";

export const authUser = createAction("authUser");
export const unAuthUser = createAction("unAuthUser");

export default createReducer(null, {
  [authUser.type]: (authUser, action) => {
    return action.payload;
  },
  [unAuthUser.type]: (authUser, action) => {
    return null;
  },
});
