import { SessionStorageKeys } from "./platform";

export interface GenericResponse {
  resultText: string;
  resultCode: number;
}

const setCommonHeaders = (headers: Headers) => {
  headers.set("Content-Type", "application/json");

  const token = sessionStorage.getItem(SessionStorageKeys.API_TOKEN);
  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  return headers;
};

export const prepareHeadersFunction = () => setCommonHeaders;
