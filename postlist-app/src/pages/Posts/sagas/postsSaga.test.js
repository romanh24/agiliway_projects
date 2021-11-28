/* eslint-disable no-undef */
import { call, put } from 'redux-saga/effects';
import { cloneableGenerator } from '@redux-saga/testing-utils';
import { deepEqual } from 'assert';
import * as api from '../../../api/posts';

import {
  postsResetAction,
  postsFetchInProgressAction,
  postsFetchSuccessAction,
  postsFetchErrorAction,
} from '../actions/posts.actions';

import { postsFetchSaga } from './postsSaga';

describe('Saga test', () => {
  const generator = cloneableGenerator(postsFetchSaga)();
  test('Positive Saga call test', () => {
    const clone = generator.clone();
    //  expect(clone.next().value).toEqual(put(postsFetchInProgressAction()));
    deepEqual(
      clone.next().value,
      put(postsResetAction()),
      'should reset first'
    );
    deepEqual(
      clone.next().value,
      call(api.getPosts),
      'should call getPosts fetch'
    );
    deepEqual(
      clone.next().value,
      put(postsFetchInProgressAction()),
      'should add inProgress action'
    );
    deepEqual(
      clone.next().value,
      put(postsFetchSuccessAction()),
      'should add Success action'
    );
    const result = clone.next().done;
    deepEqual(result, true, 'should be done after end');
  });
  test('Negative Saga call test', () => {
    const clone = generator.clone();
    deepEqual(
      clone.next().value,
      put(postsResetAction()),
      'should reset first'
    );
    deepEqual(
      clone.next().value,
      call(api.getPosts),
      'should call getPosts fetch'
    );
    deepEqual(
      clone.next().value,
      put(postsFetchInProgressAction()),
      'should add inProgress action'
    );
    deepEqual(
      clone.throw().value,
      put(postsFetchErrorAction()),
      'should add Error action on error'
    );
  });
});
