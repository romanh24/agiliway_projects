/* eslint-disable operator-linebreak */
import React, { Component } from 'react';
import { Modal, Button, Spin } from 'antd';
import PropTypes from 'prop-types';

class PostDeleteModal extends Component {
  render() {
    const { visible, closeModal, postDeleteById, loading, postData } =
      this.props;
    const { uuid } = postData;

    return (
      <Modal
        title='Delete post'
        visible={visible}
        onCancel={closeModal}
        footer={[
          <Button key='back' onClick={closeModal} type='default'>
            Cancel
          </Button>,
          <Button
            key='submit'
            onClick={() => postDeleteById(uuid)}
            loading={loading}
            type='primary'
          >
            Delete
          </Button>,
        ]}
      >
        <Spin size='large' spinning={loading}>
          <p>Would you like to delete this post?</p>
        </Spin>
      </Modal>
    );
  }
}

PostDeleteModal.propTypes = {
  loading: PropTypes.bool.isRequired,
  visible: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  postData: PropTypes.shape({
    uuid: PropTypes.string,
  }).isRequired,
  postDeleteById: PropTypes.func.isRequired,
};

export default PostDeleteModal;
