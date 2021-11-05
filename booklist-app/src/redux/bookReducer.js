import { FETCH_BOOKS_SUCCESS, FETCH_BOOKS_FAILURE } from "./types";

const initialState = {
  loading: true,
  books: [],
  error: "",
};

export const bookReducer = (state = initialState, action) => {
  console.log("bookReducer:", action);
  switch (action.type) {
    case FETCH_BOOKS_SUCCESS: {
      return {
        loading: false,
        books: action.payload,
        error: "",
      };
    }
    case FETCH_BOOKS_FAILURE: {
      return {
        loading: false,
        books: [],
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
