import React, { useState } from "react";

export default function Reservations() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const submit = (e) => {
    e.preventDefault();
    alert(`Reservation for ${name} on ${date}`);
    setName(""); setDate("");
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold">Book a Table</h1>
      <form onSubmit={submit} className="mt-4 grid gap-3">
        <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="border px-3 py-2 rounded" />
        <input required value={date} onChange={(e) => setDate(e.target.value)} type="datetime-local" className="border px-3 py-2 rounded" />
        <button className="bg-rose-600 text-white px-4 py-2 rounded">Reserve</button>
      </form>
    </div>
  );
}
