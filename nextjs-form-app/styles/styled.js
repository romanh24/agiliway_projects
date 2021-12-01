import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  height: 500px;
  margin: 7% auto;
  border: solid 2px #d3d3d3;
  border-radius: 2%;
`;

export const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170px;
  background-color: #0fb8fb;
  border: solid 1px #1890ff;
  text-align: center;
  color: #fff;
  font-weight: bold;
  height: 32px;
  pointer-events: none;
`;

export const StyledStart = styled.span`
  margin-top: 7%;
  width: 170px;
  height: 170px;
  display: flex;
  ${'' /* margin: auto; */}
  border: 6px solid #52cdf8;
  border-radius: 50%;

  span {
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    border: 4px solid #0fb8fb;
    border-radius: 50%;
    color: #15c1fc;
    font-size: 2em;
    font-weight: bold;
  }

  :hover {
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
  }
`;
