import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getPostsThunk,
  postEditByIdThunk,
  postEditGetByIdThunk,
} from "../thunks/thunks";
import { Empty } from "antd";
import PostItem from "./PostItem";
import { StyledPostList } from "./styled";
import PostAddModal from "../PostAddModal";
import PostEditModal from "../PostEditModal";
import { Button, Spin } from "antd";
import { modalShowAction, modalCloseAction } from "../actions/modal.actions";
import {
  MODAL_ADD_TYPE,
  MODAL_EDIT_TYPE,
} from "../action-types/modal.action-types";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPostList();
  }

  // showModal = () => {
  //   this.props.open();
  // };

  // closeModal = () => {
  //   this.props.close();
  // };

  handleOpenModal = () => {};

  render() {
    const {
      listData,
      loading,
      visible,
      postEditGetByIdThunk,
      postEditByIdThunk,
      openModal,
      closeModal,
      modalType,
    } = this.props;

    return (
      <div>
        <h1>Posts</h1>
        <Button type="primary" onClick={() => openModal(MODAL_ADD_TYPE)}>
          Create Post
        </Button>
        <StyledPostList>
          {!listData.loading &&
            listData.posts.map((post) => {
              return (
                <PostItem
                  key={post.uuid}
                  id={post.uuid}
                  createDate={post.createDate}
                  name={post.name}
                  author={post.author}
                  description={post.description}
                  // loading={post.loading}
                  // visible={post.visible}
                  postEditGetByIdThunk={postEditGetByIdThunk}
                  // closeModal={closeModal}
                  openModal={openModal}
                />
              );
            })}
        </StyledPostList>
        {listData.loading && <Spin size="medium" />}
        {!listData.posts.length && <Empty />}

        {modalType === MODAL_ADD_TYPE && (
          <PostAddModal
            loading={loading}
            visible={visible}
            closeModal={closeModal}
          />
        )}

        {modalType === MODAL_EDIT_TYPE && (
          <PostEditModal
            loading={loading}
            visible={visible}
            closeModal={closeModal}
            initialValues={this.props.listData.post}
            postEditByIdThunk={postEditByIdThunk}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listData: state.postsReducer,
    visible: state.postsReducer.modalVisible,
    loading: state.postsReducer.loading,
    modalType: state.postsReducer.modalType,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPostList: () => dispatch(getPostsThunk()),
    postEditByIdThunk: (id, postData) =>
      dispatch(postEditByIdThunk(id, postData)),
    postEditGetByIdThunk: (id) => dispatch(postEditGetByIdThunk(id)),
    openModal: (modalType) => {
      dispatch(modalShowAction(modalType));
    },
    closeModal: () => {
      dispatch(modalCloseAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
