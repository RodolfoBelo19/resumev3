import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import { About } from "@/domain/about/entities";
import { GetAboutUseCase } from "@/domain/about/useCases/GetAboutUseCase";
import { useThemeValue } from "@/presentation/contexts/ThemeContext";
import { useFetchData } from "@/presentation/hooks/useFetchData";

export const AboutComponent = () => {
  const theme = useThemeValue();

  const getAbout = new GetAboutUseCase();
  const { data } = useFetchData<About>(
    "64565b07240ac550c34c4f4e",
    getAbout
  );
  const about = data;

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
      id="about"
      className="mx-auto max-w-7xl md:py-12 py-5 px-2 sm:px-6 lg:px-8"
    >
      <motion.div
        ref={ref}
        initial={{ y: 50, opacity: 0 }}
        animate={isVisible ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className={`bg-opacity-90 p-5 rounded-md md:flex gap-20
        ${!theme ? "text-white bg-zinc-900" : "text-black bg-white"}`}
        >
          <div className="md:w-1/2 w-full">
            <h1 className="text-2xl">Sobre</h1>
            <p className="mt-5">{about?.description_pt}</p>
          </div>
          <div className="md:w-1/2 w-full mt-12 md:mt-0">
            <h1 className="text-2xl">Informações</h1>
            <div className="mt-5">
              <div className="flex gap-2 my-2">
                <strong>
                  <span>Idade:</span>
                </strong>
                <span>{about?.age}</span>
              </div>
              <div className="flex gap-2 my-2">
                <strong>
                  <span>Email:</span>
                </strong>
                <span>{about?.email}</span>
              </div>
              <div className="flex gap-2 my-2">
                <strong>
                  <span>Telefone:</span>
                </strong>
                <span>{about?.phone}</span>
              </div>
              <div className="flex gap-2 my-2">
                <strong>
                  <span>Localização:</span>
                </strong>
                <span>{about?.localization}</span>
              </div>
              <div className="flex gap-2 my-2">
                <strong>
                  <span>Linguagem:</span>
                </strong>
                <span>{about?.language}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
