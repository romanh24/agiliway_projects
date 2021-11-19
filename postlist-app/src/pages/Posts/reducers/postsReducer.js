import {
  POSTS_FETCH_IN_PROGRESS,
  POSTS_FETCH_SUCCESS,
  POSTS_FETCH_FAILURE,
  POST_ADD_IN_PROGRESS,
  POST_ADD_SUCCESS,
  POST_EDIT_BY_ID_IN_PROGRESS,
  POST_EDIT_BY_ID_SUCCESS,
  POST_EDIT_BY_ID_FAILURE,
  POST_EDIT_GET_DATA_IN_PROGRESS,
  POST_EDIT_GET_DATA_SUCCESS,
  POST_EDIT_GET_DATA_FAILURE,
  POST_DELETE_BY_ID_SUCCESS,
  POST_DELETE_BY_ID_FAILURE,
  POST_DELETE_GET_DATA_SUCCESS,
  POST_DELETE_GET_DATA_FAILURE,
} from "../action-types/posts.action-types";

import { MODAL_OPEN, MODAL_CLOSE } from "../action-types/modal.action-types";

const initialState = {
  loading: true,
  modalDataLoading: false,
  modalVisible: false,
  posts: [],
  modalType: null,
  post: {},
  error: "",
};

export const postsReducer = (state = initialState, action) => {
  console.log("postsReducer:", action);
  switch (action.type) {
    case MODAL_OPEN: {
      return {
        ...state,
        loading: false,
        modalDataLoading: false,
        modalVisible: true,
        modalType: action.payload,
      };
    }
    case MODAL_CLOSE: {
      return {
        ...state,
        loading: false,
        modalVisible: false,
        modalType: "",
        modalDataLoading: false,
      };
    }
    case POSTS_FETCH_IN_PROGRESS: {
      return {
        ...state,
        loading: true,
      };
    }
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
        error: action.payload,
      };
    }
    case POST_ADD_IN_PROGRESS: {
      return {
        ...state,
        loading: true,
        modalDataLoading: true,
      };
    }
    case POST_ADD_SUCCESS: {
      return {
        ...state,
        loading: true,
        modalVisible: false,
        modalDataLoading: false,
      };
    }
    case POST_EDIT_GET_DATA_IN_PROGRESS: {
      return {
        ...state,
        modalDataLoading: true,
        loading: true,
      };
    }
    case POST_EDIT_GET_DATA_SUCCESS: {
      return {
        ...state,
        modalDataLoading: false,
        loading: false,
        post: action.payload,
      };
    }
    case POST_EDIT_GET_DATA_FAILURE: {
      return {
        ...state,
        loading: false,
        modalDataLoading: false,
        error: action.payload,
      };
    }
    case POST_EDIT_BY_ID_IN_PROGRESS: {
      return {
        ...state,
        modalDataLoading: true,
        loading: true,
      };
    }
    case POST_EDIT_BY_ID_SUCCESS: {
      return {
        ...state,
        loading: true,
        modalVisible: false,
        modalDataLoading: false,
        modalType: "",
      };
    }
    case POST_EDIT_BY_ID_FAILURE: {
      return {
        ...state,
        loading: false,
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
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
