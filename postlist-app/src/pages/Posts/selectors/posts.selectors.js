import { createSelector } from 'reselect';

const selectList = (postsReducer) => postsReducer.posts;
const selectPost = (postsReducer) => postsReducer.post;
const selectModalVisible = (postsReducer) => postsReducer.modalVisible;
const selectLoading = (postsReducer) => postsReducer.loading;
const selectModalDataLoading = (postsReducer) => postsReducer.modalDataLoading;
const selectModalType = (postsReducer) => postsReducer.modalType;

export const selectorListData = createSelector(selectList, (posts) => posts);
export const selectorPostData = createSelector(
  selectPost,
  (postData) => postData,
);
export const selectormodalVisible = createSelector(
  selectModalVisible,
  (visible) => visible,
);
export const selectorLoading = createSelector(
  selectLoading,
  (loading) => loading,
);
export const selectorModalDataLoading = createSelector(
  selectModalDataLoading,
  (modalDataLoading) => modalDataLoading,
);
export const selectorModalType = createSelector(
  selectModalType,
  (modalType) => modalType,
);
