import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PostDetails } from './PostDetails';
import { BrowserRouter as Router } from 'react-router-dom';
import { jest } from '@jest/globals';

const postFetch = jest.fn();

const post = {
  name: 'test',
  createDate: '2021-11-25T11:58:45.929Z',
  description: 'test',
  author: 'test',
};

const match = {
  params: {
    id: '1',
  },
};

const loading = false;

it('renders correctly', () => {
  const { queryByTestId, queryByPlaceholderName } = render(
    <Router>
      <PostDetails
        post={post}
        match={match}
        postFetch={postFetch}
        loading={loading}
      />
    </Router>
  );

  expect(queryByTestId('back-button')).toBeTruthy();
});
