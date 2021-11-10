import React, { Component } from "react";
import { Layout } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { SocialIconsContainer, SocialIcons, SocialIcon } from "./styled.js";

const { Footer: AntFooter } = Layout;

export class Footer extends Component {
  render() {
    const year = new Date().getFullYear();
    return (
      <AntFooter style={{ textAlign: "center", padding: "14px 50px" }}>
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
