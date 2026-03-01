import type { ReactNode } from "react";
import BottomNav from "./BottomNav";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <header className="px-6 py-4 bg-white shadow-soft border-b border-gray-100">
        <h1 className="text-xl font-semibold">BookSprouts</h1>
      </header>
      <main className="px-6 py-6">{children}</main>
      <BottomNav />
    </div>
  );
}
