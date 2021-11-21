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
          key="navbar"
        >
          <NavLink exact to="/" activeClassName="activeLink">
            <Menu.Item key="home">Home</Menu.Item>
          </NavLink>

          <NavLink to="/posts" activeClassName="activeLink">
            <Menu.Item key="posts ">Posts</Menu.Item>
          </NavLink>

          <NavLink to="/statistic" activeClassName="activeLink">
            <Menu.Item key="statistic">Statistic</Menu.Item>
          </NavLink>
        </Menu>
      </Header>
    );
  }
}

export default NavBar;
