import { AuthResponse } from "uphf-api/dist/models/Auth";
import { UPHF } from "..";
import type { RefreshBody } from "../models/Auth";
import { KEEP_AUTH_WITH_REFRESH_TOKEN } from "../utils/Endpoints";
import { UPHFFetcher } from "../utils/Fetcher";

export const authWithRefreshToken = async (refreshAuthToken: RefreshBody): Promise<UPHF> => {
  const response = await UPHFFetcher(KEEP_AUTH_WITH_REFRESH_TOKEN(), {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${refreshAuthToken.refreshAuthToken}`,
    },
  });
    
  const raw = await response.json() as AuthResponse;

  return new UPHF({
    authToken: raw.authToken,
    displayName: raw.displayName,
    firstname: raw.firstname,
    name: raw.name,
    email: raw.email,
    ine: raw.ine,
    studentNumber: raw.studentNumber,
    staffNumbers: raw.staffNumbers,
    birthDate: raw.birthDate,
    uid: raw.uid,
    roles: raw.roles,
    refreshAuthToken: refreshAuthToken.refreshAuthToken,
  });
}