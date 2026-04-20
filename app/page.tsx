"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      
      <h1 className="text-4xl font-bold mb-4">
        Fleet Management System
      </h1>

      <p className="text-gray-600 mb-6">
        Manage vehicles, drivers, and trips in one place
      </p>

      <button
        onClick={() => router.push("/login")}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        Get Started
      </button>

    </div>
  );
}