// src/components/FoodItem1.jsx
import React, { useMemo, useState, useEffect } from "react";
import FoodItemCard from "./Card/FoodItemCard";
import menuData from "../assets/data/menu.json"; 

const CATEGORY_DEFS = [
  { key: "FastFood", label: "Fast Food", icon: "/img/menu/menuIcon1_1.png" },
  { key: "DrinkJuice", label: "Drink & Juice", icon: "/img/menu/menuIcon1_2.png" },
  { key: "ChickenPizza", label: "Chicken Pizza", icon: "/img/menu/menuIcon1_3.png" },
  { key: "FreshPasta", label: "Fresh Pasta", icon: "/img/menu/menuIcon1_4.png" },
];

export default function FoodItem1() {
  const [active, setActive] = useState("FastFood");

  // FIX 1: Add menuData to the dependency array so it updates if the file changes (HMR)
  const items = useMemo(() => {
    if (!Array.isArray(menuData)) return [];
    return menuData.map(it => {
      // Normalize: Ensure categories is always an array
      if (Array.isArray(it.categories)) return it;
      if (it.category) return { ...it, categories: [it.category] };
      return { ...it, categories: [] };
    });
  }, [menuData]); // <--- Added menuData here

  // FIX 2: Debugging - Check your browser console (F12) to see what categories exist
  useEffect(() => {
    console.log("Current Active Tab:", active);
    console.log("Filtered Items Count:", filtered.length);
  }, [active]);

  const filtered = useMemo(() => {
    // Filter items where the categories array includes the active key
    return items.filter(it => Array.isArray(it.categories) && it.categories.includes(active));
  }, [items, active]);

  const left = filtered.slice(0, Math.ceil(filtered.length / 2));
  const right = filtered.slice(Math.ceil(filtered.length / 2));

  return (
    <section className="food-menu-section fix section-padding">
      <div className="burger-shape">
        <img src="/img/shape/burger-shape.png" alt="shape" width="148" />
      </div>
      <div className="fry-shape">
        <img src="/img/shape/fry-shape.png" alt="shape" width="137" />
      </div>

      <div className="food-menu-wrapper style1">
        <div className="container">
          <div className="food-menu-tab-wrapper style-bg">
            <div className="title-area">
              <div className="sub-title text-center">
                <img className="me-1" src="/img/icon/titleIcon.svg" alt="" width="20" />
                FOOD MENU
                <img className="ms-1" src="/img/icon/titleIcon.svg" alt="" width="20" />
              </div>
              <h2 className="title text-center">BiteHouuse Foods Menu</h2>
            </div>

            <div className="food-menu-tab">
              <ul className="nav nav-pills mb-3" role="tablist">
                {CATEGORY_DEFS.map(cat => (
                  <li
                    key={cat.key}
                    className={`nav-item ${active === cat.key ? "active" : ""}`}
                    onClick={() => setActive(cat.key)}
                    role="presentation"
                    style={{ cursor: "pointer" }}
                  >
                    <button
                      className={`nav-link  ${active === cat.key ? "active" : ""}`}
                      type="button"
                    >
                      <img src={cat.icon} alt={cat.label} width="36" style={{ marginRight: 8 }} />
                      {cat.label}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="tab-content">
                <div className="tab-pane active">
                  <div className="row gx-60">
                    <div className="col-lg-6">
                      {left.map(item => (
                        <FoodItemCard key={item.id} item={item} />
                      ))}
                    </div>
                    <div className="col-lg-6">
                      {right.map(item => (
                        <FoodItemCard key={item.id} item={item} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      
       {/* marquee section remains the same... */}
      {/* Marquee Wrapper */}
      <div className="marquee-wrapper style-1 text-slider section-padding pt-0 mt-5">
        <div className="marquee-inner to-left">
          <ul className="marqee-list d-flex">
            <li className="marquee-item style1">
              {/* We map the list twice ([...items, ...items]) to create a seamless infinite loop */}
              {[
                "chicken pizza", "GRILLED CHICKEN", "BURGER", "CHICKEN PIZZA", 
                "FRESH PASTA", "ITALIANO FRENCH FRY", "CHICKEN FRY",
                "chicken pizza", "GRILLED CHICKEN", "BURGER", "CHICKEN PIZZA", 
                "FRESH PASTA", "ITALIANO FRENCH FRY", "CHICKEN FRY"
              ].map((text, i) => (
                <React.Fragment key={i}>
                  <span className="text-slider"></span>
                  <span className="text-slider text-style">{text}</span>
                </React.Fragment>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}