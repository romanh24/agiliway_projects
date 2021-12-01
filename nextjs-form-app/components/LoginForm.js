import { useState } from 'react';
import { Progress, Button, Input } from 'antd';
import { Form, Field } from 'react-final-form';
import { CheckCircleTwoTone } from '@ant-design/icons';
import Link from 'next/link';
import { MyInput } from './MyInput';
import { MySelect } from './MySelect';
import { MyRadio } from './MyRadio';

import {
  StyledContainer,
  StyledInputFormWrapper,
  StyledInputForm,
  StyledTitle,
  StyledButtonContainer,
  StyledFinishWrapper,
  StyledFinish,
  StyledHeader,
} from './styled';

const SIGN_UP_1 = 'SIGN_UP_1';
const SIGN_UP_2 = 'SIGN_UP_2';
const FINISH = 'FINISH';

export const LoginForm = () => {
  const [status, setStatus] = useState({
    pageType: SIGN_UP_1,
    pageName: 'Sign up',
    progressBar: 33,
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  const validate = (values = {}) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    }
    if (!values.password) {
      errors.password = 'Required';
    }
    if (!values.confirmPass) {
      errors.confirmPass = 'Required';
    } else if (values.confirmPass !== values.password) {
      errors.confirmPass = 'Must match';
    }
    return errors;
  };

  return (
    <StyledContainer>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <StyledHeader>
              <StyledTitle>{status.pageName}</StyledTitle>
              <Progress
                percent={status.progressBar}
                showInfo={false}
                style={{ width: '400px' }}
                strokeColor='#1890ff'
              />
            </StyledHeader>

            {status.pageType === SIGN_UP_1 && (
              <div>
                <StyledInputFormWrapper>
                  <StyledInputForm>
                    <label htmlFor='email'>EMAIL</label>
                    <Field name='email' size='middle' component={MyInput} />
                  </StyledInputForm>
                  <StyledInputForm>
                    <label htmlFor='password'>PASSWORD</label>
                    <Field
                      name='password'
                      size='middle'
                      type='password'
                      component={MyInput}
                    />
                  </StyledInputForm>
                  <StyledInputForm>
                    <label htmlFor='confirmPass'>CONFIRM PASSWORD</label>
                    <Field
                      name='confirmPass'
                      size='middle'
                      type='password'
                      component={MyInput}
                    />
                  </StyledInputForm>
                </StyledInputFormWrapper>

                <StyledButtonContainer>
                  <Link href='/' passHref>
                    <Button type='link'>Back</Button>
                  </Link>
                  <Button
                    type='link'
                    onClick={() =>
                      setStatus({
                        ...status,
                        pageType: SIGN_UP_2,
                        progressBar: 66,
                      })
                    }
                  >
                    Next
                  </Button>
                </StyledButtonContainer>
              </div>
            )}

            {status.pageType === SIGN_UP_2 && (
              <div>
                <StyledInputFormWrapper>
                  <StyledInputForm>BOX 1</StyledInputForm>
                  <StyledInputForm>
                    GENDER
                    <Field name='gender' type='radio' component={MyRadio} />
                  </StyledInputForm>
                  <StyledInputForm>
                    WHERE DID YOU HEAR ABOUT US ?
                    <Field name='hearFrom' component={MySelect}></Field>
                  </StyledInputForm>
                </StyledInputFormWrapper>
                <StyledButtonContainer>
                  <Button
                    type='link'
                    onClick={() =>
                      setStatus({
                        ...status,
                        pageType: SIGN_UP_1,
                        progressBar: 33,
                      })
                    }
                  >
                    Back
                  </Button>
                  <Button
                    type='link'
                    onClick={() =>
                      setStatus({
                        pageType: FINISH,
                        pageName: 'Thank you!',
                        progressBar: 100,
                      })
                    }
                  >
                    Next
                  </Button>
                </StyledButtonContainer>
              </div>
            )}

            {status.pageType === FINISH && (
              <div>
                {/* <StyledFinishWrapper> */}
                <StyledFinish>
                  <CheckCircleTwoTone
                    twoToneColor='#52c41a'
                    style={{ fontSize: '170px' }}
                  />
                  {/* <button type='submit'>Submit</button> */}
                  <button
                    style={{ width: '170px', marginTop: '7%' }}
                    type='submit'
                  >
                    Go to Dashboard
                  </button>
                </StyledFinish>
                {/* </StyledFinishWrapper> */}
              </div>
            )}
          </form>
        )}
      />
    </StyledContainer>

    //
    //   {status === SIGN_UP_1 && (
    //     <div>
    //       <Progress percent={33} showInfo={false} style={{ width: '400px' }} />
    //       <h1>SIGN_UP_1</h1>
    //       <Button type='primary' onClick={() => setStatus(SIGN_UP_2)}>
    //         Next
    //       </Button>
    //     </div>
    //   )}
    // {status === SIGN_UP_2 && (
    //   <div>
    //     <Progress percent={66} showInfo={false} style={{ width: '400px' }} />
    //     <h1>SIGN_UP_2</h1>
    //     <Button type='primary' onClick={() => setStatus(FINISH)}>
    //       Next
    //     </Button>
    //   </div>
    // )}

    // {status === FINISH && (
    //   <div>
    //     <h1>Thank you!</h1>
    //     <Progress
    //       percent={100}
    //       strokeColor='#1890ff'
    //       showInfo={false}
    //       style={{ width: '400px' }}
    //     />
    //     <Button type='default' onClick={() => console.log(status)}>
    //       Go to Dashboard
    //     </Button>
    //   </div>
    // )}
    // </StyledContainer>
  );
};
