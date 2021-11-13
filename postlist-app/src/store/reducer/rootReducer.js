import { combineReducers } from "redux";
import { postsReducer } from "../../pages/Posts/reducers/postsReducer";
import { postAddReducer } from "../../pages/Posts/reducers/postAddReducer";

const rootReducer = combineReducers({
  postsReducer,
  postAddReducer,
});

export default rootReducer;
