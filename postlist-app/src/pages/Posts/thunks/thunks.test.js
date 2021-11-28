/* eslint-disable no-undef */
import thunk from 'redux-thunk';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import { postsFetchThunk } from './thunks';
import client from '../../../api/client';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const initialState = {
  loading: false,
  posts: [],
};

describe('Test posts actions', () => {
  let store;
  beforeEach(() => {
    moxios.install(client);
    store = mockStore(initialState);
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('Loads all posts correctly', (done) => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        message: 'OK',
        response: {
          data: [
            {
              name: 'test',
              createDate: '2021-11-25T11:58:45.929Z',
              description: 'test',
              author: 'test',
            },
          ],
        },
      });
    });

    const expectedActions = [
      {
        type: 'POSTS_FETCH_IN_PROGRESS',
      },
      {
        payload: [
          {
            name: 'test',
            createDate: '2021-11-25T11:58:45.929Z',
            description: 'test',
            author: 'test',
          },
        ],

        type: 'POSTS_FETCH_SUCCESS',
      },
    ];
    store.dispatch(postsFetchThunk()).then(() => {
      const actualAction = store.getActions();
      expect(actualAction).toEqual(expectedActions);
      done();
    });
  });

  // it('Returns an error if no posts are found', (done) => {
  //   moxios.wait(() => {
  //     const request = moxios.requests.mostRecent();
  //     request.respondWith({
  //       status: 200,
  //       response: [],
  //     });
  //   });

  //   const expectedActions = [
  //     {
  //       type: 'POSTS_FETCH_ERROR',
  //     },
  //   ];
  //   return store.dispatch(postsFetchThunk()).then(() => {
  //     const actualAction = store.getActions();
  //     expect(actualAction).toEqual(expectedActions);
  //     done();
  //   });
  // });
});
