import React, { Component } from "react";
import "./BookList.scss";
import { BookItem } from "../BookItem/BookItem";
import Pagination from "../../../../components/Pagination/";
import { Spinner } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooksAction } from "../../../../redux/actions";

const BookList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(9);
  const { books, loading } = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooksAction());
  }, [dispatch]);

  const lastBookIndex = currentPage * booksPerPage;
  const firstBookIndex = lastBookIndex - booksPerPage;
  const currentBook = books.slice(firstBookIndex, lastBookIndex);

  return (
    <div>
      <h1>Books</h1>
      <div className="book-list-container">
        {!loading &&
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

        {loading && <Spinner color="warning" size="lg" children="" />}
      </div>
      <div>
        <Pagination
          booksPerPage={booksPerPage}
          totalBooks={books.length}
          paginate={paginate}
          nextPage={nextPage}
          previousPage={previousPage}
          currentPage={currentPage}
        />
      </div>
    );
  }
}

export default BookList;
