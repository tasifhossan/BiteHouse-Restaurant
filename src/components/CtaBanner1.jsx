// src/components/CtaBanner1.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function CtaBanner1() {
  return (
    <section className="cta-section fix">
      <div className="cta-wrapper style1 section-padding">
        <div className="shape1 float-bob-x d-none d-xxl-block">
          <img src="/img/shape/ctaShape1_1.png" alt="shape" width="132" height="126" />
        </div>
        <div className="shape2 float-bob-y d-none d-xxl-block">
          <img src="/img/shape/ctaShape1_2.png" alt="shape" width="115" height="137" />
        </div>
        <div className="shape3 float-bob-y d-none d-xxl-block">
          <img src="/img/shape/ctaShape1_3.png" alt="shape" width="207" height="149" />
        </div>

        <div className="container">
          <div className="cta-wrap style1">
            <div className="row align-items-center">
              <div className="col-xl-6 order-2 order-xl-1">
                <div className="cta-content">
                  <h6 className="wow fadeInUp" data-wow-delay="0.5s">WELCOME FRESHEAT</h6>
                  <h3 className="wow fadeInUp" data-wow-delay="0.7s">TODAY SPACIAL FOOD</h3>
                  <p className="wow fadeInUp" data-wow-delay="0.8s">limits Time Offer</p>
                  <Link className="theme-btn wow fadeInUp" data-wow-delay="0.9s" to="/menu">
                    ORDER NOW <i className="bi bi-arrow-right" />
                  </Link>
                </div>
              </div>

              <div className="col-xl-6 order-1 order-xl-2">
                <div className="cta-thumb">
                  <img className="img-fluid float-bob-x" src="/img/cta/ctaThumb1_1.png" alt="cta thumb" width="656" height="326" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
  );
}
