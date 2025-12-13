import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import menuData from "../assets/data/menu.json"; // Ensure path matches your folder structure

const MenuDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // 1. Find the item in the JSON data based on the URL ID
    // We parseInt because URL params are strings, but IDs might be numbers
    const foundItem = menuData.find((data) => data.id === parseInt(id));
    setItem(foundItem);
  }, [id]);

  if (!item) {
    return <div className="text-center py-5"><h2>Loading or Item Not Found...</h2></div>;
  }

  // Handle Quantity Change
  const handleQuantity = (type) => {
    if (type === "dec" && quantity > 1) setQuantity(quantity - 1);
    if (type === "inc") setQuantity(quantity + 1);
  };

  return (
    <>
      {/* 1. BREADCRUMB / HEADER */}
      <div className="breadcumb-wrapper" style={{ backgroundImage: "url(/img/bg/breadcumb.jpg)" }}>
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Menu Details</h1>
            <ul className="breadcumb-menu">
              <li><Link to="/">Home /</Link></li>
              <li><Link to="/menu">Menu /</Link></li>
              <li className="active">{item.title}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 2. PRODUCT DETAILS SECTION */}
      <section className="product-details-section section-padding page-beige">
        <div className="container">
          <div className="menu-card product-details-card"> {/* Reusing menu-card for white box */}
            <div className="row align-items-center">
              
              {/* Left Column: Image */}
              <div className="col-lg-6">
                <div className="product-big-img">
                  <img src={item.img} alt={item.title} />
                </div>
              </div>

              {/* Right Column: Info */}
              <div className="col-lg-6">
                <div className="product-about">
                  <div className="price-tag">{item.price}</div>
                  <h2 className="product-title">{item.title}</h2>
                  <p className="text">{item.description || "Fresh and delicious food made with love and care."}</p>
                  
                  {/* Category & Tags */}
                  <div className="product-meta">
                    <span className="meta-label">Category:</span> 
                    <span className="meta-value">{item.categories?.join(", ") || "Fast Food"}</span>
                  </div>

                  {/* Actions: Quantity & Button */}
                  <div className="actions">
                    <div className="quantity-box">
                      <button className="qty-btn" onClick={() => handleQuantity("dec")}>-</button>
                      <input type="number" className="qty-input" value={quantity} readOnly />
                      <button className="qty-btn" onClick={() => handleQuantity("inc")}>+</button>
                    </div>
                    <button className="theme-btn">Add To Cart</button>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MenuDetails;