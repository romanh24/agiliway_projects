import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from "./action-types/posts.action-types";

export const fetchPostsSuccessAction = (posts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
  };
};

export const fetchPostsFailureAction = (error) => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error,
  };
};
