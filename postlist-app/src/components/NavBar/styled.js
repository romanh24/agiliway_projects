import styled from "styled-components";
import logo from "./logo.png";

export const StyledLogoImg = styled.div`
  background-image: url(${logo});
  width: 65px;
  height: 65px;
  background-size: cover;
`;

export const StyledLogoText = styled.div`
  min-width: 100px;
  color: #fff;
  margin-left: 1%;
`;
