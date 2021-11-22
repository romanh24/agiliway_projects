import React, { Component } from "react";
import { StyledPostEditForm } from "./styled";
import { Form, Field } from "react-final-form";
import { Input } from "antd";
import { Spin } from "antd";
import PropTypes from "prop-types";

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
                  <label htmlFor="name">Name</label>
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
                  <label htmlFor="author">Author</label>
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
                  <label htmlFor="description">Description</label>
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
              </form>
            )}
          />
        </Spin>
      </div>
    );
  }
}

PostForm.propTypes = {
  handleSubmit: PropTypes.func,
  loading: PropTypes.bool,
  postData: PropTypes.object,
};

export default PostForm;
