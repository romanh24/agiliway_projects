import "./NavBar.css";
import { Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "./logo.png";

const { Header } = Layout;

const LogoWrapper = styled.div`
  position: absolute;
  display: flex;
`;

const LogoImg = styled.div`
  background-image: url(${logo});
  width: 65px;
  height: 65px;
  background-size: cover;
`;

const LogoText = styled.div`
  min-width: 100px;
  color: #fff;
  margin-left: 3%;
`;

const NavBar = () => {
  return (
    <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <LogoWrapper>
        <LogoImg />
        <LogoText>DAILY POST</LogoText>
      </LogoWrapper>

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
