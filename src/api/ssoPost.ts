import { SSO } from "../class/SSO";
import { SSOBody } from "../interfaces/SSO";
import { SSO_SERVICE_TOKEN } from "../utils/endpoints";
import { UPHFFetcher } from "../utils/fetcher";

export const ssoPost = async (
  service: string,
  authToken: string
): Promise<SSO> => {
  const response = await UPHFFetcher(SSO_SERVICE_TOKEN(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      service: service,
      authToken: authToken,
    } as SSOBody),
  });

  const raw = (await response.text()) as any;
  const result = new SSO(service, await raw);

  return result ? result : new SSO("", "");
};
