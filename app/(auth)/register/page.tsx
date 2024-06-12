"use client";
import Container from "@/app/components/shared/Container";
import Link from "next/link";
import { useState } from "react";
interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
const Register = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="py-32  lg:px-10  min-h-[calc(100vh-90px)]">
      <Container>
        <div className="w-full sm:w-2/3 lg:2/4 2xl:w-3/5  mx-auto border py-10 px-5 sm:px-12 md:px-20 lg:px-32">
          <h2 className="text-3xl lg:text-4xl text-gray-800 text-center">
            Register
          </h2>
          <p className="text-gray-500 mt-3 font-inter text-sm text-center">
            Register your account
          </p>

          <form onSubmit={handleSubmit} className="mt-5">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-lg mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className=" border rounded border-gray-200 w-full sm:w-4/5 lg:w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500"
                placeholder="Enter your Name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-lg mb-2"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className=" border rounded border-gray-200 w-full sm:w-4/5 lg:w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-lg mb-2"
              >
                Password
              </label>
              <input
                type="text"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className=" border rounded border-gray-200 w-full sm:w-4/5 lg:w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500"
                placeholder="Enter your password"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-lg mb-2"
              >
                Confirm Password
              </label>
              <input
                type="text"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className=" border rounded border-gray-200 w-full sm:w-4/5 lg:w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500"
                placeholder="Retype your password"
              />
            </div>

            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 w-full text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
            >
              Register
            </button>

            <Link href={"/login"} className="">
              <p className="text-center my-4  w-full sm:w-4/5 lg:w-full py-3 text-gray-500 text-lg">
                Already have an account?{" "}
                <span className="inline-block text-blue-500 hover:text-blue-600 hover:underline">
                  Login here
                </span>
              </p>
            </Link>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Register;
