import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <NavLink to="/books">
          <Button color="info" outline>
            Find my book
          </Button>
        </NavLink>
      </div>
    );
  }
}
