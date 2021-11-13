import { getPosts, addPost } from "../../../api/posts";
import {
  fetchPostsSuccessAction,
  fetchPostsFailureAction,
  createPostSuccessAction,
} from "../actions/posts.actions";
import {
  modalShowAction,
  modalInProgressAction,
  modalCloseAction,
} from "../actions/modal.actions";

export const getPostsThunk = () => {
  return (dispatch) => {
    getPosts()
      .then((response) => {
        const posts = response.data;
        dispatch(fetchPostsSuccessAction(posts));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchPostsFailureAction(errorMsg));
      });
  };
};

export const addPostThunk = (postData) => {
  return (dispatch) => {
    dispatch(modalInProgressAction());
    addPost(postData).then((response) => {
      console.log(response);
      dispatch(createPostSuccessAction());
      dispatch(getPostsThunk());
    });
  };
};

// console.log(addPostThunk({ name: "test" }));
