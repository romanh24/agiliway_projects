import { useState } from 'react';
import { Progress, Button } from 'antd';
import { Form, Field } from 'react-final-form';
import { CheckCircleTwoTone } from '@ant-design/icons';
import Link from 'next/link';
import MyInput from './MyInput';
import HearFrom from './HearFrom';
import Gender from './Gender';
import DateOfBirth from './DateOfBirth';
import { validate } from './utils/validate';
import { STEP_1, STEP_2, STEP_3 } from './constants/steps';
import { fieldsConfig } from './utils/fieldsConfig';

import {
  StyledContainer,
  StyledInputFormWrapper,
  StyledInputForm,
  StyledTitle,
  StyledButtonContainer,
  StyledFinish,
  StyledHeader,
  StyledLabel,
  StyledDateContainer,
} from './styled';

export default function LoginForm() {
  const [status, setStatus] = useState({
    stepType: STEP_1,
    stepTitle: 'Sign up',
    progressBar: 33,
  });

  const onSubmit = (values) => {
    console.log(values);
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
                <StyledTitle>{status.stepTitle}</StyledTitle>
                <Progress
                  percent={status.progressBar}
                  showInfo={false}
                  style={{ width: '400px' }}
                  strokeColor='#1890ff'
                />
              </StyledHeader>

              {status.stepType === STEP_1 && (
                <div>
                  <StyledInputFormWrapper>
                    {Object.entries(fieldsConfig.main).map(
                      ([_, fieldValues]) => {
                        const { name, id, label, type } = fieldValues;
                        return (
                          <MyInput
                            key={id}
                            id={id}
                            name={name}
                            label={label}
                            type={type}
                          />
                        );
                      }
                    )}
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
                          stepType: STEP_2,
                          progressBar: 66,
                        })
                      }
                    >
                      Next
                    </Button>
                  </StyledButtonContainer>
                </div>
              )}

              {status.stepType === STEP_2 && (
                <div>
                  <StyledInputFormWrapper>
                    <StyledLabel htmlFor='dateOfBirth.day'>
                      DATE OF BIRTH
                    </StyledLabel>
                    <StyledDateContainer>
                      {Object.entries(fieldsConfig.dateOfBirth).map(
                        ([_, fieldValues]) => {
                          const { id, name, label, placeholder } = fieldValues;
                          return (
                            <DateOfBirth
                              key={id}
                              name={name}
                              label={label}
                              placeholder={placeholder}
                            />
                          );
                        }
                      )}
                    </StyledDateContainer>
                    {/* <StyledInputForm>
                      <label htmlFor='dateOfBirth'>DATE OF BIRTH</label>
                      <Field
                        id='dateOfBirth'
                        name='dateOfBirth'
                        type='date'
                        placeholder='DD.MM.YYYY'
                        component={DateOfBirth}
                      />
                    </StyledInputForm> */}
                    <StyledLabel htmlFor='gender'>GENDER</StyledLabel>
                    <StyledInputForm>
                      <Field
                        id='gender'
                        name='gender'
                        type='radio'
                        component={Gender}
                      />
                    </StyledInputForm>
                    <StyledLabel htmlFor='hearFrom'>
                      WHERE DID YOU HEAR ABOUT US ?
                    </StyledLabel>
                    <StyledInputForm>
                      <Field
                        id='hearFrom'
                        name='hearFrom'
                        component={HearFrom}
                      />
                    </StyledInputForm>
                  </StyledInputFormWrapper>
                  <StyledButtonContainer>
                    <Button
                      type='link'
                      size='large'
                      onClick={() =>
                        setStatus({
                          ...status,
                          stepType: STEP_1,
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
                          stepType: STEP_3,
                          stepTitle: 'Thank you!',
                          progressBar: 100,
                        })
                      }
                    >
                      Next
                    </Button>
                  </StyledButtonContainer>
                </div>
              )}

              {status.stepType === STEP_3 && (
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
