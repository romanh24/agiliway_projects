import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { jest } from '@jest/globals';
import { PostAddModal } from './PostAddModal';

const loading = false;
const visible = true;
const closeModal = jest.fn();
const createPost = jest.fn();
const post = {
  name: 'test',
  createDate: '2021-11-25T11:58:45.929Z',
  description: 'test',
  author: 'test',
};

describe('if press save button', () => {
  describe('with empty query', () => {
    it('it does not press save button', () => {
      const pressSaveButton = jest.fn();
      const handleSubmit = jest.fn();
      const { getByTestId } = render(
        <Router>
          <PostAddModal
            handleSubmit={handleSubmit}
            loading={loading}
            postData={post}
            closeModal={closeModal}
            createPost={createPost}
            visible={visible}
          />
        </Router>
      );
      fireEvent.click(getByTestId('save-button'));
      expect(pressSaveButton).not.toHaveBeenCalled();
    });
  });

  // describe('press save button', () => {
  //   it('press save button', () => {
  //     const pressSaveButton = jest.fn();
  //     // const handleSubmit = jest.fn();
  //     const { getByTestId, getByPlaceholderText } = render(
  //       <Router>
  //         <PostAddModal
  //           handleSubmit={pressSaveButton}
  //           loading={loading}
  //           postData={post}
  //           closeModal={closeModal}
  //           createPost={createPost}
  //           visible={visible}
  //         />
  //       </Router>
  //     );

  //     const nameInput = getByPlaceholderText('Name');

  //     fireEvent.change(nameInput, { target: { value: 'test' } });

  //     fireEvent.click(getByTestId('save-button'));
  //     expect(pressSaveButton).toHaveBeenCalled();
  //   });
  // });
});
