import React, { useState, useEffect } from "react";
import "./BookList.scss";
import { BookItem } from "../BookItem/BookItem";
import { connect } from "react-redux";
import { fetchBooksAction } from "../../../../redux/actions";
import Pagination from "../../../../components/Pagination/";
import { Spinner } from "reactstrap";

const BookList = ({ bookData, fetchBooks }) => {
  console.log("bookData: ", bookData);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(9);

  useEffect(() => {
    fetchBooks();
  });

  const lastBookIndex = currentPage * booksPerPage;
  const firstBookIndex = lastBookIndex - booksPerPage;
  const currentBook = bookData.books.slice(firstBookIndex, lastBookIndex);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => setCurrentPage((prev) => prev + 1);

  const previousPage = () => setCurrentPage((prev) => prev - 1);

  return (
    <div>
      <h1>Books</h1>
      <div className="book-list-container">
        {currentBook.map((book) => {
          return (
            <BookItem
              key={book.id}
              id={book.id}
              title={book.title}
              description={book.description}
              publishDate={book.publishDate}
            />
          );
        })}

        {bookData.loading &&
          currentBook.map((book) => {
            return (
              <BookItem
                key={book.id}
                id={book.id}
                title={book.title}
                description={book.description}
                publishDate={book.publishDate}
              />
            );
          })}

        {bookData.loading && <Spinner color="warning" size="lg" children="" />}
      </div>
      <div>
        <Pagination
          booksPerPage={booksPerPage}
          totalBooks={bookData.books.length}
          paginate={paginate}
          nextPage={nextPage}
          previousPage={previousPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    bookData: state.bookReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBooks: () => dispatch(fetchBooksAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
