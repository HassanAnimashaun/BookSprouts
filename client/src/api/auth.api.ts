import { apiFetch } from "./axios";

type AuthPayload = { email: string; password: string };

type AuthResponse = { token: string; user: { id: string; email: string; role?: string } };

export const login = (payload: AuthPayload) => apiFetch<AuthResponse>("/auth/login", {
  method: "POST",
  body: JSON.stringify(payload),
});

export const register = (payload: AuthPayload) => apiFetch<AuthResponse>("/auth/register", {
  method: "POST",
  body: JSON.stringify(payload),
});
