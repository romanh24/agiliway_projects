import {
  POSTS_FETCH_START,
  POSTS_FETCH_IN_PROGRESS,
  POSTS_FETCH_SUCCESS,
  POSTS_FETCH_ERROR,
  POST_ADD_START,
  POST_ADD_IN_PROGRESS,
  POST_ADD_SUCCESS,
  POST_ADD_ERROR,
  POST_EDIT_FETCH_DATA_START,
  POST_EDIT_FETCH_DATA_IN_PROGRESS,
  POST_EDIT_FETCH_DATA_SUCCESS,
  POST_EDIT_FETCH_DATA_ERROR,
  POST_EDIT_BY_ID_IN_PROGRESS,
  POST_EDIT_BY_ID_START,
  POST_EDIT_BY_ID_SUCCESS,
  POST_EDIT_BY_ID_ERROR,
  POST_DELETE_BY_ID_START,
  POST_DELETE_BY_ID_IN_PROGRESS,
  POST_DELETE_BY_ID_SUCCESS,
  POST_DELETE_BY_ID_ERROR,
} from '../action-types/posts.action-types';

export const postsFetchStartAction = () => ({
  type: POSTS_FETCH_START,
});

export const postsFetchInProgressAction = () => ({
  type: POSTS_FETCH_IN_PROGRESS,
});

export const postsFetchSuccessAction = (posts) => ({
  type: POSTS_FETCH_SUCCESS,
  payload: posts,
});

export const postsFetchErrorAction = (error) => ({
  type: POSTS_FETCH_ERROR,
  payload: error,
});

export const postAddStartAction = (post) => ({
  type: POST_ADD_START,
  payload: post,
});
export const postAddInProgressAction = () => ({
  type: POST_ADD_IN_PROGRESS,
});

export const postAddSuccessAction = () => ({
  type: POST_ADD_SUCCESS,
});

export const postAddErrorAction = (error) => ({
  type: POST_ADD_ERROR,
  payload: error,
});

export const postEditFetchDataStartAction = (id) => ({
  type: POST_EDIT_FETCH_DATA_START,
  payload: id,
});

export const postEditFetchDataInProgressAction = () => ({
  type: POST_EDIT_FETCH_DATA_IN_PROGRESS,
});

export const postEditFetchDataSuccessAction = (post) => ({
  type: POST_EDIT_FETCH_DATA_SUCCESS,
  payload: post,
});

export const postEditFetchDataErrorAction = (error) => ({
  type: POST_EDIT_FETCH_DATA_ERROR,
  payload: error,
});

export const postEditByIdStartAction = (id, data) => ({
  type: POST_EDIT_BY_ID_START,
  payload: { id, data },
});

export const postEditByIdInProgressAction = () => ({
  type: POST_EDIT_BY_ID_IN_PROGRESS,
});

export const postEditByIdSuccessAction = () => ({
  type: POST_EDIT_BY_ID_SUCCESS,
});

export const postEditByIdErrorAction = (error) => ({
  type: POST_EDIT_BY_ID_ERROR,
  payload: error,
});

export const postDeleteByIdStartAction = (id) => ({
  type: POST_DELETE_BY_ID_START,
  payload: id,
});

export const postDeleteByIdInProgressAction = () => ({
  type: POST_DELETE_BY_ID_IN_PROGRESS,
});

export const postDeleteByIdSuccessAction = () => ({
  type: POST_DELETE_BY_ID_SUCCESS,
});

export const postDeleteByIdErrorAction = (error) => ({
  type: POST_DELETE_BY_ID_ERROR,
  payload: error,
});
