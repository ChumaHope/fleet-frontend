"use client";

import { useEffect, useState } from "react";
import { api } from "../../lib/api";
import Card from "../../components/Card";

export default function Dashboard() {
  const [stats, setStats] = useState({
    vehicles: 0,
    drivers: 0,
    trips: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const [v, d, t] = await Promise.all([
        api.get("/vehicles"),
        api.get("/drivers"),
        api.get("/trips"),
      ]);

      setStats({
        vehicles: v.data.length,
        drivers: d.data.length,
        trips: t.data.length,
      });
    };

    fetchData();
  }, []);

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-blue-900">Dashboard</h1>
        <p className="text-gray-500">Fleet overview and activity</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Vehicles */}
        <div className="p-5 rounded-xl shadow bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:scale-[1.02] transition">
          <h2 className="text-sm uppercase tracking-wide opacity-80">
            Vehicles
          </h2>
          <p className="text-3xl font-bold mt-2">
            {stats.vehicles}
          </p>
          <p className="text-sm mt-1 opacity-80">
            Total registered vehicles
          </p>
        </div>

        {/* Drivers */}
        <div className="p-5 rounded-xl shadow bg-gradient-to-r from-green-600 to-green-500 text-white hover:scale-[1.02] transition">
          <h2 className="text-sm uppercase tracking-wide opacity-80">
            Drivers
          </h2>
          <p className="text-3xl font-bold mt-2">
            {stats.drivers}
          </p>
          <p className="text-sm mt-1 opacity-80">
            Active drivers in system
          </p>
        </div>

        {/* Trips */}
        <div className="p-5 rounded-xl shadow bg-gradient-to-r from-blue-800 to-green-600 text-white hover:scale-[1.02] transition">
          <h2 className="text-sm uppercase tracking-wide opacity-80">
            Trips
          </h2>
          <p className="text-3xl font-bold mt-2">
            {stats.trips}
          </p>
          <p className="text-sm mt-1 opacity-80">
            Total trips recorded
          </p>
        </div>

      </div>

      {/* Secondary Section (Optional but powerful) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            System Status
          </h3>
          <p className="text-blue-700 font-medium">
            ✔ All systems operational
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            Quick Insight
          </h3>
          <p className="text-blue-700">
            Your fleet is actively running with {stats.trips} trips logged.
          </p>
        </div>

      </div>

    </div>
  );
}