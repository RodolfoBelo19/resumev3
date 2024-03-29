import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import "swiper/swiper-bundle.css";
import { useThemeValue } from "@/presentation/contexts/ThemeContext";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

SwiperCore.use([Autoplay]);

export const MoreAboutMe = () => {
  const theme = useThemeValue();

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
      id="more-about-me"
      className="mx-auto md:py-12 py-5 max-w-xl px-2 sm:px-6 lg:px-8"
    >
      <motion.div
        ref={ref}
        initial={{ y: 50, opacity: 0 }}
        animate={isVisible ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="px-5 text-xl text-center">Mais sobre mim...</h1>
        <div className="p-5 rounded-md md:flex gap-20">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            spaceBetween={50}
            slidesPerView={1}
          >
            <SwiperSlide
              className={`rounded-md p-5 cursor-pointer
            ${
              !theme
                ? "text-zinc-400 bg-zinc-900"
                : "text-black bg-white bg-opacity-50"
            }
          `}
            >
              Hobbies: Entusiasta em tecnologia, livros, games, filmes e séries.
            </SwiperSlide>
            <SwiperSlide
              className={`rounded-md p-5 cursor-pointer
            ${
              !theme
                ? "text-zinc-400 bg-zinc-900"
                : "text-black bg-white bg-opacity-50"
            }
          `}
            >
              Qualidades: Comunicativo, Simpático, Curioso, Trabalho bem em
              equipe e Competência técnica.
            </SwiperSlide>
            <SwiperSlide
              className={`rounded-md p-5 cursor-pointer
            ${
              !theme
                ? "text-zinc-400 bg-zinc-900"
                : "text-black bg-white bg-opacity-50"
            }
          `}
            >
              Novidades: A fim de melhorar meu conhecimento profissional, estou
              me dedicando ao domínio do inglês.
            </SwiperSlide>
            <SwiperSlide
              className={`rounded-md p-5 cursor-pointer
            ${
              !theme
                ? "text-zinc-400 bg-zinc-900"
                : "text-black bg-white bg-opacity-50"
            }
          `}
            >
              O que me move: Ter uma sólida carreira profissional, para garantir
              estabilidade e confiança, para qual darei um futuro melhor para
              minha família.
            </SwiperSlide>
          </Swiper>
        </div>
      </motion.div>
    </div>
  );
};
