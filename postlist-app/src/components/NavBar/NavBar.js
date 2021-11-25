import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import { StyledLogoImg, StyledLogoText } from './styled';

const { Header } = Layout;

class NavBar extends Component {
  render() {
    return (
      <Header
        style={{
          width: '100%',
          display: 'flex',
        }}
      >
        <StyledLogoImg />

        <StyledLogoText>DAILY POST</StyledLogoText>

        <Menu
          style={{
            justifyContent: 'flex-end',
            marginLeft: 'auto',
          }}
          theme='dark'
          mode='horizontal'
          selectable
          key='navbar'
        >
          <Menu.Item key='home'>
            <NavLink exact to='/'>
              Home
            </NavLink>
          </Menu.Item>

          <Menu.Item key='posts '>
            <NavLink to='/posts'>Posts</NavLink>
          </Menu.Item>

          <Menu.Item key='statistic'>
            <NavLink to='/statistic'>Statistic</NavLink>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default NavBar;
