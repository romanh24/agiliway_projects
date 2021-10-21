import React from "react";
import "./FormValidation.scss";
import { Field } from "./Field";

class FormValidation extends React.Component {
  state = {
    fields: {
      name: {
        name: "name",
        value: "",
        label: "Name",
        error: "",
        validator: (value = "") => {
          let error = "";
          if (!value.length) {
            return (error = "Cannot be empty");
          }

          if (!value.match(/^[a-zA-Z]+$/)) {
            return (error = "Only letters");
          }
          return error;
        },
      },
      email: {
        name: "email",
        value: "",
        label: "Email",
        error: "",
        validator: (value = "") => {
          let error = "";
          if (!value.length) {
            return (error = "Cannot be empty");
          }

          if (!value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
            return (error = "Email is not valid");
          }

          return error;
        },
      },
      password: {
        name: "password",
        value: "",
        label: "Password",
        error: "",
        validator: (value = "", allValues = {}) => {
          let error = "";
          if (!value.length) {
            return (error = "Cannot be empty");
          }

          if (!value.match(/^[a-zA-Z]+$/)) {
            return (error = "Only letters");
          }
          return error;
        },
      },
      confirmPassword: {
        name: "confirmPassword",
        value: "",
        label: "Confirm Password",
        error: "",
        validator: (value = "", allValues = {}) => {
          let error = "";

          if (!value.length) {
            return (error = "Cannot be empty");
          }

          if (!value.match(/^[a-zA-Z]+$/)) {
            return (error = "Only letters");
          }

          if (allValues) {
            if (value !== allValues.password) {
              error = "Passwords doesn't match";
            }
          }

          return error;
        },
      },
    },
    isError: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { isError } = this.state;
    let updatedFields = {};
    let updatedIsError = this.state.isError;

    Object.entries(this.state.fields).map(([fieldName, fieldState]) => {
      const error = fieldState.validator(fieldState.value, {
        password: this.state.fields.password.value,
        confirmPassword: this.state.fields.confirmPassword.value,
      });

      updatedFields[fieldName] = { ...fieldState, error };
      updatedIsError = error;
    });

    this.setState(
      {
        fields: updatedFields,
        isError: updatedIsError,
      },
      () => {
        if (!this.state.isError) {
          const showState = JSON.stringify(this.state.fields);
          console.log(showState);
        }
      }
    );
  };

  handleOnChange = (event) => {
    const { value, name } = event.target;
    const { password, confirmPassword } = this.state.fields;

    const currentField = { ...this.state.fields[name] };

    if (name === "password") {
      const passwordError = currentField.validator(value, {
        confirmPassword: confirmPassword.value,
      });

      const confirmPasswordError = confirmPassword.validator(
        confirmPassword.value,
        { password: value }
      );

      this.setState({
        fields: {
          ...this.state.fields,
          password: { ...currentField, error: passwordError, value },
          confirmPassword: {
            ...confirmPassword,
            error: confirmPasswordError,
          },
        },
      });
      return;
    }

    if (name === "confirmPassword") {
      const passwordError = password.validator(password.value, {
        confirmPassword: value,
      });

      const confirmPasswordError = currentField.validator(value, {
        password: password.value,
      });

      this.setState({
        fields: {
          ...this.state.fields,
          password: { ...password, error: passwordError },
          confirmPassword: {
            ...currentField,
            error: confirmPasswordError,
            value,
          },
        },
      });
      return;
    }

    const error = currentField.validator(value, {
      password,
      confirmPassword,
    });

    this.setState({
      fields: {
        ...this.state.fields,
        [name]: { ...currentField, error, value },
      },
    });
  };

  resetInput = (event) => {
    event.preventDefault();

    let updatedFields = {};
    Object.entries(this.state.fields).map(([fieldName, fieldState]) => {
      const updatedField = {
        ...fieldState,
        value: "",
        error: "",
      };
      updatedFields[fieldName] = updatedField;
      this.setState({ fields: updatedFields, isError: null });
    });
  };

  render() {
    return (
      <div className="form">
        <h1>Form</h1>
        <form onSubmit={this.handleSubmit}>
          {Object.entries(this.state.fields).map(([fieldName, fieldsState]) => {
            // UNCOMMENT FOR VERSION 2
            {
              /* const { name, value, label, error } = fieldsState; */
            }

            // VERSION 1
            return (
              <Field
                key={fieldsState.name}
                fieldProps={fieldsState}
                onChange={this.handleOnChange}
              />
            );

            //VERSION 2
            {
              /* return (
              <Field
                key={name}
                name={name}
                label={label}
                value={value}
                error={error}
                onChange={this.handleOnChange}
              />
            ); */
            }
          })}

          <input
            type="button"
            value="Reset"
            onClick={this.resetInput}
            className="button"
          />
          <input type="submit" value="Submit" className="button" />
        </form>
      </div>
    );
  }
}

export default FormValidation;
