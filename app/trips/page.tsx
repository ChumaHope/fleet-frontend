"use client";

import { useEffect, useState } from "react";
import { api } from "../../lib/api";

export default function Trips() {
  const [drivers, setDrivers] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [driverId, setDriverId] = useState("");
  const [vehicleId, setVehicleId] = useState("");

  useEffect(() => {
    api.get("/drivers").then(res => setDrivers(res.data));
    api.get("/vehicles").then(res => setVehicles(res.data));
  }, []);

  const createTrip = async () => {
    await api.post("/trips", {
      driver: { id: driverId },
      vehicle: { id: vehicleId },
      startLocation: "Harare",
      endLocation: "Bulawayo",
      status: "ONGOING"
    });
  };

  return (
    <div>
      <h1>Trips</h1>

      <select onChange={(e) => setDriverId(e.target.value)}>
        <option>Select Driver</option>
        {drivers.map((d: any) => (
          <option key={d.id} value={d.id}>{d.name}</option>
        ))}
      </select>

      <select onChange={(e) => setVehicleId(e.target.value)}>
        <option>Select Vehicle</option>
        {vehicles.map((v: any) => (
          <option key={v.id} value={v.id}>{v.plateNumber}</option>
        ))}
      </select>

      <button onClick={createTrip}>Create Trip</button>
    </div>
  );
}