import { USER_ROLES } from "@/constant/role";
import { JwtPayload } from "jwt-decode";

export interface IMeta {
  page: number;
  limit: number;
  total: number;
}

export type UserRole = keyof typeof USER_ROLES;

export interface ISuccessResponse {
  data?: any;
  meta?: IMeta;
  success?: boolean;
  message?: string;
  statusCode?: number;
}

export interface IErrorResponse {
  success?: boolean;
  message: string;
  errorMessages?: IGenericErrorMsg[];
  statusCode: number;
}

export interface IGenericErrorMsg {
  path: string | number;
  message: string;
}

export type CustomJwtPayload = {
  _id: string;
  loginUserEmail: string;
  role: string;
} & JwtPayload;
