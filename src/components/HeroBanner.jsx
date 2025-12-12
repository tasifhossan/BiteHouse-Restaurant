import React, { useRef } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

/**
 * HeroBanner adapted to your .banner-wrapper.style1 CSS.
 * - Uses plain <img> so it's compatible with Vite/CRA.
 * - Shapes are absolutely positioned using CSS classes (see index.css).
 */

export default function HeroBanner() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: true,
    appendDots: (dots) => (
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-30 banner-pagination">
        <ul className="flex flex-col gap-4">{dots}</ul>
      </div>
    ),
    customPaging: (i) => <button className="w-8 text-left text-white/50">{String(i + 1).padStart(2, "0")}</button>,
  };

  const heroContent = [
    {
      img: "/img/banner/bannerThumb1_1.png",
      subtitle: "WELCOME BITEHOUSE",
      title: "SPICY FRIED CHICKEN",
      btnname: "ORDER NOW",
    },
    {
      img: "/img/banner/bannerThumb1_2.png",
      subtitle: "WELCOME BITEHOUSE",
      title: "Chicago Deep Pizza King",
      btnname: "ORDER NOW",
    },
    {
      img: "/img/banner/bannerThumb1_3.png",
      subtitle: "WELCOME BITEHOUSE",
      title: "Chicago Deep Burger King",
      btnname: "ORDER NOW",
    },
  ];

  // Note: shape filenames expected in /public/img/shapes/
  // shape1_1.png, shape1_2.png, shape1_3.png, shape1_4.png, shape1_5.png, shape1_6.png
  const renderShapes = () => (
    <>
      <div className="shape1_1 d-none d-xxl-block">
        <img src="/img/shape/bannerShape1_1.svg" alt="shape1_1" />
      </div>
      <div className="shape1_2 d-none d-xxl-block">
        <img src="/img/shape/bannerShape1_2.svg" alt="shape1_2" />
      </div>
      <div className="shape1_3 d-none d-xxl-block">
        <img src="/img/shape/bannerShape1_3.svg" alt="shape1_3" />
      </div>
      <div className="shape1_4 d-none d-xxl-block">
        <img src="/img/shape/bannerShape1_4.svg" alt="shape1_4" />
      </div>
      <div className="shape1_5 d-none d-xxl-block">
        <img src="/img/shape/bannerShape1_5.svg" alt="shape1_5" />
      </div>
      <div className="shape1_6 d-none d-xxl-block cir36">
        <img src="/img/shape/bannerShape1_6.svg" alt="shape1_6" />
      </div>
    </>
  );

  return (
    <section className="banner-section fix w-full overflow-hidden">
      <div className="banner-slider relative w-full">
        <Slider ref={sliderRef} {...settings}>
          {heroContent.map((item, idx) => (
            <div key={idx} className="swiper-slide w-full">
              {/* banner-wrapper.style1 uses CSS for background image + positions */}
              <div className="banner-wrapper style1 w-full">
                {/* shapes (absolute via CSS classes) */}
                {renderShapes()}

                {/* overlay (CSS will apply) */}
                <div className="overlay" />

                {/* banner content area */}
                <div className="banner-container w-full">
                  <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-start">
                      {/* LEFT: text area (align to top) */}
                      <div className="col-span-1 pt-8 lg:pt-20 banner-title-area">
                        <div className="banner-style1">
                          <div className="section-title">
                            <h6 className="sub-title text-sm text-white/80 mb-3">{item.subtitle}</h6>
                            <h1 className="title text-3xl md:text-7xl font-bold text-white leading-tight mb-4">{item.title}</h1>
                            <div className="flex gap-3">
                              <Link
                                to="/menu"
                                className="theme-btn inline-flex items-center gap-2 bg-theme text-white px-5 py-3 rounded-md hover:bg-[#fc791a]"
                              >
                                {item.btnname} <i className="bi bi-arrow-right" aria-hidden />
                              </Link>

                              <Link
                                to="/reservations"
                                className="inline-flex items-center gap-2 border border-white/20 text-white px-4 py-3 rounded-md hover:text-theme"
                              >
                                Book a Table
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* RIGHT: thumb area (visible on large screens) */}
                      <div className="col-span-1 hidden xl:block">
                        <div className="banner-thumb-area relative">
                          <div className="circle">
                            {/* optional circular element if you had one */}
                          </div>
                          <img src={item.img} alt={item.title} className="w-full max-w-lg rounded-lg shadow-lg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end .banner-container */}
              </div>
            </div>
          ))}
        </Slider>

        {/* arrows (kept visible only on large screens with CSS) */}
        <div className="arrow-prev hidden lg:block absolute left-4 top-1/2 -translate-y-1/2 z-50">
          <button onClick={() => sliderRef.current?.slickPrev()} className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full">
            <i className="bi bi-chevron-left"></i>
          </button>
        </div>
        <div className="arrow-next hidden lg:block absolute right-4 top-1/2 -translate-y-1/2 z-50">
          <button onClick={() => sliderRef.current?.slickNext()} className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full">
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
