import { getPosts, createPost } from "../../api/posts";
import {
  fetchPostsSuccessAction,
  fetchPostsFailureAction,
  createPostSuccessAction,
  createPostInProgressAction,
} from "./actions";

export const thunkPosts = () => {
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

export const thunkCreatePost = (postData) => {
  return (dispatch) => {
    dispatch(createPostInProgressAction());
    createPost(postData).then((response) => {
      console.log(response);
      dispatch(createPostSuccessAction());
      dispatch(thunkPosts());
    });
  };
};

console.log(thunkCreatePost({ name: "test" }));
