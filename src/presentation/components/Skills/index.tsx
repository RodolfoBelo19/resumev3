import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import angular from "../../../../public/skills/angular.png";
import js from "../../../../public/skills/js.png";
import laravel from "../../../../public/skills/laravel.png";
import nest from "../../../../public/skills/nestjs.png";
import outsystems from "../../../../public/skills/outsystems.png";
import python from "../../../../public/skills/python.png";
import react from "../../../../public/skills/react.png";
import vue from "../../../../public/skills/vue.png";
import css from "../../../../public/skills/css.png";
import html from "../../../../public/skills/html.png";

import "swiper/swiper-bundle.css";
import Image from "next/image";

SwiperCore.use([Autoplay]);

export const Skills = () => {
  return (
    <div
      id="skills"
      className="mx-auto md:py-12 py-5 max-w-7xl px-2 sm:px-6 lg:px-8"
    >
      <h1 className="p-5 text-2xl">Skills</h1>
      <div className="p-5 rounded-md md:flex gap-20">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            368: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            520: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide className="w-50">
            <Image width={100} src={laravel} alt="laravel" />
          </SwiperSlide>
          <SwiperSlide className="w-50">
            <Image width={100} src={nest} alt="nest" />
          </SwiperSlide>
          <SwiperSlide className="w-50">
            <Image width={100} src={angular} alt="angular" />
          </SwiperSlide>
          <SwiperSlide className="w-50">
            <Image width={100} src={react} alt="react" />
          </SwiperSlide>
          <SwiperSlide className="w-50">
            <Image width={100} src={vue} alt="vue" />
          </SwiperSlide>
          <SwiperSlide className="w-50">
            <Image width={100} src={outsystems} alt="outsystems" />
          </SwiperSlide>
          <SwiperSlide className="w-50">
            <Image width={100} src={python} alt="python" />
          </SwiperSlide>
          <SwiperSlide className="w-50">
            <Image width={100} src={js} alt="js" />
          </SwiperSlide>
          <SwiperSlide className="w-50">
            <Image width={100} src={html} alt="html" />
          </SwiperSlide>
          <SwiperSlide className="w-50">
            <Image width={100} src={css} alt="css" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
