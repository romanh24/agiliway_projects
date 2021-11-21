import React, { Component } from "react";
import { Modal, Button, Spin } from "antd";
import PropTypes from "prop-types";

class PostDeleteModal extends Component {
  render() {
    const { visible, closeModal, postDeleteById, loading, postData } =
      this.props;

    return (
      <>
        <Modal
          title="Delete post"
          visible={visible}
          onCancel={closeModal}
          footer={[
            <Button onClick={closeModal} type="default">
              Cancel
            </Button>,
            <Button
              onClick={() => postDeleteById(postData.uuid)}
              loading={loading}
              type="primary"
            >
              Delete
            </Button>,
          ]}
        >
          <Spin size="large" spinning={loading}>
            <p>Would you like to delete this post?</p>
          </Spin>
        </Modal>
      </>
    );
  }
}

PostDeleteModal.propTypes = {
  loading: PropTypes.bool,
  visible: PropTypes.bool,
  closeModal: PropTypes.func,
  postData: PropTypes.object,
  postDeleteById: PropTypes.func,
};

export default PostDeleteModal;
