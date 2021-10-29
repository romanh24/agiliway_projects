import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const NotFoundPage = () => {
  return (
    <div>
      <h1>404 - Not Found!</h1>
      <Link to="/">
        <Button color="warning">Go Home</Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
