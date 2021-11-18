import React, { Component } from "react";
import { Modal, Button } from "antd";
import { Spin } from "antd";

class PostDeleteModal extends Component {
  componentDidMount() {
    this.props.cancelLoadingModal();
  }

  render() {
    const {
      postData,
      loading,
      visible,
      closeModal,
      postDeleteById,
      modalDataLoading,
    } = this.props;

    const { uuid } = postData;

    return (
      <>
        <Modal
          title="Delete post"
          visible={visible}
          onCancel={closeModal}
          footer={[
            <Spin size="small" spinning={modalDataLoading}>
              <Button onClick={closeModal} type="default">
                Cancel
              </Button>
            </Spin>,
            <Spin size="small" spinning={modalDataLoading}>
              <Button onClick={() => postDeleteById(uuid)} type="primary">
                Delete
              </Button>
            </Spin>,
          ]}
        >
          <p>Would you like to delete this post?</p>
        </Modal>
      </>
    );
  }
}

export default PostDeleteModal;
