import {
  POSTS_RESET,
  POSTS_FETCH_START,
  POSTS_FETCH_IN_PROGRESS,
  POSTS_FETCH_SUCCESS,
  POSTS_FETCH_ERROR,
  POST_ADD_START,
  POST_ADD_IN_PROGRESS,
  POST_ADD_SUCCESS,
  POST_ADD_ERROR,
  POST_EDIT_FETCH_START,
  POST_EDIT_FETCH_IN_PROGRESS,
  POST_EDIT_FETCH_SUCCESS,
  POST_EDIT_FETCH_ERROR,
  POST_EDIT_IN_PROGRESS,
  POST_EDIT_START,
  POST_EDIT_SUCCESS,
  POST_EDIT_ERROR,
  POST_DELETE_START,
  POST_DELETE_IN_PROGRESS,
  POST_DELETE_SUCCESS,
  POST_DELETE_ERROR,
} from '../action-types/posts.action-types';

export const postsResetAction = () => ({
  type: POSTS_RESET,
});

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

export const postEditFetchStartAction = (id) => ({
  type: POST_EDIT_FETCH_START,
  payload: id,
});

export const postEditFetchInProgressAction = () => ({
  type: POST_EDIT_FETCH_IN_PROGRESS,
});

export const postEditFetchSuccessAction = (post) => ({
  type: POST_EDIT_FETCH_SUCCESS,
  payload: post,
});

export const postEditFetchErrorAction = (error) => ({
  type: POST_EDIT_FETCH_ERROR,
  payload: error,
});

export const postEditStartAction = (id, data) => ({
  type: POST_EDIT_START,
  payload: { id, data },
});

export const postEditInProgressAction = () => ({
  type: POST_EDIT_IN_PROGRESS,
});

export const postEditSuccessAction = () => ({
  type: POST_EDIT_SUCCESS,
});

export const postEditErrorAction = (error) => ({
  type: POST_EDIT_ERROR,
  payload: error,
});

export const postDeleteStartAction = (id) => ({
  type: POST_DELETE_START,
  payload: id,
});

export const postDeleteInProgressAction = () => ({
  type: POST_DELETE_IN_PROGRESS,
});

export const postDeleteSuccessAction = () => ({
  type: POST_DELETE_SUCCESS,
});

export const postDeleteErrorAction = (error) => ({
  type: POST_DELETE_ERROR,
  payload: error,
});
