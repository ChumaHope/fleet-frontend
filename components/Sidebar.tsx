// components/Sidebar.tsx
"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-blue-500 text-white p-4">
      <h2 className="text-xl mb-6">FMS</h2>

      <nav className="flex flex-col gap-3">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/vehicles">Vehicles</Link>
        <Link href="/drivers">Drivers</Link>
        <Link href="/trips">Trips</Link>
      </nav>
    </div>
  );
}