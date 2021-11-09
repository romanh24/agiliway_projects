import "./NavBar.css";
import { Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "./logo.png";

const { Header } = Layout;

const LogoContainer = styled.div`
  position: absolute;
  display: flex;
  background-image: url(${logo});
  /* margin-left: 5%; */
  width: 65px;
  height: 65px;
  background-size: cover;
`;
// const NavBarText = styled.div`
//   ${"" /* position: absolute; */}
//   display: flex;
//   background-color: #fff;
// `;

const NavBar = () => {
  return (
    <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <div>
        <LogoContainer />
      </div>

      <Menu
        style={{ justifyContent: "flex-end" }}
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
      >
        <Menu.Item key="1">
          <NavLink to="/">Home</NavLink>
        </Menu.Item>

        <Menu.Item key="2">
          <NavLink to="/post-list">Post List</NavLink>
        </Menu.Item>

        <Menu.Item key="3">
          <NavLink to="/statistic">Statistic</NavLink>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default NavBar;
