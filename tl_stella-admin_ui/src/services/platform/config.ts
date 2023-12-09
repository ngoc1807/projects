import { createApi } from "@reduxjs/toolkit/query/react";
import { ConfigSet } from "src/utils/config/config.types";
import { baseParameters, baseQuery } from ".";
import { GenericResponse } from "..";

export interface ConfigSetRequestBody {
  tenant_id: string;
  canonical_name: string;
}

export const platformConfigApi = createApi({
  reducerPath: "configApi",
  baseQuery: baseQuery(),
  tagTypes: ["Config"],
  endpoints: (builder) => ({
    getOnboardingStatus: builder.query<boolean, string>({
      query: (tenant_id: string) => ({
        url: "/config/onboarding_status",
        method: "POST",
        body: { tenant_id, namespace: "automotive" },
        params: baseParameters(),
        responseHandler: async (response: Response): Promise<boolean> => {
          const { resultText } = (await response.json()) as {
            resultText: "true" | "false";
          };
          return resultText === "true";
        },
      }),
    }),

    getRootConfigSets: builder.query<ConfigSet[], void>({
      query: () => ({
        url: "/config/get",
        method: "POST",
        body: { parent_id: "root", tenant_id: "system_tenant" },
        params: baseParameters(),
      }),
    }),

    getConfigSetsForTenant: builder.query<ConfigSet[], ConfigSetRequestBody>({
      query: (requestBody: ConfigSetRequestBody) => ({
        url: "/config/get",
        method: "POST",
        body: requestBody,
        params: baseParameters(),
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ canonical_name }) => ({
                type: "Config" as const,
                id: canonical_name,
              })),
              { type: "Config", id: "LIST" },
            ]
          : [{ type: "Config", id: "LIST" }],
    }),

    addConfig: builder.mutation<ConfigSet, ConfigSet>({
      query: (configSet: ConfigSet) => ({
        url: "/config/add",
        method: "POST",
        body: configSet,
        params: baseParameters(),
      }),
      invalidatesTags: (result, error, { canonical_name }) => [
        { type: "Config", id: canonical_name },
      ],
    }),

    updateConfig: builder.mutation<ConfigSet, ConfigSet>({
      query: (configSet: ConfigSet) => ({
        url: "/config/update",
        method: "POST",
        body: configSet,
        params: baseParameters(),
      }),
      invalidatesTags: (result, error, { canonical_name }) => [
        { type: "Config", id: canonical_name },
      ],
    }),

    removeConfig: builder.mutation<GenericResponse, ConfigSetRequestBody>({
      query: (body: ConfigSetRequestBody) => ({
        url: "/config/remove",
        method: "POST",
        body: body,
        params: baseParameters(),
      }),
      invalidatesTags: (result, error, { canonical_name }) => [
        { type: "Config", id: canonical_name },
      ],
    }),
  }),
});

export const {
  useGetOnboardingStatusQuery,
  useGetRootConfigSetsQuery,
  useGetConfigSetsForTenantQuery,
  useAddConfigMutation,
  useUpdateConfigMutation,
} = platformConfigApi;
