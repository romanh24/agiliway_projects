import "./BookItem.scss";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

export const BookItem = ({ id, title, description, publishDate }) => {
  const date = new Date(publishDate).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="book-card">
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{description.substring(0, 400)}...</p>
      <Link to={`/books/${id}`}>
        <Button color="primary">Read More</Button>
      </Link>
    </div>
  );
};
