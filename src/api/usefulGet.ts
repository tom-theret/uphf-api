import { UsefulInformationsResponse } from "../interfaces/Useful";
import { USEFUL_INFORMATION } from "../utils/endpoints";
import { UPHFFetcher } from "../utils/fetcher";

export const usefulGet = async (): Promise<UsefulInformationsResponse> => {
    const response = await UPHFFetcher(USEFUL_INFORMATION(), {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    return await response.json() as UsefulInformationsResponse;
}