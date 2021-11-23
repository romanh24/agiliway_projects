import {
  POST_FETCH_BY_ID_SUCCESS,
  POST_FETCH_BY_ID_ERROR,
  POST_RESET,
} from '../action-types/postDetails.action-types';

export const postFetchByIdSuccessAction = (postData) => ({
  type: POST_FETCH_BY_ID_SUCCESS,
  payload: postData,
});

export const postFetchByErrorAction = (error) => ({
  type: POST_FETCH_BY_ID_ERROR,
  payload: error,
});

export const postResetAction = () => ({
  type: POST_RESET,
});
