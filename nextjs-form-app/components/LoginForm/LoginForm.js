import { useState } from 'react';
import { Progress, Button, Input } from 'antd';
import { Form, Field } from 'react-final-form';
import { CheckCircleTwoTone } from '@ant-design/icons';
import Link from 'next/link';
import MyInput from './MyInput';
import HearFrom from './HearFrom';
import Gender from './Gender';
import DateOfBirth from './DateOfBirth';
import moment from 'moment';

import {
  StyledContainer,
  StyledInputFormWrapper,
  StyledInputForm,
  StyledInputForm2,
  StyledError,
  StyledTitle,
  StyledButtonContainer,
  StyledFinishWrapper,
  StyledFinish,
  StyledHeader,
  StyledDateInput,
  StyledDateContainer,
} from './styled';

const PAGE_1 = 'PAGE_1';
const PAGE_2 = 'PAGE_2';
const FINISH = 'FINISH';

export default function LoginForm() {
  const [status, setStatus] = useState({
    fields: {
      email: {
        name: 'email',
        id: 'email',
        label: 'EMAIL',
      },
      password: {
        name: 'password',
        id: 'password',
        label: 'PASSWORD',
      },
      confirmPass: {
        name: 'confirmPass',
        id: 'confirmPass',
        label: 'CONFIRM PASSWORD',
      },
      dateOfBirth: {
        day: {
          name: 'dateOfBirth.day',
          id: 'dateOfBirth.day',
          label: 'DAY',
          placeholder: 'DD',
        },
        month: {
          name: 'dateOfBirth.month',
          id: 'dateOfBirth.month',
          label: 'MONTH',
          placeholder: 'MM',
        },
        year: {
          name: 'dateOfBirth.year',
          id: 'dateOfBirth.year',
          label: 'YEAR',
          placeholder: 'YYYY',
        },
      },
    },
    pageType: PAGE_1,
    pageTitle: 'Sign up',
    progressBar: 33,
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  const validate = (values = {}) => {
    const errors = {
      dateOfBirth: {},
    };

    const day = values.dateOfBirth?.day ? values.dateOfBirth?.day : '';
    const month = values.dateOfBirth?.month ? values.dateOfBirth?.month : '';
    const year = values.dateOfBirth?.year ? values.dateOfBirth?.year : '';
    const date = moment(`${year}-${month}-${day}`, 'YYYY-MM-DD');
    const result = date.isValid() ? undefined : 'Invalid Date';

    // if (!(values.dateOfBirth && values.dateOfBirth.day)) {
    //   errors.dateOfBirth = { day: 'Required' };
    // }

    if (result !== undefined) {
      errors.dateOfBirth.month = 'Wrong date!';
    }

    if (!values.dateOfBirth?.day) {
      errors.dateOfBirth.day = 'Required';
    } else if (values.dateOfBirth.day.match(/^[a-zA-Z]+$/)) {
      errors.dateOfBirth.day = 'Only numbers';
    }

    if (!values.dateOfBirth?.month) {
      errors.dateOfBirth.month = 'Required';
    } else if (values.dateOfBirth.month.match(/^[a-zA-Z]+$/)) {
      errors.dateOfBirth.month = 'Only numbers';
    }

    if (!values.dateOfBirth?.year) {
      errors.dateOfBirth.year = 'Required';
    } else if (values.dateOfBirth.year.match(/^[a-zA-Z]+$/)) {
      errors.dateOfBirth.year = 'Only numbers';
    }

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
        render={({ handleSubmit, values, errors }) => {
          console.log(values);
          // console.log(errors);
          return (
            <form style={{ height: '100%' }} onSubmit={handleSubmit} id='form'>
              <StyledHeader>
                <StyledTitle>{status.pageTitle}</StyledTitle>
                <Progress
                  percent={status.progressBar}
                  showInfo={false}
                  style={{ width: '400px' }}
                  strokeColor='#1890ff'
                />
              </StyledHeader>

              {status.pageType === PAGE_1 && (
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
                          pageType: PAGE_2,
                          progressBar: 66,
                        })
                      }
                    >
                      Next
                    </Button>
                  </StyledButtonContainer>
                </div>
              )}

              {status.pageType === PAGE_2 && (
                <div>
                  <StyledInputFormWrapper>
                    <StyledDateContainer>
                      <StyledDateInput>
                        <label htmlFor='dateOfBirth.day'>DAY</label>
                        <Field
                          id='dateOfBirth.day'
                          name='dateOfBirth.day'
                          placeholder='DD'
                        >
                          {(props) => (
                            <div>
                              <Input
                                {...props.input}
                                id={props.id}
                                name={props.name}
                                placeholder={props.placeholder}
                                style={{ width: '120px', textAlign: 'center' }}
                              />
                              <StyledError>
                                {props.meta.error && props.meta.touched && (
                                  <span>{props.meta.error}</span>
                                )}
                              </StyledError>
                            </div>
                          )}
                        </Field>
                      </StyledDateInput>
                      <StyledDateInput>
                        <label htmlFor='dateOfBirth.month'>MONTH</label>
                        <Field
                          id='dateOfBirth.month'
                          name='dateOfBirth.month'
                          placeholder='MM'
                        >
                          {(props) => (
                            <div>
                              <Input
                                {...props.input}
                                id={props.id}
                                name={props.name}
                                placeholder={props.placeholder}
                                style={{ width: '120px', textAlign: 'center' }}
                              />
                              <StyledError>
                                {props.meta.error && props.meta.touched && (
                                  <span>{props.meta.error}</span>
                                )}
                              </StyledError>
                            </div>
                          )}
                        </Field>
                      </StyledDateInput>
                      <StyledDateInput>
                        <label htmlFor='dateOfBirth.year'>YEAR</label>
                        <Field
                          id='dateOfBirth.year'
                          name='dateOfBirth.year'
                          placeholder='YYYY'
                        >
                          {(props) => (
                            <div>
                              <Input
                                {...props.input}
                                id={props.id}
                                name={props.name}
                                placeholder={props.placeholder}
                                style={{ width: '120px', textAlign: 'center' }}
                              />
                              <StyledError>
                                {props.meta.error && props.meta.touched && (
                                  <span>{props.meta.error}</span>
                                )}
                              </StyledError>
                            </div>
                          )}
                        </Field>
                      </StyledDateInput>
                    </StyledDateContainer>
                    {/* <StyledInputForm2>
                      <label htmlFor='dateOfBirth'>DATE OF BIRTH</label>
                      <Field
                        id='dateOfBirth'
                        name='dateOfBirth'
                        type='date'
                        placeholder='DD.MM.YYYY'
                        component={DateOfBirth}
                      />
                    </StyledInputForm2> */}
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
                          pageType: PAGE_1,
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
                        errors.dateOfBirth?.day ||
                        errors.dateOfBirth?.month ||
                        errors.dateOfBirth?.year ||
                        errors.gender ||
                        errors.hearFrom
                      }
                      onClick={() =>
                        setStatus({
                          pageType: FINISH,
                          pageTitle: 'Thank you!',
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
                </div>
              )}
            </form>
          );
        }}
      />
    </StyledContainer>
  );
}
