import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from "./action-types/posts.action-types";

const initialState = {
  loading: true,
  posts: [],
  error: "",
};

export const postsReducer = (state = initialState, action) => {
  console.log("postsReducer:", action);
  switch (action.type) {
    case FETCH_POSTS_SUCCESS: {
      return {
        loading: false,
        posts: action.payload,
        error: "",
      };
    }
    case FETCH_POSTS_FAILURE: {
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
