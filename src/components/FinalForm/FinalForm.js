import React from "react";
import "./FinalForm.scss";
import { Field, Form } from "react-final-form";
import { myField } from "./myField";

const composeValidators = (validators) => (value, allValues) => {
  let error = undefined;
  for (let i = 0; i < validators.length; i++) {
    error = validators[i](value, allValues);
    if (error) {
      return error;
    }
  }
  return error;
};

const commonValidators = {
  required: (value = "") => {
    return value.length > 0 ? undefined : "Cannot be empty";
  },

  onlyLetters: (value = "") => {
    if (!value.match(/^[a-zA-Z]+$/)) {
      return "Only letters";
    }
  },

  sixSymbols: (value, allValues) => {
    return value.length > 5 ? undefined : "Too short";
  },

  validEmail: (value = "") => {
    if (!value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      return "Email is not valid";
    }
  },

  comparePasswords: (value = "", allValues) => {
    if (allValues.password !== allValues.confirmPassword) {
      return "The password does not match";
    }

    if (allValues.confirmPassword !== allValues.password) {
      return "The password does not match";
    }
  },
};

const validators = {
  name: composeValidators([
    commonValidators.required,
    commonValidators.onlyLetters,
    commonValidators.sixSymbols,
  ]),
  email: composeValidators([
    commonValidators.required,
    commonValidators.validEmail,
  ]),
  password: composeValidators([
    commonValidators.required,
    commonValidators.comparePasswords,
  ]),
  confirmPassword: composeValidators([
    commonValidators.required,
    commonValidators.comparePasswords,
  ]),
};

class FinalForm extends React.Component {
  state = {
    fields: {
      name: {
        name: "name",
        value: "",
        type: "text",
        label: "Name",
      },
      email: {
        name: "email",
        value: "",
        type: "text",
        label: "Email",
      },
      password: {
        name: "password",
        value: "",
        type: "password",
        label: "Password",
      },
      confirmPassword: {
        name: "confirmPassword",
        value: "",
        type: "password",
        label: "Confirm Password",
      },
    },
  };

  onSubmit(value) {
    console.log(value);
  }

  render() {
    return (
      <div className="form">
        <h1>Form</h1>
        <Form onSubmit={this.onSubmit}>
          {({ handleSubmit, values, submitting, form }) => (
            <form onSubmit={handleSubmit}>
              {Object.entries(this.state.fields).map(([_, fieldState]) => {
                const { name, type, label } = fieldState;
                return (
                  <Field
                    key={name}
                    name={name}
                    type={type}
                    label={label}
                    component={myField}
                    validate={validators[fieldState.name]}
                  />
                );
              })}

              <input
                type="button"
                value="Reset"
                onClick={form.reset}
                className="button"
              />
              <input
                type="submit"
                value="Submit"
                className="button"
                disabled={submitting}
              />
              {/* <pre>{JSON.stringify(values, undefined, 2)}</pre> */}
            </form>
          )}
        </Form>
      </div>
    );
  }
}

export default FinalForm;
