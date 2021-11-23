import { createSelector } from 'reselect';

const selectPost = (postDetailsReducer) => postDetailsReducer.post;
const selectLoading = (postDetailsReducer) => postDetailsReducer.loading;

export const selectorPost = createSelector(selectPost, (post) => post);
export const selecLoading = createSelector(selectLoading, (loading) => loading);
