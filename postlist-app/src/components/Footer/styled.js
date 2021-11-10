import styled from "styled-components";

export const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SocialIcons = styled.ul`
  margin: 0;
  display: flex;
  list-style-type: none;
`;

export const SocialIcon = styled.li`
  color: #808080;
  font-size: 1.2rem;
  padding: 5px;
  &:hover {
    cursor: pointer;
    color: #0d6efd;
    transition: color 0.3s ease-in;
  }
`;
