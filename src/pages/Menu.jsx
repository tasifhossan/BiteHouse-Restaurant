import React from "react";
import BreadCumb from "../components/menu/BreadCumb";
import FoodItem4 from "../components/menu/FoodItem4";
import Timer2 from "../components/menu/Timer2";

const Menu = () => {
  return (
    <div>
      <BreadCumb bgimg="/img/bg/breadcumb.jpg" Title="Food Menu" />
      <FoodItem4 />
      <Timer2 />
      {/* Gallery removed as you requested */}
    </div>
  );
};

export default Menu;
