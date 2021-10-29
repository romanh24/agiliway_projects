import React from "react";
import "./BookList.scss";
import { getBooks } from "../../../../api/books";
import { BookItem } from "../BookItem/BookItem";
import { Spinner } from "reactstrap";

export default class BookList extends React.Component {
  state = {
    bookList: [],
    loading: true,
    error: false,
  };

  componentDidMount() {
    getBooks()
      .then((response) => {
        this.setState({ loading: false, bookList: response.data });
      })
      .catch((error) => {
        console.log("Error: ", error.message);
      });
  }

  render() {
    return (
      <div>
        <h1>Books</h1>
        <div className="book-list-container">
          {!this.state.loading &&
            this.state.bookList.map((book) => {
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

          {this.state.loading && (
            <Spinner color="warning" size="lg" children="" />
          )}
        </div>
      </div>
    );
  }
}
