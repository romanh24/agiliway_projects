import { useState } from 'react';
import { Progress, Button, Input } from 'antd';
import { Form, Field } from 'react-final-form';
import { CheckCircleTwoTone } from '@ant-design/icons';
import Link from 'next/link';
import MyInput from './MyInput';
import HearFrom from './HearFrom';
import Gender from './Gender';
import DateOfBirth from './DateOfBirth';

import {
  StyledContainer,
  StyledInputFormWrapper,
  StyledInputForm,
  StyledInputForm2,
  StyledTitle,
  StyledButtonContainer,
  StyledFinishWrapper,
  StyledFinish,
  StyledHeader,
} from './styled';

const SIGN_UP_1 = 'SIGN_UP_1';
const SIGN_UP_2 = 'SIGN_UP_2';
const FINISH = 'FINISH';

export default function LoginForm() {
  const [status, setStatus] = useState({
    fields: {
      email: {
        name: 'email',
        label: 'EMAIL',
      },
      password: {
        name: 'password',
        label: 'PASSWORD',
      },
      confirmPass: {
        name: 'confirmPass',
        label: 'CONFIRM PASSWORD',
      },
    },
    pageType: SIGN_UP_1,
    pageName: 'Sign up',
    progressBar: 33,
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  const validate = (values = {}) => {
    const errors = {};

    const datePattern = '(0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).[0-9]{4}';
    if (!values.email) {
      errors.email = 'Required';
    } else if (!values.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      errors.email = 'Wrong format!';
    }

    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 4) {
      errors.password = 'Must be more than 4 digits';
    }

    if (!values.confirmPass) {
      errors.confirmPass = 'Required';
    } else if (values.confirmPass.length < 4) {
      errors.confirmPass = 'Must be more than 4 digits';
    } else if (values.confirmPass !== values.password) {
      errors.confirmPass = 'Must match';
    }

    if (!values.dateOfBirth) {
      errors.dateOfBirth = 'Required';
      // } else if (!values.dateOfBirth.match(datePattern)) {
      //   errors.dateOfBirth = 'Wrong format!';
    }

    if (!values.gender) {
      errors.gender = 'Required';
    }

    if (!values.hearFrom) {
      errors.hearFrom = 'Required';
    }

    return errors;
  };

  return (
    <StyledContainer>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit, errors }) => {
          return (
            <form style={{ height: '100%' }} onSubmit={handleSubmit} id='form'>
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
                    {/* {Object.entries(status.fields).forEach(
                      ([_, fieldState]) => {
                        const { name, label } = fieldState;
                        console.log(name, label);
                        return (
                          <StyledInputForm>
                            <label htmlFor={name}>{label}</label>
                            <Field
                              name={name}
                              size='middle'
                              // type='password'
                              component={MyInput}
                            />
                          </StyledInputForm>
                        );
                        {
                          /* return <MyInput name={name} label={label} />; 
                    } )} */}
                    <StyledInputForm>
                      <label htmlFor='email'>EMAIL</label>
                      <Field
                        id='email'
                        name='email'
                        size='middle'
                        component={MyInput}
                      />
                    </StyledInputForm>
                    <StyledInputForm>
                      <label htmlFor='password'>PASSWORD</label>
                      <Field
                        id='password'
                        name='password'
                        size='middle'
                        type='password'
                        component={MyInput}
                      />
                    </StyledInputForm>
                    <StyledInputForm>
                      <label htmlFor='confirmPass'>CONFIRM PASSWORD</label>
                      <Field
                        id='confirmPass'
                        name='confirmPass'
                        size='middle'
                        type='password'
                        component={MyInput}
                      />
                    </StyledInputForm>
                  </StyledInputFormWrapper>

                  <StyledButtonContainer>
                    <Link href='/' passHref>
                      <Button size='large' type='link'>
                        Back
                      </Button>
                    </Link>
                    <Button
                      disabled={
                        errors.email || errors.password || errors.confirmPass
                      }
                      size='large'
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
                    <StyledInputForm2>
                      <label htmlFor='dateOfBirth'>DATE OF BIRTH</label>
                      <Field
                        id='dateOfBirth'
                        name='dateOfBirth'
                        type='date'
                        placeholder='DD.MM.YYYY'
                        component={DateOfBirth}
                      />
                    </StyledInputForm2>
                    <StyledInputForm2>
                      <label htmlFor='gender'>GENDER</label>
                      <Field
                        id='gender'
                        name='gender'
                        type='radio'
                        component={Gender}
                      />
                    </StyledInputForm2>
                    <StyledInputForm2>
                      <label htmlFor='hearFrom'>
                        WHERE DID YOU HEAR ABOUT US ?
                      </label>
                      <Field
                        id='hearFrom'
                        name='hearFrom'
                        component={HearFrom}
                      />
                    </StyledInputForm2>
                  </StyledInputFormWrapper>
                  <StyledButtonContainer>
                    <Button
                      type='link'
                      size='large'
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
                      size='large'
                      disabled={
                        errors.dateOfBirth || errors.gender || errors.hearFrom
                      }
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
                    <Button
                      size='large'
                      htmlType='form'
                      style={{ width: '170px', marginTop: '7%' }}
                      type='submit'
                    >
                      Go to Dashboard
                    </Button>
                  </StyledFinish>
                  {/* </StyledFinishWrapper> */}
                </div>
              )}
            </form>
          );
        }}
      />
    </StyledContainer>
  );
}
