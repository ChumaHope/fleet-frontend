"use client";

import { useEffect, useState } from "react";
import { api } from "../../lib/api";

export default function Vehicles() {
  const [vehicles, setVehicles] = useState<any[]>([]);
  const [plate, setPlate] = useState("");

  const fetchVehicles = () => {
    api.get("/vehicles").then(res => setVehicles(res.data));
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  const addVehicle = async () => {
    if (!plate) return;

    await api.post("/vehicles", {
      plateNumber: plate,
      model: "Toyota",
      status: "ACTIVE"
    });

    setPlate("");
    fetchVehicles();
  };

  return (
    <div>
      <h1 className="text-2xl mb-4">Vehicles</h1>

      <div className="mb-4">
        <input
          value={plate}
          onChange={(e) => setPlate(e.target.value)}
          className="border p-2 mr-2"
          placeholder="Plate Number"
        />
        <button
          onClick={addVehicle}
          className="bg-blue-600 text-white px-4 py-2"
        >
          Add
        </button>
      </div>

      {vehicles.map((v) => (
        <div key={v.id} className="p-2 bg-white mb-2 rounded shadow">
          {v.plateNumber}
        </div>
      ))}
    </div>
  );
}