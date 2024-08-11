"use client";
import { logoutUser } from "@/app/services/actions/logoutUser";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { isLoggedIn } from "../../services/auth.service";

const AuthButton = () => {
  const router = useRouter();
  const isLogin = isLoggedIn();
  return (
    <div>
      {isLogin ? (
        <button
          onClick={() => logoutUser(router)}
          className={` bg-red-500 hover:bg-red-600 transition duration-100 ease-in-out rounded text-white  px-3 py-2 text-lg font-medium cursor-pointer  `}
        >
          Logout
        </button>
      ) : (
        <Link
          href="/login"
          className={` bg-green-500 hover:bg-green-600 transition duration-100 ease-in-out rounded text-white  px-3 py-2 text-lg font-medium cursor-pointer  `}
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default AuthButton;
