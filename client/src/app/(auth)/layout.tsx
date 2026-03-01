import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-green-50 to-emerald-50">
      <div className="w-full max-w-xl p-6">{children}</div>
    </div>
  );
}
