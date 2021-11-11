import { getPosts } from "../../api/posts";
import { fetchPostsSuccessAction, fetchPostsFailureAction } from "./actions";

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
