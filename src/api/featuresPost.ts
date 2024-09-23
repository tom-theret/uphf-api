import { FeaturesBody, FeaturesResponse } from "../interfaces/Features";
import { FEATURES } from "../utils/endpoints";
import { UPHFFetcher } from "../utils/fetcher";

export const featuresPost = async (authToken: string): Promise<FeaturesResponse> => {
    const response = await UPHFFetcher(FEATURES(), {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            authToken: authToken
        } as FeaturesBody)
    });
    return await response.json() as FeaturesResponse;
}