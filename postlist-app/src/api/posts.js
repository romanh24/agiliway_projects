import client from './client';

// export const getPosts = () => client.get('/posts');
export const getPosts = () =>
  client
    .get('/posts')
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });

// export const getPostDetails = (id) => client.get(`/posts/${id}`);
export const getPostDetails = (id) =>
  client
    .get(`/posts/${id}`)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });

// export const addPost = (postData) => client.post('/posts', postData);
export const addPost = (postData) =>
  client.post('/posts', postData).catch((error) => {
    throw error;
  });

// export const editPost = (id, postData) => client.put(`/posts/${id}`, postData);
export const editPost = (id, postData) =>
  client.put(`/posts/${id}`, postData).catch((error) => {
    throw error;
  });

// export const deletePost = (id) => client.delete(`/posts/${id}`);
export const deletePost = (id) =>
  client.delete(`/posts/${id}`).catch((error) => {
    throw error;
  });
