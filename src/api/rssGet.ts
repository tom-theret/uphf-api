import { RssResponse } from "../interfaces/Rss";
import { RSS } from "../utils/endpoints";
import { UPHFFetcher } from "../utils/fetcher";

export const rssGet = async (): Promise<RssResponse> => {
    const response = await UPHFFetcher(RSS(), {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    return await response.json() as RssResponse;
}