import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import PropTypes from 'prop-types';
import PostForm from '../PostForm';

export class PostAddModal extends Component {
  render() {
    const { visible, closeModal, createPost, loading } = this.props;
    return (
      <Modal
        title='Create Post'
        visible={visible}
        onCancel={closeModal}
        centered='true'
        footer={[
          <Button key='back' onClick={closeModal}>
            Cancel
          </Button>,
          <Button
            data-testid='save-button'
            loading={loading}
            form='form'
            htmlType='submit'
            key='submit'
            type='primary'
          >
            Save
          </Button>,
        ]}
      >
        <PostForm handleSubmit={createPost} loading={loading} />
      </Modal>
    );
  }
}

PostAddModal.propTypes = {
  loading: PropTypes.bool.isRequired,
  visible: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  createPost: PropTypes.func.isRequired,
};

export default PostAddModal;
