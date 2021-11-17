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
import { modalShowAction, modalCloseAction } from "../actions/modal.actions";
import {
  MODAL_ADD_TYPE,
  MODAL_EDIT_TYPE,
  MODAL_DELETE_TYPE,
} from "../action-types/modal.action-types";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPostList();
  }

  render() {
    const {
      listData,
      postData,
      loading,
      visible,
      postEditGetById,
      postEditById,
      postDeleteGetById,
      openModal,
      closeModal,
      modalType,
      postDeleteById,
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
                  postEditGetById={postEditGetById}
                  postDeleteGetById={postDeleteGetById}
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
            postData={postData}
            postEditById={postEditById}
          />
        )}

        {modalType === MODAL_DELETE_TYPE && (
          <PostDeleteModal
            loading={loading}
            visible={visible}
            closeModal={closeModal}
            postData={postData}
            postDeleteById={postDeleteById}
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
    modalType: postsReducer.modalType,
  };
};

const mapDispatchToProps = {
  fetchPostList: getPostsThunk,
  postEditById: postEditByIdThunk,
  postEditGetById: postEditGetByIdThunk,
  postDeleteGetById: postDeleteGetByIdThunk,
  postDeleteById: postDeleteByIdThunk,
  openModal: modalShowAction,
  closeModal: modalCloseAction,
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchPostList: () => dispatch(getPostsThunk()),
//     postEditById: (id, postData) => dispatch(postEditByIdThunk(id, postData)),
//     postEditGetById: (id) => dispatch(postEditGetByIdThunk(id)),
//     postDeleteGetById: (id) => dispatch(postDeleteGetByIdThunk(id)),
//     postDeleteById: (id) => dispatch(postDeleteByIdThunk(id)),
//     openModal: (modalType) => {
//       dispatch(modalShowAction(modalType));
//     },
//     closeModal: () => {
//       dispatch(modalCloseAction());
//     },
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
