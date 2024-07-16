"use server";
import { cookies } from "next/headers";

export const getCookies = async (authKey: string) => {
  return await cookies().get(authKey)?.value;
};
