import {
  POST_FETCH_BY_ID_SUCCESS,
  POST_FETCH_BY_ID_ERROR,
  POST_RESET,
} from "../action-types/postDetails.action-types";

export const postFetchByIdSuccessAction = (postData) => {
  return {
    type: POST_FETCH_BY_ID_SUCCESS,
    payload: postData,
  };
};

export const postFetchByErrorAction = (error) => {
  return {
    type: POST_FETCH_BY_ID_ERROR,
    payload: error,
  };
};

export const postResetAction = () => {
  return {
    type: POST_RESET,
  };
};
