const baseURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

type FetchOptions = RequestInit & { params?: Record<string, string | number | boolean> };

const buildUrl = (path: string, params?: Record<string, string | number | boolean>) => {
  const url = new URL(path, baseURL);
  if (params) {
    Object.entries(params).forEach(([key, value]) => url.searchParams.append(key, String(value)));
  }
  return url.toString();
};

export async function apiFetch<T>(path: string, options: FetchOptions = {}): Promise<T> {
  const { params, headers, ...rest } = options;
  const url = buildUrl(path, params);

  const res = await fetch(url, {
    ...rest,
    headers: {
      "Content-Type": "application/json",
      ...(headers || {}),
    },
  });

  if (!res.ok) {
    const errorBody = await res.text();
    throw new Error(errorBody || `Request failed with status ${res.status}`);
  }

  if (res.status === 204) return undefined as T;
  return (await res.json()) as T;
}
