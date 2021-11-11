import React, { Component } from "react";
import { Modal, Button } from "antd";

export class PostAddModel extends Component {
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
          title="Basic Modal"
          visible={this.state.isModalVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </>
    );
  }
}
