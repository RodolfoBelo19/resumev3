import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";

import { About } from "@/domain/about/entities";
import { GetAboutUseCase } from "@/domain/about/useCases/GetAboutUseCase";
import { SaveOrUpdateAboutUseCase } from "@/domain/about/useCases/SaveOrUpdateAboutUseCase";
import { useAuth } from "@/presentation/hooks/useAuth";
import { useFetchData } from "@/presentation/hooks/useFetchData";

const EditAbout = () => {
  const { push, query } = useRouter();
  const { id } = query;

  const { user } = useAuth();
  const getAbout = new GetAboutUseCase();
  const { data, isLoading } = useFetchData<About>(`${id}`, getAbout);

  if (!user) {
    push("/login");
    return;
  }

  let initialValues: About = {
    description_pt: "",
    description_en: "",
    age: 0,
    phone: "",
    email: "",
    localization: "",
    language: [],
    user_id: "",
  };

  if (id) {
    if (data) {
      initialValues = data;
    }
  }

  const saveOrUpdateAboutUseCase = new SaveOrUpdateAboutUseCase();

  const handleSubmit = async (about: About) => {
    await saveOrUpdateAboutUseCase.execute(about);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        enableReinitialize={true}
        className="flex flex-col overflow-y-auto"
      >
        {({ values, handleChange, handleBlur }) => (
          <Form
            className="p-5"
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit(values);
            }}
          >
            <div className="flex flex-col">
              <label htmlFor="description_pt">Descrição em Português</label>
              <textarea
                className="bg-gray-100 border-2 border-gray-300 p-2 rounded-md"
                name="description_pt"
                id="description_pt"
                value={values?.description_pt}
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
                value={values?.description_en}
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
                value={values?.age}
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
                value={values?.phone}
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
                value={values?.email}
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
                value={values?.localization}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="flex flex-col mt-5">
              <label htmlFor="language">Idiomas</label>
              <input
                className="bg-gray-100 border-2 border-gray-300 p-2 rounded-md"
                type="text"
                name="language"
                id="language"
                value={values?.language}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="flex justify-end">
              <button
                className="bg-zinc-700 text-white p-2 md:w-32 rounded-md w-full mt-5"
                type="submit"
              >
                {initialValues?._id ? "Editar" : "Salvar"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        progressStyle={{ backgroundColor: "#656161" }}
      />
    </>
  );
};

export default EditAbout;
