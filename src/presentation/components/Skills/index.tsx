import "swiper/swiper-bundle.css";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import angular from "../../../../public/skills/angular.png";
import css from "../../../../public/skills/css.png";
import html from "../../../../public/skills/html.png";
import js from "../../../../public/skills/js.png";
import laravel from "../../../../public/skills/laravel.png";
import nest from "../../../../public/skills/nestjs.png";
import outsystems from "../../../../public/skills/outsystems.png";
import python from "../../../../public/skills/python.png";
import react from "../../../../public/skills/react.png";
import vue from "../../../../public/skills/vue.png";

SwiperCore.use([Autoplay]);

export const Skills = () => {
  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.9,
      transition: { duration: 0.3 },
    },
  };

  const [isVisible, setIsVisible] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
    rootMargin: "-50px 0px",
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div
      id="skills"
      className="mx-auto md:py-12 py-5 max-w-7xl px-2 sm:px-6 lg:px-8"
    >
      <motion.div
        ref={ref}
        initial={{ y: 50, opacity: 0 }}
        animate={isVisible ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 0.5 }}
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
              <motion.button
                className="text=white"
                onClick={() => {}}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Image width={100} src={laravel} alt="laravel" />
              </motion.button>
            </SwiperSlide>

            <SwiperSlide className="w-50">
              <motion.button
                className="text=white"
                onClick={() => {}}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Image width={100} src={nest} alt="nest" />
              </motion.button>
            </SwiperSlide>

            <SwiperSlide className="w-50">
              <motion.button
                className="text=white"
                onClick={() => {}}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Image width={100} src={angular} alt="angular" />
              </motion.button>
            </SwiperSlide>

            <SwiperSlide className="w-50">
              <motion.button
                className="text=white"
                onClick={() => {}}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Image width={100} src={react} alt="react" />
              </motion.button>
            </SwiperSlide>

            <SwiperSlide className="w-50">
              <motion.button
                className="text=white"
                onClick={() => {}}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Image width={100} src={vue} alt="vue" />
              </motion.button>
            </SwiperSlide>

            <SwiperSlide className="w-50">
              <motion.button
                className="text=white"
                onClick={() => {}}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Image width={100} src={outsystems} alt="outsystems" />
              </motion.button>
            </SwiperSlide>

            <SwiperSlide className="w-50">
              <motion.button
                className="text=white"
                onClick={() => {}}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Image width={100} src={python} alt="python" />
              </motion.button>
            </SwiperSlide>

            <SwiperSlide className="w-50">
              <motion.button
                className="text=white"
                onClick={() => {}}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Image width={100} src={js} alt="js" />
              </motion.button>
            </SwiperSlide>

            <SwiperSlide className="w-50">
              <motion.button
                className="text=white"
                onClick={() => {}}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Image width={100} src={html} alt="html" />
              </motion.button>
            </SwiperSlide>

            <SwiperSlide className="w-50">
              <motion.button
                className="text=white"
                onClick={() => {}}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Image width={100} src={css} alt="css" />
              </motion.button>
            </SwiperSlide>
          </Swiper>
        </div>
      </motion.div>
    </div>
  );
};
