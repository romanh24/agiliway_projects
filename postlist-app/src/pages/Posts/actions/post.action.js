import {
  POST_FETCH_START,
  POST_FETCH_IN_PROGRESS,
  POST_FETCH_SUCCESS,
  POST_FETCH_ERROR,
  POST_RESET,
} from '../action-types/post.action-types';

export const postFetchStartAction = (id) => ({
  type: POST_FETCH_START,
  payload: id,
});

export const postFetchInProgressAction = () => ({
  type: POST_FETCH_IN_PROGRESS,
});

export const postFetchSuccessAction = (postData) => ({
  type: POST_FETCH_SUCCESS,
  payload: postData,
});

export const postFetchErrorAction = (error) => ({
  type: POST_FETCH_ERROR,
  payload: error,
});

export const postResetAction = () => ({
  type: POST_RESET,
});
