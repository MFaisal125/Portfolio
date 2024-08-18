import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      
      img: profilePic1,
     
      review:
       "Working with Muhammad Faisal has been an absolute pleasure! Their ability to seamlessly integrate front-end design with back-end functionality is truly remarkable. We now have a responsive and user-friendly website that improved our online presence. Highly recommended!",
    },
    {
      img: profilePic2,
      review:
        "We hired Muhammad for a complex web application, and they did not disappoint. Their deep understanding of both front-end and back-end technologies allowed them to solve challenges creatively and efficiently. They were always available to discuss any concerns or new ideas.",
    },
    {
      img: profilePic3,
      review:
        "Muhammad Faisal is the full package when it comes to web development. They transformed our outdated website into a modern, dynamic platform that our users love. The level of professionalism, coupled with their technical expertise, made the entire process smooth.",
    },
    {
      img: profilePic4,
      review:
       "As a non-technical founder, I could take my vision and turn it into reality, and Muhammad Faisal did just that! They guided me through the entire development process and highly functional website that has already garnered positive feedback from our users.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
