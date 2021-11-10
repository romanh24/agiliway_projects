import "./NavBar.css";
import { Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";
import { LogoWrapper, LogoImg, LogoText } from "./styled.js";

const { Header } = Layout;

const NavBar = () => {
  return (
    <Header
      style={{
        width: "100%",
        display: "flex",
      }}
    >
      <LogoImg />
      <LogoText>DAILY POST</LogoText>
      <Menu
        style={{
          justifyContent: "flex-end",
          marginLeft: "auto",
        }}
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
      >
        <Menu.Item key="1">
          <NavLink to="/">Home</NavLink>
        </Menu.Item>

        <Menu.Item key="2">
          <NavLink to="/posts">Post List</NavLink>
        </Menu.Item>

        <Menu.Item key="3">
          <NavLink to="/statistic">Statistic</NavLink>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default NavBar;
