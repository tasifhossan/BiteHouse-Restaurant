import React from "react";
import { Link } from "react-router-dom";

export default function MenuItem({ item }) {
  return (
    <article className="border rounded-md overflow-hidden">
      <img src={item.image || "/img/dishes/dish1.jpg"} alt={item.name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h4 className="font-semibold">{item.name}</h4>
        <p className="text-sm text-gray-600">{item.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-medium">${item.price?.toFixed(2) ?? "0.00"}</span>
          <Link to={`/menu/${item.id}`} className="text-rose-600 text-sm">View</Link>
        </div>
      </div>
    </article>
  );
}
