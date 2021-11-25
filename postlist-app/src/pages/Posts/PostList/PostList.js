import React, { Component } from 'react';
import { Empty, Button, Spin, BackTop } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  postsFetchThunk,
  postAddThunk,
  postEditByIdThunk,
  postEditFetchByIdThunk,
  postDeleteByIdThunk,
} from '../thunks/thunks';
import { StyledPostList } from './styled';
import PostItem from './PostItem';
import PostAddModal from '../PostAddModal';
import PostEditModal from '../PostEditModal';
import PostDeleteModal from '../PostDeleteModal';
import { modalOpenAction, modalCloseAction } from '../actions/modal.actions';
import {
  postAddStartAction,
  postsFetchStartAction,
  postEditFetchDataStartAction,
  postEditByIdStartAction,
  postDeleteByIdStartAction,
} from '../actions/posts.actions';
import {
  MODAL_ADD_TYPE,
  MODAL_EDIT_TYPE,
  MODAL_DELETE_TYPE,
} from '../action-types/modal.action-types';

import {
  selectorListData,
  selectorPostData,
  selectormodalVisible,
  selectorLoading,
  selectorModalDataLoading,
  selectorModalType,
} from '../selectors/posts.selectors';

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

    postEditById(postData.uuid, postNewData);
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
        <Button type='primary' onClick={this.handleModalOpen}>
          Create Post
        </Button>
        <Spin size='large' spinning={loading}>
          <StyledPostList>
            {listData.map((post) => (
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
            ))}
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
  fetchPostList: postsFetchStartAction,
  // createPost: postAddThunk,
  // postEditByIdThunk,
  // postEditFetchByIdThunk,
  createPost: postAddStartAction,
  postEditById: postEditByIdStartAction,
  postEditFetchById: postEditFetchDataStartAction,
  postDeleteById: postDeleteByIdStartAction,
  openModal: modalOpenAction,
  closeModal: modalCloseAction,
};

PostList.propTypes = {
  fetchPostList: PropTypes.func.isRequired,
  postEditById: PropTypes.func.isRequired,
  postEditFetchById: PropTypes.func.isRequired,
  postDeleteById: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  listData: PropTypes.arrayOf(PropTypes.object),
  postData: PropTypes.shape({
    uuid: PropTypes.string,
    name: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string,
  }),
  createPost: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  modalDataLoading: PropTypes.bool.isRequired,
  visible: PropTypes.bool.isRequired,
  modalType: PropTypes.string,
};

PostList.defaultProps = {
  modalType: '',
  listData: [],
  postData: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
