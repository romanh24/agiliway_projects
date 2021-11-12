import React, { Component } from "react";
import { Modal, Button } from "antd";
import FormCreatePost from "./FormAddPost";
import { connect } from "react-redux";
import { createPostShowAction, createPostCloseAction } from "./actions";

class PostAddModal extends Component {
  // showModal = () => {
  //   this.props.open();
  //   // this.setState({ isModalVisible: true });
  // };

  // handleOk = () => {
  //   // this.setState({ isModalVisible: false });
  //   this.props.close();
  // };

  // handleCancel = () => {
  //   this.props.close();
  //   // this.setState({ isModalVisible: false });
  // };

  render() {
    console.log("prooopsss:", this.props);
    return (
      <>
        <Button type="primary" onClick={() => this.props.open()}>
          Create Post
        </Button>
        <Modal
          title="Create Post"
          visible={this.props.visible}
          // onOk={this.handleOk}
          onCancel={() => this.props.close()}
          centered="true"
          footer={[
            <Button key="back" onClick={() => this.props.close()}>
              Return
            </Button>,
            <button
              form="form"
              htmlType="submit"
              key="submit"
              type="primary"
              // loading={loading}
            >
              Submit
            </button>,
          ]}
        >
          <FormCreatePost />
        </Modal>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    visible: state.createPostReducer.visible,
    loading: state.createPostReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    open: () => {
      dispatch(createPostShowAction());
    },
    close: () => {
      dispatch(createPostCloseAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostAddModal);
