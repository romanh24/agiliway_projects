import {
  POSTS_FETCH_SUCCESS,
  POSTS_FETCH_FAILURE,
  POST_ADD_SUCCESS,
  POST_EDIT_GET_DATA_SUCCESS,
  POST_EDIT_BY_ID_SUCCESS,
  POST_EDIT_BY_ID_FAILURE,
  POST_EDIT_GET_DATA_FAILURE,
  POST_DELETE_BY_ID_SUCCESS,
  POST_DELETE_BY_ID_FAILURE,
  POST_DELETE_GET_DATA_SUCCESS,
  POST_DELETE_GET_DATA_FAILURE,
} from "../action-types/posts.action-types";

import {
  OPEN_MODAL,
  MODAL_ADD_CLOSE,
  MODAL_EDIT_SHOW,
  MODAL_EDIT_CLOSE,
  MODAL_ADD_TYPE,
  MODAL_EDIT_TYPE,
} from "../action-types/modal.action-types";

const initialState = {
  loading: false,
  modalVisible: false,
  posts: [],
  modalType: null,
  post: {},
  error: "",
};

export const postsReducer = (state = initialState, action) => {
  console.log("postsReducer:", action);
  switch (action.type) {
    case POSTS_FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        posts: action.payload,
        error: "",
      };
    }
    case POSTS_FETCH_FAILURE: {
      return {
        ...state,
        loading: false,
        posts: [],
        error: action.payload,
      };
    }
    case POST_ADD_SUCCESS: {
      return {
        ...state,
        loading: false,
        modalVisible: false,
      };
    }
    case OPEN_MODAL: {
      return {
        ...state,
        loading: false,
        modalVisible: true,
        modalType: action.payload,
      };
    }
    case MODAL_ADD_CLOSE: {
      return {
        ...state,
        loading: false,
        modalVisible: false,
        modalType: MODAL_ADD_TYPE,
      };
    }
    case MODAL_EDIT_SHOW: {
      return {
        ...state,
        loading: false,
        modalVisible: true,
        modalType: MODAL_EDIT_TYPE,
      };
    }
    case MODAL_EDIT_CLOSE: {
      return {
        ...state,
        loading: false,
        modalVisible: false,
        modalType: MODAL_EDIT_TYPE,
      };
    }
    case POST_EDIT_GET_DATA_SUCCESS: {
      return {
        ...state,
        loading: false,
        post: action.payload,
      };
    }
    case POST_EDIT_GET_DATA_FAILURE: {
      return {
        ...state,
        loading: false,
        post: {},
        error: action.payload,
      };
    }
    case POST_EDIT_BY_ID_SUCCESS: {
      return {
        ...state,
        loading: false,
        modalVisible: false,
        modalType: "",
      };
    }
    case POST_EDIT_BY_ID_FAILURE: {
      return {
        ...state,
        loading: false,
        post: {},
        error: action.payload,
      };
    }
    case POST_DELETE_GET_DATA_SUCCESS: {
      return {
        ...state,
        loading: false,
        post: action.payload,
      };
    }
    case POST_DELETE_GET_DATA_FAILURE: {
      return {
        ...state,
        loading: false,
        post: {},
        error: action.payload,
      };
    }
    case POST_DELETE_BY_ID_SUCCESS: {
      return {
        ...state,
        loading: false,
        post: {},
        modalVisible: false,
        modalType: "",
      };
    }
    case POST_DELETE_BY_ID_FAILURE: {
      return {
        ...state,
        loading: false,
        // post: {},
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
