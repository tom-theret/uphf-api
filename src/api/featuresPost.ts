import { Feature } from "../class/Feature";
import { FeaturesBody, FeaturesResponse } from "../interfaces/Features";
import { FEATURES } from "../utils/endpoints";
import { UPHFFetcher } from "../utils/fetcher";

export const featuresPost = async (authToken: string): Promise<Feature[]> => {
  const response = await UPHFFetcher(FEATURES(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      authToken: authToken,
    } as FeaturesBody),
  });
  const raw = (await response.json()) as FeaturesResponse[];
  const result = raw?.map((item) => {
    return new Feature(
      item.id,
      item.link,
      item.menu,
      item.position,
      item.routerLink,
      item.ssoService,
      item.statisticName,
      item.status,
      item.translations,
      item.authorization
    );
  });

  return result ? result : [];
};
