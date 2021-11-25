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
  postsFetchInProgressAction,
  postsFetchSuccessAction,
  postsFetchErrorAction,
  postAddInProgressAction,
  postAddSuccessAction,
  postAddErrorAction,
  postEditFetchDataInProgressAction,
  postEditFetchDataSuccessAction,
  postEditFetchDataErrorAction,
  postEditByIdInProgressAction,
  postEditByIdSuccessAction,
  postEditByIdErrorAction,
  postDeleteByIdInProgressAction,
  postDeleteByIdErrorAction,
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

function* postsFetchSaga() {
  try {
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

function* postEditFetchByIdSaga(action) {
  try {
    yield put(postEditFetchDataInProgressAction());
    const data = yield call(getPostDetails, action.payload);
    yield put(postEditFetchDataSuccessAction(data));
  } catch (error) {
    yield put(postEditFetchDataErrorAction(error));
    yield call(message.error, error);
  }
}

export function* postEditFetchByIdWatcher() {
  yield takeLatest(POST_EDIT_FETCH_START, postEditFetchByIdSaga);
}

function* postEditByIdSaga(action) {
  try {
    yield put(postEditByIdInProgressAction());
    yield call(editPost, action.payload.id, action.payload.data);
    yield put(postEditByIdSuccessAction());
    yield put({ type: POSTS_FETCH_START });
    yield call(message.success, 'Post edited!');
  } catch (error) {
    yield put(postEditByIdErrorAction(error));
    yield call(message.error, error);
  }
}

export function* postEditByIdWatcher() {
  yield takeLatest(POST_EDIT_START, postEditByIdSaga);
}

function* postDeleteByIdSaga(action) {
  try {
    yield put(postDeleteByIdInProgressAction());
    yield call(deletePost, action.payload);

    yield put({ type: POSTS_FETCH_START });
    yield call(message.success, 'Post deleted!');
  } catch (error) {
    yield put(postDeleteByIdErrorAction(error));
    yield call(message.error, error);
  }
}

export function* postDeleteByIdWatcher() {
  yield takeLatest(POST_DELETE_START, postDeleteByIdSaga);
}
