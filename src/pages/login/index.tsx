import React, { useState } from "react";
import { Formik } from "formik";

import { AuthUser } from "@/presentation/components/HomePage/AuthUser";
import { IAuthUserFirebase } from "@/interfaces/IAuthUserFirebase";
import { useRouter } from "next/router";

interface IFormValues {
  email: string;
  password: string;
}

const initialValues: IFormValues = {
  email: "",
  password: "",
};
const login = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [user, setUser] = useState<IAuthUserFirebase>({} as IAuthUserFirebase);

  const handleSubmit = (values: IFormValues) => {
    console.log({ values });
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { push } = useRouter();

  if (user?.email) {
    push("/admin");
    return;
  }

  return (
    <div className="bg-black p-2 flex md:flex-row flex-col items-center md:justify-evenly justify-center h-screen text-white">
      <div className="md:w-4/12 w-full m-5">
        <h1 className="text-5xl text-center font-bold">Admin Area</h1>
      </div>
      <div className="md:w-4/12 w-full m-5 bg-zinc-800 flex flex-col p-10 rounded-md">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          enableReinitialize={true}
        >
          {({ values, handleChange, handleBlur, handleSubmit }) => (
            <form className="flex gap-2 flex-col" onSubmit={handleSubmit}>
              <label htmlFor=""> Email</label>
              <input
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className="rounded-md p-2 text-black"
                type="email"
                placeholder="Enter Email"
              />

              <label className="mt-5" htmlFor="">
                Password
              </label>
              <input
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className="rounded-md p-2 text-black"
                type="password"
                placeholder="Enter Password"
              />
              <button
                type={"submit"}
                className="mt-5 bg-zinc-700 p-2 rounded-md"
              >
                Login
              </button>
            </form>
          )}
        </Formik>
        <div className="mt-5 flex justify-center">
          <AuthUser
            user={user}
            setUser={setUser}
            sign_in={"login"}
            sign_out={"logout"}
          />
        </div>
      </div>
    </div>
  );
};

export default login;
