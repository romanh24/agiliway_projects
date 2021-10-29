import "./BookItem.scss";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

export const BookItem = ({ id, title, description, publishDate }) => {
  return (
    <div className="book-card">
      <h3>{title}</h3>
      <p>{publishDate.slice(0, 10)}</p>
      <p>{description.substring(0, 400)}...</p>
      <Link to={`/books/${id}`}>
        <Button color="primary">Read More</Button>
      </Link>
    </div>
  );
};
