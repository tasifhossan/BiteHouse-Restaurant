import React from "react";
import { Link } from "react-router-dom";

const FoodItemCard2 = ({ img, title, content, price }) => {
  return (
    <div className="food-menu-items">
      <div className="food-menu-thumb">
        {/* Standard img tag instead of Next.js Image */}
        <img src={img} alt={title} width={80} height={80} />
      </div>
      <div className="food-menu-content">
        <div className="header-wrap">
          <h3 className="title">
            <Link to="/menu">{title}</Link>
          </h3>
          <span className="price">{price}</span>
        </div>
        <p className="text">{content}</p>
      </div>
    </div>
  );
};

export default FoodItemCard2;