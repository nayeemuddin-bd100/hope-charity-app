"use client";

import { getNewAccessToken } from "@/app/services/auth.service";
import { IErrorResponse, ISuccessResponse } from "@/app/types";
import { authKey } from "@/constant/authKey";
import { getFromLocalStorage, setToLocalStorage } from "@/lib/localStorage";
import axios from "axios";
import toast from "react-hot-toast";

export const axiosInstance = axios.create();

axiosInstance.defaults.headers.post["Content-Type"] = "application/json";
axiosInstance.defaults.headers["Accept"] = "application/json";
axiosInstance.defaults.timeout = 60000;
axiosInstance.defaults.withCredentials = true;

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
  async function (error) {
    const config = error?.config;
    //here config.sent is used to prevent infinite loop. !config.sent checks if this request hasn't been sent previously.. if it is true we set config.sent = true to mark it as sent request successfully. so it won't be sent again to get new access token
    if (error?.response?.status === 401 && !config?.sent) {
      config.sent = true;
      const response = await getNewAccessToken();
      console.log("🚀 ~ response:", response);
      const accessToken = response?.data?.accessToken;
      if (accessToken) {
        config.headers["Authorization"] = accessToken;
        setToLocalStorage(authKey, accessToken);
        return axiosInstance(config);
      }

      toast.error("Session expired. Please login again.");
    } else {
      const responseObj: IErrorResponse = {
        success: error?.response?.data?.success || false,
        message: error?.response?.data?.message || "Something went wrong",
        errorMessages: error?.response?.data?.errorMessages || [],
        statusCode: error?.response?.status || 500,
      };
      return responseObj;
    }
  }
);
