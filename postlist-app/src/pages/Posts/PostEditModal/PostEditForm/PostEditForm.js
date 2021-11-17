import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import { Input, Button, Descriptions } from "antd";
// import { connect } from "react-redux";
import { StyledPostEditForm } from "./styled";

class PostEditForm extends Component {
  onSubmit = (formValue, form) => {
    const { postEditByIdThunk } = this.props;

    const id = formValue.uuid;
    console.log("idddd:", id);

    const data = {
      name: formValue.name,
      author: formValue.author,
      description: formValue.description,
    };

    postEditByIdThunk(id, data);
    // form.reset();
  };

  render() {
    const { initialValues } = this.props;
    console.log(initialValues);
    return (
      <Form
        onSubmit={this.onSubmit}
        initialValues={initialValues}
        // id="form"
        // validate={validate}
        render={({ handleSubmit, values, submitting, form }) => (
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

// const mapStateToProps = (state) => {
//   return {};
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     editPostById: (id) => dispatch(postEditByIdThunk(id)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(PostEditForm);
export default PostEditForm;
