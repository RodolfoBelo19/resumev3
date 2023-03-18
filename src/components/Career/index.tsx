export const Career = () => {
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
      frontend: ["Angular"],
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
      backend: ["Laravel", "MySQL"],
      frontend: ["Angular", "Bootstrap"],
      fullstack: [],
      infra: ["Suporte", "Redes", "Servidores", "Linux", "Windows"],
      period: "Novembro 2014 - Julio 2016",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl md:py-12 py-5 px-2 sm:px-6 lg:px-8">
      <div className=" mt-5 gap-20">
        <h1 className="p-5 text-center w-full text-2xl">Carreira</h1>
        {career.map((item, index) => (
          <div className="md:flex mb-8" key={index}>
            <div className="bg-zinc-800 h-auto max-h-72 flex flex-col items-center justify-center bg-opacity-70 p-5 md:w-3/12 w-full md:rounded-r-none md:rounded-l-md rounded-t-md">
              {item.period}
              <h1 className="text-xl text-center mt-2">{item.title}</h1>
            </div>
            <div className="bg-zinc-900 flex flex-col md:items-start items-center h-auto max-h-72 bg-opacity-70 p-5 md:w-9/12 w-full md:rounded-l-none md:rounded-r-md rounded-b-md">
              <h1 className="text-xl">{item.description}</h1>

              <h4 className="mt-2">Stack:</h4>

              <div className="py-2">
                <div className="my-1 text-sm px-5">
                  {item.fullstack.length > 0 && (
                    <span>
                      <span className="text-gray-400">FullStack: </span>
                      <span className="text-gray-400">
                        {item.fullstack?.join(", ")}
                      </span>
                    </span>
                  )}
                </div>
                <div className="my-1 text-sm px-5">
                  {item.backend.length > 0 && (
                    <span>
                      <span className="text-gray-400">Backend: </span>
                      <span className="text-gray-400">
                        {item.backend?.join(", ")}
                      </span>
                    </span>
                  )}
                </div>
                <div className="my-1 text-sm px-5">
                  {item.frontend.length > 0 && (
                    <span>
                      <span className="text-gray-400">Frontend: </span>
                      <span className="text-gray-400">
                        {item.frontend?.join(", ")}
                      </span>
                    </span>
                  )}
                </div>
                <div className="my-1 text-sm px-5">
                  {item.infra.length > 0 && (
                    <span>
                      <span className="text-gray-400">Infra: </span>
                      <span className="text-gray-400">
                        {item.infra?.join(", ")}
                      </span>
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
