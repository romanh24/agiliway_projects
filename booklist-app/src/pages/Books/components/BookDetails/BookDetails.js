import React, { useState, useEffect } from "react";
import "./BookDetails.scss";
import { getBookById } from "../../../../api/books";
import { Link, useParams } from "react-router-dom";
import { Button, Spinner } from "reactstrap";

const BookDetails = () => {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    getBookById(id)
      .then(({ data }) => {
        setBook(data);
        setLoading(false);
      })
      .catch(() => setError(true));
  }, []);

  const date = new Date(book.publishDate).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="book-details">
      <h3>{book.title}</h3>
      <p>{date}</p>
      <p>
        <b>Description:</b> {book.description}
      </p>
      <p>
        <b>Excerpt:</b> {book.excerpt}
      </p>
      <div>{loading && <Spinner color="warning" size="lg" children="" />}</div>
      <Link to="/books">
        <Button color="secondary">Back</Button>
      </Link>
    </div>
  );
};

export default BookDetails;
