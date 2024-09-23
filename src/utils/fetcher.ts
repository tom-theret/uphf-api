/** @module fetcher */
import { FetcherOptions } from "../interfaces/Fetcher";

export const UPHFFetcher = async (url: string, options: FetcherOptions) => {
  const response = await fetch(url, {
    method: options.method,
    headers: {
      ...options.headers,
      "User-Agent": "@npm/UPHF-API"
    },
    body: options.method === "GET" ? undefined : options.body,
    redirect: options.redirect
  });
  if (!response.status.toString().startsWith("2")) {
    const json = await response.json() as {
      error: string;
      message: string;
      statusCode: number;
    };
    throw new Error(`${json.message} (${json.statusCode})`);
  }
  return {
    headers: response.headers,
    text: () => response.text(),
    json: <T>() => response.json() as Promise<T>
  };
};