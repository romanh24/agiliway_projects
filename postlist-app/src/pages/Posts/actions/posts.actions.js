import {
  POSTS_FETCH_SUCCESS,
  POSTS_FETCH_FAILURE,
  POST_ADD_SUCCESS,
} from "../action-types/posts.action-types";

export const fetchPostsSuccessAction = (posts) => {
  return {
    type: POSTS_FETCH_SUCCESS,
    payload: posts,
  };
};

export const fetchPostsFailureAction = (error) => {
  return {
    type: POSTS_FETCH_FAILURE,
    payload: error,
  };
};

export const createPostSuccessAction = () => {
  return {
    type: POST_ADD_SUCCESS,
  };
};
