"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    // no auth yet
    router.push("/dashboard");
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="p-6 border rounded">
        <h2>Login</h2>

        <input
          placeholder="Email"
          className="border p-2 block mb-2"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}