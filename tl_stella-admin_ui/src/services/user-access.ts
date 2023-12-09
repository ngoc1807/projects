import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserAccessData } from "src/pages/api/userAccess/[userId]";

export const userAccessApi = createApi({
  reducerPath: "userAccessApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `/api`,
  }),

  endpoints: (builder) => ({
    userAccess: builder.query<UserAccessData, string>({
      query: (userId: string) => ({
        url: `/userAccess/${userId}`,
        method: "POST",
      }),
    }),
  }),
});

export const { useUserAccessQuery } = userAccessApi;
