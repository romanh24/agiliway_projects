import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { PostForm } from './PostForm';
import { BrowserRouter as Router } from 'react-router-dom';
import { jest } from '@jest/globals';

const handleSubmit = jest.fn();
const onSubmit = jest.fn();
const loading = false;

const post = {
  name: 'test',
  createDate: '2021-11-25T11:58:45.929Z',
  description: 'test',
  author: 'test',
};

describe('Input value', () => {
  it('updates on change', () => {
    const { getByPlaceholderText } = render(
      <Router>
        <PostForm
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          loading={loading}
          postData={post}
        />
      </Router>
    );
    const nameInput = getByPlaceholderText('Name');

    fireEvent.change(nameInput, { target: { value: 'test' } });
    expect(nameInput.value).toBe('test');
  });
});
