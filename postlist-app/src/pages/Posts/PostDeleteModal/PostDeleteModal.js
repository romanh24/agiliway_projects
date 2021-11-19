import React, { Component } from "react";
import { Modal, Button } from "antd";

class PostDeleteModal extends Component {
  handleDelete = () => {
    const { postData, postDeleteById } = this.props;
    const { uuid } = postData;

    postDeleteById(uuid);
  };

  render() {
    const { visible, closeModal } = this.props;

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
            <Button onClick={this.handleDelete} type="primary">
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
