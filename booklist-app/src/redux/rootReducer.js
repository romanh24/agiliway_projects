import { combineReducers } from "redux";
import { bookReducer } from "./bookReducer";
import { bookDetailsReducer } from "./bookDetailsReducer";

export const rootReducer = combineReducers({
  bookReducer,
  bookDetailsReducer,
});
