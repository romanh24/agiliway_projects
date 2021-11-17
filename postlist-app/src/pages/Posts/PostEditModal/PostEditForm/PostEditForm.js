import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import { Input, Button } from "antd";
import { StyledPostEditForm } from "./styled";

class PostEditForm extends Component {
  onSubmit = (formValue, form) => {
    const { postEditById } = this.props;

    const id = formValue.uuid;

    const postNewData = {
      name: formValue.name,
      author: formValue.author,
      description: formValue.description,
    };

    postEditById(id, postNewData);
    // form.reset();
  };

  render() {
    const { postData } = this.props;
    console.log(postData);
    return (
      <Form
        onSubmit={this.onSubmit}
        initialValues={postData}
        // id="form"
        // validate={validate}
        render={({ handleSubmit, values, form }) => (
          <form onSubmit={handleSubmit} id="formEdit">
            <StyledPostEditForm>
              <label for="name">Name</label>
              <Field
                name="name"
                size="middle"
                placeholder="Name"
                id="name"
                allowClear
              >
                {(props) => {
                  return (
                    <Input
                      {...props.input}
                      placeholder={props.placeholder}
                      id={props.id}
                      allowClear={props.allowClear}
                    />
                  );
                }}
              </Field>
            </StyledPostEditForm>

            <StyledPostEditForm>
              <label for="author">Author</label>
              <Field
                name="author"
                size="middle"
                placeholder="Author"
                id="author"
                allowClear
              >
                {(props) => {
                  return (
                    <Input
                      {...props.input}
                      placeholder={props.placeholder}
                      id={props.id}
                      allowClear={props.allowClear}
                    />
                  );
                }}
              </Field>
            </StyledPostEditForm>

            <StyledPostEditForm>
              <label for="description">Description</label>
              <Field
                name="description"
                size="middle"
                placeholder="Description"
                id="description"
                allowClear
              >
                {(props) => {
                  return (
                    <Input
                      {...props.input}
                      placeholder={props.placeholder}
                      id={props.id}
                      allowClear={props.allowClear}
                    />
                  );
                }}
              </Field>
            </StyledPostEditForm>

            <Button
              type="button"
              value="Reset"
              onClick={form.reset}
              className="button"
            >
              Reset
            </Button>
          </form>
        )}
      />
    );
  }
}

export default PostEditForm;
