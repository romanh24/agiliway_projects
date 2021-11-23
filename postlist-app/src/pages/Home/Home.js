import React, { Component } from 'react';
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';
import { StyledContainer, StyledImageFloated } from './styled';

class Home extends Component {
  render() {
    return (
      <div>
        {' '}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <StyledContainer>
            <h1>👋 Welcome!</h1>
            <StyledImageFloated />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu
              bibendum at varius vel pharetra vel turpis nunc eget. Purus
              gravida quis blandit turpis. Vehicula ipsum a arcu cursus vitae
              congue. Quis viverra nibh cras pulvinar mattis nunc sed. Quam
              vulputate dignissim suspendisse in est. Luctus venenatis lectus
              magna fringilla urna porttitor rhoncus dolor purus. Arcu bibendum
              at varius vel pharetra vel turpis nunc eget. Varius vel pharetra
              vel turpis nunc eget lorem dolor sed. Pharetra vel turpis nunc
              eget lorem. Eu ultrices vitae auctor eu. Cras tincidunt lobortis
              feugiat vivamus at augue eget arcu. Urna id volutpat lacus laoreet
              non curabitur gravida arcu. Viverra nibh cras pulvinar mattis nunc
              sed. Diam maecenas sed enim ut sem viverra aliquet. Integer eget
              aliquet nibh praesent tristique. Lectus magna fringilla urna
              porttitor rhoncus dolor purus non. Risus ultricies tristique nulla
              aliquet. Dui vivamus arcu felis bibendum ut. Quisque non tellus
              orci ac auctor augue mauris augue neque. Accumsan in nisl nisi
              scelerisque eu ultrices vitae. Nunc faucibus a pellentesque sit
              amet porttitor eget dolor. Erat pellentesque adipiscing commodo
              elit at imperdiet dui. Placerat duis ultricies lacus sed turpis
              tincidunt id aliquet risus. Quis risus sed vulputate odio ut enim
              blandit volutpat maecenas.
            </p>
          </StyledContainer>
        </div>
        <NavLink to='/posts'>
          <Button style={{ marginTop: '25px' }} size='large'>
            Check out the latest posts!
          </Button>
        </NavLink>
      </div>
    );
  }
}

export default Home;
