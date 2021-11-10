import styled from "styled-components";
import logo from "./logo.png";

export const LogoImg = styled.div`
  background-image: url(${logo});
  width: 65px;
  height: 65px;
  background-size: cover;
`;

export const LogoText = styled.div`
  min-width: 100px;
  color: #fff;
  margin-left: 1%;
`;
