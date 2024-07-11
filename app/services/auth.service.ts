import { authKey } from "@/constant/authKey";
import { decodedToken } from "../../lib/jwtToken";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "../../lib/localStorage";
import { axiosInstance } from "../helpers/axios/axiosInstance";
import { CustomJwtPayload } from "../types";

export const storeToken = (accessToken: string) => {
  setToLocalStorage(authKey, accessToken);
};

export const getUserInfoFromToken = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    const decodedData = decodedToken(authToken) as CustomJwtPayload;

    return decodedData;
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);

  return !!authToken;
};

export const removeUser = () => {
  return removeFromLocalStorage(authKey);
};

export const getNewAccessToken = async () => {
  return await axiosInstance({
    url: `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/refresh-token`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};
