import { message } from 'antd';
import {
  getPosts,
  getPostDetails,
  addPost,
  editPost,
  deletePost,
} from '../../../api/posts';
import {
  postsFetchInProgressAction,
  postsFetchSuccessAction,
  postsFetchErrorAction,
  postAddInProgressAction,
  postAddSuccessAction,
  postAddErrorAction,
  postEditFetchInProgressAction,
  postEditFetchSuccessAction,
  postEditFetchErrorAction,
  postEditInProgressAction,
  postEditSuccessAction,
  postEditErrorAction,
  postDeleteInProgressAction,
  postDeleteSuccessAction,
  postDeleteErrorAction,
} from '../actions/posts.actions';
import {
  postResetAction,
  postFetchSuccessAction,
  postFetchErrorAction,
} from '../actions/post.action';

export const postsFetchThunk = () => (dispatch) => {
  dispatch(postsFetchInProgressAction());
  return getPosts()
    .then((response) => {
      dispatch(postsFetchSuccessAction(response));
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(postsFetchErrorAction(errorMsg));
      message.error(errorMsg);
    });
};

export const postAddThunk = (postData) => (dispatch) => {
  dispatch(postAddInProgressAction());
  addPost(postData)
    .then(() => {
      dispatch(postAddSuccessAction());
      message.success('Post added!');
      dispatch(postsFetchThunk());
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(postAddErrorAction(errorMsg));
      message.error(errorMsg);
    });
};

export const postFetchThunk = (id) => (dispatch) => {
  dispatch(postResetAction());
  getPostDetails(id)
    .then((response) => {
      dispatch(postFetchSuccessAction(response));
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(postFetchErrorAction(errorMsg));
      message.error(errorMsg);
    });
};

export const postEditFetchThunk = (id) => (dispatch) => {
  dispatch(postEditFetchInProgressAction());
  getPostDetails(id)
    .then((response) => {
      dispatch(postEditFetchSuccessAction(response));
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(postEditFetchErrorAction(errorMsg));
      message.error(errorMsg);
    });
};

export const postEditThunk = (id, postData) => (dispatch) => {
  dispatch(postEditInProgressAction());
  editPost(id, postData)
    .then(() => {
      dispatch(postEditSuccessAction());
      message.success('Post edited!');
      dispatch(postsFetchThunk());
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(postEditErrorAction(errorMsg));
      message.error(errorMsg);
    });
};

export const postDeleteThunk = (id) => (dispatch) => {
  dispatch(postDeleteInProgressAction());
  deletePost(id)
    .then(() => {
      dispatch(postDeleteSuccessAction());
      message.success('Post deleted!');
      dispatch(postsFetchThunk());
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(postDeleteErrorAction(errorMsg));
      message.error(errorMsg);
    });
};
