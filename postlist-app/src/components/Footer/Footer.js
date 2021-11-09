import React, { Component } from "react";
import { Layout } from "antd";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const { Footer: AntFooter } = Layout;

const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialIcons = styled.ul`
  margin: 0;
  display: flex;
  list-style-type: none;
`;

const SocialIcon = styled.li`
  color: #808080;
  font-size: 1.2rem;
  padding: 5px;
  &:hover {
    cursor: pointer;
    color: #0d6efd;
    transition: color 0.3s ease-in;
  }
`;

export class Footer extends Component {
  render() {
    const year = new Date().getFullYear();
    return (
      <AntFooter style={{ textAlign: "center" }}>
        <SocialIconsContainer>
          <span> Copyright © {year} </span>
          <SocialIcons>
            <SocialIcon>
              <FontAwesomeIcon icon={faFacebook} />
            </SocialIcon>
            <SocialIcon>
              <FontAwesomeIcon icon={faInstagram} />
            </SocialIcon>
            <SocialIcon>
              <FontAwesomeIcon icon={faTwitter} />
            </SocialIcon>
          </SocialIcons>
        </SocialIconsContainer>
      </AntFooter>
    );
  }
}

export default Footer;
