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
  postEditByIdFailureAction,
  postDeleteByIdSuccessAction,
} from "../actions/posts.actions";
import {
  postFetchByIdSuccessAction,
  postFetchByFailureAction,
  postResetAction,
} from "../actions/post.action";

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
      });
  };
};

export const addPostThunk = (postData) => {
  return (dispatch) => {
    dispatch(postAddInProgressAction());
    addPost(postData)
      .then((response) => {
        dispatch(postAddSuccessAction());
        dispatch(getPostsThunk());
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(postAddFailureAction(errorMsg));
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
      });
  };
};

export const postEditByIdThunk = (id, postData) => {
  return (dispatch) => {
    dispatch(postEditByIdInProgressAction());
    editPost(id, postData)
      .then((response) => {
        dispatch(postEditByIdSuccessAction());
        dispatch(getPostsThunk());
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(postEditByIdFailureAction(errorMsg));
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
      });
  };
};

export const postDeleteByIdThunk = (id) => {
  return (dispatch) => {
    deletePost(id).then((response) => {
      dispatch(postDeleteByIdSuccessAction());
      dispatch(getPostsThunk());
    });
  };
};
