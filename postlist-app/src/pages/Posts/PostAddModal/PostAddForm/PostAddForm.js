import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import { Input, Button } from "antd";
import { connect } from "react-redux";
import { addPostThunk } from "../../thunks/thunks";
import { StyledPostAddForm } from "./styled";

class PostAddForm extends Component {
  onSubmit = (value) => {
    console.log("value:", value);

    this.props.createPost(value);
  };

  render() {
    return (
      <Form
        onSubmit={this.onSubmit}
        // id="form"
        // validate={validate}
        render={({ handleSubmit, values, submitting, form }) => (
          <form onSubmit={handleSubmit} id="form">
            <StyledPostAddForm>
              <label for="name">Name</label>
              <Field
                name="name"
                size="middle"
                placeholder="Name"
                id="name"
                allowClear="true"
              >
                {(props) => {
                  console.log(props);
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
                allowClear="true"
              >
                {(props) => {
                  console.log(props);
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
                allowClear="true"
              >
                {(props) => {
                  console.log(props);
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
          </form>
        )}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    createPostData: state.createPost,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (postData) => {
      dispatch(addPostThunk(postData));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostAddForm);
