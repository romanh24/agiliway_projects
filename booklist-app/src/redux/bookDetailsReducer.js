import {
  FETCH_BOOK_BY_ID_SUCCESS,
  FETCH_BOOK_BY_ID_FAILURE,
  RESET_BOOK,
} from "./types";

const initialState = {
  loading: true,
  book: [],
  error: "",
};

export const bookDetailsReducer = (state = initialState, action) => {
  console.log("bookDetailsReducer: ", action);
  switch (action.type) {
    case FETCH_BOOK_BY_ID_SUCCESS: {
      return {
        loading: false,
        book: action.payload,
        error: "",
      };
    }
    case FETCH_BOOK_BY_ID_FAILURE: {
      return {
        loading: false,
        book: [],
        error: action.payload,
      };
    }
    case RESET_BOOK: {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
};
