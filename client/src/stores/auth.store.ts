export type AuthState = {
  token: string | null;
  userId?: string;
};

export const authStore: AuthState = {
  token: null,
};
