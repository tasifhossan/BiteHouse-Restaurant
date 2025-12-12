// src/components/Card/FoodItemCard.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function FoodItemCard({ item }) {
  if (!item) return null;

  const { id, img, title, description, content, price } = item;
  const text = description || content || "";

  return (
    <div className="single-menu-items">
      <div className="details">
        <div className="menu-item-thumb">
          <img src={img || "/assets/img/menu/menuThumb1_1.png"} alt={title} width="80" height="80" />
        </div>

        <div className="menu-content">
          <Link to={`/menu/${id}`}>
            <h3>{title}</h3>
          </Link>
          <p>{text}</p>
        </div>
      </div>

      <h6>{price}</h6>
    </div>
  );
}
