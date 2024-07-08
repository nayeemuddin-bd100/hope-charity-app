"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-hot-toast";
import { isLoggedIn, removeUser } from "../../services/auth.service";

const AuthButton = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isLogin = isLoggedIn();

  const handleLogout = () => {
    removeUser();
    router.refresh();
    if (pathname !== "/") {
      router.push("/");
    }
    toast.success("Logout successfully");
  };

  return (
    <div>
      {isLogin ? (
        <button
          onClick={() => handleLogout()}
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
