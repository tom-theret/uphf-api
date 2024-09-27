import { Actuality } from "../class/Actuality";
import { RssResponse } from "../interfaces/Rss";
import { RSS } from "../utils/endpoints";
import { UPHFFetcher } from "../utils/fetcher";

export const rssGet = async (): Promise<Actuality[]> => {
  const response = await UPHFFetcher(RSS(), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const raw = (await response.json()) as RssResponse[];
  const result = raw?.map((item) => {
    return new Actuality(
      {
        url: item.enclosure.url,
        type: item.enclosure.type,
      },
      item.pubDate,
      item.title,
      item.content,
      item.link
    );
  });

  if (result) {
    return result;
  }

  return [];
};
