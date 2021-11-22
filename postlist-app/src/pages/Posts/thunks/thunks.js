import {
  getPosts,
  getPostDetails,
  addPost,
  editPost,
  deletePost,
} from "../../../api/posts";
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
} from "../actions/posts.actions";
import {
  postFetchByIdSuccessAction,
  postFetchByErrorAction,
  postResetAction,
} from "../actions/postDetails.action";
import { message } from "antd";

export const postsFetchThunk = () => {
  return (dispatch) => {
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
};

export const postAddThunk = (postData) => {
  return (dispatch) => {
    dispatch(postAddInProgressAction());
    addPost(postData)
      .then((response) => {
        dispatch(postAddSuccessAction());
        message.success("Post added!");
        dispatch(postsFetchThunk());
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(postAddErrorAction(errorMsg));
        message.error(errorMsg);
      });
  };
};

export const postFetchByIdThunk = (id) => {
  return (dispatch) => {
    dispatch(postResetAction());
    getPostDetails(id)
      .then((response) => {
        const post = response;
        dispatch(postFetchByIdSuccessAction(post));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(postFetchByErrorAction(errorMsg));
        message.error(errorMsg);
      });
  };
};

export const postEditFetchByIdThunk = (id) => {
  return (dispatch) => {
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
};

export const postEditByIdThunk = (postData, id) => {
  return (dispatch) => {
    dispatch(postEditByIdInProgressAction());
    editPost(id, postData)
      .then((response) => {
        dispatch(postEditByIdSuccessAction());
        message.success("Post edited!");
        dispatch(postsFetchThunk());
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(postEditByIdErrorAction(errorMsg));
        message.error(errorMsg);
      });
  };
};

export const postDeleteByIdThunk = (id) => {
  return (dispatch) => {
    dispatch(postDeleteByIdInProgressAction());
    deletePost(id)
      .then((response) => {
        dispatch(postDeleteByIdSuccessAction());
        message.success("Post deleted!");
        dispatch(postsFetchThunk());
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(postDeleteByIdErrorAction(errorMsg));
        message.error(errorMsg);
      });
  };
};
