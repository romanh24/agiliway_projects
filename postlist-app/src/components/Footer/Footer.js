import React, { Component } from "react";
import { Layout } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  StyledFooterContainer,
  StyledSocialIcons,
  StyledSocialIcon,
} from "./styled.js";

const { Footer: AntFooter } = Layout;

class Footer extends Component {
  render() {
    const year = new Date().getFullYear();
    return (
      <AntFooter style={{ textAlign: "center", padding: "14px 50px" }}>
        <StyledFooterContainer>
          <span> Copyright © {year} </span>
          <StyledSocialIcons>
            <StyledSocialIcon>
              <FontAwesomeIcon icon={faFacebook} />
            </StyledSocialIcon>
            <StyledSocialIcon>
              <FontAwesomeIcon icon={faInstagram} />
            </StyledSocialIcon>
            <StyledSocialIcon>
              <FontAwesomeIcon icon={faTwitter} />
            </StyledSocialIcon>
          </StyledSocialIcons>
        </StyledFooterContainer>
      </AntFooter>
    );
  }
}

export default Footer;
