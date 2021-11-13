import React, { Component } from "react";
import { Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";
import { StyledLogoImg, StyledLogoText } from "./styled.js";

const { Header } = Layout;

class NavBar extends Component {
  render() {
    return (
      <Header
        style={{
          width: "100%",
          display: "flex",
        }}
      >
        <NavLink exact to="/">
          <StyledLogoImg />
        </NavLink>
        <StyledLogoText>DAILY POST</StyledLogoText>

        <Menu
          style={{
            justifyContent: "flex-end",
            marginLeft: "auto",
          }}
          theme="dark"
          mode="horizontal"
          selectable={false}
        >
          <NavLink exact to="/" activeClassName="activeLink">
            <Menu.Item>Home</Menu.Item>
          </NavLink>

          <NavLink to="/posts" activeClassName="activeLink">
            <Menu.Item>Posts</Menu.Item>
          </NavLink>

          <NavLink to="/statistic" activeClassName="activeLink">
            <Menu.Item>Statistic</Menu.Item>
          </NavLink>
        </Menu>
      </Header>
    );
  }
}

export default NavBar;
