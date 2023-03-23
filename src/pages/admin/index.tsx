import React from 'react';
import { Formik } from 'formik';

import { FcGoogle } from "react-icons/fc";

import Link from "next/link";

interface IFormValues {
  email: string;
  password: string;
}

const initialValues: IFormValues = {
  email: '',
  password: ''
}
const admin = () => {
  const handleSubmit = (values: IFormValues) => {
    console.log({ values });
  }

  return (
    <div className="bg-black flex items-center justify-evenly h-screen text-white">
      <div className="w-4/12 m-5">
        <h1 className="text-5xl font-bold">Admin Area</h1>
      </div>
      <div className="w-4/12 m-5 bg-zinc-800 flex flex-col p-10 rounded-md">
        <Formik initialValues={initialValues} onSubmit={handleSubmit} enableReinitialize={true}>
          {({ values,
              handleChange,
              handleBlur,
              handleSubmit
          }) => (
            <form className="flex gap-2 flex-col" onSubmit={handleSubmit}>
              <label htmlFor=""> Email</label>
              <input
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className="rounded-md p-2 text-black" type="email" placeholder="Enter Email"
              />

              <label className="mt-5" htmlFor="">Password</label>
              <input
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className="rounded-md p-2 text-black" type="password" placeholder="Enter Password"
              />
              <button type={"submit"} className="mt-5 bg-zinc-700 p-2 rounded-md">Login</button>
            </form>
          )}
        </Formik>
        <div className="mt-5 flex justify-center">
          <Link href="" className="hover:bg-red-800 hover:bg-opacity-20 flex gap-2 p-2 hover:rounded-sm">
            Login with <FcGoogle className="text-white cursor-pointer text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default admin;