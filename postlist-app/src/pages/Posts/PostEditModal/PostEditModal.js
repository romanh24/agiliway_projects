import React, { Component } from "react";
import { Modal, Button } from "antd";
import PostEditForm from "./PostEditForm/PostEditForm";
import { Spin } from "antd";

class PostEditModal extends Component {
  render() {
    const {
      postData,
      postEditById,
      visible,
      closeModal,
      loading,
      modalDataLoading,
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
              form="formEdit"
              htmlType="submit"
              key="submit"
              type="primary"
            >
              Edit
            </Button>,
          ]}
        >
          <PostEditForm
            modalDataLoading={modalDataLoading}
            postData={postData}
            postEditById={postEditById}
            loading={loading}
          />
        </Modal>
      </>
    );
  }
}

export default PostEditModal;
