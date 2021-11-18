import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getPostsThunk,
  postEditByIdThunk,
  postEditGetByIdThunk,
  postDeleteGetByIdThunk,
  postDeleteByIdThunk,
} from "../thunks/thunks";
import { Empty } from "antd";
import PostItem from "./PostItem";
import { StyledPostList } from "./styled";
import PostAddModal from "../PostAddModal";
import PostEditModal from "../PostEditModal";
import PostDeleteModal from "../PostDeleteModal";
import { Button, Spin } from "antd";
import {
  modalOpenAction,
  modalCloseAction,
  modalLoadingCancelAction,
} from "../actions/modal.actions";
import {
  MODAL_ADD_TYPE,
  MODAL_EDIT_TYPE,
  MODAL_DELETE_TYPE,
} from "../action-types/modal.action-types";

class PostList extends Component {
  componentDidMount() {
    const { fetchPostList } = this.props;
    fetchPostList();
  }

  handleModalOpen = () => {
    const { openModal } = this.props;
    openModal(MODAL_ADD_TYPE);
  };

  render() {
    const {
      listData,
      postData,
      loading,
      modalDataLoading,
      visible,
      postEditGetById,
      postEditById,
      postDeleteGetById,
      openModal,
      closeModal,
      cancelLoadingModal,
      modalType,
      postDeleteById,
    } = this.props;
    console.log(modalDataLoading);

    return (
      <div>
        <h1>Posts</h1>
        <Button type="primary" onClick={this.handleModalOpen}>
          Create Post
        </Button>
        <Spin size="large" spinning={loading}>
          <StyledPostList>
            {listData.posts.map((post) => {
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
                  postEditGetById={postEditGetById}
                  postDeleteGetById={postDeleteGetById}
                  // closeModal={closeModal}
                  openModal={openModal}
                />
              );
            })}
          </StyledPostList>
        </Spin>
        {!listData.posts.length && <Empty />}

        {modalType === MODAL_ADD_TYPE && (
          <PostAddModal
            loading={loading}
            modalDataLoading={modalDataLoading}
            visible={visible}
            closeModal={closeModal}
            cancelLoadingModal={cancelLoadingModal}
          />
        )}

        {modalType === MODAL_EDIT_TYPE && (
          <PostEditModal
            loading={loading}
            modalDataLoading={modalDataLoading}
            visible={visible}
            closeModal={closeModal}
            postData={postData}
            postEditById={postEditById}
          />
        )}

        {modalType === MODAL_DELETE_TYPE && (
          <PostDeleteModal
            loading={loading}
            modalDataLoading={modalDataLoading}
            visible={visible}
            closeModal={closeModal}
            postData={postData}
            postDeleteById={postDeleteById}
            cancelLoadingModal={cancelLoadingModal}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { postsReducer } = state;
  return {
    listData: postsReducer,
    postData: postsReducer.post,
    visible: postsReducer.modalVisible,
    loading: postsReducer.loading,
    modalDataLoading: postsReducer.modalDataLoading,
    modalType: postsReducer.modalType,
  };
};

const mapDispatchToProps = {
  fetchPostList: getPostsThunk,
  postEditById: postEditByIdThunk,
  postEditGetById: postEditGetByIdThunk,
  postDeleteGetById: postDeleteGetByIdThunk,
  postDeleteById: postDeleteByIdThunk,
  openModal: modalOpenAction,
  closeModal: modalCloseAction,
  cancelLoadingModal: modalLoadingCancelAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
