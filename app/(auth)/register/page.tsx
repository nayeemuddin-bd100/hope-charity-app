"use client";
import FormInput from "@/app/components/Form/FormInput";
import FormWrapper from "@/app/components/Form/FormWrapper";
import Container from "@/app/components/shared/Container";
import registerUser from "@/app/services/actions/registerUser";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const registerZodSchema = z
  .object({
    firstName: z
      .string()
      .min(1, "First name is required")
      .min(2, "First name must be at least 2 characters")
      .max(30, "First name must be at most 30 characters")
      .regex(/^[A-Za-z]+$/, "First name can only contain letters"),
    lastName: z
      .string()
      .min(1, "Last name is required")
      .min(2, "Last name must be at least 2 characters")
      .max(30, "Last name must be at most 30 characters")
      .regex(/^[A-Za-z]+$/, "Last name can only contain letters"),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Please enter a valid email"),
    address: z
      .string()
      .min(1, "Address is required")
      .min(5, "Address must be at least 5 characters")
      .max(100, "Address must be at most 100 characters"),
    contactNo: z
      .string()
      .min(1, "Contact number is required")
      .max(20, "Please enter a valid contact number")
      .regex(/^[0-9+()\s-]+$/, "Please enter a valid contact number"),

    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(1, "Confirm password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const Register = () => {
  const router = useRouter();
  const [userType, setUserType] = useState<"donor" | "volunteer">("donor");

  const handleLogin: SubmitHandler<FieldValues> = async (payload) => {
    const userData = {
      name: {
        firstName: payload.firstName,
        lastName: payload.lastName,
      },
      email: payload.email,
      address: payload.address,
      contactNo: payload.contactNo,
      password: payload.password,
      role: userType,
    };

    try {
      const data = await registerUser(userData);

      if (data?.success && data.data?._id) {
        toast.success("Account created successfully");
        router.push("/login");
      } else if (!data?.success && !data.data?._id) {
        toast.error(data?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Account register failed");
    }
  };

  return (
    <div className="py-32 lg:px-10 min-h-[calc(100vh-90px)]">
      <Container>
        <div className="w-full sm:w-2/3 lg:[90%] xl:w-4/6 2xl:w-3/5 mx-auto border py-10 px-5 sm:px-12 md:px-20 lg:px-8 ">
          <h2 className="text-3xl lg:text-4xl text-gray-800 text-center">
            Register
          </h2>
          <p className="text-gray-500 mt-3 font-inter text-sm text-center">
            Register your account
          </p>

          <FormWrapper
            onSubmit={handleLogin}
            resolver={zodResolver(registerZodSchema)}
            defaultValues={{
              firstName: "",
              lastName: "",
              email: "",
              address: "",
              contactNo: "",
              password: "",
              confirmPassword: "",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <FormInput
                name="firstName"
                label="First Name"
                placeholder="Enter your First name"
              />
              <FormInput
                name="lastName"
                label="Last Name"
                placeholder="Enter your Last name"
              />
              <FormInput
                name="email"
                label="Email"
                placeholder="Enter your Email"
                type="email"
              />
              <FormInput
                name="contactNo"
                label="Contact no"
                placeholder="Enter your Contact no"
                type="tel"
              />
              <div className="lg:col-span-2">
                <FormInput
                  name="address"
                  label="Address"
                  placeholder="Enter your Address"
                />
              </div>
              <FormInput
                name="password"
                label="Password"
                placeholder="Enter your password"
                type="password"
              />
              <FormInput
                name="confirmPassword"
                label="Confirm Password"
                placeholder="Enter your password again"
                type="password"
              />
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
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 w-full text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
            >
              Register as {userType === "donor" ? "Donor" : "Volunteer"}
            </button>
          </FormWrapper>

          <div className="text-center my-4 w-full  py-3 text-gray-500 text-lg">
            Already have an account?{" "}
            <Link
              href="/login"
              className="inline-block text-blue-500 hover:text-blue-600 hover:underline"
            >
              Login here
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Register;
