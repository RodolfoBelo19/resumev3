export const Career = () => {
  const career = [
    {
      title: "Musicpro",
      description: "FullStack Developer",
      stack: [
        "Laravel",
        "Vue.js",
        "React",
        "TailwindCSS",
        "MySQL",
        "MongoDB",
        "Docker",
      ],
      period: "Agosto 2021 - (Atualmente)"
    },
  ];

  return (
    <div className="mx-auto max-w-7xl md:py-12 py-5 px-2 sm:px-6 lg:px-8">
      <div className=" mt-5 gap-20">
        <h1 className="p-5 text-center w-full text-2xl">Carreira</h1>
        {
          career.map((item, index) => (
            <div className="md:flex mb-5" key={index}>
              <div className="bg-zinc-800 flex flex-col items-center justify-center bg-opacity-70 p-5 md:w-3/12 w-full md:rounded-r-none md:rounded-l-md rounded-t-md">
                {item.period}
                <h1 className="text-2xl">{item.title}</h1>
              </div>
              <div className="bg-zinc-900 bg-opacity-70 p-5 md:w-9/12 w-full md:rounded-l-none md:rounded-r-md rounded-b-md">
                <h1 className="text-xl">{item.description}</h1>

                <h4 className="mt-4">Stack:</h4>

                <div className="py-2 text-sm px-5">
                  <ul className="list-disc">
                    {
                      item.stack.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};
