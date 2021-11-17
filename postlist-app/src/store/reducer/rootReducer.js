import { combineReducers } from "redux";
import { postsReducer } from "../../pages/Posts/reducers/postsReducer";
import { postDetailsReducer } from "../../pages/Posts/reducers/postDetailsReducer";

const rootReducer = combineReducers({
  postsReducer,
  postDetailsReducer,
});

export default rootReducer;
