import React from "react";
import menuData from "../../assets/data/menu.json"; // adjust if your path differs

const FoodRow = ({ item }) => {
  return (
    <div className="menu-row">
      <div className="menu-meta">
        <div className="menu-thumb">
          <img src={item.img} alt={item.title} />
        </div>
        <div className="menu-text">
          <p className="name">{item.title}</p>
          <p className="desc">{item.description}</p>
        </div>
      </div>

      <div className="menu-price">{item.price}</div>
    </div>
  );
};

const FoodItem4 = () => {
  // split list dynamically
  const mid = Math.ceil(menuData.length / 2);
  const leftItems = menuData.slice(0, mid);
  const rightItems = menuData.slice(mid);

  const centerImg = menuData[0]?.img;

  return (
    <section className="food-menu-section fix section-padding">
      <div className="food-menu-wrapper-container style2">
        <div className="container">
          <div className="food-menu-wrapper style2 section-padding">
            <div className="container">

              {/* HEADING */}
              <div className="title-area">
                <div className="sub-title text-center wow fadeInUp" data-wow-delay="0.5s">
                  <img className="me-1" src="/assets/img/icon/titleIcon.svg" alt="icon" />
                  POPULAR DISHES
                  <img className="ms-1" src="/assets/img/icon/titleIcon.svg" alt="icon" />
                </div>
                <h2 className="title wow fadeInUp" data-wow-delay="0.7s">
                  Our Most Popular Deals
                </h2>
              </div>

              {/* GRID */}
              <div className="menu-grid">
                
                {/* LEFT LIST */}
                <div className="menu-list">
                  {leftItems.map(item => (
                    <FoodRow key={item.id} item={item} />
                  ))}
                </div>

                {/* CENTER IMAGE */}
                <div className="menu-center">
                  <img src={centerImg} alt="featured dish" />
                </div>

                {/* RIGHT LIST */}
                <div className="menu-list">
                  {rightItems.map(item => (
                    <FoodRow key={item.id} item={item} />
                  ))}
                </div>

              </div>

              {/* 🔥 YOUR EXACT MARQUEE (UNTOUCHED) */}
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
