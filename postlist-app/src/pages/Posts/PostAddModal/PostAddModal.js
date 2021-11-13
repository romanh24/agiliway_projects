import React, { Component } from "react";
import { Modal, Button } from "antd";
import PostAddForm from "./PostAddForm/PostAddForm";
import { connect } from "react-redux";
import { modalShowAction, modalCloseAction } from "../actions/modal.actions";

class PostAddModal extends Component {
  showModal = () => {
    this.props.open();
  };

  // handleOk = () => {
  //   // this.setState({ isModalVisible: false });
  //   this.props.close();
  // };

  closeModal = () => {
    this.props.close();
  };

  render() {
    console.log("prooopsss:", this.props);
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Create Post
        </Button>
        <Modal
          title="Create Post"
          visible={this.props.visible}
          // onOk={this.handleOk}
          onCancel={this.closeModal}
          centered="true"
          footer={[
            <Button key="back" onClick={this.closeModal}>
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

const mapStateToProps = (state) => {
  return {
    visible: state.postAddReducer.visible,
    loading: state.postAddReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    open: () => {
      dispatch(modalShowAction());
    },
    close: () => {
      dispatch(modalCloseAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostAddModal);
