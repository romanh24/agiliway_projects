import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:4000',
});

client.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error),
);

export default client;
