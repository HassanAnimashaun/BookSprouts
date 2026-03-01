'use client';

import { useEffect, useState } from "react";
import { listChildren } from "@/api/children.api";
import type { Child } from "@/stores/child.store";

export function useChildren() {
  const [children, setChildren] = useState<Child[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const data = await listChildren();
        setChildren(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return { children, loading, error };
}
