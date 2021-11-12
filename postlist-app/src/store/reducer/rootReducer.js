import { combineReducers } from "redux";
import { postsReducer } from "../../pages/Posts/postsReducer";
import { createPostReducer } from "../../pages/Posts/createPostReducer";

export const rootReducer = combineReducers({
  postsReducer,
  createPostReducer,
});
