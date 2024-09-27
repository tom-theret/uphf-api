import { Zimbra } from "../class/Zimbra";
import { ZimbraBody, ZimbraResponse } from "../interfaces/Zimbra";
import { MAIL_CALENDAR } from "../utils/endpoints";
import { UPHFFetcher } from "../utils/fetcher";

export const zimbraPost = async (authToken: string): Promise<Zimbra> => {
    const response = await UPHFFetcher(MAIL_CALENDAR(), {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            authToken: authToken
        } as ZimbraBody)
    });
    const raw = (await response.json()) as ZimbraResponse;
    const result = new Zimbra(
        raw.unreadMails,
        raw.events
    );

    return result ? result : new Zimbra(0, []);
}