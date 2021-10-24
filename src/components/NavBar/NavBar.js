import { Navbar, NavItem, Nav, NavLink } from "reactstrap";
import { NavLink as ReactLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink tag={ReactLink} to="/finalform" activeClassName="active">
              Final Form
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              tag={ReactLink}
              to="/formvalidation"
              activeClassName="active"
            >
              Form Validation
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={ReactLink} to="/todolist" activeClassName="active">
              To Do List
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
