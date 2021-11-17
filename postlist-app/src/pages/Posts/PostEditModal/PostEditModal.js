import React, { Component } from "react";
import { Modal, Button } from "antd";
import PostEditForm from "./PostEditForm/PostEditForm";

class PostEditModal extends Component {
  render() {
    const { initialValues, postEditByIdThunk, visible, closeModal } =
      this.props;
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
            initialValues={initialValues}
            postEditByIdThunk={postEditByIdThunk}
          />
        </Modal>
      </>
    );
  }
}

export default PostEditModal;
