import { useThemeValue } from "@/presentation/contexts/ThemeContext";

export const Education = () => {
  const theme = useThemeValue();

  const career = [
    {
      title: "ADS",
      description: "Análise e Desenvolvimento de Sistemas",
      sub_description: "UNIVERSIDADE ESTÁCIO DE SÁ",
      details: "",
      period: "2020 - 2022",
    },
    {
      title: "Course Havard - EDX",
      description: "EDX PROGRAMMING",
      sub_description: "Havard",
      details: "CS50’s Web Programming with Python and JavaScript",
      period: "2020 - 2022",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl md:py-12 py-5 px-2 sm:px-6 lg:px-8">
      <div className=" mt-5 gap-20">
        <h1 className="p-5 text-center w-full text-2xl">Educação</h1>
        {career.map((item, index) => (
          <div className="md:flex mb-8" key={index}>
            <div
              className={`md:h-52 h-24 max-h-72 flex flex-col items-center justify-center bg-opacity-70 p-5 md:w-3/12 w-full md:rounded-r-none md:rounded-l-md rounded-t-md
              ${
                !theme
                  ? "text-white bg-zinc-800"
                  : "text-black bg-opacity-30 bg-white"
              }`}
            >
              {item.period}
              <h1 className="text-xl">{item.title}</h1>
            </div>
            <div
              className={`md:h-52 h-32 flex flex-col justify-center max-h-72 bg-opacity-70 p-5 md:w-9/12 w-full md:rounded-l-none md:rounded-r-md rounded-b-md
              ${
                !theme
                  ? "text-white bg-zinc-900"
                  : "text-black bg-opacity-90 bg-white"
              }`}
            >
              <h1 className="text-xl">{item.description}</h1>

              <span
                className={`text-sm text-gray-400
                ${!theme ? "text-zinc-400" : "text-zinc-500"}`}
              >
                {item.sub_description}
              </span>
              {item.details && (
                <span
                  className={`mt-5 text-sm text-gray-400
                ${!theme ? "text-zinc-400" : "text-zinc-500"}`}
                >
                  {item.details}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
