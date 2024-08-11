import { IMeta } from "@/app/types";
import { IDonation } from "@/app/types/donation";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const donationApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllDonation: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/donation",
        method: "GET",
        params: arg,
      }),
      transformResponse: ({
        data,
        meta,
      }: {
        data: IDonation[];
        meta: IMeta;
      }) => {
        return {
          donations: data,
          meta: meta,
        };
      },

      providesTags: [tagTypes.donations],
    }),

    getSingleDonation: build.query({
      query: (id) => ({
        url: `/donation/${id}`,
        method: "GET",
      }),

      providesTags: [tagTypes.donations],
    }),

    deleteDonation: build.mutation({
      query: (id) => ({
        url: `/donation/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: [tagTypes.donations],
    }),
  }),
});

export const {
  useGetAllDonationQuery,
  useDeleteDonationMutation,
  useGetSingleDonationQuery,
} = donationApi;
