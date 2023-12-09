/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */
// copied from https://github.com/rtk-incubator/graphql-request-base-query/blob/main/src/index.ts
// TODO: install the npm package and remove this copied file
// there is a knows module import issue https://github.com/reduxjs/redux-toolkit/issues/1289
// @ts-nocheck
import { BaseQueryFn } from "@reduxjs/toolkit/query/react";
import { DocumentNode } from "graphql";
import { GraphQLClient, ClientError } from "graphql-request";

type P = Parameters<GraphQLClient["request"]>;
export type Document = P[0];
export type Variables = P[1];
export type RequestHeaders = P[2];

export const graphqlRequestBaseQuery = (
  options:
    | { url: string; requestHeaders?: RequestHeaders }
    | { client: GraphQLClient }
): BaseQueryFn<
  { document: string | DocumentNode; variables?: any },
  unknown,
  Pick<ClientError, "name" | "message" | "stack">,
  Partial<Pick<ClientError, "request" | "response">>
> => {
  const client =
    "client" in options ? options.client : new GraphQLClient(options.url);
  if ("requestHeaders" in options) {
    client.setHeaders(options.requestHeaders);
  }
  return async ({ document, variables }) => {
    try {
      return { data: await client.request(document, variables), meta: {} };
    } catch (error) {
      if (error instanceof ClientError) {
        const { name, message, stack, request, response } = error;
        return { error: { name, message, stack }, meta: { request, response } };
      }
      throw error;
    }
  };
};
