'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/dashboard/parent", label: "Parent" },
  { href: "/dashboard/child", label: "Child" },
  { href: "/calendar", label: "Calendar" },
  { href: "/rewards", label: "Rewards" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-4 bottom-4 rounded-full bg-white shadow-soft border border-gray-200 px-4 py-3 flex justify-between text-sm">
      {links.map((link) => {
        const active = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`px-3 py-2 rounded-full font-medium transition-colors ${
              active ? "bg-green-100 text-green-700" : "text-gray-700"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
