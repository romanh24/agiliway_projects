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
  postEditFetchDataInProgressAction,
  postEditFetchDataSuccessAction,
  postEditFetchDataErrorAction,
  postEditByIdInProgressAction,
  postEditByIdSuccessAction,
  postEditByIdErrorAction,
  postDeleteByIdInProgressAction,
  postDeleteByIdSuccessAction,
  postDeleteByIdErrorAction,
} from '../actions/posts.actions';
import {
  postFetchSuccessAction,
  postFetchErrorAction,
  postResetAction,
} from '../actions/post.action';

export const postsFetchThunk = () => (dispatch) => {
  dispatch(postsFetchInProgressAction());
  getPosts()
    .then((response) => {
      const posts = response.data;
      dispatch(postsFetchSuccessAction(posts));
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

export const postFetchIdThunk = (id) => (dispatch) => {
  dispatch(postResetAction());
  getPostDetails(id)
    .then((response) => {
      const post = response;
      dispatch(postFetchSuccessAction(post));
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(postFetchErrorAction(errorMsg));
      message.error(errorMsg);
    });
};

export const postEditFetchByIdThunk = (id) => (dispatch) => {
  dispatch(postEditFetchDataInProgressAction());
  getPostDetails(id)
    .then((response) => {
      dispatch(postEditFetchDataSuccessAction(response));
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(postEditFetchDataErrorAction(errorMsg));
      message.error(errorMsg);
    });
};

export const postEditByIdThunk = (id, postData) => (dispatch) => {
  dispatch(postEditByIdInProgressAction());
  editPost(id, postData)
    .then(() => {
      dispatch(postEditByIdSuccessAction());
      message.success('Post edited!');
      dispatch(postsFetchThunk());
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(postEditByIdErrorAction(errorMsg));
      message.error(errorMsg);
    });
};

export const postDeleteByIdThunk = (id) => (dispatch) => {
  dispatch(postDeleteByIdInProgressAction());
  deletePost(id)
    .then(() => {
      dispatch(postDeleteByIdSuccessAction());
      message.success('Post deleted!');
      dispatch(postsFetchThunk());
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(postDeleteByIdErrorAction(errorMsg));
      message.error(errorMsg);
    });
};
