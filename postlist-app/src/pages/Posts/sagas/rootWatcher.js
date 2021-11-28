import { all } from 'redux-saga/effects';
import {
  postsFetchWatcher,
  postAddSagaWatcher,
  postFetchWatcher,
  postEditFetchWatcher,
  postEditWatcher,
  postDeleteWatcher,
} from './postsSaga';

export function* rootWatcher() {
  yield all([
    postsFetchWatcher(),
    postAddSagaWatcher(),
    postFetchWatcher(),
    postEditFetchWatcher(),
    postEditWatcher(),
    postDeleteWatcher(),
  ]);
}
