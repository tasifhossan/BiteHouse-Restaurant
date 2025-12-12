import React from "react";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user, logout } = useAuth();
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="mt-4">Welcome, {user?.email}</p>
      <button onClick={logout} className="mt-4 bg-gray-200 px-3 py-2 rounded">Logout</button>
    </div>
  );
}
