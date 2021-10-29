import React from "react";
import "./BookDetails.scss";
import { getBookById } from "../../../../api/books";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

export default class BookDetails extends React.Component {
  state = {
    bookList: [],
    loading: true,
    error: false,
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    getBookById(id)
      .then((response) => {
        this.setState({ loading: false, bookList: response.data });
      })
      .catch((error) => {
        console.log("Error: ", error.message);
      });
  }

  render() {
    const { title, description, excerpt, publishDate } = this.state.bookList;
    return (
      <div className="book-details">
        <h3>{title}</h3>
        <p>{publishDate}</p>
        <p>
          <b>Description:</b> {description}
        </p>
        <p>
          <b>Excerpt:</b> {excerpt}
        </p>
        <Link to="/books">
          <Button color="secondary">Back</Button>
        </Link>
      </div>
    );
  }
}
