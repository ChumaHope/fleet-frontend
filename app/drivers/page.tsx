"use client";

import { useEffect, useState } from "react";
import { api } from "../../lib/api";

export default function Drivers() {
  const [drivers, setDrivers] = useState<any[]>([]);
  const [name, setName] = useState("");

  const fetchDrivers = () => {
    api.get("/drivers").then(res => setDrivers(res.data));
  };

  useEffect(() => {
    fetchDrivers();
  }, []);

  const addDriver = async () => {
    await api.post("/drivers", {
      name,
      email: `${name}@fmbch.com`,
      licenseNumber: "LIC123",
      phone: "0770000000",
      status: "ACTIVE"
    });

    setName("");
    fetchDrivers();
  };

  return (
    <div>
      <h1 className="text-2xl mb-4">Drivers</h1>

      <input
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mr-2"
      />

      <button onClick={addDriver} className="bg-blue-600 text-white px-4 py-2">
        Add
      </button>

      {drivers.map(d => (
        <div key={d.id}>{d.name}</div>
      ))}
    </div>
  );
}