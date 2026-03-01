import { apiFetch } from "./axios";

type Redemption = { id: string; rewardId: string; childId: string; createdAt: string };

export const listRedemptions = () => apiFetch<Redemption[]>("/redemptions");
