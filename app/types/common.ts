import { USER_ROLES } from "@/constant/role";

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
