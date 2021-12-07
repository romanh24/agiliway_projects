import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  margin: 7% auto;
  border: solid 2px #d3d3d3;
  border-radius: 2%;
`;

export const StyledHeader = styled.div`
  .ant-progress-inner{
  width: 398px;
  border-radius:0;
  border-top: 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;
      .ant-progress-bg{
          border-radius:0;
}
`;

export const StyledInputFormWrapper = styled.div`
  display: flex;
  height: 350px;
  flex-direction: column;
  justify-content: center;
`;

export const StyledFinishWrapper = styled.div`
  height: 403px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledInputForm = styled.div`
  text-align: center;
  font-size: 16px;
  margin: 10px 20px;
  ${
    '' /* label {
    margin-bottom: 20px;
  } */
  }
`;

export const StyledDateContainer = styled.div`
  display: flex;
  margin: 10px 20px;
`;

export const StyledTitle = styled.h1`
  display: flex;
  justify-content: center;
  margin: 0;
  color: #52cdf8;
`;

export const StyledLabel = styled.label`
  display: flex;
  justify-content: center;
  font-size: 16px;
`;

export const StyledButtonContainer = styled.div`
  border-top: solid 1px #d3d3d3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const StyledFinish = styled.div`
  height: 411px;
  display: flex;
  flex-wrap: wrap;
  flex-flow: wrap column;
  align-items: center;
  justify-content: center;
`;
