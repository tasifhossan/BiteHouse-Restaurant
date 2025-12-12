import React from "react";

const Timer2 = () => {
  return (
    <div className="timer-section section-padding pt-0 fix">
      <div className="timer-wrapper style1">
        <div className="container">
          <div className="timer-wrap style1">
            <div className="container">
              <div className="row gy-4 gx-134">
                <div className="col-lg-6 d-flex align-items-center">
                  <div className="timer-thumb  timer-thumb2-area wow fadeInUp" data-wow-delay="0.3s">
                    <img src="/img/timer/timerThumb1_1.png" alt="img" width="601" height="633" />
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center">
                  <div className="timer-card style1 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="title-area">
                      <div className="sub-title text-center wow fadeInUp" data-wow-delay="0.5s">
                        <img className="me-1" src="/img/icon/titleIcon.svg" alt="img" width="20" height="20" />Special
                        Offer<img className="ms-1" src="/img/icon/titleIcon.svg" alt="img" width="20" height="20" />
                      </div>
                      <h2 className="title text-white wow fadeInUp" data-wow-delay="0.7s">
                        Get 30% Discount Every Item
                      </h2>
                    </div>
                    <div className="clock-wrapper">
                      <div className="clock">
                        <div className="number" id="days">326</div>
                        <div className="text">days</div>
                      </div>
                      <div className="clock">
                        <div className="number" id="hours">11</div>
                        <div className="text">hrs</div>
                      </div>
                      <div className="clock">
                        <div className="number" id="minutes">44</div>
                        <div className="text">mins</div>
                      </div>
                      <div className="clock">
                        <div className="number" id="seconds">26</div>
                        <div className="text">secs</div>
                      </div>
                    </div>

                    <div className="btn-wrap">
                      <a className="theme-btn" href="/menu">ORDER NOW <i className="bi bi-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Timer2;
