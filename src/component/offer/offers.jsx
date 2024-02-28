import React, { useState, useEffect } from "react";
import "./offers.scss";

const Page = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-12-25") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });
  return (
    <div className="offer">
      <div className="container">
        <div className="wrapper">
          <div className="row col-6 col-12">
            <div className="col-lg-6 w-100">
              <div className="content">
                <div className="left-side">
                  <div className="img">
                    <img src="./boy.png " alt="" />
                  </div>
                </div>
                {/* =============right side========== */}
                <div className="center">
                 {/* // <img src="./i.png" alt="i" /> */}
                </div>
                <div className="right-side">
                  <div className="title">
                    <p>100% Best Brands</p>
                    <h4>Deals of the week never miss!</h4>
                    <ul>
                      <li>{timeLeft.days}</li>:<li>{timeLeft.hours}</li>:
                      <li>{timeLeft.minutes}</li>:<li>{timeLeft.seconds}</li>
                    </ul>
                    <div className="day">
                      <ul className="ul">
                        <li>Days</li>
                        <li>Hour</li> <li>Min</li>
                        <li>Sec</li>
                      </ul>
                    </div>
                  </div>
                  <button className="btn ">
                    Shop Now <i className="fa-solid fa-angle"></i>{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
