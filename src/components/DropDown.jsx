import React, { useState } from "react";

export default function DropDown({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative group">
      <button
        onClick={() => setOpen((s) => !s)}
        className="md:hidden p-2"
        aria-expanded={open}
      >
        ⋯
      </button>

      <div className="hidden md:block absolute left-0 mt-2 w-48 bg-white shadow border rounded z-20 group-hover:block">
        {children}
      </div>

      {open && (
        <div className="md:hidden mt-2 pl-4">
          <div className="bg-white border rounded shadow-sm">{children}</div>
        </div>
      )}
    </div>
  );
}
