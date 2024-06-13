import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "swr";
import { toastWarnNotify } from "../helpers/ToastNotify";

const CreateUser = () => {
  const navigate = useNavigate();

  const createUser = async (values) => {
    try {
      const response = await axios.post(
        "https://666a31ba2e964a6dfed7dd1d.mockapi.io/users",
        values
      );
      console.log("User created:", response.data);
      // Kullanıcı oluşturulduktan sonra anasayfaya yönlendir
      navigate("/");
      toastWarnNotify("Create succesfull");
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      role: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(50, "Name must be 50 characters or less")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      role: Yup.string()
        .max(50, "Role must be 50 characters or less")
        .required("Role is required"),
    }),
    onSubmit: async (values) => {
      await createUser(values);
    },
  });

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create User</h1>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            {...formik.getFieldProps("name")}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-600 text-sm mt-1">
              {formik.errors.name}
            </div>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            {...formik.getFieldProps("email")}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-600 text-sm mt-1">
              {formik.errors.email}
            </div>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="role"
            className="block text-sm font-medium text-gray-700"
          >
            Role:
          </label>
          <select
            id="role"
            name="role"
            {...formik.getFieldProps("role")}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select a role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="guest">Guest</option>
          </select>
          {formik.touched.role && formik.errors.role ? (
            <div className="text-red-600 text-sm mt-1">
              {formik.errors.role}
            </div>
          ) : null}
        </div>

        <button
          type="submit"
          className="inline-flex justify-center mx-8 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create
        </button>
        <button
          onClick={() => navigate(-1)}
          className="mb-4 inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm 
font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 
focus:ring-offset-2 focus:ring-gray-500"
        >
          Back
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
