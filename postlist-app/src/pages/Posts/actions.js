import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  CREATE_POST_SUCCESS,
  CREATE_POST_SHOW,
  CREATE_POST_CLOSE,
  CREATE_POST_IN_PROGRESS,
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

export const createPostSuccessAction = () => {
  return {
    type: CREATE_POST_SUCCESS,
  };
};

export const createPostShowAction = () => {
  return {
    type: CREATE_POST_SHOW,
  };
};

export const createPostCloseAction = () => {
  return {
    type: CREATE_POST_CLOSE,
  };
};

export const createPostInProgressAction = () => {
  return {
    type: CREATE_POST_IN_PROGRESS,
  };
};
