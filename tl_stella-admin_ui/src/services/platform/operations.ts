import { createApi } from "@reduxjs/toolkit/query/react";
import { baseParameters, baseQuery } from ".";
import { GenericResponse } from "..";

export interface StellaStatusRequestParameters {
  tenant_id: string;
  status?: string; // enable,0=disable,x=followSchedule
}

export interface GetStellaStatusResponse {
  status?: string; // enable,0=disable,x=followSchedule
  tenant_id: string;
  twilio_status: boolean;
  type: string;
}

export const platformOperationsApi = createApi({
  reducerPath: "operationsApi",
  baseQuery: baseQuery(),

  endpoints: (builder) => ({
    getStellaStatus: builder.query<GetStellaStatusResponse, string>({
      query: (tenant_id: string) => ({
        url: "/operations/system_status/get",
        method: "POST",
        body: {
          type: "booking",
          tenant_id,
        },
        params: baseParameters(),
      }),
    }),

    updateStellaStatus: builder.mutation<
      GenericResponse,
      StellaStatusRequestParameters
    >({
      query: ({ tenant_id, status }: StellaStatusRequestParameters) => ({
        url: "/operations/system_status/update",
        method: "POST",
        body: {
          type: "booking",
          tenant_id,
          status,
        },
        params: baseParameters(),
      }),
    }),
  }),
});

export const { useGetStellaStatusQuery, useUpdateStellaStatusMutation } =
  platformOperationsApi;
