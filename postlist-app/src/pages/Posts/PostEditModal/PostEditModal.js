import React, { Component } from "react";
import { Modal, Button } from "antd";
import PostForm from "./../Form";

class PostEditModal extends Component {
  render() {
    const {
      postData,
      postEditById,
      visible,
      closeModal,
      handleSubmit,
      // modalDataLoading,
      loading,
    } = this.props;
    return (
      <>
        <Modal
          title="Edit Post"
          visible={visible}
          onCancel={closeModal}
          centered="true"
          footer={[
            <Button key="back" onClick={closeModal}>
              Cancel
            </Button>,
            <Button
              // disabled={modalDataLoading}
              loading={loading}
              form="form"
              htmlType="submit"
              key="submit"
              type="primary"
            >
              Edit
            </Button>,
          ]}
        >
          <PostForm
            loading={loading}
            // modalDataLoading={modalDataLoading}
            postData={postData}
            handleSubmit={handleSubmit}
          />
        </Modal>
      </>
    );
  }
}

export default PostEditModal;
