import { Link } from "react-router-dom";

const Offer1 = () => {
  const offerItems = [
    {
      img: "/img/offer/offerThumb1_1.png",
      title1: "ON THIS WEEK",
      title2: "SPICY FRIED CHICKEN",
      content: "Limited Time Offer",
      addClass: "theme-btn style4",
      bg: "/img/bg/offerBG1_1.jpg",
      delay: "0.2s",
    },
    {
      img: "/img/offer/offerThumb1_2.png",
      title1: "WELCOME FRESHEAT",
      title2: "TODAY SPECIAL FOOD",
      content: "Limited Time Offer",
      addClass: "theme-btn style5",
      bg: "/img/bg/offerBG1_1.jpg",
      delay: "0.3s",
    },
    {
      img: "/img/offer/offerThumb1_3.png",
      title1: "ON THIS WEEK",
      title2: "SPECIAL CHICKEN ROLL",
      content: "Limited Time Offer",
      addClass: "theme-btn style4",
      bg: "/img/bg/offerBG1_1.jpg",
      delay: "0.4s",
    },
  ];

  return (
    <div className="offer-section fix bg-color2 mt-5">
      <div className="offer-wrapper">
        <div className="container">
          <div className="row gy-4">

            {offerItems.map((item, i) => (
              <div key={i} className="col-lg-6 col-xl-4">
                <div
                  className="offer-card style1 wow fadeInUp"
                  data-wow-delay={item.delay}
                  style={{
                    backgroundImage: `url(${item.bg})`
                  }}
                >
                  {/* Content */}
                  <div className="offer-content">
                    <h6>{item.title1}</h6>
                    <h3>{item.title2}</h3>
                    <p>{item.content}</p>

                    <Link to="/menu" className={item.addClass}>
                      ORDER NOW <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>

                  {/* Thumb */}
                  <div className="offer-thumb">
                    <img
                      className="thumbImg"
                      src={item.img}
                      alt="offer"
                    />

                    <div className="shape float-bob-x">
                      <img
                        src="/img/shape/offerShape1_4.png"
                        alt="shape"
                        width="69"
                        height="82"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer1;
