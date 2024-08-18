import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import HotelReservation from "../../img/hotel.jpg"
import Ecommerce from "../../img/ecommerce.jpg";
import HotelBooking from "../../img/hotelbooking.jpg";
import CollageWebsite from "../../img/collagewebsite.jpg";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://hotel-web2.vercel.app/"><img src={HotelReservation} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://e-commerce125.vercel.app/"><img src={Ecommerce} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://mfaisal125.github.io/resume2/"><img src={CollageWebsite} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://mfaisal125.github.io/resume/"><img src={HotelBooking} alt="" /></a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
