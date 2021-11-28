import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import PropTypes from 'prop-types';
import PostForm from '../PostForm';

class PostEditModal extends Component {
  render() {
    const { postData, visible, closeModal, handleSubmit, loading } = this.props;
    return (
      <Modal
        title='Edit Post'
        visible={visible}
        onCancel={closeModal}
        centered='true'
        footer={[
          <Button key='back' onClick={closeModal}>
            Cancel
          </Button>,
          <Button
            loading={loading}
            form='form'
            htmlType='submit'
            key='submit'
            type='primary'
          >
            Edit
          </Button>,
        ]}
      >
        <PostForm
          loading={loading}
          postData={postData}
          handleSubmit={handleSubmit}
        />
      </Modal>
    );
  }
}

PostEditModal.propTypes = {
  loading: PropTypes.bool.isRequired,
  visible: PropTypes.bool.isRequired,
  postData: PropTypes.shape({
    uuid: PropTypes.string,
    name: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  closeModal: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
export default PostEditModal;
