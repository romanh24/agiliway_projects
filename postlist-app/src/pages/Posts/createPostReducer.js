import {
  CREATE_POST_CLOSE,
  CREATE_POST_IN_PROGRESS,
  CREATE_POST_SHOW,
  CREATE_POST_SUCCESS,
} from "./action-types/posts.action-types";

const initialState = {
  loading: false,
  visible: false,
};

export const createPostReducer = (state = initialState, action) => {
  console.log("createPostReducer:", action);
  switch (action.type) {
    case CREATE_POST_SUCCESS: {
      return {
        loading: false,
        visible: false,
      };
    }
    case CREATE_POST_SHOW: {
      return {
        loading: false,
        visible: true,
      };
    }
    case CREATE_POST_IN_PROGRESS: {
      return {
        loading: true,
      };
    }
    case CREATE_POST_CLOSE: {
      return {
        loading: false,
        visible: false,
      };
    }
    default:
      return state;
  }
};
