import { jwtDecode } from "jwt-decode";

export const decodedToken = (token: string) => {
  const decodedToken = jwtDecode(token);
  return decodedToken;
};
