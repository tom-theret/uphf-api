import { ImportantNews } from "../class/ImportantNews";
import { ImportantNewsBody, ImportantNewsResponse } from "../interfaces/News";
import { IMPORATANT_NEWS } from "../utils/endpoints";
import { UPHFFetcher } from "../utils/fetcher";

export const importantNewsPost = async (authToken: string): Promise<ImportantNews[]> => {
    const response = await UPHFFetcher(IMPORATANT_NEWS(), {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            authToken: authToken
        } as ImportantNewsBody)
    });
    const raw = (await response.json()) as ImportantNewsResponse[];
    const result = raw?.map((item) => {
        return new ImportantNews(
            item.color,
            item.id,
            item.image,
            item.link,
            item.sort,
            item.statisticName,
            item.status,
            item.translations,
            item.authorization
        );
    });

    return result ? result : [];
}