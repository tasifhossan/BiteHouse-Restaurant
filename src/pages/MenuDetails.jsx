// src/pages/MenuDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MenuDetails() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await fetch("/assets/data/menu.json");
      const json = await res.json();
      const data = Array.isArray(json) ? json : json.items || [];

      const found = data.find(i => String(i.id) === String(id));
      setItem(found || null);
    })();
  }, [id]);

  if (!item) return <h2>Loading...</h2>;

  return (
    <section className="menu-details-section">
      <div className="container">
        <h1>{item.title}</h1>
        <img src={item.img} alt={item.title} className="img-fluid mb-3" />
        <h3>{item.price}</h3>
        <p>{item.description}</p>
      </div>
    </section>
  );
}
