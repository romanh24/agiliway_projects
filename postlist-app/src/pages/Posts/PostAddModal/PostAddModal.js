import React, { Component } from "react";
import { Modal, Button } from "antd";
import PostForm from "./../PostForm";
import PropTypes from "prop-types";

class PostAddModal extends Component {
  render() {
    const { visible, closeModal, createPost, loading } = this.props;
    return (
      <>
        <Modal
          title="Create Post"
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
              Save
            </Button>,
          ]}
        >
          <PostForm handleSubmit={createPost} loading={loading} />
        </Modal>
      </>
    );
  }
}

PostAddModal.propTypes = {
  loading: PropTypes.bool,
  visible: PropTypes.bool,
  closeModal: PropTypes.func,
  createPost: PropTypes.func,
};

export default PostAddModal;
