import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import { useThemeValue } from "@/presentation/contexts/ThemeContext";
import { AxiosHttpClient } from "@/infra/http/axiosHttpClient";
import { IAbout } from '@/interfaces/IAbout';

export const About = () => {
  const theme = useThemeValue();

  const [isVisible, setIsVisible] = useState(false);
  const [about, setAbout] = useState({} as IAbout);

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
    rootMargin: "-50px 0px",
  });

  const httpClient = new AxiosHttpClient();

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  useEffect(() => {
    httpClient
      .get({ url: "http://localhost:3010/about/64565b07240ac550c34c4f4e" })
      .then((response) => {
        setAbout(response.data);
      });
  }, []);

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
            <p className="mt-5">
              {/* todo: feature: translate to english */}
              {about?.description_pt}
            </p>
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
