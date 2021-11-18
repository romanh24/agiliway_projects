import {
  POST_FETCH_BY_ID_SUCCESS,
  POST_FETCH_BY_ID_FAILURE,
  POST_RESET,
} from "../action-types/post.action-types";

export const postFetchByIdSuccessAction = (postData) => {
  return {
    type: POST_FETCH_BY_ID_SUCCESS,
    payload: postData,
  };
};

export const postFetchByFailureAction = (error) => {
  return {
    type: POST_FETCH_BY_ID_FAILURE,
    payload: error,
  };
};

export const postResetAction = () => {
  return {
    type: POST_RESET,
  };
};
