"use client";
import FormInput from "@/app/components/Form/FormInput";
import FormWrapper from "@/app/components/Form/FormWrapper";
import Container from "@/app/components/shared/Container";
import registerUser from "@/app/services/actions/registerUser";
import { registerZodSchema } from "@/app/validationSchema/authZodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

const Register = () => {
  const router = useRouter();
  const [userType, setUserType] = useState<"donor" | "volunteer">("donor");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin: SubmitHandler<FieldValues> = async (payload) => {
    setIsLoading(true);
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
    } finally {
      setIsLoading(false);
      console.log("🚀 userData:", userData);
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
              <div className="flex flex-col-reverse gap-y-9 lg:gap-x-9  md:flex-row md:gap-x-4">
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
                {/* <button
                  type="button"
                  className={`flex-1 py-2 px-4 rounded ${
                    userType === "volunteer"
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => setUserType("volunteer")}
                >
                  Volunteer
                </button> */}

                <div className="flex-1 relative">
                  <button
                    type="button"
                    className={`w-full py-2 px-4 rounded bg-gray-300 text-gray-500`}
                    disabled={true}
                  >
                    Volunteer
                  </button>
                  <p className="absolute text-xs text-gray-700 mt-1 left-0 right-0 text-start">
                    Signup Closed: Volunteer Team Complete
                  </p>
                </div>
              </div>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-green-500 hover:bg-green-700 w-full text-white font-bold py-2 px-8 mt-3 md:mt-8 lg:mt-3 rounded focus:outline-none focus:shadow-outline"
            >
              {isLoading
                ? "Loading..."
                : `Register as ${userType === "donor" ? "Donor" : "Volunteer"}`}
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
