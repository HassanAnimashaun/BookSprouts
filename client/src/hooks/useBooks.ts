'use client';

import { useEffect, useState } from "react";
import { listBooks } from "@/api/books.api";

export type Book = { id: string; title: string; author?: string };

export function useBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const data = await listBooks();
        setBooks(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return { books, loading, error };
}
