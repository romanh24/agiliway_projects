import React, { Component } from "react";
import { Modal, Button } from "antd";
import PostForm from "../PostForm";
import PropTypes from "prop-types";

class PostEditModal extends Component {
  render() {
    const { postData, visible, closeModal, handleSubmit, loading } = this.props;
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
            postData={postData}
            handleSubmit={handleSubmit}
          />
        </Modal>
      </>
    );
  }
}

PostEditModal.propTypes = {
  loading: PropTypes.bool,
  visible: PropTypes.bool,
  postData: PropTypes.object,
  closeModal: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default PostEditModal;
