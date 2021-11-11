import { combineReducers } from "redux";
import { postsReducer } from "../../pages/Posts/postsReducer";

export const rootReducer = combineReducers({
  postsReducer,
});
