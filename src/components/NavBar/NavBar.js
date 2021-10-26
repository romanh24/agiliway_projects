import { Navbar, Nav } from "reactstrap";
import { NavTabConfig } from "./NavTabConfig";
import { NavTab } from "./NavTab";

const NavBar = () => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <Nav className="mr-auto" navbar>
          {NavTabConfig.map(({ route, title }) => {
            return <NavTab key={route} route={route} title={title} />;
          })}
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
