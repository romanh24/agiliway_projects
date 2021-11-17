import {
  getPosts,
  getPostDetails,
  addPost,
  editPost,
} from "../../../api/posts";
import {
  postsFetchSuccessAction,
  postsFetchFailureAction,
  postAddSuccessAction,
  postAddFailureAction,
  postEditGetDataFailureAction,
  postEditGetDataSuccessAction,
  postEditByIdSuccessAction,
  postEditByIdFailureAction,
} from "../actions/posts.actions";
import {
  postFetchByIdSuccessAction,
  postFetchByFailureAction,
  postResetAction,
} from "../actions/post.action";

export const getPostsThunk = () => {
  return (dispatch) => {
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
    addPost(postData)
      .then((response) => {
        console.log(response);
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
        console.log("thunk post:", response);
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
    getPostDetails(id)
      .then((response) => {
        console.log("edit post thunk:", response);
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
    editPost(id, postData)
      .then((response) => {
        console.log(response);
        dispatch(postEditByIdSuccessAction());
        dispatch(getPostsThunk());
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(postEditByIdFailureAction(errorMsg));
      });
  };
};
