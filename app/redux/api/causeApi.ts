import { IMeta } from "@/app/types";
import { ICause } from "@/app/types/cause";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const causeApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //mutation for post,put,patch and delete request and query for only get request
    createCause: build.mutation({
      query: (data) => ({
        url: "/cause/create-cause",
        method: "POST",
        contentType: "application/json",
        data,
      }),

      invalidatesTags: [tagTypes.causes],
    }),

    getAllCause: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/cause",
        method: "GET",
        params: arg,
      }),
      transformResponse: ({ data, meta }: { data: ICause[]; meta: IMeta }) => {
        return {
          causes: data,
          meta: meta,
        };
      },

      providesTags: [tagTypes.causes],
    }),

    getSingleCause: build.query({
      query: (id) => ({
        url: `/cause/${id}`,
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

    updateCause: build.mutation({
      query: ({ _id, updatedData }) => ({
        url: `/cause/${_id}`,
        method: "PATCH",
        data: updatedData,
      }),

      invalidatesTags: [tagTypes.causes],
    }),
  }),
});

export const {
  useCreateCauseMutation,
  useGetAllCauseQuery,
  useDeleteCauseMutation,
  useUpdateCauseMutation,
  useGetSingleCauseQuery,
} = causeApi;
