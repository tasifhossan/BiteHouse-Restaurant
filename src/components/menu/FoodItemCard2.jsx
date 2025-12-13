import React from "react";
import { Link } from "react-router-dom";

const FoodItemCard2 = ({ img, title, content, price, id }) => {
  return (
    // CHANGED: "food-menu-items" -> "menu-row" to match your CSS
    <div className="menu-row">
      
      <div className="menu-meta">
        {/* CHANGED: "food-menu-thumb" -> "menu-thumb" */}
        <div className="menu-thumb">
          <img src={img} alt={title} />
        </div>

        {/* CHANGED: "food-menu-content" -> "menu-text" */}
        <div className="menu-text">
          <h3 className="name">
            <Link to={`/menu/${id}`}>{title}</Link>
          </h3>
          <p className="desc">{content}</p>
        </div>
      </div>

      <div className="menu-price">{price}</div>
    </div>
  );
};

export default FoodItemCard2;