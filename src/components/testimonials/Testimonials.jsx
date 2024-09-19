import React from "react";
import { Data } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "./testimonials.css";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section className="testimonials container section">
      <h2 className="section__title">Testimonial</h2>
      <span className="section__subtitle">What My Clients Say</span>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="testimonials__container grid"
      >
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className="testimonials__card" key={id}>
              <img
                src={image}
                alt="img__testimonials"
                className="testimonials__img"
              />
              <h3 className="testimonials__name">{title}</h3>
              <p className="testimonials__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
