// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  function handleNewsletterSubmit(e) {
    e.preventDefault();
    // you can wire this to reservationService or an API later
    const form = e.currentTarget;
    const email = form.querySelector(".email")?.value;
    const checked = form.querySelector("#checkbox")?.checked;
    if (!email) {
      alert("Please enter an email address.");
      return;
    }
    if (!checked) {
      alert("Please accept the Privacy Policy.");
      return;
    }
    // placeholder behavior
    alert(`Thanks — we'll contact ${email} (this is a demo).`);
    form.reset();
  }

  return (
    <footer className="footer-section bg-[#010f1c] fix">
      <div className="footer-widgets-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
              <div className="single-footer-widget">
                <div className="widget-head">
                  <Link to="/">
                    <img src="/img/logo/logo1.svg" alt="logo" width="167" height="58" />
                  </Link>
                </div>
                <div className="footer-content">
                  <p>
                    Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a lacinia
                    curabitur lacinia mollis
                  </p>
                  <div className="social-icon d-flex align-items-center">
                    <a href="#"><i className="bi bi-facebook" /></a>
                    <a href="#"><i className="bi bi-twitter-x" /></a>
                    <a href="#"><i className="bi bi-linkedin" /></a>
                    <a href="#"><i className="bi bi-youtube" /></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp" data-wow-delay=".4s">
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3>Quick Links</h3>
                </div>
                <ul className="list-area">
                  <li><Link to="/about"><i className="bi bi-chevron-double-right" /> About Us</Link></li>
                  <li><Link to="/gallery"><i className="bi bi-chevron-double-right" /> Our Gallery</Link></li>
                  <li><Link to="/blog"><i className="bi bi-chevron-double-right" /> Our Blogs</Link></li>
                  <li><Link to="/faq"><i className="bi bi-chevron-double-right" /> FAQ’S</Link></li>
                  <li><Link to="/contact"><i className="bi bi-chevron-double-right" /> Contact Us</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp" data-wow-delay=".4s">
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3>Our Menu</h3>
                </div>
                <ul className="list-area">
                  <li><Link to="/menu"><i className="bi bi-chevron-double-right" /> Burger King</Link></li>
                  <li><Link to="/menu"><i className="bi bi-chevron-double-right" /> Pizza king</Link></li>
                  <li><Link to="/menu"><i className="bi bi-chevron-double-right" /> Fresh Food</Link></li>
                  <li><Link to="/menu"><i className="bi bi-chevron-double-right" /> Vegetable</Link></li>
                  <li><Link to="/menu"><i className="bi bi-chevron-double-right" /> Desserts</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp" data-wow-delay=".4s">
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3>Contact Us</h3>
                </div>
                <ul className="list-area">
                  <li className="mb-2">Monday – Friday: <span className="text-theme-color2"> 8am – 4pm </span></li>
                  <li>Saturday: <span className="text-theme-color2"> 8am – 12am </span></li>
                </ul>

                <form className="mt-4" onSubmit={handleNewsletterSubmit}>
                  <div className="form-control">
                    <input className="email" type="email" placeholder="Your email address" />
                    <button type="submit" className="submit-btn"><i className="bi bi-arrow-right" /></button>
                  </div>
                  <div className="form-control style2 mt-3">
                    <input id="checkbox" name="checkbox" type="checkbox" />
                    <label htmlFor="checkbox">I agree to the <a href="#">Privacy Policy.</a></label>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-wrapper d-flex align-items-center justify-content-between">
            <p className="wow fadeInLeft" data-wow-delay=".3s">© All Copyright 2024 by <a href="#">BITEHOUSE</a></p>
            <ul className="brand-logo wow fadeInRight" data-wow-delay=".5s">
              <li><a className="text-white" href="#">Terms & Condition</a></li>
              <li><a className="text-white" href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>

    </footer>
  );
}
