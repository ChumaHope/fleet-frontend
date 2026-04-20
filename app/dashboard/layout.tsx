"use client";

import Link from "next/link";

export default function DashboardLayout({ children }: any) {
  return (
    <div className="flex h-screen">


      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100 overflow-y-auto">
        {children}
      </div>

    </div>
  );
}