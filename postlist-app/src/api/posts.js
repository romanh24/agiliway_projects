import client from "./client";

export const getPosts = () => client.get("/posts");
export const getPostDetails = (id) => client.get(`/posts/${id}`);
export const addPost = (postData) => client.post("/posts", postData);
