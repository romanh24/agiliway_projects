import { POST_ADD_SUCCESS } from "../action-types/posts.action-types";
import {
  MODAL_SHOW,
  MODAL_CLOSE,
  MODAL_IN_PROGRESS,
} from "../action-types/modal.action-types";

const initialState = {
  loading: false,
  visible: false,
};

export const postAddReducer = (state = initialState, action) => {
  console.log("postAddReducer:", action);
  switch (action.type) {
    case POST_ADD_SUCCESS: {
      return {
        loading: false,
        visible: false,
      };
    }
    case MODAL_SHOW: {
      return {
        loading: false,
        visible: true,
      };
    }
    case MODAL_IN_PROGRESS: {
      return {
        loading: true,
      };
    }
    case MODAL_CLOSE: {
      return {
        loading: false,
        visible: false,
      };
    }
    default:
      return state;
  }
};
