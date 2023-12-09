import { createApi } from "@reduxjs/toolkit/query/react";
import { Tenant } from "src/features/organization/organization.slice";
import { baseParameters, baseQuery } from ".";

export const platformTenantApi = createApi({
  reducerPath: "tenantApi",
  baseQuery: baseQuery(),

  endpoints: (builder) => ({
    getTenants: builder.query<Tenant[], string>({
      query: (organizationID: string) => ({
        url: "/tenant/get",
        method: "POST",
        body: {
          org_id: organizationID,
        },
        params: baseParameters(),
      }),
    }),
  }),
});

export const { useGetTenantsQuery } = platformTenantApi;
