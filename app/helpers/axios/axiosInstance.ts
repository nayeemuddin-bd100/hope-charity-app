import { IErrorResponse, ISuccessResponse } from "@/app/types";
import { authKey } from "@/constant/authKey";
import { getFromLocalStorage } from "@/lib/localStorage";
import axios from "axios";

export const axiosInstance = axios.create();

axiosInstance.defaults.headers.post["Content-Type"] = "application/json";
axiosInstance.defaults.headers["Accept"] = "application/json";
axiosInstance.defaults.timeout = 60000;

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const accessToken = getFromLocalStorage(authKey);
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  //@ts-ignore
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    const responseObj: ISuccessResponse = {
      data: response?.data?.data,
      meta: response?.data?.meta,
      message: response?.data?.message,
      success: response?.data?.success,
      statusCode: response?.status,
    };
    return responseObj;
  },
  function (error) {
    const responseObj: IErrorResponse = {
      success: error?.response?.data?.success || false,
      message: error?.response?.data?.message || "Something went wrong",
      errorMessages: error?.response?.data?.errorMessages || [],
      statusCode: error?.response?.status || 500,
    };

    return responseObj;
    // return Promise.reject(error);
  }
);
