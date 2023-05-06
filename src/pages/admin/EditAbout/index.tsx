import { AxiosHttpClient } from "@/infra/http/axiosHttpClient";
import { useAuth } from "@/presentation/hooks/useAuth";
import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface About {
  description_pt: string;
  description_en: string;
  age: number;
  phone: string;
  email: string;
  localization: string;
  language: string[];
  user_id: string;
}

const initialValuesSchema: About = {
  description_pt: "",
  description_en: "",
  age: 0,
  phone: "",
  email: "",
  localization: "",
  language: [],
  user_id: "",
};

const aboutData: About = {
  description_pt:
    "Olá, meu nome é Rodolfo, sou um desenvolvedor. E possuo experiência e interesse em stacks baseadas em JavaScript, PHP e OutSystems. Teve a experiência de trabalhar com frameworks, tais como Laravel, Angular, React e Vue.js. Tem facilidade em trabalhar em equipe e é movido por novos desafios. Um profissional disposto a aprender novas tecnologias, além de prezar pela evolução do time.",
  description_en:
    "Hello, my name is Rodolfo, I am a developer. And I have experience and interest in JavaScript, PHP and OutSystems based stacks. He had the experience of working with frameworks, such as Laravel, Angular, React and Vue.js. It is easy to work in a team and is driven by new challenges. A professional willing to learn new technologies, in addition to valuing the evolution of the team.",
  age: 27,
  phone: "+55 (21) 9 9792-9884",
  email: "rodolfo.silva.belo@gmail.com",
  localization: "Rio de Janeiro, Brasil",
  language: ["Português", "English"],
  user_id: "qkeqlklkqjlk",
};

const EditAbout = () => {
  const [initialValues, setInitialValues] =
    useState<About>(initialValuesSchema);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { user } = useAuth();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { push } = useRouter();

  if (!user) {
    push("/login");
    return;
  }

  const handleSubmit = async (values: About) => {
    const httpClient = new AxiosHttpClient();

    httpClient.post({
      url: "http://localhost:3010/about",
      body: values,
    });
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setInitialValues(aboutData);
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      enableReinitialize={true}
      className="flex flex-col overflow-y-auto"
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <Form className="p-5" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="description_pt">Descrição em Português</label>
            <textarea
              className="bg-gray-100 border-2 border-gray-300 p-2 rounded-md"
              name="description_pt"
              id="description_pt"
              value={values.description_pt}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="flex flex-col mt-5">
            <label htmlFor="description_en">Descrição em Inglês</label>
            <textarea
              className="bg-gray-100 border-2 border-gray-300 p-2 rounded-md"
              name="description_en"
              id="description_en"
              value={values.description_en}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="flex flex-col mt-5">
            <label htmlFor="age">Idade</label>
            <input
              className="bg-gray-100 border-2 border-gray-300 p-2 rounded-md"
              type="number"
              name="age"
              id="age"
              value={values.age}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="flex flex-col mt-5">
            <label htmlFor="phone">Telefone</label>
            <input
              className="bg-gray-100 border-2 border-gray-300 p-2 rounded-md"
              type="text"
              name="phone"
              id="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="flex flex-col mt-5">
            <label htmlFor="email">Email</label>
            <input
              className="bg-gray-100 border-2 border-gray-300 p-2 rounded-md"
              type="email"
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="flex flex-col mt-5">
            <label htmlFor="localization">Localização</label>
            <input
              className="bg-gray-100 border-2 border-gray-300 p-2 rounded-md"
              type="text"
              name="localization"
              id="localization"
              value={values.localization}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {/* todo: tags input */}
          <div className="flex flex-col mt-5">
            <label htmlFor="language">Idiomas</label>
            <input
              className="bg-gray-100 border-2 border-gray-300 p-2 rounded-md"
              type="text"
              name="language"
              id="language"
              value={values.language}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {/* todo: tags input */}
          <div className="flex justify-end">
            <button
              className="bg-zinc-700 text-white p-2 md:w-32 rounded-md w-full mt-5"
              type="submit"
            >
              Salvar
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default EditAbout;
