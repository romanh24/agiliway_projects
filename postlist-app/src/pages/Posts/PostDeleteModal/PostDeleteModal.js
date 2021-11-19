import React, { Component } from "react";
import { Modal, Button, Spin } from "antd";

class PostDeleteModal extends Component {
  render() {
    const { visible, closeModal, postDeleteById, loading, id } = this.props;

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
              onClick={() => postDeleteById(id)}
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

export default PostDeleteModal;
