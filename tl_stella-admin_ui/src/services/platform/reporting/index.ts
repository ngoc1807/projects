import { createApi } from "@reduxjs/toolkit/query/react";
import { GraphQLClient } from "graphql-request";
import { baseParameters } from "..";
import { graphqlRequestBaseQuery } from "./graphql-request-base-query";

const client = new GraphQLClient(``);

const getGraphQLEndpoint = () => {
  const parameters = new URLSearchParams(baseParameters()).toString();
  return `${
    process.env.CCA_SERVICE_BASE_URL || ""
  }/reporting/graphql?${parameters}`;
};

export const ccaReportingApi = createApi({
  reducerPath: "reportingApi",
  baseQuery: graphqlRequestBaseQuery({ client }),
  endpoints: () => ({}),
});

export const updateClient = (token: string) => {
  client.setEndpoint(getGraphQLEndpoint());
  client.setHeader("Authorization", `Bearer ${token}`);
};

export { ccaReportingApi as api };
