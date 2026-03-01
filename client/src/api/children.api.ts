import { apiFetch } from "./axios";

type Child = { id: string; name: string; age?: number };

type CreateChildDto = { name: string; age?: number };

type RewardProgress = { childId: string; points: number };

export const listChildren = () => apiFetch<Child[]>("/children");

export const createChild = (payload: CreateChildDto) =>
  apiFetch<Child>("/children", { method: "POST", body: JSON.stringify(payload) });

export const getRewardProgress = (childId: string) =>
  apiFetch<RewardProgress>(`/children/${childId}/rewards`);
