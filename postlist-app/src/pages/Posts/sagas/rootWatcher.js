import { all } from 'redux-saga/effects';
import {
  postsFetchWatcher,
  postAddSagaWatcher,
  postFetchWatcher,
  postEditFetchByIdWatcher,
  postEditByIdWatcher,
  postDeleteByIdWatcher,
} from './postsSaga';

export function* rootWatcher() {
  yield all([
    postsFetchWatcher(),
    postAddSagaWatcher(),
    postFetchWatcher(),
    postEditFetchByIdWatcher(),
    postEditByIdWatcher(),
    postDeleteByIdWatcher(),
  ]);
}
