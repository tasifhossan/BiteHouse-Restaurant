import React from "react";
import FoodItemCard2 from "./FoodItemCard2"; // ✅ Fixed import path (assuming same folder)
import menuData from "../../assets/data/menu.json"; 

const FoodItem4 = () => {
  // Split list dynamically
  const mid = Math.ceil(menuData.length / 2);
  const leftItems = menuData.slice(0, mid);
  const rightItems = menuData.slice(mid);

  return (
    <section className="food-menu-section fix section-padding">
      <div className="food-menu-wrapper-container style2">
        <div className="container">
          <div className="food-menu-wrapper style2 section-padding menu-card"> 
            <div className="container">

              {/* HEADING */}
              <div className="title-area text-center">
                <div className="sub-title text-center wow fadeInUp" data-wow-delay="0.5s">
                  <img className="me-1" src="/img/icon/titleIcon.svg" alt="icon" />
                  POPULAR DISHES
                  <img className="ms-1" src="/img/icon/titleIcon.svg" alt="icon" />
                </div>
                <h2 className="title wow fadeInUp text-center" data-wow-delay="0.7s">
                  Our Most Popular Deals
                </h2>
              </div>

              {/* GRID */}
              <div className="menu-grid">
                
                {/* LEFT LIST */}
                <div className="menu-list">
                  {leftItems.map((item) => (
                    <FoodItemCard2 
                      key={item.id}
                      id={item.id}
                      img={item.img}
                      title={item.title}
                      price={item.price}
                      content={item.description} // specific mapping for your card
                    />
                  ))}
                </div>

                {/* CENTER IMAGE */}
                <div className="menu-center">
                  <img src="/img/menu/menuThumb3_1.png" alt="featured dish" />
                </div>

                {/* RIGHT LIST */}
                <div className="menu-list">
                  {rightItems.map((item) => (
                    <FoodItemCard2 
                      key={item.id}
                      id={item.id}
                      img={item.img}
                      title={item.title}
                      price={item.price}
                      content={item.description} // specific mapping for your card
                    />
                  ))}
                </div>

              </div>

              {/* MARQUEE */}
              <div className="marquee-wrapper style-1 text-slider section-padding ">
                <div className="marquee-inner to-left">
                  <ul className="marqee-list d-flex">
                    <li className="marquee-item style1">
                      <span className="text-slider"></span><span className="text-slider text-style">chicken pizza</span>
                      <span className="text-slider"></span><span className="text-slider text-style">GRILLED CHICKEN</span>
                      <span className="text-slider"></span><span className="text-slider text-style">BURGER</span>
                      <span className="text-slider"></span><span className="text-slider text-style">CHICKEN PIZZA</span>
                      <span className="text-slider"></span><span className="text-slider text-style">FRESH PASTA</span>
                      <span className="text-slider"></span><span className="text-slider text-style">ITALIANO FRENCH FRY</span>
                      <span className="text-slider"></span><span className="text-slider text-style">CHICKEN FRY</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* END MARQUEE */}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodItem4;