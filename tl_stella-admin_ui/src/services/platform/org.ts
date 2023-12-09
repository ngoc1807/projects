import { createApi } from "@reduxjs/toolkit/query/react";
import { Organization } from "src/features/organization/organization.slice";
import { baseParameters, baseQuery } from ".";

export const platformOrgApi = createApi({
  reducerPath: "orgApi",
  baseQuery: baseQuery(),

  endpoints: (builder) => ({
    getOrgDetails: builder.query<Organization[], string>({
      query: (organizationID: string) => ({
        url: "/org/get",
        method: "POST",
        body: {
          id: organizationID,
        },
        params: baseParameters(),
      }),
    }),
  }),
});

export const { useGetOrgDetailsQuery } = platformOrgApi;
