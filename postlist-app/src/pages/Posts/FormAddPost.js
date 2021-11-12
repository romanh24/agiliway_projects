import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import { Input, Button } from "antd";
import { connect } from "react-redux";
import { thunkCreatePost } from "./thunks";

class FormAddPost extends Component {
  onSubmit = (value) => {
    console.log("value:", value);

    // const postData = {
    //   name: value.name,
    //   author: value.author,
    //   description: value.description,
    // };

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
            <Field name="name" size="middle" placeholder="name">
              {(props) => {
                console.log(props);
                return (
                  <Input {...props.input} placeholder={props.placeholder} />
                );
              }}
            </Field>

            <Field name="author" size="middle" placeholder="author">
              {(props) => {
                console.log(props);
                return (
                  <Input {...props.input} placeholder={props.placeholder} />
                );
              }}
            </Field>

            <Field name="description" size="middle" placeholder="description">
              {(props) => {
                console.log(props);
                return (
                  <Input {...props.input} placeholder={props.placeholder} />
                );
              }}
            </Field>
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
      dispatch(thunkCreatePost(postData));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormAddPost);

// export default FormAddPost;
