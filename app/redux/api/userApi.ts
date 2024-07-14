import { IMeta } from "@/app/types";
import { IUser } from "@/app/types/user/index";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUser: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/users",
        method: "GET",
        params: arg,
      }),
      transformResponse: ({ data, meta }: { data: IUser[]; meta: IMeta }) => {
        return {
          users: data,
          meta: meta,
        };
      },

      providesTags: [tagTypes.users],
    }),

    getSingleUser: build.query({
      query: (id) => ({
        url: `/users/${id}`,
        method: "GET",
      }),

      providesTags: [tagTypes.users],
    }),

    deleteUser: build.mutation({
      query: ({ role, roleId }) => ({
        url: `/${role.toLowerCase()}/${roleId}`,
        method: "DELETE",
      }),

      invalidatesTags: [tagTypes.users],
    }),
  }),
});

export const {
  useGetAllUserQuery,
  useDeleteUserMutation,
  useGetSingleUserQuery,
} = userApi;
