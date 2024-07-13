import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const causeApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //mutation for post and delete request and query for get request
    createCause: build.mutation({
      query: (data) => ({
        url: "/cause/create-cause",
        method: "POST",
        contentType: "application/json",
        data,
        // credentials: "include",
      }),

      invalidatesTags: [tagTypes.causes],
    }),

    getAllCause: build.query({
      query: () => ({
        url: "/cause",
        method: "GET",
      }),

      providesTags: [tagTypes.causes],
    }),

    deleteCause: build.mutation({
      query: (id) => ({
        url: `/cause/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: [tagTypes.causes],
    }),
  }),
});

export const {
  useCreateCauseMutation,
  useGetAllCauseQuery,
  useDeleteCauseMutation,
} = causeApi;
