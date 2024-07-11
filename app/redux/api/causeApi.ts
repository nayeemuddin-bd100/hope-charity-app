import { baseApi } from "./baseApi";

const causeApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createCause: build.mutation({
      query: (data) => ({
        url: "/cause/create-cause",
        method: "POST",
        contentType: "application/json",
        data,
        credentials: "include",
      }),
    }),
  }),
});

export const { useCreateCauseMutation } = causeApi;
