import { SSOBody } from "../interfaces/SSO";
import { SSO_SERVICE_TOKEN } from "../utils/endpoints";
import { UPHFFetcher } from "../utils/fetcher";

export const ssoPost = async (service: string, authToken: string): Promise<string> => {
    const response = await UPHFFetcher(SSO_SERVICE_TOKEN(), {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            service: service,
            authToken: authToken
        } as SSOBody)
    });

    return await JSON.stringify({
        "serviceURL": service,
        "ssoTicket": await response.text()
    }) as string;
}