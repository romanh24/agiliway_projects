import React, { Component } from "react";
import { Modal, Button } from "antd";

class PostDeleteModal extends Component {
  render() {
    const { postData, loading, visible, closeModal, postDeleteById } =
      this.props;

    const { uuid } = postData;

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
            <Button onClick={() => postDeleteById(uuid)} type="primary">
              Delete
            </Button>,
          ]}
        >
          <p>Would you like to delete this post?</p>
        </Modal>
      </>
    );
  }
}

export default PostDeleteModal;
