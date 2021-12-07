import moment from 'moment';

export const validate = (values = {}) => {
  const errors = {
    dateOfBirth: {},
  };

  const day = values.dateOfBirth?.day ? values.dateOfBirth?.day : '';
  const month = values.dateOfBirth?.month ? values.dateOfBirth?.month : '';
  const year = values.dateOfBirth?.year ? values.dateOfBirth?.year : '';
  const date = moment(`${year}-${month}-${day}`, 'YYYY-MM-DD');
  const isValidDate = date.isValid() ? undefined : 'Invalid Date';

  // if (!(values.dateOfBirth && values.dateOfBirth.day)) {
  //   errors.dateOfBirth = { day: 'Required' };
  // }

  if (isValidDate !== undefined) {
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
