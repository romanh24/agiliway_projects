import React from "react";
import "./FinalForm.scss";
import { Field, Form } from "react-final-form";
import { myField } from "./myField";

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
    const required = (value) => (value ? undefined : "Require");
    return (
      <div className="form">
        <h1>Form</h1>
        <Form onSubmit={this.onSubmit}>
          {({ handleSubmit, values, submitting }) => (
            <form onSubmit={handleSubmit}>
              {Object.entries(this.state.fields).map(([_, fieldsState]) => {
                const { name, type, label } = fieldsState;
                return (
                  <Field
                    name={name}
                    type={type}
                    label={label}
                    component={myField}
                    validate={required}
                  />
                );
              })}

              {/* <Field
                name={email.name}
                placeholder={email.label}
                validate={required}
              >
                {({ input, meta, placeholder }) => (
                  <div className="input-group">
                    <label>{email.label}</label>
                    <input
                      {...input}
                      placeholder={placeholder}
                      autoComplete="off"
                    />
                    <div className="error">
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  </div>
                )}
              </Field> */}
              <input
                type="button"
                value="Reset"
                onClick={this.resetInput}
                className="button"
              />
              <input type="submit" value="Submit" className="button" />
              <pre>{JSON.stringify(values, undefined, 2)}</pre>
            </form>
          )}
          {/* {(this.state.fields) => (
          <form >
            <Field name="myField">
              {(props.fields) => (
                <div>
                  <input {...props.name} />
                </div>
              )}
            </Field>
            <button type="submit">Submit</button>
          </form>
        )} */}
        </Form>
      </div>
    );
  }
}

export default FinalForm;
