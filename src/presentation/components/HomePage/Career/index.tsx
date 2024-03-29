import { useThemeValue } from "@/presentation/contexts/ThemeContext";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export const Career = () => {
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

  const career = [
    {
      title: "MUSICPRO",
      description: "FullStack Developer",
      backend: ["Laravel", "Nestjs", "MongoDB", "MySQL", "Docker"],
      frontend: ["Vue.js", "React", "Nextjs", "Angular", "TailwindCSS"],
      fullstack: [],
      infra: [],
      period: "Agosto 2021 - (Atualmente)",
    },
    {
      title: "HAVAN LABS",
      description: "FrontEnd Developer",
      backend: [".NET Core", "MongoDB"],
      frontend: ["Angular", "React"],
      fullstack: [],
      infra: [],
      period: "Maio 2022 - Junho 2022",
    },
    {
      title: "SYS MANAGER",
      description: "OutSystems Developer",
      backend: [],
      frontend: [],
      fullstack: ["OutSystems"],
      infra: [],
      period: "Dezembro 2021 - Março 2022",
    },
    {
      title: "TL WORKS",
      description: "FrontEnd Developer",
      backend: [],
      frontend: ["Vue.js", "Angular"],
      fullstack: [],
      infra: [],
      period: "Julho 2021 - Janeiro 2022",
    },
    {
      title: "GRUPO CASA DAS FECHADURAS",
      description: "Gerente de CPD",
      backend: ["Proteus TOTVS", "SQL Server", "MySQL"],
      frontend: [],
      fullstack: ["OutSystems"],
      infra: ["Redes", "Servidores", "Linux", "Windows"],
      period: "Outubro 2020 - DEZEMBRO  2021",
    },
    {
      title: "GRUPO CASA DAS FECHADURAS",
      description: "Auxiliar de CPD",
      backend: ["Proteus TOTVS", "SQL Server", "MySQL"],
      frontend: [],
      fullstack: [],
      infra: ["Redes", "Servidores", "Linux", "Windows"],
      period: "Setembro 2020 - Outubro 2020",
    },
    {
      title: "RDTEC",
      description: "Autônomo (Freelancer)",
      backend: ["Laravel", "MySQL"],
      frontend: ["Angular", "Bootstrap"],
      fullstack: [],
      infra: [],
      period: "Novembro 2017 - Fevereiro 2020",
    },
    {
      title: "ZAPPATO",
      description: "Técnico de Tecnologia da Informação",
      backend: [],
      frontend: [],
      fullstack: [],
      infra: ["Suporte", "Redes", "Servidores", "Linux", "Windows"],
      period: "Novembro 2014 - Julho 2016",
    },
  ];

  return (
    <div
      id="carrer"
      className="mx-auto max-w-7xl md:py-12 py-5 px-2 sm:px-6 lg:px-8"
    >
      <div className=" mt-5 gap-20">
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="p-5 text-center w-full text-2xl">Carreira</h1>
        </motion.div>
        {career.map((item, index) => (
          <div className="md:flex mb-8" key={index}>
            <div
              className={`h-auto max-h-72 flex flex-col items-center justify-center bg-opacity-70 p-5 md:w-3/12 w-full md:rounded-r-none md:rounded-l-md rounded-t-md
              ${
                !theme
                  ? "text-white bg-zinc-800"
                  : "text-black bg-opacity-30 bg-white"
              }`}
            >
              {item.period}
              <h1 className="text-xl text-center mt-2">{item.title}</h1>
            </div>
            <div
              className={`flex flex-col md:items-start items-center h-auto max-h-72 bg-opacity-70 p-5 md:w-9/12 w-full md:rounded-l-none md:rounded-r-md rounded-b-md
              ${
                !theme
                  ? "text-white bg-zinc-900"
                  : "text-black bg-opacity-90 bg-white"
              }`}
            >
              <h1 className="text-xl">{item.description}</h1>

              <h4 className="mt-2">Stack:</h4>

              <div className="py-2">
                <div
                  className={`my-1 text-sm px-5
                  ${!theme ? "text-zinc-400" : "text-zinc-500"}
                `}
                >
                  {item.fullstack.length > 0 && (
                    <span>
                      <span>FullStack: </span>
                      <span>{item.fullstack?.join(", ")}</span>
                    </span>
                  )}
                </div>
                <div
                  className={`my-1 text-sm px-5
                  ${!theme ? "text-zinc-400" : "text-zinc-500"}
                `}
                >
                  {item.backend.length > 0 && (
                    <span>
                      <span>Backend: </span>
                      <span>{item.backend?.join(", ")}</span>
                    </span>
                  )}
                </div>
                <div
                  className={`my-1 text-sm px-5
                  ${!theme ? "text-zinc-400" : "text-zinc-500"}
                `}
                >
                  {item.frontend.length > 0 && (
                    <span>
                      <span>Frontend: </span>
                      <span>{item.frontend?.join(", ")}</span>
                    </span>
                  )}
                </div>
                <div
                  className={`my-1 text-sm px-5
                  ${!theme ? "text-zinc-400" : "text-zinc-500"}
                `}
                >
                  {item.infra.length > 0 && (
                    <span>
                      <span>Infra: </span>
                      <span>{item.infra?.join(", ")}</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
