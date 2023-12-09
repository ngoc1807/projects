import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { prepareHeadersFunction } from "src/services";

export enum SessionStorageKeys {
  API_TOKEN = "api_token",
  STACK_NAME = "stack_name",
}

export const baseQuery = () =>
  fetchBaseQuery({
    baseUrl: process.env.CCA_SERVICE_BASE_URL,
    prepareHeaders: prepareHeadersFunction(),
  });

export const baseParameters = () => {
  if (
    typeof window !== "undefined" &&
    sessionStorage.getItem(SessionStorageKeys.STACK_NAME)
  ) {
    return {
      name: sessionStorage.getItem(SessionStorageKeys.STACK_NAME) as string,
    };
  }

  return {
    name: process.env.CCA_API_USE_SANDBOX as string,
  };
};
