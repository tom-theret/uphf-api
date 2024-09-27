import { Useful } from "../class/Useful";
import { UsefulInformationsResponse } from "../interfaces/Useful";
import { USEFUL_INFORMATION } from "../utils/endpoints";
import { UPHFFetcher } from "../utils/fetcher";

export const usefulGet = async (): Promise<Useful[]> => {
    const response = await UPHFFetcher(USEFUL_INFORMATION(), {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    
    const raw = (await response.json()) as UsefulInformationsResponse[];
    const result = raw.map((useful) => {
        return new Useful(
            useful.id,
            useful.status,
            useful.sort,
            useful.icon,
            useful.translations,
            useful.blocks
        );
    });

    return result ? result : [];
}