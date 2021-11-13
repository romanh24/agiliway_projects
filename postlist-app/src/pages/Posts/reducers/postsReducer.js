import {
  POSTS_FETCH_SUCCESS,
  POSTS_FETCH_FAILURE,
} from "../action-types/posts.action-types";

const initialState = {
  loading: true,
  posts: [],
  error: "",
};

export const postsReducer = (state = initialState, action) => {
  console.log("postsReducer:", action);
  switch (action.type) {
    case POSTS_FETCH_SUCCESS: {
      return {
        loading: false,
        posts: action.payload,
        error: "",
      };
    }
    case POSTS_FETCH_FAILURE: {
      return {
        loading: false,
        posts: [],
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
