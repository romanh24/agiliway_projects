import {
  POSTS_FETCH_IN_PROGRESS,
  POSTS_FETCH_SUCCESS,
  POSTS_FETCH_FAILURE,
  POST_ADD_IN_PROGRESS,
  POST_ADD_SUCCESS,
  POST_ADD_FAILURE,
  POST_EDIT_GET_DATA_SUCCESS,
  POST_EDIT_GET_DATA_FAILURE,
  POST_EDIT_BY_ID_IN_PROGRESS,
  POST_EDIT_BY_ID_SUCCESS,
  POST_EDIT_BY_ID_FAILURE,
  POST_DELETE_GET_DATA_SUCCESS,
  POST_DELETE_GET_DATA_FAILURE,
  POST_DELETE_BY_ID_IN_PROGRESS,
  POST_DELETE_BY_ID_SUCCESS,
  POST_DELETE_BY_ID_FAILURE,
  POST_EDIT_GET_DATA_IN_PROGRESS,
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

export const postsFetchFailureAction = (error) => {
  return {
    type: POSTS_FETCH_FAILURE,
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

export const postAddFailureAction = (error) => {
  return {
    type: POST_ADD_FAILURE,
    payload: error,
  };
};

export const postEditGetDataInProgressAction = () => {
  return {
    type: POST_EDIT_GET_DATA_IN_PROGRESS,
  };
};

export const postEditGetDataSuccessAction = (post) => {
  return {
    type: POST_EDIT_GET_DATA_SUCCESS,
    payload: post,
  };
};

export const postEditGetDataFailureAction = (error) => {
  return {
    type: POST_EDIT_GET_DATA_FAILURE,
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

export const postEditByIdFailureAction = (error) => {
  return {
    type: POST_EDIT_BY_ID_FAILURE,
    payload: error,
  };
};

export const postDeleteGetByIdSuccessAction = (postData) => {
  return {
    type: POST_DELETE_GET_DATA_SUCCESS,
    payload: postData,
  };
};

export const postDeleteGetByIdFailureAction = (error) => {
  return {
    type: POST_DELETE_GET_DATA_FAILURE,
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

export const postDeleteByIdFailureAction = (error) => {
  return {
    type: POST_DELETE_BY_ID_FAILURE,
    payload: error,
  };
};
