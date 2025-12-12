import React from "react";

export default function Card({ title, subtitle, children }) {
  return (
    <div className="border rounded-md shadow-sm p-4 bg-white">
      <h3 className="text-lg font-medium">{title}</h3>
      {subtitle && <div className="text-sm text-gray-500">{subtitle}</div>}
      <div className="mt-2">{children}</div>
    </div>
  );
}
