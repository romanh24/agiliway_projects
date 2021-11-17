import {
  POST_FETCH_BY_ID_SUCCESS,
  POST_FETCH_BY_ID_FAILURE,
  POST_RESET,
} from "../action-types/post.action-types";

const initialState = {
  loading: true,
  post: [],
  error: "",
};

export const postDetailsReducer = (state = initialState, action) => {
  console.log("postDetailsReducer: ", action);
  switch (action.type) {
    case POST_FETCH_BY_ID_SUCCESS: {
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    }
    case POST_FETCH_BY_ID_FAILURE: {
      return {
        loading: false,
        post: [],
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
