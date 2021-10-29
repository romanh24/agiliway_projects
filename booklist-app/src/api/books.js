import { client } from "./client";

export const getBooks = () => client.get("/books");

export const getBookById = (id) => client.get(`/books/${id}`);
