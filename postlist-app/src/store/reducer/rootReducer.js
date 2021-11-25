import { combineReducers } from 'redux';
import { postsReducer } from '../../pages/Posts/reducers/postsReducer';
import { postReducer } from '../../pages/Posts/reducers/postReducer';

const rootReducer = combineReducers({
  postsReducer,
  postReducer,
});

export default rootReducer;
