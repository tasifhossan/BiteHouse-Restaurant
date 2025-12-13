import React from "react";
import BreadCumb from "../components/menu/BreadCumb";
import FoodItem4 from "../components/menu/FoodItem4";

const Menu = () => {
  return (
    <div>
      <BreadCumb bgimg="/img/bg/breadcumb.jpg" Title="Food Menu" />
      <FoodItem4 />
    </div>
  );
};

export default Menu;
