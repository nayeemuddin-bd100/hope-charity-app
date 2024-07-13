// "use server";
import { authKey, refreshKey } from "@/constant/authKey";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import toast from "react-hot-toast";
import { removeUser } from "../auth.service";
import { deleteCookies } from "./deleteCookies";

export const logoutUser = async (router: AppRouterInstance) => {
  removeUser();
  deleteCookies([authKey, refreshKey]);
  router.refresh();
  router.push("/");
  toast.success("Logout successfully");
};
