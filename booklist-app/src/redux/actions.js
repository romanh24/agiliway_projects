import axios from "axios";
import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
  FETCH_BOOK_BY_ID_SUCCESS,
  FETCH_BOOK_BY_ID_FAILURE,
} from "./types";

export const fetchBooksRequestAction = () => {
  return {
    type: FETCH_BOOKS_REQUEST,
  };
};

export const fetchBooksSuccessAction = (books) => {
  return {
    type: FETCH_BOOKS_SUCCESS,
    payload: books,
  };
};

export const fetchBooksFailureAction = (error) => {
  return {
    type: FETCH_BOOKS_FAILURE,
    payload: error,
  };
};

export const fetchBookByIdSuccessAction = (book) => {
  return {
    type: FETCH_BOOK_BY_ID_SUCCESS,
    payload: book,
  };
};

export const fetchBookByIdFailureAction = (error) => {
  return {
    type: FETCH_BOOK_BY_ID_FAILURE,
    payload: error,
  };
};

export const fetchBooksAction = () => {
  return (dispatch) => {
    // dispatch(fetchBooksRequestAction);
    axios
      .get("https://fakerestapi.azurewebsites.net/api/v1/books")
      .then((response) => {
        const books = response.data;
        dispatch(fetchBooksSuccessAction(books));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchBooksFailureAction(errorMsg));
      });
  };
};

export const fetchBookByIdAction = (id) => {
  return (dispatch) => {
    axios
      .get(`https://fakerestapi.azurewebsites.net/api/v1/books/${id}`)
      .then((response) => {
        const book = response.data;
        dispatch(fetchBookByIdSuccessAction(book));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchBookByIdFailureAction(errorMsg));
      });
  };
};
