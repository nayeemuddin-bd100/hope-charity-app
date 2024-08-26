"use server";

import { authKey } from "@/constant/authKey";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

const updateDonor = async (data: FieldValues) => {
  const accessToken = cookies().get(authKey)?.value;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/donor/${data?.id}`,
    {
      method: "PATCH",
      headers: {
        Authorization: accessToken as string,
        "Content-Type": "application/json",
        Cookie: cookies().toString(),
      },
      body: JSON.stringify(data?.updatedData),
      cache: "no-store",
    }
  );

  const result = await response.json();

  return result;
};

export default updateDonor;
