import React from "react";
import HeroBanner from "../components/HeroBanner";
import FoodItems1 from "../components/FoodItems1";
import MenuItem from "../components/MenuItem";
import Offer1 from "../components/Offer1"; // ← add this
import CtaBanner1 from "../components/CtaBanner1";
import FoodItem1 from "../components/FoodItem1";
import sample from "../assets/data/menu.json";

export default function Home() {
  const items = sample.slice(0, 4);

  return (
    <>
      <HeroBanner />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <FoodItems1 />
        <Offer1 /> 
      </div>
      <CtaBanner1 />
      <FoodItem1 />
    </>
  );
}
