import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { jest } from '@jest/globals';
import { PostAddModal } from './PostAddModal';

const loading = true;
// visible
// closeModal
// createPost
const post = {
  name: 'test',
  createDate: '2021-11-25T11:58:45.929Z',
  description: 'test',
  author: 'test',
};

describe('with empty query', () => {
  it('does not trigger handle function', () => {
    const pressSaveButton = jest.fn();
    // const handleSubmit = jest.fn();
    const { getByTestId } = render(
      <Router>
        <PostAddModal
          //   handleSubmit={handleSubmit}
          loading={loading}
          postData={post}
        />
      </Router>
    );
    fireEvent.click(getByTestId('save-button'));
    expect(pressSaveButton).not.toHaveBeenCalled();
  });
});
