import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const { login } = useAuth();
  const nav = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    login(email);
    nav("/dashboard");
  };

  return (
    <div className="max-w-md mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold">Login</h1>
      <form onSubmit={submit} className="mt-4 space-y-3">
        <input required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="border px-3 py-2 rounded w-full" />
        <button className="bg-rose-600 text-white px-4 py-2 rounded w-full">Login</button>
      </form>
    </div>
  );
}
