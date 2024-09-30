import { UPHF } from "..";
import type { AuthResponse, CredentialsBody } from "../models/Auth";
import { KEEP_AUTH_WITH_CREDENTIALS } from "../utils/Endpoints-1";
import { UPHFFetcher } from "../utils/Fetcher-1";

export const authWithCredentials = async (credentials: CredentialsBody): Promise<UPHF> => {
  const response = await UPHFFetcher(KEEP_AUTH_WITH_CREDENTIALS(), {
    method: "POST",
    body: JSON.stringify(credentials),
  });
  const raw = await response.json() as AuthResponse;
  return new UPHF(raw);
};