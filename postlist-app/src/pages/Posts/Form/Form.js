import React, { Component } from "react";
import { StyledPostEditForm } from "./styled";
import { Form, Field } from "react-final-form";
import { Input, Button } from "antd";
import { Spin } from "antd";

class PostForm extends Component {
  render() {
    const { postData, loading, handleSubmit } = this.props;
    return (
      <div>
        <Spin size="large" spinning={loading}>
          <Form
            onSubmit={handleSubmit}
            initialValues={postData}
            // validate={validate}
            render={({ handleSubmit, values, form }) => (
              <form onSubmit={handleSubmit} id="form">
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

                {/* <Button
                  type="button"
                  value="Reset"
                  onClick={form.reset}
                  className="button"
                >
                  Reset
                </Button> */}
              </form>
            )}
          />
        </Spin>
      </div>
    );
  }
}

export default PostForm;
