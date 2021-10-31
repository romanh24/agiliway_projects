import React, { useState, useEffect } from "react";
import "./BookList.scss";
import { getBooks } from "../../../../api/books";
import { BookItem } from "../BookItem/BookItem";
import Pagination from "../../../../components/Pagination/";
import { Spinner } from "reactstrap";

const BookList = () => {
  const [bookList, setBookList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(9);

  useEffect(() => {
    getBooks()
      .then(({ data }) => {
        setLoading(true);
        setBookList(data);
        // setLoading(false);
      })
      .catch((error) => {
        setError(true);
        console.log("Error: ", error.message);
      });
  }, []);

  const lastBookIndex = currentPage * booksPerPage;
  const firstBookIndex = lastBookIndex - booksPerPage;
  const currentBook = bookList.slice(firstBookIndex, lastBookIndex);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => setCurrentPage((prev) => prev + 1);

  const previousPage = () => setCurrentPage((prev) => prev - 1);

  return (
    <div>
      <h1>Books</h1>
      <div className="book-list-container">
        {loading &&
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

        {!loading && <Spinner color="warning" size="lg" children="" />}
      </div>
      <div>
        <Pagination
          booksPerPage={booksPerPage}
          totalBooks={bookList.length}
          paginate={paginate}
          nextPage={nextPage}
          previousPage={previousPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default BookList;
