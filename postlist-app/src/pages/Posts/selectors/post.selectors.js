import { createSelector } from 'reselect';

const selectPost = (postReducer) => postReducer.post;
const selectLoading = (postReducer) => postReducer.loading;

export const selectorPost = createSelector(selectPost, (post) => post);
export const selecLoading = createSelector(selectLoading, (loading) => loading);
