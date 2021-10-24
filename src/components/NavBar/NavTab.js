import { NavItem, NavLink } from "reactstrap";
import { NavLink as ReactLink } from "react-router-dom";

export const NavTab = (props) => {
  const { route, title } = props;
  return (
    <NavItem>
      <NavLink tag={ReactLink} to={route} activeClassName="active">
        {title}
      </NavLink>
    </NavItem>
  );
};
