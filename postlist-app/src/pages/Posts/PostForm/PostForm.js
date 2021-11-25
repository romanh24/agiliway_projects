/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-shadow */
import React from 'react';
import { Form, Field } from 'react-final-form';
import { Input, Spin } from 'antd';
import PropTypes from 'prop-types';
import { StyledPostEditForm } from './styled';

const PostForm = ({ postData, loading, handleSubmit }) => (
  <div>
    <Spin size='large' spinning={loading}>
      <Form
        onSubmit={handleSubmit}
        initialValues={postData}
        // validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} id='form'>
            <StyledPostEditForm>
              <label htmlFor='name'>Name</label>
              <Field
                name='name'
                size='middle'
                placeholder='Name'
                id='name'
                allowClear
              >
                {(props) => (
                  <Input
                    {...props.input}
                    placeholder={props.placeholder}
                    id={props.id}
                    allowClear={props.allowClear}
                  />
                )}
              </Field>
            </StyledPostEditForm>

            <StyledPostEditForm>
              <label htmlFor='author'>Author</label>
              <Field
                name='author'
                size='middle'
                placeholder='Author'
                id='author'
                allowClear
              >
                {(props) => (
                  <Input
                    {...props.input}
                    placeholder={props.placeholder}
                    id={props.id}
                    allowClear={props.allowClear}
                  />
                )}
              </Field>
            </StyledPostEditForm>

            <StyledPostEditForm>
              <label htmlFor='description'>Description</label>
              <Field
                name='description'
                size='middle'
                placeholder='Description'
                id='description'
                allowClear
              >
                {(props) => (
                  <Input
                    {...props.input}
                    placeholder={props.placeholder}
                    id={props.id}
                    allowClear={props.allowClear}
                  />
                )}
              </Field>
            </StyledPostEditForm>
          </form>
        )}
      />
    </Spin>
  </div>
);

PostForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  postData: PropTypes.shape({
    uuid: PropTypes.string,
    name: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string,
  }),
};

PostForm.defaultProps = {
  postData: {},
};

export default PostForm;
