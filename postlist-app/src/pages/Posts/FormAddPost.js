import { Form, Field } from "react-final-form";
import { Input, Button } from "antd";
import axios from "axios";

import React, { Component } from "react";

class FormAddPost extends Component {
  state = {
    fields: {
      name: {
        name: "name",
        value: "",
        type: "text",
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
      author: {
        name: "author",
        value: "",
        type: "text",
        label: "Author",
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
      description: {
        name: "description",
        value: "",
        type: "text",
        label: "Description",
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
    },
  };

  handleInputChange = (event) => {
    const { value, name } = event.target;
    console.log(value);
    const currentField = this.state.fields[name];
    const error = currentField.validator(value);
    this.setState({
      fields: {
        ...this.state.fields,
        [name]: { ...currentField, value, error },
      },
    });
  };

  onSubmit = (event) => {
    // event.preventDefault();
    const { fields } = this.state;
    console.log(fields);

    // axios({
    //   method: "post",
    //   url: "http://localhost:4000/posts",
    //   data: {
    //     name: fields.name.value,
    //     author: fields.author.value,
    //     description: fields.description.value,
    //   },
    // });

    const data = {
      name: fields.name.value,
      author: fields.author.value,
      description: fields.description.value,
    };

    axios
      .post("http://localhost:4000/posts", data)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));

    this.setState({
      fields: {
        name: {
          ...this.state.fields.name,
          value: "",
          error: "",
        },
        author: {
          ...this.state.fields.author,
          value: "",
          error: "",
        },
        description: {
          ...this.state.fields.description,
          value: "",
          error: "",
        },
      },
    });
  };

  render() {
    const { name, author, description } = this.state.fields;
    return (
      <Form
        onSubmit={this.onSubmit}
        // validate={validate}
        render={({ handleSubmit, values, submitting, form }) => (
          <form onSubmit={handleSubmit}>
            <Field>
              {() => (
                <Input
                  name={name.name}
                  value={name.value}
                  onChange={this.handleInputChange}
                  addonAfter={name.name}
                  allowClear
                  bordered
                  size="middle"
                />
              )}
            </Field>

            <div>
              <span>{name.error.length > 0 && name.error}</span>
            </div>
            <Field>
              {() => (
                <Input
                  name={author.name}
                  value={author.value}
                  onChange={this.handleInputChange}
                  addonAfter={author.name}
                  allowClear
                  bordered
                  size="middle"
                />
              )}
            </Field>

            <div>
              <span>{author.error.length > 0 && author.error}</span>
            </div>

            <Field>
              {() => (
                <Input
                  name={description.name}
                  value={description.value}
                  onChange={this.handleInputChange}
                  addonAfter={description.name}
                  allowClear
                  bordered
                  size="middle"
                />
              )}
            </Field>

            <div>
              <span>{description.error.length > 0 && description.error}</span>
            </div>

            {/* <input
              type="button"
              value="Reset"
              onClick={form.reset}
              className="button"
            /> */}
            <input
              type="submit"
              value="Submit"
              className="button colorGreen"
              disabled={submitting}
            />
          </form>
        )}
      />
    );
  }
}

export default FormAddPost;
