import React, { Component } from "react";
import { connect } from "react-redux";
import {
  postsFetchThunk,
  postAddThunk,
  postEditByIdThunk,
  postEditFetchByIdThunk,
  postDeleteByIdThunk,
} from "../thunks/thunks";
import { Empty, Button, Spin, BackTop } from "antd";
import { StyledPostList } from "./styled";
import PostItem from "./PostItem";
import PostAddModal from "../PostAddModal";
import PostEditModal from "../PostEditModal";
import PostDeleteModal from "../PostDeleteModal";
import { modalOpenAction, modalCloseAction } from "../actions/modal.actions";
import {
  MODAL_ADD_TYPE,
  MODAL_EDIT_TYPE,
  MODAL_DELETE_TYPE,
} from "../action-types/modal.action-types";
import PropTypes from "prop-types";
import {
  selectorListData,
  selectorPostData,
  selectormodalVisible,
  selectorLoading,
  selectorModalDataLoading,
  selectorModalType,
} from "../selectors/posts.selectors";

class PostList extends Component {
  componentDidMount() {
    const { fetchPostList } = this.props;
    fetchPostList();
  }

  handleModalOpen = () => {
    const { openModal } = this.props;
    openModal(MODAL_ADD_TYPE);
  };

  handleSubmit = (postData) => {
    const { postEditById } = this.props;

    const postNewData = {
      name: postData.name,
      author: postData.author,
      description: postData.description,
    };

    postEditById(postNewData, postData.uuid);
  };

  render() {
    const {
      listData,
      postData,
      createPost,
      postDeleteById,
      postEditFetchById,
      loading,
      modalDataLoading,
      visible,
      openModal,
      closeModal,
      modalType,
    } = this.props;

    return (
      <div>
        <h1>Posts</h1>
        <Button type="primary" onClick={this.handleModalOpen}>
          Create Post
        </Button>
        <Spin size="large" spinning={loading}>
          <StyledPostList>
            {listData.map((post) => {
              return (
                <PostItem
                  key={post.uuid}
                  id={post.uuid}
                  createDate={post.createDate}
                  name={post.name}
                  description={post.description}
                  author={post.author}
                  post={post}
                  postEditFetchById={postEditFetchById}
                  openModal={openModal}
                />
              );
            })}
            <BackTop />
          </StyledPostList>
        </Spin>
        {!listData.length && <Empty />}

        {modalType === MODAL_ADD_TYPE && (
          <PostAddModal
            loading={modalDataLoading}
            visible={visible}
            closeModal={closeModal}
            createPost={createPost}
          />
        )}

        {modalType === MODAL_EDIT_TYPE && (
          <PostEditModal
            loading={modalDataLoading}
            visible={visible}
            closeModal={closeModal}
            postData={postData}
            handleSubmit={this.handleSubmit}
          />
        )}

        {modalType === MODAL_DELETE_TYPE && (
          <PostDeleteModal
            loading={modalDataLoading}
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
    listData: selectorListData(postsReducer),
    postData: selectorPostData(postsReducer),
    visible: selectormodalVisible(postsReducer),
    loading: selectorLoading(postsReducer),
    modalDataLoading: selectorModalDataLoading(postsReducer),
    modalType: selectorModalType(postsReducer),
  };
};

const mapDispatchToProps = {
  fetchPostList: postsFetchThunk,
  createPost: postAddThunk,
  postEditById: postEditByIdThunk,
  postEditFetchById: postEditFetchByIdThunk,
  postDeleteById: postDeleteByIdThunk,
  openModal: modalOpenAction,
  closeModal: modalCloseAction,
};

PostList.propTypes = {
  fetchPostList: PropTypes.func,
  postEditById: PropTypes.func,
  postEditFetchById: PropTypes.func,
  postDeleteById: PropTypes.func,
  openModal: PropTypes.func,
  closeModal: PropTypes.func,
  listData: PropTypes.array,
  postData: PropTypes.object,
  createPost: PropTypes.func,
  loading: PropTypes.bool,
  modalDataLoading: PropTypes.bool,
  visible: PropTypes.bool,
  modalType: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
