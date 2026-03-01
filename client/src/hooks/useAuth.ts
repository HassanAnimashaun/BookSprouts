'use client';

import { useState } from "react";
import { login, register } from "@/api/auth.api";
import type { AuthState } from "@/stores/auth.store";

export function useAuth() {
  const [auth, setAuth] = useState<AuthState>({ token: null });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await login({ email, password });
      setAuth({ token: res.token, userId: res.user.id });
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await register({ email, password });
      setAuth({ token: res.token, userId: res.user.id });
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { auth, loading, error, handleLogin, handleRegister };
}
