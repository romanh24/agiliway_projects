import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import { Input, Button } from "antd";
import { StyledPostAddForm } from "./styled";
import { Spin } from "antd";

class PostAddForm extends Component {
  onSubmit = (formValues, form) => {
    const { createPost } = this.props;

    createPost(formValues);
    form.reset();
  };

  render() {
    const { modalDataLoading } = this.props;

    return (
      <Spin size="large" spinning={modalDataLoading}>
        <Form
          onSubmit={this.onSubmit}
          // validate={validate}
          render={({ handleSubmit, form }) => (
            <form onSubmit={handleSubmit} id="form">
              <StyledPostAddForm>
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
              </StyledPostAddForm>

              <StyledPostAddForm>
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
              </StyledPostAddForm>

              <StyledPostAddForm>
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
              </StyledPostAddForm>

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
      </Spin>
    );
  }
}

export default PostAddForm;
