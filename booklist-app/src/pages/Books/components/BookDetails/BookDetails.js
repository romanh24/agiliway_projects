import React, { Component } from "react";
import "./BookDetails.scss";
import { Link } from "react-router-dom";
import { Button, Spinner } from "reactstrap";
import { fetchBookByIdAction } from "../../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const BookDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { book, loading } = useSelector((state) => state.bookDetailsReducer);

  useEffect(() => {
    dispatch(fetchBookByIdAction(id));
  }, [id, dispatch]);

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
