import React, { Component } from "react";
import { Modal, Button } from "antd";
import PostAddForm from "./PostAddForm/PostAddForm";

class PostAddModal extends Component {
  checkModal = (event) => {
    // event.preventDefault();
    // const {
    //   target: {
    //     dataset: { modal },
    //   },
    // } = event;
    console.log("111111:");
  };
  render() {
    return (
      <>
        <Modal
          // onClick={this.checkModal}
          data-modal="PostAddModal"
          title="Create Post"
          visible={this.props.visible}
          onCancel={this.props.closeModal}
          centered="true"
          footer={[
            <Button key="back" onClick={this.props.closeModal}>
              Cancel
            </Button>,
            <Button form="form" htmlType="submit" key="submit" type="primary">
              Save
            </Button>,
          ]}
        >
          <PostAddForm />
        </Modal>
      </>
    );
  }
}

export default PostAddModal;
