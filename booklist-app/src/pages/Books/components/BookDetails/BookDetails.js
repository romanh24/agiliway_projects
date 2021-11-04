import React, { useEffect } from "react";
import "./BookDetails.scss";
import { Link, useParams } from "react-router-dom";
import { Button, Spinner } from "reactstrap";
import { connect } from "react-redux";
import { fetchBookByIdAction } from "../../../../redux/actions";

const BookDetails = ({ bookData, fetchBookById }) => {
  console.log(bookData);
  const { id } = useParams();

  useEffect(() => {
    fetchBookById(id);
  }, []);

  const date = new Date(bookData.book.publishDate).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="book-details">
      <h3>{bookData.book.title}</h3>
      <p>{date}</p>
      <p>
        <b>Description:</b> {bookData.book.description}
      </p>
      <p>
        <b>Excerpt:</b> {bookData.book.excerpt}
      </p>
      <div>
        {bookData.loading && <Spinner color="warning" size="lg" children="" />}
      </div>
      <Link to="/books">
        <Button color="secondary">Back</Button>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    bookData: state.bookDetailsReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBookById: (id) => dispatch(fetchBookByIdAction(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);
