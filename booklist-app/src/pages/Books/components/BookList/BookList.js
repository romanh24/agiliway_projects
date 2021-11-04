import React, { Component } from "react";
import "./BookList.scss";
import { BookItem } from "../BookItem/BookItem";
import { connect } from "react-redux";
import { fetchBooksAction } from "../../../../redux/actions";
import Pagination from "../../../../components/Pagination/";
import { Spinner } from "reactstrap";

const BOOKS_PER_PAGE = 9;

class BookList extends Component {
  state = {
    currentPage: 1,
  };

  componentDidMount() {
    this.props.fetchBooks();
  }

  paginate = (number) => {
    this.setState({
      currentPage: number,
    });
  };

  nextPage() {
    this.setState((prev) => prev + 1);
  }

  previousPage() {
    this.setState((prev) => prev - 1);
  }

  render() {
    const { bookData } = this.props;
    console.log(bookData);

    const lastBookIndex = this.state.currentPage * BOOKS_PER_PAGE;
    const firstBookIndex = lastBookIndex - BOOKS_PER_PAGE;
    const currentBook = bookData.books.slice(firstBookIndex, lastBookIndex);

    return (
      <div>
        <h1>Books</h1>
        <div className="book-list-container">
          {!bookData.loading &&
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

          {bookData.loading && (
            <Spinner color="warning" size="lg" children="" />
          )}
        </div>
        <div>
          <Pagination
            booksPerPage={BOOKS_PER_PAGE}
            totalBooks={bookData.books.length}
            paginate={this.paginate}
            nextPage={this.nextPage}
            previousPage={this.previousPage}
            currentPage={this.state.currentPage}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
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
