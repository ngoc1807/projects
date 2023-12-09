import { createApi } from "@reduxjs/toolkit/query/react";
import { baseParameters, baseQuery } from ".";

export const automotiveConfigApi = createApi({
  reducerPath: "automotiveConfigApi",
  baseQuery: baseQuery(),

  endpoints: (builder) => ({
    getAutomotiveOnboardingStatus: builder.query<boolean, string>({
      query: (tenantId: string) => ({
        url: "/automotive/automotiveconfig/onboarding_status",
        method: "POST",
        body: { tenantId },
        params: baseParameters(),

        responseHandler: async (response: Response): Promise<boolean> => {
          const { ResultText } = (await response.json()) as {
            ResultText: boolean;
          };

          return ResultText === true;
        },
      }),
    }),
  }),
});

export const { useGetAutomotiveOnboardingStatusQuery } = automotiveConfigApi;
