"use client";
import Container from "@/app/components/shared/Container";
import registerUser from "@/app/services/actions/registerUser";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface IName {
  firstName: string;
  lastName: string;
}
interface FormData {
  name: IName;
  email: string;
  address: string;
  contactNo: string;
  password: string;
  confirmPassword: string;
  userType: "donor" | "volunteer";
}

const Register = () => {
  const router = useRouter();
  const [userType, setUserType] = useState<"donor" | "volunteer">("donor");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      userType: "donor",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (payload) => {
    const userData = {
      name: {
        firstName: payload.name.firstName,
        lastName: payload.name.lastName,
      },
      email: payload.email,
      address: payload.address,
      contactNo: payload.contactNo,
      password: payload.password,
      role: payload.userType,
    };

    try {
      const data = await registerUser(userData);
      console.log("🚀 ~ constonSubmit:SubmitHandler<FormData>= ~ data:", data);

      if (data.data?._id) {
        toast.success("Account created successfully");
      }
      router.push("/login");
    } catch (error) {
      console.log(error);
      toast.error("Account register failed");
    }
  };

  return (
    <div className="py-32 lg:px-10 min-h-[calc(100vh-90px)]">
      <Container>
        <div className="w-full sm:w-2/3 xl:w-4/6 2xl:w-3/5 mx-auto border py-10 px-5 sm:px-12 md:px-20 lg:px-32">
          <h2 className="text-3xl lg:text-4xl text-gray-800 text-center">
            Register
          </h2>
          <p className="text-gray-500 mt-3 font-inter text-sm text-center">
            Register your account
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="block text-gray-700 text-lg mb-2"
              >
                First Name
              </label>
              <input
                {...register("name.firstName", {
                  required: "First name is required",
                })}
                type="firstName"
                id="firstName"
                className="border rounded border-gray-200 w-full  py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500"
                placeholder="Enter your name"
              />
              {errors.name?.firstName && (
                <p className="text-red-500 text-xs italic">
                  {errors.name?.firstName?.message}
                </p>
              )}
            </div>{" "}
            <div className="mb-4">
              <label
                htmlFor="lastName"
                className="block text-gray-700 text-lg mb-2"
              >
                Last Name
              </label>
              <input
                {...register("name.lastName", {
                  required: "Last name is required",
                })}
                type="lastName"
                id="lastName"
                className="border rounded border-gray-200 w-full  py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500"
                placeholder="Enter your Last name"
              />
              {errors.name?.lastName && (
                <p className="text-red-500 text-xs italic">
                  {errors.name?.lastName?.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-lg mb-2"
              >
                Email
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                id="email"
                className="border rounded border-gray-200 w-full  py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-xs italic">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="Address"
                className="block text-gray-700 text-lg mb-2"
              >
                Address
              </label>
              <input
                {...register("address", {
                  required: "Address is required",
                })}
                type="Address"
                id="Address"
                className="border rounded border-gray-200 w-full  py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500"
                placeholder="Enter your Address"
              />
              {errors.email && (
                <p className="text-red-500 text-xs italic">
                  {errors.address?.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="contactNo"
                className="block text-gray-700 text-lg mb-2"
              >
                ContactNo
              </label>
              <input
                {...register("contactNo", {
                  required: "ContactNo is required",
                })}
                type="contactNo"
                id="contactNo"
                className="border rounded border-gray-200 w-full  py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500"
                placeholder="Enter your contactNo"
              />
              {errors.contactNo && (
                <p className="text-red-500 text-xs italic">
                  {errors.contactNo?.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-lg mb-2"
              >
                Password
              </label>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                type="password"
                id="password"
                className="border rounded border-gray-200 w-full  py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500"
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="text-red-500 text-xs italic">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 text-lg mb-2"
              >
                Confirm Password
              </label>
              <input
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value ===
                      (document.getElementById("password") as HTMLInputElement)
                        .value || "Passwords do not match",
                })}
                type="password"
                id="confirmPassword"
                className="border rounded border-gray-200 w-full  py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500"
                placeholder="Retype your password"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs italic">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
            {/* User Type Selection */}
            <div className="mb-4">
              <label className="block text-gray-700 text-lg mb-2">
                Register as
              </label>
              <div className="flex space-x-4">
                <button
                  type="button"
                  className={`flex-1 py-2 px-4 rounded ${
                    userType === "donor"
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => setUserType("donor")}
                >
                  Donor
                </button>
                <button
                  type="button"
                  className={`flex-1 py-2 px-4 rounded ${
                    userType === "volunteer"
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => setUserType("volunteer")}
                >
                  Volunteer
                </button>
              </div>
              <input
                type="hidden"
                {...register("userType", { required: true })}
                value={userType}
              />
              {errors.userType && (
                <p className="text-red-500 text-xs italic">
                  Please select a user type
                </p>
              )}
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 w-full text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
            >
              Register as {userType === "donor" ? "Donor" : "Volunteer"}
            </button>
            <Link href="/login" className="">
              <p className="text-center my-4 w-full  py-3 text-gray-500 text-lg">
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
