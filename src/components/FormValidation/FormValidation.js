import React from "react";
import "./FormValidation.scss";
import { Input } from "./Input";

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
          // if (allValues) {
          //   return value === allValues.confirmPassword
          //     ? ""
          //     : "Passwords doesn't  match";
          // }
          // console.log(allValues);

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
    isError: null,
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let updatedFields = {};
    Object.entries(this.state.fields).map(([fieldName, fieldState]) => {
      const error = fieldState.validator(fieldState.value);

      const updatedField = {
        ...fieldState,
        error,
      };
      updatedFields[fieldName] = updatedField;
    });
    this.setState({ fields: updatedFields });
  };

  handleOnChange = (event) => {
    const { value, name } = event.target;
    const currentField = this.state.fields[name];
    const allValues = Object.entries(this.state.fields).reduce(
      (accum, [fieldName, fieldState]) => {
        return { ...accum, [fieldName]: fieldState.value };
      }
    );
    const error = currentField.validator(value, allValues);
    // const password = this.state.fields.password.value;
    // const confirmPassword = this.state.fields.confirmPassword.value;

    this.setState({
      fields: {
        ...this.state.fields,
        [name]: { ...currentField, value, error },
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
      this.setState({ fields: updatedFields });
    });
  };

  render() {
    const { name, email, password, confirmPassword } = this.state.fields;
    return (
      <div className="form">
        <h1>Form</h1>
        <form onSubmit={this.handleSubmit}>
          <Input fieldProps={name} onChange={this.handleOnChange} />

          <Input fieldProps={email} onChange={this.handleOnChange} />

          <Input fieldProps={password} onChange={this.handleOnChange} />

          <Input fieldProps={confirmPassword} onChange={this.handleOnChange} />

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
