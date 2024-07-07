import { authKey } from "@/constant/authKey";
import { setToLocalStorage } from "../../lib/localStorage";

export const storeToken = (accessToken: string) => {
  console.log("🚀 ~ storeToken ~ accessToken:", accessToken);

  setToLocalStorage(authKey, accessToken);
};
