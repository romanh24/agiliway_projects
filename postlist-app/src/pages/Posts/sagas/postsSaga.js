import { message } from 'antd';
import { put, takeLatest, call } from 'redux-saga/effects';
import {
  getPosts,
  addPost,
  getPostDetails,
  editPost,
  deletePost,
} from '../../../api/posts';
import {
  postsResetAction,
  postsFetchInProgressAction,
  postsFetchSuccessAction,
  postsFetchErrorAction,
  postAddInProgressAction,
  postAddSuccessAction,
  postAddErrorAction,
  postEditFetchInProgressAction,
  postEditFetchSuccessAction,
  postEditFetchErrorAction,
  postEditInProgressAction,
  postEditSuccessAction,
  postEditErrorAction,
  postDeleteInProgressAction,
  postDeleteErrorAction,
} from '../actions/posts.actions';
import {
  postFetchInProgressAction,
  postFetchSuccessAction,
  postFetchErrorAction,
  postResetAction,
} from '../actions/post.action';
import {
  POSTS_FETCH_START,
  POST_ADD_START,
  POST_EDIT_FETCH_START,
  POST_EDIT_START,
  POST_DELETE_START,
} from '../action-types/posts.action-types';
import { POST_FETCH_START } from '../action-types/post.action-types';

export function* postsFetchSaga() {
  try {
    yield put(postsResetAction());
    const data = yield call(getPosts);
    yield put(postsFetchInProgressAction());
    yield put(postsFetchSuccessAction(data));
  } catch (error) {
    yield put(postsFetchErrorAction(error));
  }
}

export function* postsFetchWatcher() {
  yield takeLatest(POSTS_FETCH_START, postsFetchSaga);
}

function* postAddSaga(action) {
  try {
    yield put(postAddInProgressAction());
    yield call(addPost, action.payload);
    yield put(postAddSuccessAction());
    yield put({ type: POSTS_FETCH_START });
    yield call(message.success, 'Post added!');
  } catch (error) {
    yield put(postAddErrorAction(error));
    yield call(message.error, error);
  }
}

export function* postAddSagaWatcher() {
  yield takeLatest(POST_ADD_START, postAddSaga);
}

function* postFetchSaga(action) {
  try {
    yield put(postResetAction());
    yield put(postFetchInProgressAction());
    const data = yield call(getPostDetails, action.payload);
    yield put(postFetchSuccessAction(data));
  } catch (error) {
    yield put(postFetchErrorAction(error));
    yield call(message.error, error);
  }
}

export function* postFetchWatcher() {
  yield takeLatest(POST_FETCH_START, postFetchSaga);
}

function* postEditFetchSaga(action) {
  try {
    yield put(postEditFetchInProgressAction());
    const data = yield call(getPostDetails, action.payload);
    yield put(postEditFetchSuccessAction(data));
  } catch (error) {
    yield put(postEditFetchErrorAction(error));
    yield call(message.error, error);
  }
}

export function* postEditFetchWatcher() {
  yield takeLatest(POST_EDIT_FETCH_START, postEditFetchSaga);
}

function* postEditSaga(action) {
  try {
    yield put(postEditInProgressAction());
    yield call(editPost, action.payload.id, action.payload.data);
    yield put(postEditSuccessAction());
    yield put({ type: POSTS_FETCH_START });
    yield call(message.success, 'Post edited!');
  } catch (error) {
    yield put(postEditErrorAction(error));
    yield call(message.error, error);
  }
}

export function* postEditWatcher() {
  yield takeLatest(POST_EDIT_START, postEditSaga);
}

function* postDeleteSaga(action) {
  try {
    yield put(postDeleteInProgressAction());
    yield call(deletePost, action.payload);

    yield put({ type: POSTS_FETCH_START });
    yield call(message.success, 'Post deleted!');
  } catch (error) {
    yield put(postDeleteErrorAction(error));
    yield call(message.error, error);
  }
}

export function* postDeleteWatcher() {
  yield takeLatest(POST_DELETE_START, postDeleteSaga);
}
