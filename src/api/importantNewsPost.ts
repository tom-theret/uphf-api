import { ImportantNewsBody, ImportantNewsResponse } from "../interfaces/News";
import { IMPORATANT_NEWS } from "../utils/endpoints";
import { UPHFFetcher } from "../utils/fetcher";

export const importantNewsPost = async (authToken: string): Promise<ImportantNewsResponse> => {
    const response = await UPHFFetcher(IMPORATANT_NEWS(), {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            authToken: authToken
        } as ImportantNewsBody)
    });
    return await response.json() as ImportantNewsResponse;
}