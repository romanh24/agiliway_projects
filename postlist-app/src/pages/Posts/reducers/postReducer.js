import {
  POST_FETCH_SUCCESS,
  POST_FETCH_ERROR,
  POST_RESET,
} from '../action-types/post.action-types';

const initialState = {
  loading: true,
  post: {},
  error: '',
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_FETCH_SUCCESS: {
      return {
        loading: false,
        post: action.payload,
        error: '',
      };
    }
    case POST_FETCH_ERROR: {
      return {
        loading: false,
        error: action.payload,
      };
    }
    case POST_RESET: {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
};
