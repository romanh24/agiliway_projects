import {
  POSTS_FETCH_IN_PROGRESS,
  POSTS_FETCH_SUCCESS,
  POSTS_FETCH_ERROR,
  POST_ADD_IN_PROGRESS,
  POST_ADD_SUCCESS,
  POST_ADD_ERROR,
  POST_EDIT_FETCH_DATA_IN_PROGRESS,
  POST_EDIT_FETCH_DATA_SUCCESS,
  POST_EDIT_FETCH_DATA_ERROR,
  POST_EDIT_BY_ID_IN_PROGRESS,
  POST_EDIT_BY_ID_SUCCESS,
  POST_EDIT_BY_ID_ERROR,
  POST_DELETE_BY_ID_IN_PROGRESS,
  POST_DELETE_BY_ID_SUCCESS,
  POST_DELETE_BY_ID_ERROR,
} from "../action-types/posts.action-types";

export const postsFetchInProgressAction = () => {
  return {
    type: POSTS_FETCH_IN_PROGRESS,
  };
};

export const postsFetchSuccessAction = (posts) => {
  return {
    type: POSTS_FETCH_SUCCESS,
    payload: posts,
  };
};

export const postsFetchErrorAction = (error) => {
  return {
    type: POSTS_FETCH_ERROR,
    payload: error,
  };
};

export const postAddInProgressAction = () => {
  return {
    type: POST_ADD_IN_PROGRESS,
  };
};

export const postAddSuccessAction = () => {
  return {
    type: POST_ADD_SUCCESS,
  };
};

export const postAddErrorAction = (error) => {
  return {
    type: POST_ADD_ERROR,
    payload: error,
  };
};

export const postEditFetchDataInProgressAction = () => {
  return {
    type: POST_EDIT_FETCH_DATA_IN_PROGRESS,
  };
};

export const postEditFetchDataSuccessAction = (post) => {
  return {
    type: POST_EDIT_FETCH_DATA_SUCCESS,
    payload: post,
  };
};

export const postEditFetchDataErrorAction = (error) => {
  return {
    type: POST_EDIT_FETCH_DATA_ERROR,
    payload: error,
  };
};

export const postEditByIdInProgressAction = () => {
  return {
    type: POST_EDIT_BY_ID_IN_PROGRESS,
  };
};

export const postEditByIdSuccessAction = () => {
  return {
    type: POST_EDIT_BY_ID_SUCCESS,
  };
};

export const postEditByIdErrorAction = (error) => {
  return {
    type: POST_EDIT_BY_ID_ERROR,
    payload: error,
  };
};

export const postDeleteByIdInProgressAction = () => {
  return {
    type: POST_DELETE_BY_ID_IN_PROGRESS,
  };
};

export const postDeleteByIdSuccessAction = () => {
  return {
    type: POST_DELETE_BY_ID_SUCCESS,
  };
};

export const postDeleteByIdErrorAction = (error) => {
  return {
    type: POST_DELETE_BY_ID_ERROR,
    payload: error,
  };
};
