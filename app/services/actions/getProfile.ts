import { authKey } from "@/constant/authKey";
import { cookies } from "next/headers";

const getProfile = async () => {
  const accessToken = cookies().get(authKey)?.value;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users/me`,
    {
      method: "GET",
      headers: {
        Authorization: accessToken as string,
        "Content-Type": "application/json",
      },
      credentials: "include",
      // next: { revalidate: 5 },
      cache: "no-store",
    }
  );

  const result = await response.json();

  return result;
};

export default getProfile;
