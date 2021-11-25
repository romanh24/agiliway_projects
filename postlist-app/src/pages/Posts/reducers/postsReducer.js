import {
  POSTS_FETCH_IN_PROGRESS,
  POSTS_FETCH_SUCCESS,
  POSTS_FETCH_ERROR,
  POST_ADD_IN_PROGRESS,
  POST_ADD_SUCCESS,
  POST_ADD_ERROR,
  POST_EDIT_BY_ID_IN_PROGRESS,
  POST_EDIT_BY_ID_SUCCESS,
  POST_EDIT_BY_ID_ERROR,
  POST_EDIT_FETCH_DATA_IN_PROGRESS,
  POST_EDIT_FETCH_DATA_SUCCESS,
  POST_EDIT_FETCH_DATA_ERROR,
  POST_DELETE_BY_ID_IN_PROGRESS,
  POST_DELETE_BY_ID_SUCCESS,
  POST_DELETE_BY_ID_ERROR,
} from '../action-types/posts.action-types';

import { MODAL_OPEN, MODAL_CLOSE } from '../action-types/modal.action-types';

const initialState = {
  loading: true,
  modalDataLoading: true,
  modalVisible: false,
  posts: [],
  modalType: null,
  post: {},
  error: '',
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_OPEN: {
      return {
        ...state,
        loading: false,
        modalDataLoading: false,
        modalVisible: true,
        modalType: action.payload.modalType,
        post: action.payload.post,
      };
    }
    case MODAL_CLOSE: {
      return {
        ...state,
        loading: false,
        modalVisible: false,
        modalType: '',
        modalDataLoading: false,
        post: {},
      };
    }
    case POSTS_FETCH_IN_PROGRESS: {
      return {
        ...initialState,
        loading: true,
      };
    }
    case POSTS_FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        posts: action.payload,
        error: '',
      };
    }
    case POSTS_FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    case POST_ADD_IN_PROGRESS: {
      return {
        ...state,
        modalDataLoading: true,
      };
    }
    case POST_ADD_SUCCESS: {
      return {
        ...state,
        loading: true,
        modalVisible: false,
        modalDataLoading: false,
        posts: [],
      };
    }
    case POST_ADD_ERROR: {
      return {
        ...state,
        loading: false,
        modalDataLoading: false,
        error: action.payload,
      };
    }
    case POST_EDIT_FETCH_DATA_IN_PROGRESS: {
      return {
        ...state,
        modalDataLoading: true,
      };
    }
    case POST_EDIT_FETCH_DATA_SUCCESS: {
      return {
        ...state,
        modalDataLoading: false,
        post: action.payload,
      };
    }
    case POST_EDIT_FETCH_DATA_ERROR: {
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
      };
    }
    case POST_EDIT_BY_ID_SUCCESS: {
      return {
        ...state,
        modalVisible: false,
        modalDataLoading: true,
        modalType: '',
        post: {},
      };
    }
    case POST_EDIT_BY_ID_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    case POST_DELETE_BY_ID_IN_PROGRESS: {
      return {
        ...state,
        modalDataLoading: true,
      };
    }
    case POST_DELETE_BY_ID_SUCCESS: {
      return {
        ...state,
        loading: true,
        post: {},
        modalVisible: false,
        modalDataLoading: false,
        modalType: '',
      };
    }
    case POST_DELETE_BY_ID_ERROR: {
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
