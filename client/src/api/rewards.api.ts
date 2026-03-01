import { apiFetch } from "./axios";

type Reward = { id: string; name: string; points: number };

type RedeemResponse = { success: boolean; remainingPoints: number };

export const listRewards = () => apiFetch<Reward[]>("/rewards");

export const redeemReward = (rewardId: string, childId: string) =>
  apiFetch<RedeemResponse>(`/rewards/${rewardId}/redeem`, {
    method: "POST",
    body: JSON.stringify({ childId }),
  });
