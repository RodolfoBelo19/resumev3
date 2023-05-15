import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import { useThemeValue } from "@/presentation/contexts/ThemeContext";

export const About = () => {
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
              Formado em Análise e desenvolvimento de sistemas e atualmente cursando Pós-Graduação em Engenharia de Software, tenho uma sólida experiência de 4 anos no desenvolvimento de sistemas. Minha especialidade está em criar páginas responsivas e visualmente atraentes para dispositivos móveis e desktop.

Possuo habilidades em Laravel, NodeJS, TypeScript, React JS, Next JS, Vue JS e Angular, além de conhecimento em bancos de dados MySQL e MongoDB. Busco constantemente aprimorar minhas habilidades e acompanhar as melhores práticas do mercado.

"Estou sempre em busca de novos desafios e adoro colaborar com equipes talentosas para transformar ideias em realidade."
            </p>
          </div>
          <div className="md:w-1/2 w-full mt-12 md:mt-0">
            <h1 className="text-2xl">Informações</h1>
            <div className="mt-5">
              <div className="flex gap-2 my-2">
                <strong>
                  <span>Idade:</span>
                </strong>
                <span>27</span>
              </div>
              <div className="flex gap-2 my-2">
                <strong>
                  <span>Email:</span>
                </strong>
                <span>rodolfo.silva.belo@gmail.com</span>
              </div>
              <div className="flex gap-2 my-2">
                <strong>
                  <span>Telefone:</span>
                </strong>
                <span>21 99792-9884</span>
              </div>
              <div className="flex gap-2 my-2">
                <strong>
                  <span>Localização:</span>
                </strong>
                <span>Rio de Janeiro, Brasil</span>
              </div>
              <div className="flex gap-2 my-2">
                <strong>
                  <span>Linguagem:</span>
                </strong>
                <span>Português (Nativo), English (Mid level)</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
