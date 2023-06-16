import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          “Thank you for your excellent service. The food arrived on time, at
          the correct temperature and we received dozens of complements on it.
          You really helped make our special day a success.”
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={ava01} alt="avatar" className=" rounded" />
          <h6>Kelvin Ngechu</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          “Thanks again for accommodating us so quickly. Food was delicious and
          was set up very quickly and nicely – we were all very impressed!”
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava02} alt="avatar" className=" rounded" />
          <h6>Kifaah Nassir</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          “The food was fantastic and service was excellent as usual. Thanks
          again for a great event; we’ll be in touch soon.”
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava03} alt="avatar" className=" rounded" />
          <h6>Lawrence Kimani</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
