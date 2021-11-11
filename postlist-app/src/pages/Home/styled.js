import styled from "styled-components";
import posts from "./posts.png";

export const StyledContainer = styled.div`
  width: 70%;
`;

export const StyledImageFloated = styled.div`
  background-image: url(${posts});
  width: 450px;
  height: 250px;
  float: left;
  margin: 0 35px 30px 0;
  background-size: cover;
`;
