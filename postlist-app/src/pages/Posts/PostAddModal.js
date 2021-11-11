import React, { Component } from "react";
import { Modal, Button } from "antd";
import FormCreatePost from "./FormAddPost";

export class PostAddModal extends Component {
  state = {
    isModalVisible: false,
  };

  showModal = () => {
    this.setState({ isModalVisible: true });
  };

  handleOk = () => {
    this.setState({ isModalVisible: false });
  };

  handleCancel = () => {
    this.setState({ isModalVisible: false });
  };

  render() {
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Create Post
        </Button>
        <Modal
          title="Create Post"
          visible={this.state.isModalVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          centered="true"
        >
          <FormCreatePost />
        </Modal>
      </>
    );
  }
}
