import { apiFetch } from "./axios";

type Book = { id: string; title: string; author?: string; pages?: number };

type CreateBookDto = { title: string; author?: string; pages?: number };

export const listBooks = () => apiFetch<Book[]>("/books");

export const createBook = (payload: CreateBookDto) =>
  apiFetch<Book>("/books", { method: "POST", body: JSON.stringify(payload) });

export const deleteBook = (id: string) => apiFetch<void>(`/books/${id}`, { method: "DELETE" });
