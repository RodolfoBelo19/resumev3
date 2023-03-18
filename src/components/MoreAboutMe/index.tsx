import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import "swiper/swiper-bundle.css";
import Link from "next/link";

SwiperCore.use([Autoplay]);

export const MoreAboutMe = () => {
  return (
    <div className="mx-auto md:py-12 py-5 max-w-xl px-2 sm:px-6 lg:px-8">
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
          <SwiperSlide className="bg-zinc-900 rounded-md p-5 cursor-pointer">
            Hobbies: Entusiasta em tecnologia, livros, games, filmes e séries.
          </SwiperSlide>
          <SwiperSlide className="bg-zinc-900 rounded-md p-5 cursor-pointer">
            Qualidades: Comunicativo, Simpático, Curioso, Trabalho bem em equipe e
            Competência técnica.
          </SwiperSlide>
          <SwiperSlide className="bg-zinc-900 rounded-md p-5 cursor-pointer">
            Novidades: A fim de melhorar meu conhecimento profissional, estou me
            dedicando ao domínio do inglês.
          </SwiperSlide>
          <SwiperSlide className="bg-zinc-900 rounded-md p-5 cursor-pointer">
            O que me move: Ter uma sólida carreira profissional, para garantir
            estabilidade e confiança, para qual darei um futuro melhor para
            minha família.
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
