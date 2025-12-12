// src/components/FoodItems1.jsx
import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

// Keep imports here to be safe
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FoodItems1 = () => {
  // 1. DATA: We need more items than 'slidesToShow' for the loop to work smoothly.
  // I've duplicated the items here to ensure we have 8 items.
  const rawItems = [
    { id: "1", img: "/img/food-items/item1_3.png", title: "Chicken Fried Rice", content: "The Registration Fee", price: "$100.99" },
    { id: "2", img: "/img/food-items/item1_4.png", title: "Chicken Leg Piece", content: "The Registration Fee", price: "$20.99" },
    { id: "3", img: "/img/food-items/item1_1.png", title: "Chicken Pizza", content: "The Registration Fee", price: "$26.99" },
    { id: "4", img: "/img/food-items/item1_2.png", title: "Egg And Cucumber", content: "The Registration Fee", price: "$28.00" },
  ];
  
  // Duplicate array to get 8 items (ensures infinite scrolling works)
  const items = [...rawItems, ...rawItems].map((item, index) => ({
    ...item,
    id: `${item.id}-${index}` // Ensure unique IDs
  }));

  const settings = {
    dots: false,
    infinite: true, // Now safe because we have 8 items
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1399, settings: { slidesToShow: 4 } },
      { breakpoint: 1199, settings: { slidesToShow: 3 } }, // Show 3 on medium screens
      { breakpoint: 991, settings: { slidesToShow: 2 } },
      { breakpoint: 575, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section className="best-food-items-section fix section-padding bg-color2">
      <div className="container">
        <div className="title-area text-center">
          <div className="sub-title text-center wow fadeInUp" data-wow-delay="0.5s">
                        <img className="me-1" src="/img/icon/titleIcon.svg" alt="icon" />Best Food <img
                            src="/img/icon/titleIcon.svg" alt="icon" />
                    </div>
          <h2 className="title">Popular Food Items</h2>
        </div>

        <div className="slider-area mb-n40 mt-5">
          <Slider {...settings} className="food-slider">
            {items.map((item) => (
              // The padding here creates the gap between cards
              <div key={item.id} className="slider-item-wrap" style={{ padding: "0 12px" }}>
                <div className="single-food-card">
                  <div className="thumb-circle">
                    <img src={item.img} alt={item.title} />
                    <div className="thumb-dashed-ring" />
                  </div>
                  <div className="card-body">
                    <Link to={`/menu/${item.id}`} className="item-title-link">
                      <h3 className="item-title">{item.title}</h3>
                    </Link>
                    <div className="item-subtext">{item.content}</div>
                    <h6 className="item-price">{item.price}</h6>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default FoodItems1;