import { authKey } from "@/constant/authKey";
import { decodedToken } from "../../lib/jwtToken";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "../../lib/localStorage";

export const storeToken = (accessToken: string) => {
  setToLocalStorage(authKey, accessToken);
};

export const getUserInfoFromToken = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    const decodedData = decodedToken(authToken);

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
