import React from "react";
import "./NavBar.scss";
import { NavLink as ReactLink } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" className="mb-6">
          <NavbarBrand className="logo" />
          <Nav className="mr-auto py-2 fs-4 ms-auto" navbar>
            <NavItem>
              <NavLink exact tag={ReactLink} to="/" activeClassName="active">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/books" activeClassName="active">
                Books
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
