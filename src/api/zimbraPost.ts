import { ZimbraBody, ZimbraResponse } from "../interfaces/Zimbra";
import { MAIL_CALENDAR } from "../utils/endpoints";
import { UPHFFetcher } from "../utils/fetcher";

export const zimbraPost = async (authToken: string): Promise<ZimbraResponse> => {
    const response = await UPHFFetcher(MAIL_CALENDAR(), {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            authToken: authToken
        } as ZimbraBody)
    });
    return await response.json() as ZimbraResponse;
}