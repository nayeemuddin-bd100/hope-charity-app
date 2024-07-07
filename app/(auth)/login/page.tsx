"use client";
import Container from "@/app/components/shared/Container";
import loginUser from "@/app/services/actions/loginUser";
import { storeToken } from "@/app/services/auth.service";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface FormData {
  email: string;
  password: string;
}
const Login = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (payload) => {
    const userData = {
      email: payload.email,
      password: payload.password,
    };

    try {
      const data = await loginUser(userData);
      console.log("🚀  ~ data:", data.data.accessToken);

      if (data.data?.accessToken) {
        storeToken(data.data?.accessToken);
        toast.success("Login successfully");
      }
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error("Login failed");
    }
  };

  return (
    <div className="py-32  lg:px-10  min-h-[calc(100vh-90px)]">
      <Container>
        <div className="w-full sm:w-2/3 lg:2/4 2xl:w-3/5  mx-auto border py-10 px-5 sm:px-12 md:px-20 lg:px-32">
          <h2 className="text-3xl lg:text-4xl text-gray-800 text-center">
            Login
          </h2>
          <p className="text-gray-500 mt-3 font-inter text-sm text-center">
            Login to your account
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-lg mb-2"
              >
                Email
              </label>
              <input
                {...register("email", {
                  required: "Email name is required",
                })}
                type="text"
                id="email"
                name="email"
                className=" border rounded border-gray-200 w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-xs italic">
                  {errors.email?.message}
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
                })}
                type="password"
                id="password"
                name="password"
                className=" border rounded border-gray-200 w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:border-green-500"
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="text-red-500 text-xs italic">
                  {errors.password?.message}
                </p>
              )}
            </div>

            <Link
              href={"/forgot-password"}
              className="text-right hover:underline hover:text-green-700  text-lg text-blue-500"
            >
              <p className="text-right my-4  w-full">Forgot password?</p>
            </Link>

            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 w-full text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </form>
          <Link href={"/register"} className="">
            <p className="text-center my-4  w-full py-3 text-gray-500 text-lg">
              Don&apos;t have an account?{" "}
              <span className="inline-block text-blue-500 hover:text-blue-600 hover:underline">
                Create account
              </span>
            </p>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Login;
