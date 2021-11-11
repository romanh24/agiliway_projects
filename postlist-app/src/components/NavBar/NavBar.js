import { Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";
import { StyledLogoImg, StyledLogoText } from "./styled.js";

const { Header } = Layout;

const NavBar = () => {
  return (
    <Header
      style={{
        width: "100%",
        display: "flex",
      }}
    >
      <StyledLogoImg />
      <StyledLogoText>DAILY POST</StyledLogoText>
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
          <NavLink to="/posts">Posts</NavLink>
        </Menu.Item>

        <Menu.Item key="3">
          <NavLink to="/statistic">Statistic</NavLink>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default NavBar;
