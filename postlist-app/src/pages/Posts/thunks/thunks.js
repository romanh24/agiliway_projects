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
  postsFetchFailureAction,
  postAddInProgressAction,
  postAddSuccessAction,
  postAddFailureAction,
  postEditGetDataInProgressAction,
  postEditGetDataSuccessAction,
  postEditGetDataFailureAction,
  postEditByIdInProgressAction,
  postEditByIdSuccessAction,
  postDeleteGetByIdSuccessAction,
  postDeleteGetByIdFailureAction,
  postDeleteByIdInProgressAction,
  postEditByIdFailureAction,
  postDeleteByIdSuccessAction,
} from "../actions/posts.actions";
import {
  postFetchByIdSuccessAction,
  postFetchByFailureAction,
  postResetAction,
} from "../actions/post.action";
import { message } from "antd";

export const getPostsThunk = () => {
  return (dispatch) => {
    dispatch(postsFetchInProgressAction());
    getPosts()
      .then((response) => {
        const posts = response.data;
        dispatch(postsFetchSuccessAction(posts));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(postsFetchFailureAction(errorMsg));
        message.error(errorMsg);
      });
  };
};

export const addPostThunk = (postData) => {
  return (dispatch) => {
    dispatch(postAddInProgressAction());
    addPost(postData)
      .then((response) => {
        dispatch(postAddSuccessAction());
        message.success("Post added!");
        dispatch(getPostsThunk());
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(postAddFailureAction(errorMsg));
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
        dispatch(postEditGetDataFailureAction(errorMsg));
        message.error(errorMsg);
      });
  };
};

export const postEditGetByIdThunk = (id) => {
  return (dispatch) => {
    dispatch(postEditGetDataInProgressAction());
    getPostDetails(id)
      .then((response) => {
        dispatch(postEditGetDataSuccessAction(response));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(postFetchByFailureAction(errorMsg));
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
        dispatch(getPostsThunk());
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(postEditByIdFailureAction(errorMsg));
        message.error(errorMsg);
      });
  };
};

export const postDeleteGetByIdThunk = (id) => {
  return (dispatch) => {
    getPostDetails(id)
      .then((response) => {
        dispatch(postDeleteGetByIdSuccessAction(response));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(postDeleteGetByIdFailureAction(errorMsg));
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
        dispatch(getPostsThunk());
      })
      .catch((error) => {
        const errorMsg = error.message;
        message.error(errorMsg);
      });
  };
};
