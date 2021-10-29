import React, { useState, useEffect } from "react";
import "./BookList.scss";
import { getBooks } from "../../../../api/books";
import { BookItem } from "../BookItem/BookItem";
import { Spinner } from "reactstrap";

const BookList = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getBooks()
      .then(({ data }) => {
        setList(data);
        setLoading(false);
      })
      .catch(() => setError(true));
  }, []);

  return (
    <div>
      <h1>Books</h1>
      <div className="book-list-container">
        {!loading &&
          list.map((book) => {
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
    </div>
  );
};

export default BookList;
