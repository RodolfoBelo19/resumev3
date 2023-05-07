import { AxiosHttpClient } from "@/infra/http/axiosHttpClient";
import { useAuth } from "@/presentation/hooks/useAuth";
import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface About {
  _id?: string;
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

const EditAbout = () => {
  const [initialValues, setInitialValues] =
    useState<About>(initialValuesSchema);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { user } = useAuth();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { push, query } = useRouter();
  const { id } = query;

  if (!user) {
    push("/login");
    return;
  }

  const httpClient = new AxiosHttpClient();

  const handleSubmit = async (values: About) => {
    if (values._id) {
      await httpClient.patch({
        url: `http://localhost:3010/about/${values._id}`,
        body: values,
      });
      return;
    }

    httpClient.post({
      url: "http://localhost:3010/about",
      body: values,
    });
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (id) {
      httpClient
        .get({
          url: `http://localhost:3010/about/${id}`,
        })
        .then((response) => {
          setInitialValues(response.data);
        });
    }
  }, [id]);

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
